/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","892c3f3eab36c1b68f0414e7daa97556"],["/2022/05/13/HaoUI2/index.html","7e841ac51dd9ab4568df308eb3cf9ce6"],["/2022/05/13/Node1/index.html","467c733e826a1be4749be6b663b478be"],["/2022/05/14/Face/index.html","1cc3c8640e8d413fd843e69d454b0a42"],["/2022/05/14/algorithm1/index.html","fde9545d0acf3437c865cacfee7cea75"],["/2022/05/15/Node2/index.html","191c2479046a9164bac164748cf566fd"],["/2022/05/18/Component1/index.html","b0ff998abedf716db681dd2e17cbc01b"],["/2022/05/18/tips1/index.html","716c3ecef5dcdc373e2180dda981bbee"],["/2022/05/23/Node3/index.html","4f906883828889c1540003d7fa7f77f3"],["/2022/05/28/Node4/index.html","f07cc0403cae2d7fdf186b4ab78795fc"],["/2022/05/28/webpack1/index.html","d26336547966185b62eaade7f0e8d02c"],["/2022/05/30/Node5/index.html","bb044eea381c568a7c5104bbdebe1ff0"],["/2022/06/04/Node6/index.html","a8e1aa3622a96c70bccbb66aefc9564f"],["/2022/06/12/mysql1/index.html","b7becfe66b6145fd749cef01e058c0ea"],["/2022/06/12/websocket1/index.html","9c799c4e61bfb0a2aa065c4aad796a19"],["/2022/06/26/Face2/index.html","92f12067d2b3822c629928548ae5a34d"],["/2022/07/02/vue2code1/index.html","637ce783edb7519f24ea051e020b13d1"],["/2022/07/10/tsstudy1/index.html","126873581e25c0c31d851237cfecbe3c"],["/2022/08/24/vite1/index.html","931d075167397f3028dc927cfbb8eed0"],["/2022/08/25/vue31/index.html","b28bba7ef5f713e95c13a4f95ada3631"],["/2022/08/25/webgl1/index.html","3703239c1e302e3f38af81110fdd1fc0"],["/2022/08/31/react18/index.html","d32ec31d95e51ee2c126fcce73827ab8"],["/2022/09/01/algorithm2/index.html","e4da5eaebe21c81a35ce550aaa5e6fb6"],["/2022/09/06/promise1/index.html","e63b7cd30bd899e3131e50130efd61f9"],["/2022/09/06/vuerouterandvuex/index.html","74d52e44e904d79c655a390228a2114d"],["/2022/09/14/miniweixin/index.html","72331d9670f8aaefff033357cb7202e0"],["/2022/09/23/webgis1/index.html","5882d00e7e809e014c741ba222d142db"],["/2022/09/24/vue32/index.html","2d2e27310b9790a87ef1313ac37fd44c"],["/2022/09/27/go1/index.html","cae76aa407c9a4acac3035641e90fa3f"],["/about/index.html","b39f270a5484198d0f3ccb757ff8eb3d"],["/archives/2022/05/index.html","d4da63b9ad7ab2edaca71dbcee9feb33"],["/archives/2022/05/page/2/index.html","af4bf48d9912097fbf791b9eaff46702"],["/archives/2022/06/index.html","3d1aadd659a751c37fc46bb3d18d2a4e"],["/archives/2022/07/index.html","82cc202b0e67263d87003a65d00f54c7"],["/archives/2022/08/index.html","32704afa64a5b344a43fb9186153c913"],["/archives/2022/09/index.html","36a8866f957eed012aeeb5baad09ad7f"],["/archives/2022/index.html","c78a7ea20773bb9d246f64d632f2b2a9"],["/archives/2022/page/2/index.html","da6aa2a5243d648e689729a5666e912b"],["/archives/2022/page/3/index.html","33628997ad0156b6befbc31f159967d2"],["/archives/index.html","bd6dc6f55d7b7fd94478c7deb89ec9a4"],["/archives/page/2/index.html","5f9094918b5686f61bd5263e34595413"],["/archives/page/3/index.html","1c4a53473517c8a854e5fa08ef79635b"],["/books/index.html","38cdd0fa313d7c2d4b47e71ff3f77207"],["/categories/Go/index.html","06e3036e97e744acf5f3f8377dd00113"],["/categories/HaoUI/index.html","adac8abc452668b5edaa7e981cefa636"],["/categories/Node/index.html","33e65c541e3d7609edb954ef52183277"],["/categories/React/index.html","86e6d9f5c8f895e0117ae0d4c17d9cbf"],["/categories/WebGIS/index.html","f34da0322447ce8bc596e25e0a1bf7d4"],["/categories/Webpack/index.html","d565ff4e465541cd3a87f4835eab680d"],["/categories/index.html","09cd7deb0d05782df5ba3a104a509ab5"],["/categories/promise/index.html","bd85a9f8b73cec5534a9e90357262068"],["/categories/typescript/index.html","54816b7a94a466d3adfd0462bc6f79aa"],["/categories/utils/index.html","6d629bc04ba5c365ea0d681257c93c39"],["/categories/vite/index.html","5a1197facdb65b359e781ad107cfece7"],["/categories/vue/index.html","f9e635e09e57d759a206401e23444724"],["/categories/vue3/index.html","3da6634e5dc51df8c0bd148a3e5015a3"],["/categories/vue框架源码/index.html","ad1fb09f79a82ec0bfe0f90bfcb42d49"],["/categories/webGL/index.html","bde062157164da6eb4f070d49bc94f23"],["/categories/websocket/index.html","962fce8c948cd4ce8091a35a6918919d"],["/categories/微信小程序/index.html","cd31a8a6822326083e701252409a0ba6"],["/categories/数据库mysql的学习/index.html","56bb116388dedeedfff05b7bc46bd08e"],["/categories/数据结构与算法/index.html","d74f271911c8b213334e66f3a7697ffa"],["/categories/组件封装/index.html","da6029115c2243a124885845c81f409b"],["/categories/面试/index.html","e3955bfaa33ffb0afb1b6ea454bd0b89"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","28b42351f3bad6709ad7afbb2b88d385"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","237dcc572919bbd8db12a71af96b7963"],["/page/2/index.html","e4570b3d67ed50e7d776ad0a6c24f472"],["/page/3/index.html","2f95dc3337048d1ee064dd53b7374a0b"],["/repository/index.html","61b31f9e73896239b967b322666baf19"],["/sw-register.js","24d7a5e38d320fea1eff9f2f3f7ff0b5"],["/tags/Go/index.html","4b3132df395872471ff8eab7507097aa"],["/tags/JS方法技巧/index.html","8e233c7ab79bd5f140b71f53850c5dbb"],["/tags/Node学习/index.html","fa48034f7b29b31a02df26b9b086ec3f"],["/tags/React/index.html","6c830d29fb52cf543cd04aa2cd419c96"],["/tags/Vue2源码/index.html","e03c7b1289e9eb04db28c9d6e076c78c"],["/tags/WebGIS/index.html","435160a9b7272926b3a7cf9026d12d82"],["/tags/Webpack学习/index.html","7d40a6d4ee602983f3389eaf035c1f4c"],["/tags/index.html","80bfc23a9ef1d2fc4d27648cfe410f01"],["/tags/mysql/index.html","9796d39e4ca7995ba1682d03db5c7cc6"],["/tags/promise/index.html","d30800376c8aa50d3e24e79a943020b0"],["/tags/ts/index.html","f5d5603d186718b121cd3c272dd62e4f"],["/tags/vite/index.html","991384cf01b6946f471717d9687ecb27"],["/tags/vue/index.html","1036d7afac96e67128c2e4dae771bcd1"],["/tags/vue3/index.html","839cc2fa389bf28c8f3360baa810976d"],["/tags/webGL/index.html","044f32d6e61e4bffce893db1e1fb97e5"],["/tags/websocket/index.html","77b6858c103741d49d436dcf8e45befe"],["/tags/个人组件库/index.html","b042f4c48933f1c922d5d8225cf342c8"],["/tags/微信小程序/index.html","7ad568df005dc735799ff7b3f1402ac9"],["/tags/数据结构与算法/index.html","8543826d7b755e841cece3a19a933d0a"],["/tags/数据结构与算法1/index.html","6a6ac391b027318c011324c95ab47378"],["/tags/组件封装/index.html","16b7f3482e3dd2dca73c41828fdfa702"],["/tags/面试题/index.html","1e2e329ae36b1919035844e0e71ff807"]];
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
