/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","44c9adeff185e96cef2500691e69fe17"],["/2022/05/13/HaoUI2/index.html","cdb49059122f80a729551ef87ae67daa"],["/2022/05/13/Node1/index.html","d9470ff64c73b5182e8d12c93f434cf9"],["/2022/05/14/Face/index.html","f8debf92a14394bbf7b34e14df977efb"],["/2022/05/14/algorithm1/index.html","1642d546fc4e615d502b5d709eecc79e"],["/2022/05/15/Node2/index.html","a0839c00f00df9ac784518b9c6867a9a"],["/2022/05/18/Component1/index.html","333eb750d5cd2b515d9095a1019508d9"],["/2022/05/18/tips1/index.html","32a389df2dd95e713f3894a5d5f27e16"],["/2022/05/23/Node3/index.html","5ed015bc0722d095a4c0b5da4aebe7bd"],["/2022/05/28/Node4/index.html","30d8347a1278082b04c0a93ba7b6abdc"],["/2022/05/28/webpack1/index.html","d2b101b2236965672b1075edaf60b214"],["/2022/05/30/Node5/index.html","9b8eff2534789fb9bf62b6242462d64d"],["/2022/06/04/Node6/index.html","87f93fdd748f07a73c1ef856da3cca28"],["/2022/06/12/mysql1/index.html","66e09021020456f1353d758871efabd1"],["/2022/06/12/websocket1/index.html","435441153cd8c37ce56927d8bcd586e3"],["/2022/06/26/Face2/index.html","1086867cc37aecafb554beaeda3b3963"],["/2022/07/02/vue2code1/index.html","4068bf0659e8b3746e50f4d91153ae60"],["/2022/07/10/tsstudy1/index.html","a6934a9bcac8b5675e5ca73e122b47ca"],["/2022/08/24/vite1/index.html","e62c18ef0173ea4302846f209023ce7c"],["/2022/08/25/vue31/index.html","d31e6bfed9b2e540b6944cb57d1362f7"],["/2022/08/25/webgl1/index.html","63a2b35acfecf3ec901b5afb806411f4"],["/2022/08/31/react18/index.html","2ec9c0816bb1c1253eb369921ed570f7"],["/2022/09/01/algorithm2/index.html","4e9ff611fbc515a052c8972f705d5e1f"],["/about/index.html","a30bdad7244c96d091921d002dcc35e2"],["/archives/2022/05/index.html","0dde4b2a879f48f7c2e890a79490a8e0"],["/archives/2022/05/page/2/index.html","138994e715f24e5c016ae558b549d76d"],["/archives/2022/06/index.html","d03a0d312478f6d01bc77d79f57eb9e1"],["/archives/2022/07/index.html","65aefe730c87f77cca852a0281a6771c"],["/archives/2022/08/index.html","ca855d8b09d631f2be094ea6847d629b"],["/archives/2022/09/index.html","6e6e0d62b650dd49383a4d86b23a0e34"],["/archives/2022/index.html","a8bfd60e2a1ba170fe46cd9025367abd"],["/archives/2022/page/2/index.html","ea68bfb2cfa9cef1c36474b12b11375a"],["/archives/2022/page/3/index.html","5dd131191bf7d237d9bd871f7943ed0e"],["/archives/index.html","27dab6e55c0823ab63bf2e10ed5f9d46"],["/archives/page/2/index.html","a35620b1f29390b6f42184bfa20eb8a8"],["/archives/page/3/index.html","be5f2c977891ac4a4c1ce21263d150ad"],["/books/index.html","40a5fd4cdf782697788839bb0103856c"],["/categories/HaoUI/index.html","4aedcb0ad91dca9dbc7dc1072dc9a80a"],["/categories/Node/index.html","f15e1d9f816c6c9621b8d25308f30c4e"],["/categories/React/index.html","48e1d1090a95f5dcb75163a6d4123cf7"],["/categories/Webpack/index.html","a06ccf6a5d2497ea2ada0a8864a4dc8e"],["/categories/index.html","7235a6392694b9d864070045d3792569"],["/categories/typescript/index.html","f43934352008c8e9c5897236bf802aa9"],["/categories/utils/index.html","aefef4b783e48fb28a2db04fbbec88b9"],["/categories/vite/index.html","fc2ac9ab9968881d205284626099edcb"],["/categories/vue3/index.html","3598264b82b53c27912a3acd98e7cce2"],["/categories/vue框架源码/index.html","1f0f91790c86bdd503cc226450c423a5"],["/categories/webGL/index.html","4eaaf8a05581b0217d06fceba616cca4"],["/categories/websocket/index.html","aab6b74cd10b46dee17431b77827139f"],["/categories/数据库mysql的学习/index.html","a8c160016f6ba2002a16ba22d2ef75e7"],["/categories/数据结构与算法/index.html","cae5ceab7ca56febf8be93ee4fba5833"],["/categories/组件封装/index.html","6d903eafcf712a21090650a4919f29ae"],["/categories/面试/index.html","14683ad9a77e37834d7f96f2e7fbc218"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","56bdbe425bdc8a4420a8fd9e919716df"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","223518aa56660f592fe4d839305e920b"],["/page/2/index.html","1a19e069d994b94e3d9e315c86b65a97"],["/repository/index.html","7338518068f8efa8906c8d2ab53f9cf6"],["/sw-register.js","34d20ac2386682d365d3b35764e37b25"],["/tags/JS方法技巧/index.html","3e7af961c4db24a3b759b7fddff7a4a5"],["/tags/Node学习/index.html","c47b5260d6a1804ff5be949ae11c4ea5"],["/tags/React/index.html","c1a54d68f97295d5ea0357deaa97eeb6"],["/tags/Vue2源码/index.html","a4838345572090b3504a50ab91db65c4"],["/tags/Webpack学习/index.html","821728f6952c35e53b38594744015296"],["/tags/index.html","fac3be07d3adf97b37b87c3e1a89e634"],["/tags/mysql/index.html","fe683afd42dd3085083d39861a009570"],["/tags/ts/index.html","26915a9aca621ac27dfe088a5563fd15"],["/tags/vite/index.html","24f4abff5906e69a070cb54e37c6ffb8"],["/tags/vue3/index.html","46a99b16e1ddeb470c330133b293f24d"],["/tags/webGL/index.html","0d5b41ab351c07fe35da455a7c12818b"],["/tags/websocket/index.html","5d1fea56428e6eb8ef36287ee82eb9db"],["/tags/个人组件库/index.html","9ea53dbc75a9b5aea37d4d1de236e0cd"],["/tags/数据结构与算法/index.html","0bcf2163238b4fbbd7817f010f4cfb34"],["/tags/数据结构与算法1/index.html","4ee4f123a0f414b4c85c2657f8ccc9f8"],["/tags/组件封装/index.html","787f05ad2428856ea22853ed15481b2b"],["/tags/面试题/index.html","3fbbdedf8d89fabc160bf09bd94a7100"]];
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
