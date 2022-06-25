/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","82642e0b902a7b73e042fffd79b91f4a"],["/2022/05/13/HaoUI2/index.html","238bb773942b720fb6acddda1a42adc7"],["/2022/05/13/Node1/index.html","996b7a718c67aee2db8a12a46a7b0683"],["/2022/05/14/Face/index.html","43bf93a7cc42bee1b5f376f0131441a1"],["/2022/05/14/algorithm1/index.html","2713bed9fcdfe6e9ecab89af848cdac8"],["/2022/05/15/Node2/index.html","b92b3aef27b4e442ecabdd982f9c2771"],["/2022/05/18/Component1/index.html","8e5dfc79f4131de9dda90409eb84c400"],["/2022/05/18/tips1/index.html","629b5a747f2ef7037b527653e113644b"],["/2022/05/23/Node3/index.html","0b45055265701cd9c452869c6bc1d783"],["/2022/05/28/Node4/index.html","5f290e773d2bf0bc6a24b0e4a5350f3e"],["/2022/05/28/webpack1/index.html","fc6a6eff57aeec8a8ca8134f8515c90d"],["/2022/05/30/Node5/index.html","130a55bc355a32511817a08731a8de49"],["/2022/06/04/Node6/index.html","c3061057a94058d65db933dd7380c6aa"],["/2022/06/12/mysql1/index.html","29b8521d1aae86fa8aae5c7ae902c432"],["/2022/06/12/websocket1/index.html","625a1c8f1a4a8eba6321e1f9ab5ed8e7"],["/2022/06/26/Face2/index.html","e0d9537ddeb014e8ebbf02a8dc0dee08"],["/about/index.html","ec7c674fb1ef9e02be12e9cc4c755eb0"],["/archives/2022/05/index.html","d52dc4bd3c3cab358a1415a0bece2b48"],["/archives/2022/05/page/2/index.html","9792ac08419593fb0115d96e743df6b4"],["/archives/2022/06/index.html","c94413b68ab1afbee1a38a63b93da295"],["/archives/2022/index.html","9cabca28feabd19e7d07ae424395ac97"],["/archives/2022/page/2/index.html","83436081d007334a114375c2aae515c8"],["/archives/index.html","b8177beaed0652139d76c0b96e14e00a"],["/archives/page/2/index.html","b5c6cf4ea71a860e51c48836818d53d2"],["/books/index.html","0c65fb0a462d869003490b635a5b60da"],["/categories/HaoUI/index.html","3049ab8152b3c6eb4e92c663a46e8046"],["/categories/Node/index.html","b4ebecdd865ca36321910850020fcc99"],["/categories/Webpack/index.html","b80df34bdf12326fc8644ba07e96d2a6"],["/categories/index.html","75f341ff2e56f062875bb5416a0335e7"],["/categories/utils/index.html","983f2ba310ede2c75553b51d8d5f2f4b"],["/categories/websocket/index.html","4383b57560a346851eb29511b96d444c"],["/categories/数据库mysql的学习/index.html","a9d42e566dc69a1dbfbc3f7027d17476"],["/categories/数据结构与算法/index.html","4acb0b806c657dbc32d0ff442bf239cf"],["/categories/组件封装/index.html","8a50566b05cd19ec7061f78d8d88ee2e"],["/categories/面试/index.html","111697f91565dd75259a7abc19123a38"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","e275ced400e3f828c38b33e3a194c708"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","def96f172e6f7091f165d1eb656e6510"],["/page/2/index.html","5af790fa361d4500c476c008df253d02"],["/repository/index.html","34ec2580a92cb94b43e1e52979dad449"],["/sw-register.js","8d72d90557e8e159996a6897caba8cd1"],["/tags/JS方法技巧/index.html","f7530f5a0ef14e68a08c6216f390038c"],["/tags/Node学习/index.html","b2fc39f36e19905e814d7b7946a9f6c2"],["/tags/Webpack学习/index.html","4a9f9fa35759357feb9275e9a012f17c"],["/tags/index.html","fe7a0831e5a508b0f21f046da606917d"],["/tags/mysql/index.html","f056852f2ba8d33e4c6b3be38c0d8299"],["/tags/websocket/index.html","bc29f73190615697d790e2773c58dd0b"],["/tags/个人组件库/index.html","6ece7afac1b0d4ba8d478dd6c3205e06"],["/tags/数据结构与算法/index.html","4f776dc731f999ae00b87ace4bd98b61"],["/tags/组件封装/index.html","ee3c0f14fd52566e3cd34199adec57b3"],["/tags/面试题/index.html","f14ce5e332c2d0e37776695b8520bc0f"]];
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
