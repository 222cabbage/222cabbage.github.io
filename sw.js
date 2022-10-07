/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","892c3f3eab36c1b68f0414e7daa97556"],["/2022/05/13/HaoUI2/index.html","7e841ac51dd9ab4568df308eb3cf9ce6"],["/2022/05/13/Node1/index.html","467c733e826a1be4749be6b663b478be"],["/2022/05/14/Face/index.html","1cc3c8640e8d413fd843e69d454b0a42"],["/2022/05/14/algorithm1/index.html","fde9545d0acf3437c865cacfee7cea75"],["/2022/05/15/Node2/index.html","191c2479046a9164bac164748cf566fd"],["/2022/05/18/Component1/index.html","b0ff998abedf716db681dd2e17cbc01b"],["/2022/05/18/tips1/index.html","716c3ecef5dcdc373e2180dda981bbee"],["/2022/05/23/Node3/index.html","4f906883828889c1540003d7fa7f77f3"],["/2022/05/28/Node4/index.html","f07cc0403cae2d7fdf186b4ab78795fc"],["/2022/05/28/webpack1/index.html","d26336547966185b62eaade7f0e8d02c"],["/2022/05/30/Node5/index.html","bb044eea381c568a7c5104bbdebe1ff0"],["/2022/06/04/Node6/index.html","a8e1aa3622a96c70bccbb66aefc9564f"],["/2022/06/12/mysql1/index.html","b7becfe66b6145fd749cef01e058c0ea"],["/2022/06/12/websocket1/index.html","9c799c4e61bfb0a2aa065c4aad796a19"],["/2022/06/26/Face2/index.html","92f12067d2b3822c629928548ae5a34d"],["/2022/07/02/vue2code1/index.html","637ce783edb7519f24ea051e020b13d1"],["/2022/07/10/tsstudy1/index.html","1188990264abbce4fdba2fbbb43fe554"],["/2022/08/24/vite1/index.html","931d075167397f3028dc927cfbb8eed0"],["/2022/08/25/vue31/index.html","b28bba7ef5f713e95c13a4f95ada3631"],["/2022/08/25/webgl1/index.html","3703239c1e302e3f38af81110fdd1fc0"],["/2022/08/31/react18/index.html","d32ec31d95e51ee2c126fcce73827ab8"],["/2022/09/01/algorithm2/index.html","e4da5eaebe21c81a35ce550aaa5e6fb6"],["/2022/09/06/promise1/index.html","e63b7cd30bd899e3131e50130efd61f9"],["/2022/09/06/vuerouterandvuex/index.html","74d52e44e904d79c655a390228a2114d"],["/2022/09/14/miniweixin/index.html","72331d9670f8aaefff033357cb7202e0"],["/2022/09/23/webgis1/index.html","5882d00e7e809e014c741ba222d142db"],["/2022/09/24/vue32/index.html","2d2e27310b9790a87ef1313ac37fd44c"],["/2022/09/27/go1/index.html","cae76aa407c9a4acac3035641e90fa3f"],["/about/index.html","b39f270a5484198d0f3ccb757ff8eb3d"],["/archives/2022/05/index.html","d4da63b9ad7ab2edaca71dbcee9feb33"],["/archives/2022/05/page/2/index.html","af4bf48d9912097fbf791b9eaff46702"],["/archives/2022/06/index.html","3d1aadd659a751c37fc46bb3d18d2a4e"],["/archives/2022/07/index.html","82cc202b0e67263d87003a65d00f54c7"],["/archives/2022/08/index.html","32704afa64a5b344a43fb9186153c913"],["/archives/2022/09/index.html","36a8866f957eed012aeeb5baad09ad7f"],["/archives/2022/index.html","c78a7ea20773bb9d246f64d632f2b2a9"],["/archives/2022/page/2/index.html","da6aa2a5243d648e689729a5666e912b"],["/archives/2022/page/3/index.html","33628997ad0156b6befbc31f159967d2"],["/archives/index.html","bd6dc6f55d7b7fd94478c7deb89ec9a4"],["/archives/page/2/index.html","5f9094918b5686f61bd5263e34595413"],["/archives/page/3/index.html","1c4a53473517c8a854e5fa08ef79635b"],["/books/index.html","38cdd0fa313d7c2d4b47e71ff3f77207"],["/categories/Go/index.html","1b27daa119ec0c7b59b10bc242c9cf78"],["/categories/HaoUI/index.html","e0c3c6fd5fe3104d80c78aff642ebcf1"],["/categories/Node/index.html","fa611a5584432c0293232386b4ab0431"],["/categories/React/index.html","3139b4fbfe70175a157ca6d6ab37b842"],["/categories/WebGIS/index.html","ed37348de0efc83dbfd4ddf51505c2fb"],["/categories/Webpack/index.html","02fa2f21c7508c73f0dd546592747682"],["/categories/index.html","84517daa37816dffa61c7b6c319db916"],["/categories/promise/index.html","2e40ac993004bacbc311e3cff66b1f30"],["/categories/typescript/index.html","7f7db444ab6071ce665212a94ebc42c9"],["/categories/utils/index.html","aac7e1c947c323eb21147d092e0f0db4"],["/categories/vite/index.html","eff4aa1fe0c4d9a7aa12b8d8f24ae199"],["/categories/vue/index.html","e98195a166db022dc2faaa2becb00be8"],["/categories/vue3/index.html","82254342d5178cbf1d681ddd78dcc32e"],["/categories/vue框架源码/index.html","3e8ca2dfa0b950df0ec310ca029cebc3"],["/categories/webGL/index.html","9ee74c1ea6a2d57ad04396cfbe9eb4a7"],["/categories/websocket/index.html","c8f70b73e054d83a8ec864728fcb6d79"],["/categories/微信小程序/index.html","e2eeea8476160957487e300d77326375"],["/categories/数据库mysql的学习/index.html","d73a4a561366081f7e43ec0d6aae3268"],["/categories/数据结构与算法/index.html","af1c6fb3ded2ef733593b92ab4cb1b24"],["/categories/组件封装/index.html","d5de370a4efd6465505d833472350571"],["/categories/面试/index.html","1550c9ff1a84acc662ca95384c9d95c3"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","28b42351f3bad6709ad7afbb2b88d385"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","237dcc572919bbd8db12a71af96b7963"],["/page/2/index.html","e4570b3d67ed50e7d776ad0a6c24f472"],["/page/3/index.html","2f95dc3337048d1ee064dd53b7374a0b"],["/repository/index.html","61b31f9e73896239b967b322666baf19"],["/sw-register.js","138ef972c6467e7107b042dd369986c7"],["/tags/Go/index.html","035c0cedf3a6e1cecb6805d568000602"],["/tags/JS方法技巧/index.html","8a36d1ccf6f5d0a12deb2d42502eccf9"],["/tags/Node学习/index.html","e27ab7042b1618c08fa4a3088eaf38bb"],["/tags/React/index.html","1a2b7f3277fcf2bebaca10d26b003793"],["/tags/Vue2源码/index.html","4d89c7c416f8cd30b69aa8c14f844fb1"],["/tags/WebGIS/index.html","18743b9722f2786702db78bb98d6c810"],["/tags/Webpack学习/index.html","aef52807450ad6298905b9a61e947a5d"],["/tags/index.html","3c6184ae771e21e3cbc6197129406956"],["/tags/mysql/index.html","2c0ae46de84a70809af6e4584028c860"],["/tags/promise/index.html","c038cb782da7760bb37da229c96fab53"],["/tags/ts/index.html","08c93b7935eda984be2bcbd694d42de8"],["/tags/vite/index.html","ef91cf445dfb6fb72783261526db66a6"],["/tags/vue/index.html","c6b62c781ee14512e4483eee9eca419e"],["/tags/vue3/index.html","32a78889aa1a610967ae8ce6229cc587"],["/tags/webGL/index.html","a7705fe2b8f27892776b12bf20f61394"],["/tags/websocket/index.html","1d1bbc7aabe9624e8e8bd0db927aa2dc"],["/tags/个人组件库/index.html","86ea85a733a011e07c50179e09182081"],["/tags/微信小程序/index.html","aab4228decaea39ace68bab2891d1f17"],["/tags/数据结构与算法/index.html","212ce5c08d433db9671d4aca71af81f3"],["/tags/数据结构与算法1/index.html","a466ac03e409017ddbfbc8e72b3dc377"],["/tags/组件封装/index.html","61ce20360377e0f6ba2a1a3c0ea2b9f3"],["/tags/面试题/index.html","538035dc66e7625185e5c8cb6b8e7b5c"]];
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
