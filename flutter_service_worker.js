'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "35374cbf57dd80022a1ced7ffc7d42cd",
"assets/FontManifest.json": "f3603b4c75aba635d9c02f774efa5e3d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/Images/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/Images/github-logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/Images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/Images/P-Images/banner.jpg": "6cba86e8c8fa5c62fc521e7ae2ce6fc2",
"assets/Images/P-Images/bmi.jpg": "e98ebf51b79baea1585e3c2a1877eb84",
"assets/Images/P-Images/itplanet.JPG": "487cb656d3eb715f31e3dd4710a64ae8",
"assets/Images/P-Images/portfolio.JPG": "17f21783059110f00818c004c73146fe",
"assets/Images/P-Images/quotes.jpg": "3e2129f8c95c8d1e3000d368e03c50e8",
"assets/Images/P-Images/school.JPG": "6d64f1db53b27ee63142dab363bb3200",
"assets/Images/P-Images/shayari.jpg": "ddb3d64163699a50be16c474025be1b0",
"assets/Images/profilepic.jpg": "9e27ea1e34599a47b429c1df6b491aa7",
"assets/Images/RGFzaGF0YXJfRGV2ZWxvcGVyX092ZXJJdF9jb2xvcl9QR19zaGFkb3c=.png": "2e6d4f17e1f1dc0b9f176bd4e3cdc6c0",
"assets/Images/twitter.png": "f29106f6f82f24c14018283fd2e3a917",
"assets/Images/whatsapp.png": "19455d676899e370bd5cc0bab6b41c6f",
"assets/Images%255Cfonts%255CKoHo-Light.ttf": "8d1bd59054b17975645a7e49fba2434d",
"assets/Images%255Cfonts%255CNewsreader-VariableFont_opsz,wght.ttf": "8f0346f410f76fd7f998b53b94ce8e64",
"assets/NOTICES": "374756d0d5651ef7fc0d9a22472978b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "66b1725bb5ed6541771fc3b68828ed11",
"icons/android-icon-192x192.png": "dd9ab392611e2233c2f763075bc0a05b",
"icons/android-icon-36x36.png": "9dd15429115812b01f2da72cd5e73663",
"icons/android-icon-48x48.png": "3cf017fc90e9a37dac372afab3a6582b",
"icons/android-icon-72x72.png": "0af20f76279e7119a10da1bf32073120",
"icons/android-icon-96x96.png": "7b55fdf5bc80aa3a1b36bcb5d0a0af7c",
"icons/apple-icon-114x114.png": "00033bdeec0babcb6d07dbcd8f896c00",
"icons/apple-icon-120x120.png": "115ab38ca887d9c1011ad334f6ca9f93",
"icons/apple-icon-144x144.png": "66b1725bb5ed6541771fc3b68828ed11",
"icons/apple-icon-152x152.png": "f34b7acd1dcd8bc71c6990e96c7a4270",
"icons/apple-icon-180x180.png": "2c3c2836fb07dcdef3e5d6e562605501",
"icons/apple-icon-57x57.png": "f1bd5ab50cfd54637798982835cfd2e1",
"icons/apple-icon-60x60.png": "1560ea32abff8da02e4f9a5399869f46",
"icons/apple-icon-72x72.png": "0af20f76279e7119a10da1bf32073120",
"icons/apple-icon-76x76.png": "a88277379fbb8230be2f0408bff42127",
"icons/apple-icon-precomposed.png": "04cac0f0991a23364faf1a7c725c0d05",
"icons/apple-icon.png": "04cac0f0991a23364faf1a7c725c0d05",
"icons/favicon-16x16.png": "0e26c1f595ff25c16d40bc34d7be3147",
"icons/favicon-32x32.png": "69c3cbbc94f2a670143e2e634b469432",
"icons/favicon-96x96.png": "7b55fdf5bc80aa3a1b36bcb5d0a0af7c",
"icons/ms-icon-144x144.png": "66b1725bb5ed6541771fc3b68828ed11",
"icons/ms-icon-150x150.png": "83cfd78c77f38d307b628428b7a295f2",
"icons/ms-icon-310x310.png": "6c1536a7169d27f72cde5cf1a5a8e5ce",
"icons/ms-icon-70x70.png": "ce22d936c27c4bf6554edf14e7bc26c8",
"index.html": "474b090685017e517dd31b88f7f410e2",
"/": "474b090685017e517dd31b88f7f410e2",
"main.dart.js": "32dfa3ae502988baae6af97e5af645d5",
"manifest.json": "3cf6bb92c18ec62b364fc7aec6d7b77d",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
