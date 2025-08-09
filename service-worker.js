const CACHE='loopcheck-cache-v5';
const CORE=['/','/index.html','/manifest.json','/icon-192.png','/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{const r=e.request;e.respondWith(caches.match(r).then(a=>a||fetch(r).then(x=>{const y=x.clone();caches.open(CACHE).then(c=>{if(r.method==='GET'&&x.ok)c.put(r,y);});return x;}).catch(()=>caches.match('/index.html'))));});