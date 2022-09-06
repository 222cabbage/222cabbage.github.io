/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","8c9a17d787734f7376cb2702f9d37512"],["/2022/05/13/HaoUI2/index.html","5453a888c36c4726831e660f943a1f7b"],["/2022/05/13/Node1/index.html","92ec8bfd23ad9fda5348a9b18fc79c39"],["/2022/05/14/Face/index.html","13dc026d8319b872ad03be6a22ba735a"],["/2022/05/14/algorithm1/index.html","d8d4276e8ea95c27fbf15d2daf359333"],["/2022/05/15/Node2/index.html","5be8e010515b4b84a955574c3528e5ac"],["/2022/05/18/Component1/index.html","3db495f3531a4e873a16c0eae52f4061"],["/2022/05/18/tips1/index.html","170f9788e058b8f0f4e1bcc6672ac7ba"],["/2022/05/23/Node3/index.html","7dfcc63c39d109c89780b8560dde9942"],["/2022/05/28/Node4/index.html","16ef9146133e245c83768d3a289d40d9"],["/2022/05/28/webpack1/index.html","b7bdbeb73911087fef1efaff58dd66a7"],["/2022/05/30/Node5/index.html","0dc5ca2a07041903cd500277904bf0ad"],["/2022/06/04/Node6/index.html","130b81b1e746363df951bd01671c57cb"],["/2022/06/12/mysql1/index.html","fd3278fb34dad278ef9450a410dbc810"],["/2022/06/12/websocket1/index.html","34cb24195f0470aa826b18c30db990b4"],["/2022/06/26/Face2/index.html","0bd4ef9e5d58fc301a2e35671318f65c"],["/2022/07/02/vue2code1/index.html","d51d437fd162e0aafad7e3f05b2f4204"],["/2022/07/10/tsstudy1/index.html","dd15be9af278f5cd4eda4cb9c0ef8fb4"],["/2022/08/24/vite1/index.html","5d313aea6a1a6a45d6909aa8a39fcf3b"],["/2022/08/25/vue31/index.html","5b27b031e4343c634ae4995be991cc2e"],["/2022/08/25/webgl1/index.html","e36f5e9bd09a1b4e73e385d83443f6b2"],["/2022/08/31/react18/index.html","27af908c384df72a982c9fe589a70348"],["/2022/09/01/algorithm2/index.html","15479e2ecc95bc5fc0e228d8b1757a68"],["/2022/09/06/promise1/index.html","5b674dbee76839f45bb8f939d42ed7a6"],["/2022/09/06/vuerouterandvuex/index.html","8c6ff6b535602031f96bcacb41c730fe"],["/about/index.html","0868a8b9c11777a36e353840bcb39b3c"],["/archives/2022/05/index.html","49427e3d15c78bd1c75bb5de929ef2ce"],["/archives/2022/05/page/2/index.html","6accd6f3604198f8dc8e5082119d5764"],["/archives/2022/06/index.html","72f2d9bde30eb332c9c154774455b525"],["/archives/2022/07/index.html","a8c9f1d44d48eeae0111a4da90b47bdd"],["/archives/2022/08/index.html","52af5dd7492ead874a0097c08933e4c0"],["/archives/2022/09/index.html","41be4a71886cabe8f78fc087a7e0feb0"],["/archives/2022/index.html","b8f32ebd32f3547147ccb33bad712640"],["/archives/2022/page/2/index.html","dd96975af504040ee9c8c65d5717fa28"],["/archives/2022/page/3/index.html","7ff1d2d74f5d740377e29d4c8a6e829b"],["/archives/index.html","5899caf10705065dc3597ecea49ed003"],["/archives/page/2/index.html","ddbe668b4ccb58fd026a715aa7ca6a58"],["/archives/page/3/index.html","4a6e57d730a93e54fad9441f1cf66981"],["/books/index.html","0e92c743489585d4133bc5d7ac917f0e"],["/categories/HaoUI/index.html","cfccd1aa701b62675a1a69675c74fb9f"],["/categories/Node/index.html","2e460d7a138c14459b92b7048a946a51"],["/categories/React/index.html","df654721fa6a1d3bcfa36fb7ee05e8aa"],["/categories/Webpack/index.html","47c1a8078362b8b9d69862ff4ada9462"],["/categories/index.html","4ae8ee90708d6ae3a25591451e94b7ed"],["/categories/promise/index.html","f201cb082147b0e916457d859167215c"],["/categories/typescript/index.html","fbcd0f5026adef95b353e0cbe0d4d6a4"],["/categories/utils/index.html","4c311e0f9776f1edf5b9979af8e64cf9"],["/categories/vite/index.html","541ba09150de87ac523092f827eb5968"],["/categories/vue/index.html","7498a8c0d664e00e52e3c9ceb31e93fd"],["/categories/vue3/index.html","5504e8ac7bc28e34135b56971770d34f"],["/categories/vue框架源码/index.html","38c78d874a1da9d32e68611a5c786026"],["/categories/webGL/index.html","09b540e2d17170a73216465204907c26"],["/categories/websocket/index.html","d05646e5e00a2410882e291a81c90b7a"],["/categories/数据库mysql的学习/index.html","642431d5b10f1a9984e28bde2427c41c"],["/categories/数据结构与算法/index.html","2a82e66d684268f13e11d290945e7ee2"],["/categories/组件封装/index.html","a3ae3e35080a21b9732c0fbe3a3580f6"],["/categories/面试/index.html","842357fb43433c8c3cc800700a99bb4c"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","0154423cf07758932a469301723e3864"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","60e2713cecf4bb1c2745188243c23d2e"],["/page/2/index.html","ff11175920a390d5579add4da4003e0b"],["/page/3/index.html","2f3ef05ec6094248d989a3de01064568"],["/repository/index.html","dcd6d6e57705787025af859c78fb85c3"],["/sw-register.js","1ba03758ab874cee4f012cb21862b020"],["/tags/JS方法技巧/index.html","1826e986cbfba5a6e78875ab3ce173c8"],["/tags/Node学习/index.html","d13931ebc2473dd28142cb2de8066846"],["/tags/React/index.html","73c4c57bb33f42a4bf659af5b815a346"],["/tags/Vue2源码/index.html","0639c659e31ca4cc1d26aa0c5fce2c6f"],["/tags/Webpack学习/index.html","c3a2e495217ec0eebbb2262b146b19cd"],["/tags/index.html","719a2c3f55312d2ee217d4b248ee2dd3"],["/tags/mysql/index.html","379306577ebfb83ff5ee6a2dabdc094f"],["/tags/promise/index.html","9d576d2cf2c98af9feaa9049b36a5d5d"],["/tags/ts/index.html","909a26bd44e18b24587ada9c54f83e90"],["/tags/vite/index.html","8d3dbadc3d6c7af1476f9962b0f1b1cc"],["/tags/vue/index.html","770260f72602ec3fe945067721a30d2f"],["/tags/vue3/index.html","46f2496263df3a5c808b2f9d85b7b3b5"],["/tags/webGL/index.html","1537c3d6a90378ec631d3111a4f1d50b"],["/tags/websocket/index.html","1fc4a0953bb661ab68d4eab5ef1799d5"],["/tags/个人组件库/index.html","76f0e7fee27ecaf587c0105cd1da0138"],["/tags/数据结构与算法/index.html","f0d7a2f6757a0769966bb4eb27bbdf64"],["/tags/数据结构与算法1/index.html","bf67dd53ad44a59f84715dc6b280cf29"],["/tags/组件封装/index.html","d27b44e7a249adeb1ffcf948eb54f645"],["/tags/面试题/index.html","f689aca55d39ca00befa3de35df618e2"]];
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
