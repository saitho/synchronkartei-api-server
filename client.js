const he = require('he');

function grabSeriesHtml(seriesId) {
  return new Promise((resolve, reject) => {
    const request = require('request');
    request({
      url: 'https://synchronkartei.de/serie/' + seriesId,
      headers: {
        'User-Agent': 'Synchronkartei-API-Server (github.com/saitho/synchronkartei-api-server)'
      }
    }, function (error, response, body) {
      if (error) {
        reject();
        return;
      }
      resolve(body);
    });
  });
}

async function getSeriesDetails(seriesId) {
  const htmlCode = await grabSeriesHtml(seriesId)

  const HTMLParser = require('node-html-parser');
  const root = HTMLParser.parse(htmlCode, {
    lowerCaseTagName: false,
    comment: false,
    blockTextElements: {
      script: false,
      noscript: false,
      style: false,
      pre: false
    }
  });

  const table = root.querySelector('#seriendetail table');
  if (!table) {
    return;
  }

  const details = root.querySelectorAll('#seriendetail div');
  const detailTexts = details.map((e) => {
    return e.rawText;
  });

  return {
    id: seriesId,
    title: root.querySelector('#seriendetail h3').rawText.trim(),
    studio: extractTextDetail(detailTexts, 'Synchronfirma', false),
    writers: extractTextDetail(detailTexts, 'Dialogbuch', true, ','),
    directors: extractTextDetail(detailTexts, 'Dialogregie', true, ','),
    actors: mapTableObjectsToArray(table)
  }
}

function extractTextDetail(textArray, label, multiValue = false, splitChar = null) {
  const regex = new RegExp(`^${label}: (.*)$`);
  for (const d of textArray) {
    const m = regex.exec(d);
    if (m) {
      const text = he.decode(m[1]);
      if (splitChar) {
        return text.split(splitChar);
      }
      return multiValue ? [text] : text;
    }
  }
  return multiValue ? [] : '';
}

function mapTableObjectsToArray(element) {
  if (element.rawTagName !== 'table') {
    return [];
  }

  const thead = [];

  // process thead
  let unknownHeaderCounter = 0;
  const theadElement = element.querySelector('thead');
  if (theadElement) {
    for (const headerColumn of theadElement.querySelectorAll('th,td')) {
      const columnValue = headerColumn.rawText.trim();
      thead.push(columnValue ? columnValue :  'unknown_' + ++unknownHeaderCounter)
    }
  }
  const tableData = [];

  // process body
  const tbodyElement = element.querySelector('tbody');
  for (const bodyRow of tbodyElement.querySelectorAll('tr')) {
    const rowColumns = bodyRow.querySelectorAll('td');
    const dataObj = {};
    for (const i in rowColumns) {
      dataObj[thead[i]] = rowColumns[i].rawText.trim();
    }
    tableData.push(dataObj);
  }

  return tableData;
}

module.exports = {
  getSeriesDetails
}
