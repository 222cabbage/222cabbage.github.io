/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","73a61275af83bfb12d3841924adc72de"],["/2022/05/13/HaoUI2/index.html","8ad6146c129e17688cdb55cd5ee452c3"],["/2022/05/13/Node1/index.html","93a0d6eb72472f904a6f332a17028637"],["/2022/05/14/Face/index.html","9b8d141a46abde691688089e54cfa96b"],["/2022/05/14/algorithm1/index.html","ae7bb1a6b3520e67bc7052baf8bd1e7d"],["/2022/05/15/Node2/index.html","43118eb82f826705ea5c5c192075f3c8"],["/2022/05/18/Component1/index.html","a4ff4aab5e5514b9887877db873173b6"],["/2022/05/18/tips1/index.html","64197bb8e17692c111934af99d4d437a"],["/2022/05/23/Node3/index.html","0d51e0617546abf223a4a6d9d7b93901"],["/2022/05/28/Node4/index.html","8b16427eb4e55dc4095b8a20f87da033"],["/2022/05/28/webpack1/index.html","315e68806fc994eb725cf0fa08958dc6"],["/2022/05/30/Node5/index.html","406606188aad205e992ab2a12addab76"],["/2022/06/04/Node6/index.html","297336fe3e0ccc693cbe515101c371eb"],["/2022/06/12/mysql1/index.html","10ddf5b9c7531c871fb78f6bc74c540c"],["/2022/06/12/websocket1/index.html","8d5d0d36e47b76ce21d2cdd1235df744"],["/2022/06/26/Face2/index.html","46bf785b20350951333c1e707eb4d001"],["/2022/07/02/vue2code1/index.html","379ba644d0e2b15dc4f7abbc85b2de9e"],["/2022/07/10/tsstudy1/index.html","778156ad9ca301f88710b259fd333e46"],["/2022/08/24/vite1/index.html","5729056bbe6d4c055fa216676a206732"],["/2022/08/25/vue31/index.html","af2745384a4c91bd1e599e5045bce8e4"],["/2022/08/25/webgl1/index.html","52cbe0079ae1720a4ec605269d43f2b1"],["/2022/08/31/react18/index.html","f9f3e2d66ebd69aa5bfb683c352d9694"],["/2022/09/01/algorithm2/index.html","e9d63c1bc7afd8f4005ba6124a49703f"],["/about/index.html","b15c79ddf26a8594a7feb72bf877c5ac"],["/archives/2022/05/index.html","3dee98c9a169040a6979365bdb638ca1"],["/archives/2022/05/page/2/index.html","092edd76c0c7d1c18f9e21bec3ec272c"],["/archives/2022/06/index.html","9b4a0e5f4d6720d15f1a3d70a3666d38"],["/archives/2022/07/index.html","540e6280bd342bd3c55cfb201c435353"],["/archives/2022/08/index.html","f885479706d915092d6056058b8dd30e"],["/archives/2022/09/index.html","952d52fabb79d26b1cb3414d188fe1d2"],["/archives/2022/index.html","0f7c1ee9e48394d202102f2a20311950"],["/archives/2022/page/2/index.html","e2978f1c346d4e2b8e9a214fc6391e8e"],["/archives/2022/page/3/index.html","11804ac14b10f4dc22d1e0410fc7db0f"],["/archives/index.html","6ea371bf907724cd58fbc7a215a4845d"],["/archives/page/2/index.html","f1c56ac97cd7b7585101de1c256f981b"],["/archives/page/3/index.html","23c0568fb09e65b2e0044e5ac1212ed6"],["/books/index.html","270cc47532b9ee624a4778eb463fd82b"],["/categories/HaoUI/index.html","81fc7290e2b58e366d6b5db998ff1577"],["/categories/Node/index.html","9926b6e966a1bd1d04ad99f519734d11"],["/categories/React/index.html","737e9914fbdc72ffa2ff3375e7e224cf"],["/categories/Webpack/index.html","9d30be32bf5189b2352b53915cea457d"],["/categories/index.html","f7babdcf1cdf841eba6a1334949627a9"],["/categories/typescript/index.html","be0781c9e8835b1ab7779437693fde59"],["/categories/utils/index.html","f5307856a5c0c30fc8fca1e318f3e87f"],["/categories/vite/index.html","740671621caa034fa26cd15a3607b6d6"],["/categories/vue3/index.html","f81c7b496523f817da793c46dfecbf53"],["/categories/vue框架源码/index.html","d0784ea8a53659a5e547df2b99873407"],["/categories/webGL/index.html","094a6496af1a76c1b6863b19dafec9fe"],["/categories/websocket/index.html","5ac0f92a105811e27480005d93843b33"],["/categories/数据库mysql的学习/index.html","db79c32b094264428a078f346d75dc51"],["/categories/数据结构与算法/index.html","8d1413d2d9877013096cead89b40f1c6"],["/categories/组件封装/index.html","67c55a052c947cf4fd5f23fccdb64b06"],["/categories/面试/index.html","34800b119398b4f4a3728356bf135781"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","f38d56c67ee4189e2b7e38ca2a84eb52"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","59f8a533ca23e5f432dd4b641ddaab94"],["/page/2/index.html","fdb91203473c78fb23ee9269a9710072"],["/repository/index.html","4cfae26a8854276e571d40779bcd681d"],["/sw-register.js","3c71bcfa97355bef8e5f47f742996dfe"],["/tags/JS方法技巧/index.html","ea2b27cb52a02c5e43c00326738f34b3"],["/tags/Node学习/index.html","3f10e4f90b8d8ac0f9b56a838ae46423"],["/tags/React/index.html","61a2a35f69bee6840eeb68295cfe14e3"],["/tags/Vue2源码/index.html","678444b5a0f8c7460a5729e280996da9"],["/tags/Webpack学习/index.html","53c9d53e5a76cd4bb49ed8c40fca7448"],["/tags/index.html","25de4a72ac2ae97de53f69293b7b59d7"],["/tags/mysql/index.html","44ba6db49408ad005c941b4efb92ad33"],["/tags/ts/index.html","0ba8cee67255f8667350d50c5e48ccff"],["/tags/vite/index.html","7c43978e5b79bdfa6cd2d9a302893ea8"],["/tags/vue3/index.html","46827294b27165be7176bbc960153c98"],["/tags/webGL/index.html","809f480ed4aa3cd721930825706f2260"],["/tags/websocket/index.html","6318e450db9c76c4fec71b06a36c6bb8"],["/tags/个人组件库/index.html","685cb329572b0523bf9651d80d02dab2"],["/tags/数据结构与算法/index.html","4406b51f9056b4afc9beb5a757948c1a"],["/tags/数据结构与算法1/index.html","883d7808725ee7817a74bf8f1d06cc1d"],["/tags/组件封装/index.html","387f955a06f16448d604a35334f73ef7"],["/tags/面试题/index.html","7e7f4fc6bae83f9d25d7a3db74a8a223"]];
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
