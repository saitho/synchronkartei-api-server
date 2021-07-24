const path = require('path');
const fs = require('fs');

const cacheLifetime = 60*60*24; // 24h

class Cache {
  constructor (cacheName) {
    this.cacheName = cacheName;
  }

  _buildCachePath(cacheId) {
    return path.join('cache', this.cacheName, cacheId + '.json');
  }

  has(cacheId) {
    if (!fs.existsSync(this._buildCachePath(cacheId))) {
      return false;
    }
    const cacheEntry = this.readCacheEntry(cacheId);
    if (cacheEntry.created + cacheLifetime < Date.now()) {
      return false;
    }
    return true;
  }

  read(cacheId) {
    const cacheEntry = this.readCacheEntry(cacheId);
    if (!cacheEntry) {
      return null;
    }
    return cacheEntry.content;
  }

  readCacheEntry(cacheId) {
    const path = this._buildCachePath(cacheId);
    if (!fs.existsSync(path)) {
      return null;
    }
    return JSON.parse(fs.readFileSync(path));
  }

  write(cacheId, content) {
    const cacheContent = JSON.stringify({
      created: Date.now(),
      content: content
    })
    fs.mkdirSync(path.dirname(this._buildCachePath(cacheId)), {recursive: true})
    fs.writeFileSync(this._buildCachePath(cacheId), cacheContent)
  }
}

function getCache(cacheName) {
  return new Cache(cacheName);
}

module.exports = {
  getCache
}
