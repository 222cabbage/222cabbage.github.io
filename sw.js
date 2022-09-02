/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","b8f804d9d0bfac092619500aad851587"],["/2022/05/13/HaoUI2/index.html","f55a837c570feae8f043c8d88df67e8d"],["/2022/05/13/Node1/index.html","a4b04d8528190c908a42e57f4209c0d4"],["/2022/05/14/Face/index.html","bc9ff6d9aa16da921d017087ba8263bc"],["/2022/05/14/algorithm1/index.html","44ea7a0e8d6416f656f75bb4dfe94960"],["/2022/05/15/Node2/index.html","c45497670a62c741ced4595b35a4acf5"],["/2022/05/18/Component1/index.html","86a37dcdfff4d5ffdf57c0be553dac92"],["/2022/05/18/tips1/index.html","97465d319276e4dde14649da3600f263"],["/2022/05/23/Node3/index.html","761b9791c5665b1406de62188f5f1c29"],["/2022/05/28/Node4/index.html","8cd977f7cb72a461fdcb43f372c7b6d6"],["/2022/05/28/webpack1/index.html","b7e71d6a7418f19ebf15a8a0f2c894a0"],["/2022/05/30/Node5/index.html","4fc2794304d9395a37912b5b7a11df87"],["/2022/06/04/Node6/index.html","f8d46342d0399290ed86d44b9d4b011c"],["/2022/06/12/mysql1/index.html","760b0061d1fdfb99ae8266b716ac48db"],["/2022/06/12/websocket1/index.html","8a6d8f79891753993f0577829dfe5aeb"],["/2022/06/26/Face2/index.html","74df99efda2fbdc71a938faf8b33d87d"],["/2022/07/02/vue2code1/index.html","09de3988ddab18680eb46f2ab4ec209e"],["/2022/07/10/tsstudy1/index.html","60c33db459b9c10357f8ed44e9813792"],["/2022/08/24/vite1/index.html","6aba2e41019d4bf5ce8b6da2cb04b7b0"],["/2022/08/25/vue31/index.html","93159b30a0b9e69b4ec5dfdd4116db04"],["/2022/08/25/webgl1/index.html","0cb1b88ac28e1b3f6bac0ce9ae04283d"],["/2022/08/31/react18/index.html","0e05be221646dd751ddd51098b76509d"],["/2022/09/01/algorithm2/index.html","2505742cace7c11136261576d3b45b45"],["/about/index.html","a30bdad7244c96d091921d002dcc35e2"],["/archives/2022/05/index.html","0dde4b2a879f48f7c2e890a79490a8e0"],["/archives/2022/05/page/2/index.html","138994e715f24e5c016ae558b549d76d"],["/archives/2022/06/index.html","d03a0d312478f6d01bc77d79f57eb9e1"],["/archives/2022/07/index.html","65aefe730c87f77cca852a0281a6771c"],["/archives/2022/08/index.html","ca855d8b09d631f2be094ea6847d629b"],["/archives/2022/09/index.html","6e6e0d62b650dd49383a4d86b23a0e34"],["/archives/2022/index.html","a8bfd60e2a1ba170fe46cd9025367abd"],["/archives/2022/page/2/index.html","ea68bfb2cfa9cef1c36474b12b11375a"],["/archives/2022/page/3/index.html","5dd131191bf7d237d9bd871f7943ed0e"],["/archives/index.html","27dab6e55c0823ab63bf2e10ed5f9d46"],["/archives/page/2/index.html","a35620b1f29390b6f42184bfa20eb8a8"],["/archives/page/3/index.html","be5f2c977891ac4a4c1ce21263d150ad"],["/books/index.html","40a5fd4cdf782697788839bb0103856c"],["/categories/HaoUI/index.html","ee80d9c21919a80a6485362c32bff552"],["/categories/Node/index.html","06e60ef32fc082d04013b13aa4ea406b"],["/categories/React/index.html","4401ad276fd06966f84f00f24ac94e7a"],["/categories/Webpack/index.html","343a5436c234c1f4ed9a18e2c61eb0ce"],["/categories/index.html","e538670ce91f87ffa6c7b70e16d872e4"],["/categories/typescript/index.html","50450921928102bf9bc44fd364430a5e"],["/categories/utils/index.html","42187b2259f5040cc36467fc0ed85141"],["/categories/vite/index.html","ce4f783956819c3d4081a76ed45cdc12"],["/categories/vue3/index.html","f72ac52f47d481abec8f8e6d5cba5f6d"],["/categories/vue框架源码/index.html","58a68c83934e654e414dd0e6249e0a86"],["/categories/webGL/index.html","9ae42e5c8bfc0e5990846bbc17d9e032"],["/categories/websocket/index.html","0e5aea7d190981c3c2d638248b87b12a"],["/categories/数据库mysql的学习/index.html","428b3f2a9bbf17f3986954ac3352715b"],["/categories/数据结构与算法/index.html","54c384b09b26199d9bcd54cb683fb40b"],["/categories/组件封装/index.html","27346c2cd303f9c154e991f60ac73adc"],["/categories/面试/index.html","e1ed20d7623b70a771fb8b7271d612dd"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","56bdbe425bdc8a4420a8fd9e919716df"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","223518aa56660f592fe4d839305e920b"],["/page/2/index.html","1a19e069d994b94e3d9e315c86b65a97"],["/repository/index.html","7338518068f8efa8906c8d2ab53f9cf6"],["/sw-register.js","44315bdc166e659c7570bd754ac9d830"],["/tags/JS方法技巧/index.html","4a75de23e0df626d4baa50cbce0e58d0"],["/tags/Node学习/index.html","40aef2b11d90d82f61c3aa90ff689a4b"],["/tags/React/index.html","4302fce1b75a0f296270c45d4ca9a556"],["/tags/Vue2源码/index.html","8a60980bf51342fc6bf575e00084fe35"],["/tags/Webpack学习/index.html","6bc2f7bb61be2e354c8b3638aab7d05d"],["/tags/index.html","d472dea20c48afc0758405113e4960d2"],["/tags/mysql/index.html","979e78560055693250ebbd133696c0b2"],["/tags/ts/index.html","02617e88f56a7c8914676650a8d64312"],["/tags/vite/index.html","2e83b3c565522a9ee82e0bfdc9eea89c"],["/tags/vue3/index.html","25010622d391af16117421c627840391"],["/tags/webGL/index.html","d85c5c6832941a91debd8011d8cb76f1"],["/tags/websocket/index.html","09cc003ccbcb091739f1a32bf31929f1"],["/tags/个人组件库/index.html","1a5a5f3abbc858142bad46f3491a41c0"],["/tags/数据结构与算法/index.html","1bb311e6c69b9a72cc7b9e4997b23c0d"],["/tags/数据结构与算法1/index.html","5bcac07a33b237b57599817a89d7dc5d"],["/tags/组件封装/index.html","7ea4cd3cae0f53bb8eee0a255d8b3745"],["/tags/面试题/index.html","8927291558815ffd884782a83280488d"]];
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
