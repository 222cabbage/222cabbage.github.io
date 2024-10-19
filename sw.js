/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","6a1fd0e64d8cc759d94bb9840854718b"],["/2022/05/13/HaoUI2/index.html","dab4c59d183a8eb5f1d85e3374ed0d03"],["/2022/05/13/Node1/index.html","58facdff226c0c44c5ade8a14953118e"],["/2022/05/14/Face/index.html","ad5041eb4abd6e6394a0a77fa0778323"],["/2022/05/14/algorithm1/index.html","b4b761c35bec0d3266be76ecccc3af93"],["/2022/05/15/Node2/index.html","3813d90f7722d4b1f230e72069d58f4c"],["/2022/05/18/Component1/index.html","9c042684e3b787543b0df0a1e76de7be"],["/2022/05/18/tips1/index.html","6f210281cfe46ddd2204f72932ee7bf8"],["/2022/05/23/Node3/index.html","09f6b6871d5b058d393cbba5e565c851"],["/2022/05/28/Node4/index.html","135c3935051e19169ef119e38ae12e85"],["/2022/05/28/webpack1/index.html","15983365a874e96a960e91c4ce811faa"],["/2022/05/30/Node5/index.html","dc14dd4387d1de15ee5bf40ddeb40665"],["/2022/06/04/Node6/index.html","5b6df3eaa1ffc99a29f30985b597a788"],["/2022/06/12/mysql1/index.html","488cc5646f6b05e3ad540c2d74940385"],["/2022/06/12/websocket1/index.html","681bcf0927b57d42dde57c5e6a235eb2"],["/2022/06/26/Face2/index.html","c1c091cb1e25566e6c71171ec43f78c2"],["/2022/07/02/vue2code1/index.html","91cd2900a298154685f2fa4e061b35ff"],["/2022/07/10/tsstudy1/index.html","5e123fc7c371553a03ff43caaf47fd02"],["/2022/08/24/vite1/index.html","c2e7ab98cfdf1869ee8fcb8d409082d0"],["/2022/08/25/vue31/index.html","57fe0887cf6e2d560819da9a60e6cd39"],["/2022/08/25/webgl1/index.html","8ad126163d582413fc3ef605df38c9df"],["/2022/08/31/react18/index.html","2c7d93e5fd2daf3fe5eb9adc8e90457a"],["/2022/09/01/algorithm2/index.html","499343c6d1c4fbe924b8ae5ddbfdef30"],["/2022/09/06/promise1/index.html","2c95602e1f8875ae62b0229764c0d708"],["/2022/09/06/vuerouterandvuex/index.html","e374dc73b3011b44e7a2fd05d8f77c64"],["/2022/09/14/miniweixin/index.html","1ba0a921ea6f4969e2a3e4611f5ccb1c"],["/2022/09/23/webgis1/index.html","fc055688580c9e88eb92558811652046"],["/2022/09/24/vue32/index.html","0e3b93b37a1dbcec91b2b79f9cb0b56b"],["/2022/09/27/go1/index.html","3df5df160970f823b4e5648fd777d220"],["/2022/10/07/canvas1/index.html","53800031ae33dd449afa225292f4c3f9"],["/2022/10/09/mobile1/index.html","8f4ffffddda6a9a5963b1c57e38efc96"],["/2022/10/17/work1/index.html","a1e3b8c96c9d9565d4a9124bbbd53176"],["/about/index.html","2fea627018338747547efd211b794143"],["/archives/2022/05/index.html","6dc66d7b491cd2db635cfd8efe6e1483"],["/archives/2022/05/page/2/index.html","69279eb2895d558e46e715ba7547e3f8"],["/archives/2022/06/index.html","dac806f0aa1e1d121258d9d6e01cfed0"],["/archives/2022/07/index.html","10f74e2e59266a56a09c8c40a0dc11a8"],["/archives/2022/08/index.html","2162dbc6d7d8165d0ad36c169f3a2723"],["/archives/2022/09/index.html","950768c1051695e79ec9c5f779c2c136"],["/archives/2022/10/index.html","71fdec258aacc6ad0cdffce0f1a93cfb"],["/archives/2022/index.html","67b76b9b6d4ceb6c8c2fb04292376354"],["/archives/2022/page/2/index.html","17593c29bbdb8b80171ae49a6e7bfb65"],["/archives/2022/page/3/index.html","fdfbb4fb46848bf72609c4b6a5baae09"],["/archives/2022/page/4/index.html","1cfee70b78ad979fb397d89b511abaae"],["/archives/index.html","04b7bd831f3e9f397b427eb508a62e02"],["/archives/page/2/index.html","e1b5d918468c353954d6cd043992bbfe"],["/archives/page/3/index.html","02c6dc6a463a9e83ee5282c8ea45e619"],["/archives/page/4/index.html","c34cac413a36405a062492bea21de46a"],["/books/index.html","8375b4f5c4575fe0ba583ed1cc3ccfed"],["/categories/Go/index.html","939826bf8bc2a0cbd300704dcc7a06bc"],["/categories/HaoUI/index.html","94f03aceca6216b3e28df4165eb42be8"],["/categories/Node/index.html","819e0832f1bf8fe9f28ccd8565b601fe"],["/categories/React/index.html","6119d68fe06f1a98b9c943527b1724ac"],["/categories/WebGIS/index.html","6ebbf2635df6f79fed30a91eee272313"],["/categories/Webpack/index.html","d8330870bcf38472edb860fc48e74f77"],["/categories/canvas/index.html","403119661c25737d26aa039bbbbc519d"],["/categories/index.html","b90cd9b6b759baaf6327f3e7aebca661"],["/categories/promise/index.html","aab9cc39d4a8a6668fd9be28455afabc"],["/categories/typescript/index.html","fb579f496ac64dc3e74fa1125f880b26"],["/categories/utils/index.html","b9a8d69f55d453e7c80abab41a446c84"],["/categories/vite/index.html","8d58c0ed618d00156c01ba589081cf73"],["/categories/vue/index.html","cee7fbb9d08086114bdb4c1a1b79cb4e"],["/categories/vue3/index.html","2caa9b4d16f153f8d02f19846d9d4c6d"],["/categories/vue框架源码/index.html","e28baeeb5edd5674b0d7baf8243c5f01"],["/categories/webGL/index.html","e52284b367b5e5eb45db563a8822dd97"],["/categories/websocket/index.html","92d8eb0ca62684c2d7e968f6d980b4c9"],["/categories/工作日志/index.html","68a5e0339e2fe5495045bbde53e3a131"],["/categories/微信小程序/index.html","05e07e55427f2a7075166b013fb9dc5d"],["/categories/数据库mysql的学习/index.html","63e2cd528ce013d5b1986c177c2c6d1a"],["/categories/数据结构与算法/index.html","fdec621f8aade1966cebe66c68aceea0"],["/categories/移动端适配/index.html","b6585b6b2491f27b126e583cb81157cb"],["/categories/组件封装/index.html","fbc37b7c629882fd8de43d84a6c123f0"],["/categories/面试/index.html","8a96c7718112e48afc1574373e8ec58c"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","fd9dbcc5e0ff6241fa79125a2b834ee7"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","ade12d170db9c3b539addd71c711e843"],["/page/2/index.html","1952ec60dde3abb58a4aea95b4948d3f"],["/page/3/index.html","275f99bfc870e2ae8efa4a069b9e1859"],["/repository/index.html","7cbb1b5aeb36c5c21c7d0d457dc2076b"],["/sw-register.js","51e9d4451a4d73f2ee3c0e784cac936a"],["/tags/Go/index.html","f29fcc759684271e83379c8e1dacaebf"],["/tags/JS方法技巧/index.html","2f64b984924fc2f0dfd755965aefc928"],["/tags/Node学习/index.html","e57f6c42ff550bb4c8d3ddfda85031c5"],["/tags/React/index.html","b9a42e323c0d1880a2c628ad1ba62c8b"],["/tags/Vue2源码/index.html","4deeb5a7abcb2c6580d3d1885ea51985"],["/tags/WebGIS/index.html","b3ccc840c2d354fe62eca2618faea0b7"],["/tags/Webpack学习/index.html","32ea089250b6e079f46f09d388da0aa2"],["/tags/canvas/index.html","3e5be61bea9e3efac1232481fe871220"],["/tags/index.html","0b93436e75d8edcb9b0b5919c913d466"],["/tags/mysql/index.html","3ec559359d060b94fd721ba3854aa5b0"],["/tags/promise/index.html","2f02c16703793f8df485bcaa7fdee12e"],["/tags/ts/index.html","e80c01c9f59077ad5861476478f3e485"],["/tags/vite/index.html","b42032c01594dda1bed88c02b55454fb"],["/tags/vue/index.html","41212f7d2c3efd00d7cbdb8f59c09d50"],["/tags/vue3/index.html","9b984e8b5132dada529e47397549f1bf"],["/tags/webGL/index.html","27957fcd3222b82a276b6dcbd8ec231d"],["/tags/websocket/index.html","33d1896f18f6936163f3d079ef74d59e"],["/tags/个人组件库/index.html","91199b96d450c05fa17c0a0709d1c2a1"],["/tags/工作日志/index.html","1fbdf25dde7f10744b0db373aba3e473"],["/tags/微信小程序/index.html","e01b008141fb6ea9df715e4557cbde25"],["/tags/数据结构与算法/index.html","f01bf8617531f11b3b45ec5e965e80c0"],["/tags/数据结构与算法1/index.html","85eb4ba1b35153512a28ceeb8dc68c7f"],["/tags/移动端适配/index.html","771503fa1c035607efd953589e395324"],["/tags/组件封装/index.html","396406c9147ce6f22a4c8c6168d3458b"],["/tags/面试题/index.html","e2ebf6e0584e60facfb1944bc3a5feba"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
