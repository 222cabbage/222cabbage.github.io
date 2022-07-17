/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","aad20cdb255eb9476df56676f02ab321"],["/2022/05/13/HaoUI2/index.html","1a7cc7ecb975183fea93992c48ad67fd"],["/2022/05/13/Node1/index.html","a10117af3f717257fdb104155b6f37ec"],["/2022/05/14/Face/index.html","683b19629f3f66219b70e0c107b59257"],["/2022/05/14/algorithm1/index.html","ef99812cc3b957d9497eb825e48cb892"],["/2022/05/15/Node2/index.html","ccfb3c90bbf62ce9c2d36ad9f8ec6591"],["/2022/05/18/Component1/index.html","7b25b69ddbc3812c447be44ecbcb333e"],["/2022/05/18/tips1/index.html","c6b249c0ff9ac94e508b765a2b8618a5"],["/2022/05/23/Node3/index.html","5001c226d1654a65e3d1ccf3c3cacc32"],["/2022/05/28/Node4/index.html","bda8148d9d0498eacf2899ec9c62fdbf"],["/2022/05/28/webpack1/index.html","5e04423b9b31d2d892abe59b6ab4bb19"],["/2022/05/30/Node5/index.html","63e71642b87587638710d72133aa76b3"],["/2022/06/04/Node6/index.html","6534a9d4aa0fc22375361ffe7880909f"],["/2022/06/12/mysql1/index.html","375e1e6a37774f93cde9e4e5e221e362"],["/2022/06/12/websocket1/index.html","1b2a1a9a50cb821a484606d7cdd08ff4"],["/2022/06/26/Face2/index.html","f52fd481e61459fee48abd1c95558522"],["/2022/07/02/vue2code1/index.html","5e24e6b061bc5ce5071be45943f3aa1f"],["/2022/07/10/tsstudy1/index.html","318dd9c7deba5dd416b5bb4961334651"],["/about/index.html","3929436574c2411a2f814d8eecb1fc8e"],["/archives/2022/05/index.html","c1fe2ddde7974bea814cfe942639aad4"],["/archives/2022/05/page/2/index.html","5545d2e465474b05b55a255caceb24d4"],["/archives/2022/06/index.html","926b262fc2ec7be4e6c7b685a01335b5"],["/archives/2022/07/index.html","0d4db033829f1e2343e126d91b55dd82"],["/archives/2022/index.html","6210f963d3d92b81a3dbbbe3e83f3af4"],["/archives/2022/page/2/index.html","685cb370c0a493181b3cc92d3b1b5b41"],["/archives/index.html","86bbac7aac42a63ca51dae736e012deb"],["/archives/page/2/index.html","735f6cea1d97315900b4dc0c8d29253e"],["/books/index.html","fc82d37abb792ee0caf2c0357bbc7252"],["/categories/HaoUI/index.html","9148b0601d39c46c35ce42508e85a1b3"],["/categories/Node/index.html","99fcd91a51ad29c966878329a1340580"],["/categories/Webpack/index.html","351f688234e12475091c7fdaacf0fe80"],["/categories/index.html","5554d9f4775c40f4d8d788f3248a2bd4"],["/categories/typescript/index.html","b235aba2af047075ae9b6441c5def399"],["/categories/utils/index.html","ce592aea30cac47e2d45db94d61e88af"],["/categories/vue框架源码/index.html","7ad5710080aacb18760f83e42a02a8ec"],["/categories/websocket/index.html","b95b6cf9c87fc258aac5745f046c08c3"],["/categories/数据库mysql的学习/index.html","fc01131bb72ac7a84ea2cb63678a686e"],["/categories/数据结构与算法/index.html","ba4a7c3c91d11b642faf67842b3e9e24"],["/categories/组件封装/index.html","26de2c29fb0e56b0213d68b71598dec2"],["/categories/面试/index.html","bb9b8147f6f282a0173bc70adcdef71f"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","26691eaec89fa92a49c886650b4cabba"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","149f895dc9211943b34a6a0f5d519fe1"],["/page/2/index.html","b58f57070127949ef3058a318fd15f34"],["/repository/index.html","3645ed46be8416b467f722475f0390d3"],["/sw-register.js","a54f38cb652363ee63f0e363a718ac41"],["/tags/JS方法技巧/index.html","3c3e62153f0e21fb890fcd7e9178b375"],["/tags/Node学习/index.html","b12c0209402854c69acfbd5261b76f7c"],["/tags/Vue2源码/index.html","1428516a72711b7626379dbd5f3a4ebc"],["/tags/Webpack学习/index.html","78f473068890980a1a2bc8569bf6cff2"],["/tags/index.html","ea96d1e77e7ae7e57353efc8b7312e3f"],["/tags/mysql/index.html","a98222c3be97510225e2e07ab94da8cd"],["/tags/ts/index.html","1142e867e5f16a899efddfcc867f6ead"],["/tags/websocket/index.html","5e00fd91aae93426b1d5a07506073444"],["/tags/个人组件库/index.html","3ada6158f213c718a960c9239f1a6708"],["/tags/数据结构与算法/index.html","c1dd029b72a32f656c48fc2dc34023ee"],["/tags/组件封装/index.html","fa1c38c3d7a970134882bb0b8b7d639e"],["/tags/面试题/index.html","ec89db0a5cfa3d26c693e445d9f84699"]];
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
