const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cache = require('./cache');
const client = require('./client');

app.get('/', (req, res) => {
  res.json({})
})

function mapDetails(details) {
  return {
    id: parseInt(details.id),
    name: details.title,
    details: {
      studio: details.studio,
      writers: details.writers,
      directors: details.directors,
      actors: details.actors.map((d) => {
        return {
          actor: {
            id: parseInt(d['Sprecher'].link.replace(/^\/sprecher\/(\d+)(\/.*)?$/, '$1')),
            name: d['Sprecher'].text
          },
          original_actor: {
            id: parseInt(d['Darsteller'].link.replace(/^\/darsteller\/(\d+)(\/.*)?$/, '$1')),
            name: d['Darsteller'].text.replace(/^\((.*)\)$/, '$1')
          },
          role_name: d['Rolle'].text
        }
      })
    }
  };
}

app.get('/serie/:id', async (req, res) => {
  const seriesId = req.params.id;
  const seriesCache = cache.getCache('serie');

  let details;
  let fromCache = false;
  if (seriesCache.has(seriesId)) {
    details = seriesCache.read(seriesId);
    fromCache = true;
  } else {
    details = await client.getSeriesDetails(seriesId);
    if (details) {
      seriesCache.write(seriesId, details);
    }
  }

  const response = {
    response: {
      fromCache: fromCache
    }
  };

  if (details) {
    response.serie = mapDetails(details)
  } else {
    response.error = {
      error: true,
      message: 'Unable to get data from Synchronkartei.'
    }
    res.status(500);
  }

  res.json(response);
})

app.get('/film/:id', async (req, res) => {
  const filmId = req.params.id;
  const filmCache = cache.getCache('film');

  let details;
  let fromCache = false;
  if (filmCache.has(filmId)) {
    details = filmCache.read(filmId);
    fromCache = true;
  } else {
    details = await client.getMovieDetails(filmId)
      .catch((error) => console.error(error));
    if (details) {
      filmCache.write(filmId, details);
    }
  }

  const response = {
    response: {
      fromCache: fromCache
    }
  };

  if (details) {
    response.film = mapDetails(details)
  } else {
    response.error = {
      error: true,
      message: 'Unable to get data from Synchronkartei.'
    }
    res.status(500);
  }

  res.json(response);
})

app.listen(port, () => {
  console.log(`API server listing at: http://localhost:${port}`)
})
