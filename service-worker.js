'use strict';
var precacheConfig = [
    ['index.html', 'e9f8a07d5f453305f9d0e1d7e95b4b8b'],
    ['static/css/main.a15cb0d0.css', '99b653aedfd6605ccdbe6d6b9ecf7ab1'],
    ['static/js/main.65a87251.js', '06aece5b00af70458a4e173977b59d71'],
    [
      'static/media/TSTAR-Bold.075eed93.eot',
      '075eed937fee6dec59b04b75e6b64b9d',
    ],
    [
      'static/media/TSTAR-Bold.7f54a7c5.woff',
      '7f54a7c5ecc4e27a5011c68de9917941',
    ],
    [
      'static/media/TSTAR-Bold.e8ca16e7.ttf',
      'e8ca16e77deb5d302470d741142b334e',
    ],
    [
      'static/media/TSTAR-Headline.2f7d85b7.eot',
      '2f7d85b77cbaafe2835b6a481fecfafc',
    ],
    [
      'static/media/TSTAR-Headline.ab4c80d3.woff',
      'ab4c80d3dffaf48e760bf4f9d49df69a',
    ],
    [
      'static/media/TSTAR-Headline.bd302a91.ttf',
      'bd302a914e0ea39330e8ebb0359ce27f',
    ],
    [
      'static/media/TSTAR-Light.35e56ef0.ttf',
      '35e56ef01ad611c62fc2b48a0e97a557',
    ],
    [
      'static/media/TSTAR-Light.46a60cee.woff',
      '46a60cee59091ca54333b68e8a309a42',
    ],
    [
      'static/media/TSTAR-Light.c298ce75.eot',
      'c298ce75ad91be5b5283a4cfa78b100f',
    ],
    [
      'static/media/TSTAR-Regular.5402e304.woff',
      '5402e304b1b25d09e295f56c62bacf5d',
    ],
    [
      'static/media/TSTAR-Regular.a156ea67.eot',
      'a156ea67f22e7a10544dee887989ad27',
    ],
    [
      'static/media/TSTAR-Regular.e3cc9dfb.ttf',
      'e3cc9dfb679755e546026292cdeccc43',
    ],
    ['static/media/arrow-up.188ec322.svg', '188ec322f738c736042477e42c6b16dd'],
    ['static/media/arrow_up.fe40ff74.png', 'fe40ff7404e60022c8bc4dbd65ae18bd'],
    ['static/media/badge.a093ac6b.png', 'a093ac6b5004cc2f1318455e9169c930'],
    ['static/media/building.0b60c753.png', '0b60c7535d8f10e52846eaee00799180'],
    [
      'static/media/businessman.2f69a75a.png',
      '2f69a75a46ff276675aa34764b0f5ba9',
    ],
    ['static/media/coins.ab962133.png', 'ab962133bdf8fbbfc3b7ec9c79a8c28c'],
    [
      'static/media/difc-page1.d0fdf161.jpg',
      'd0fdf1611778c6ff13ab2f273f180a5a',
    ],
    [
      'static/media/difc-titlebg.c178e11e.jpg',
      'c178e11e015050a1ed79fb6a3ea2682e',
    ],
    [
      'static/media/dubai-count1bg.8264b572.jpg',
      '8264b572a90f73d4ed18e1a424f47aa2',
    ],
    [
      'static/media/dubai-count2bg.956c215b.jpg',
      '956c215b2ca130beb76c592e6cdd0770',
    ],
    [
      'static/media/dubai-count3bg.1ebbf243.jpg',
      '1ebbf24337eb32f892fc4f538e30cbc8',
    ],
    [
      'static/media/dubai-titlebg.44172c9b.jpg',
      '44172c9b134c5e42350d151f0db507d7',
    ],
    [
      'static/media/eh-page1-large.9c1648b3.jpg',
      '9c1648b370c50cf64844ede044d85a7a',
    ],
    [
      'static/media/eh-page1-small1.a3ea82af.jpg',
      'a3ea82af6812331b637636a05c562186',
    ],
    [
      'static/media/eh-page1-small2.09c43b5c.jpg',
      '09c43b5ca6af54fdaaae32f882aedbc1',
    ],
    [
      'static/media/eh-page2-large.1d1a90ce.jpg',
      '1d1a90ce093e36d04de2a462e6cbe61b',
    ],
    [
      'static/media/eh-page2-small2.94944610.jpg',
      '94944610016b6afa7292e2fc8eaed7d3',
    ],
    [
      'static/media/eh-page2-small3.a0b8f721.jpg',
      'a0b8f721eafdb6ce59a7672e83ed0d0e',
    ],
    [
      'static/media/eh-page2-small4.0c25c6f3.jpg',
      '0c25c6f3dd2a79e2d58520e73efddc52',
    ],
    [
      'static/media/eh-titlebg.bbb79681.jpg',
      'bbb796813baf9dba71791d51f17a3104',
    ],
    ['static/media/ga-page1.a172548f.jpg', 'a172548f3d482f448015106eecc9f0c6'],
    ['static/media/ga-page2.3e70e28a.jpg', '3e70e28a2196f31083d9f8010f424d91'],
    ['static/media/ga-page3.4af9b3ba.jpg', '4af9b3ba0129ffd65a5d0c3b2b416575'],
    ['static/media/ga-page4.1e7af705.jpg', '1e7af705676ff5bbb3fc6181c47f5961'],
    [
      'static/media/ga-page5-large.2f491715.jpg',
      '2f49171597f20ae7d4f325de6765b161',
    ],
    [
      'static/media/ga-page5-small.a3de0940.jpg',
      'a3de094058bdae106291859a92cc6aad',
    ],
    ['static/media/ga-page6.21020a9b.jpg', '21020a9b11df64526cff2cee68f01f88'],
    [
      'static/media/ga-page7-large.c2a26fb1.jpg',
      'c2a26fb1a44f26e2a995a2c5b47a6601',
    ],
    [
      'static/media/ga-page7-small1.bb0a816e.jpg',
      'bb0a816e76ca6ca061a6ddce9d9a266e',
    ],
    [
      'static/media/ga-page7-small2.225817b4.jpg',
      '225817b4cce4c047e18ad8c258c5fd53',
    ],
    [
      'static/media/ga-page7-small3.1f2c725a.jpg',
      '1f2c725a46f20727143f48f97548cb64',
    ],
    ['static/media/ga-page8.fc70afd4.jpg', 'fc70afd4d6d41b06ffaf56d9c84a22ed'],
    [
      'static/media/ga-titlebg.71f8322d.jpg',
      '71f8322d70b560c8b773023b5a32d8e7',
    ],
    [
      'static/media/gv-gallery1.b5b4a816.jpg',
      'b5b4a8166b92a5bb1498d9a3c849e7b6',
    ],
    [
      'static/media/gv-gallery2.cca0348b.jpg',
      'cca0348b873dc0a0eae9ffc8b570e074',
    ],
    [
      'static/media/gv-gallery3.53984f84.jpg',
      '53984f84ce2bd73c72460702b3706e18',
    ],
    [
      'static/media/gv-gallery4.e1a50881.jpg',
      'e1a50881440af6e1c7b3e1df87591746',
    ],
    [
      'static/media/gv-gallery5.08eb0a09.jpg',
      '08eb0a09af3be1021df1c4f58941e6db',
    ],
    [
      'static/media/gv-gallery6.1aef1401.jpg',
      '1aef14015cfe0350fc2b9f8bb59a1b00',
    ],
    [
      'static/media/gv-gallery7.b36a38ba.jpg',
      'b36a38ba8830716c8fa3500addfbd825',
    ],
    [
      'static/media/gv-gallery8.06efe3d6.jpg',
      '06efe3d6718f2e99d10a3ad1e63ebf40',
    ],
    ['static/media/gv-page1.409ab829.jpg', '409ab829927d855d6fc8894ac5f3a4b6'],
    ['static/media/gv-page2.edabaf22.jpg', 'edabaf22e1f41489003c6ded5ca50873'],
    ['static/media/gv-page3.9decb5b4.jpg', '9decb5b43bb039519276f48bcdc8cd94'],
    ['static/media/gv-page5.046c247b.jpg', '046c247bd0a01af4aa62e6da05f4ddc7'],
    [
      'static/media/gv-titlebg.b9339867.jpg',
      'b933986791a33477a669103e97175c05',
    ],
    ['static/media/home-bg.974e0053.jpg', '974e0053180da085bc5b9669466e4512'],
    [
      'static/media/masterplan-page1.9b548314.jpg',
      '9b5483143a27562510577f913c223d27',
    ],
    [
      'static/media/masterplan-page2.937762d1.jpg',
      '937762d11503ee05f8799b75f648a356',
    ],
    [
      'static/media/masterplan-titlebg.d10ffe35.jpg',
      'd10ffe35e336e276b6d864f70f59303d',
    ],
    ['static/media/navigate.28898569.svg', '28898569a233a8232d98a3f81c14f06f'],
    [
      'static/media/paper_pencil.49bf65f9.png',
      '49bf65f95ed3f6c2d2901f1430c76d2d',
    ],
    [
      'static/media/paper_plane.78221a99.png',
      '78221a9952daa8cc51cd5c7ff391f72d',
    ],
    [
      'static/media/population.df4d6e06.png',
      'df4d6e0691952fa2a74cf7960ebfd1d8',
    ],
    ['static/media/scheme.fcfa09a8.png', 'fcfa09a8f05171d53278197d51547afd'],
    ['static/media/settings.1e29c97b.png', '1e29c97b9bbc4a3d319a891c829f450c'],
    ['static/media/tag.5c9aa9d7.png', '5c9aa9d75c52da7bd4d62d8fa841cbb6'],
    ['static/media/target.11750286.png', '117502860fbecee2859f48b248671ce1'],
    ['static/media/target1.221eb156.png', '221eb156d1709275e18233f140f24243'],
    ['static/media/tv-page1.4e1aa84a.jpg', '4e1aa84a93bfce1eeb89bac153ba0a82'],
    ['static/media/tv-page2.84ac5e2b.jpg', '84ac5e2b4df7c791aa1dc5338075c945'],
    ['static/media/tv-page3.2ecaab72.jpg', '2ecaab72762de37e4f4c2478e91571de'],
    ['static/media/tv-page4.318b7199.jpg', '318b719992588f84edfcfe6e0cc08ded'],
    ['static/media/world.408a37e4.png', '408a37e42483dc51e64bc61aad1f7c6e'],
    [
      'static/media/worldwide.73b5c313.png',
      '73b5c313b10e7931b630588c58d3fbd2',
    ],
  ],
  cacheName =
    'sw-precache-v3-sw-precache-webpack-plugin-' +
    (self.registration ? self.registration.scope : ''),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, a) {
    var t = new URL(e);
    return '/' === t.pathname.slice(-1) && (t.pathname += a), t.toString();
  },
  cleanResponse = function(a) {
    return a.redirected
      ? ('body' in a ? Promise.resolve(a.body) : a.blob()).then(function(e) {
          return new Response(e, {
            headers: a.headers,
            status: a.status,
            statusText: a.statusText,
          });
        })
      : Promise.resolve(a);
  },
  createCacheKey = function(e, a, t, c) {
    var d = new URL(e);
    return (
      (c && d.pathname.match(c)) ||
        (d.search +=
          (d.search ? '&' : '') +
          encodeURIComponent(a) +
          '=' +
          encodeURIComponent(t)),
      d.toString()
    );
  },
  isPathWhitelisted = function(e, a) {
    if (0 === e.length) return !0;
    var t = new URL(a).pathname;
    return e.some(function(e) {
      return t.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, t) {
    var a = new URL(e);
    return (
      (a.hash = ''),
      (a.search = a.search
        .slice(1)
        .split('&')
        .map(function(e) {
          return e.split('=');
        })
        .filter(function(a) {
          return t.every(function(e) {
            return !e.test(a[0]);
          });
        })
        .map(function(e) {
          return e.join('=');
        })
        .join('&')),
      a.toString()
    );
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var a = e[0],
        t = e[1],
        c = new URL(a, self.location),
        d = createCacheKey(c, hashParamName, t, /\.\w{8}\./);
      return [c.toString(), d];
    }),
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(c) {
        return setOfCachedUrls(c).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(a) {
              if (!t.has(a)) {
                var e = new Request(a, { credentials: 'same-origin' });
                return fetch(e).then(function(e) {
                  if (!e.ok)
                    throw new Error(
                      'Request for ' +
                        a +
                        ' returned a response with status ' +
                        e.status,
                    );
                  return cleanResponse(e).then(function(e) {
                    return c.put(a, e);
                  });
                });
              }
            }),
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      }),
  );
}),
  self.addEventListener('activate', function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(a) {
          return a.keys().then(function(e) {
            return Promise.all(
              e.map(function(e) {
                if (!t.has(e.url)) return a.delete(e);
              }),
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        }),
    );
  }),
  self.addEventListener('fetch', function(a) {
    if ('GET' === a.request.method) {
      var e,
        t = stripIgnoredUrlParameters(
          a.request.url,
          ignoreUrlParametersMatching,
        ),
        c = 'index.html';
      (e = urlsToCacheKeys.has(t)) ||
        ((t = addDirectoryIndex(t, c)), (e = urlsToCacheKeys.has(t)));
      var d = '/index.html';
      !e &&
        'navigate' === a.request.mode &&
        isPathWhitelisted(['^(?!\\/__).*'], a.request.url) &&
        ((t = new URL(d, self.location).toString()),
        (e = urlsToCacheKeys.has(t))),
        e &&
          a.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(t)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    'The cached response that was expected is missing.',
                  );
                });
              })
              .catch(function(e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    a.request.url,
                    e,
                  ),
                  fetch(a.request)
                );
              }),
          );
    }
  });
