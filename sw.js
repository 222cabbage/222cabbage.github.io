/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/unknowncabbage.github.io/2022/05/13/HaoUI1/index.html","6bc6c50f8725018e31dadf7c10418845"],["/unknowncabbage.github.io/2022/05/13/HaoUI2/index.html","d2e31d7d9086d7bdc4b101f4c39fef8f"],["/unknowncabbage.github.io/2022/05/13/Node1/index.html","888a9d5f3e3a98901cbc716c1133d1bd"],["/unknowncabbage.github.io/2022/05/14/Face/index.html","cf5c74885e9e1040c18c03524e02c65b"],["/unknowncabbage.github.io/2022/05/14/algorithm1/index.html","6fba6c5baa0e32cccc83715ab1978fe4"],["/unknowncabbage.github.io/about/index.html","854104b0459b054db44dc5abd9f205c7"],["/unknowncabbage.github.io/archives/2022/05/index.html","c17c8390ab75e0cfada12d967ad7a9d8"],["/unknowncabbage.github.io/archives/2022/index.html","d06d70365e2be40314cb5b9c53f908a9"],["/unknowncabbage.github.io/archives/index.html","e977c54bf1bbbf1ec897467ad19fb319"],["/unknowncabbage.github.io/books/index.html","6882f3de6e2d85616f74575c3065ea8e"],["/unknowncabbage.github.io/categories/HaoUI/index.html","ab084efe049e513ea54c530d32a3ebcb"],["/unknowncabbage.github.io/categories/Node/index.html","31f1f94ad9bccd375499f2d44f1180de"],["/unknowncabbage.github.io/categories/index.html","d8edfcda29b8dafcc383e14930c8c64c"],["/unknowncabbage.github.io/categories/数据结构与算法/index.html","08a53d112b9686f9bfcba92a6f7ec92d"],["/unknowncabbage.github.io/categories/面试/index.html","cc51596a195adaa55cdf9a798fbf7398"],["/unknowncabbage.github.io/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/unknowncabbage.github.io/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/unknowncabbage.github.io/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/unknowncabbage.github.io/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/unknowncabbage.github.io/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/unknowncabbage.github.io/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/unknowncabbage.github.io/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/unknowncabbage.github.io/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/unknowncabbage.github.io/images/avatar.jpg","6d4b78bab105fa69f7c25e5a3ae0f02d"],["/unknowncabbage.github.io/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/unknowncabbage.github.io/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/unknowncabbage.github.io/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/unknowncabbage.github.io/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/unknowncabbage.github.io/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/unknowncabbage.github.io/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/unknowncabbage.github.io/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/unknowncabbage.github.io/index.html","6f2e7bf0dca46cb4e33314a56b3c949a"],["/unknowncabbage.github.io/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/unknowncabbage.github.io/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/unknowncabbage.github.io/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/unknowncabbage.github.io/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/unknowncabbage.github.io/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/unknowncabbage.github.io/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/unknowncabbage.github.io/links/index.html","f4bd8c234aa1c6b648a397530a076c30"],["/unknowncabbage.github.io/repository/index.html","a74a38f0385ba9c74fb082e20f817de2"],["/unknowncabbage.github.io/sw-register.js","a6dd4226f96b498752cfd0b1b2e32b15"],["/unknowncabbage.github.io/tags/Node学习/index.html","c21b2b3e62b5d086c22ca7638750df4a"],["/unknowncabbage.github.io/tags/index.html","03b8e93da2a62ae881fba69017c613d3"],["/unknowncabbage.github.io/tags/个人组件库/index.html","fc26e3863a03109be0394ef39fe3faa9"],["/unknowncabbage.github.io/tags/数据结构与算法/index.html","244ad55e531e4aae20abae4fb051a529"],["/unknowncabbage.github.io/tags/面试题/index.html","3ac52b08b5a8ca6b9a27ee5de868f5ae"]];
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
