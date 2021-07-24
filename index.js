const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cache = require('./cache');
const client = require('./client');

app.get('/', (req, res) => {
  res.json({})
})

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
    response.serie = {
      id: details.id,
        name: details.title,
        details: {
        studio: details.studio,
          writers: details.writers,
          directors: details.directors,
          actors: details.actors.map((d) => {
          return {
            actor_name: d['Sprecher'],
            original_actor_name: d['Darsteller'].replace(/^\((.*)\)$/, '$1'),
            role_name: d['Rolle']
          }
        })
      }
    }
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
