const express = require('express')
const app = express()
const port = 3000

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
    seriesCache.write(seriesId, details);
  }

  res.json({
    response: {
      fromCache: fromCache
    },
    serie: {
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
  })
})

app.listen(port, () => {
  console.log(`API server listing at: http://localhost:${port}`)
})
