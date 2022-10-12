/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","b24ca8f96d7bf874fda368b970eaee0a"],["/2022/05/13/HaoUI2/index.html","857390b22a60c5ff49b44bdb7b492339"],["/2022/05/13/Node1/index.html","cddf01818db4aa1ae172764dd74a04b0"],["/2022/05/14/Face/index.html","71b8f394075aa5020b4b0c8f90462399"],["/2022/05/14/algorithm1/index.html","e36ba1eb78695f35e076b62af68deab9"],["/2022/05/15/Node2/index.html","ea30f7e96bac0805d9e3711e42dc07a6"],["/2022/05/18/Component1/index.html","35bb359c188c6b92ce619c9b6566ad50"],["/2022/05/18/tips1/index.html","c4278e930a4cda31e08176d0ec395497"],["/2022/05/23/Node3/index.html","807fab8165c1677b08e4dcd068b3ee31"],["/2022/05/28/Node4/index.html","94f5066dc53274d3d708289016f21309"],["/2022/05/28/webpack1/index.html","2daf1ce599dd02cb6e60e0c0fe14e66e"],["/2022/05/30/Node5/index.html","06a7e41ac381d91fb3c17b97bff6dd9d"],["/2022/06/04/Node6/index.html","fb1fcd072d5a876f5addbfdf6513fc50"],["/2022/06/12/mysql1/index.html","d2d33b3f89c35159e9fdc384bfcf4f95"],["/2022/06/12/websocket1/index.html","cd29f4445ba8d2da35045f9d8d572a50"],["/2022/06/26/Face2/index.html","141e6f4a0809d0292e4a84843b103b73"],["/2022/07/02/vue2code1/index.html","1816f1f059c00f9ffebc05aebe07ade5"],["/2022/07/10/tsstudy1/index.html","3a9294c1d9dc7b5e53855ea1e2cafc41"],["/2022/08/24/vite1/index.html","666ffc17233398e84720febf2a6bac71"],["/2022/08/25/vue31/index.html","d95b616c5b506c58cbf20a4e0e1676f8"],["/2022/08/25/webgl1/index.html","df0d673446ba227448f64968264eb4e7"],["/2022/08/31/react18/index.html","1c0a62e6efe1fd18eb65e8c82e7eedae"],["/2022/09/01/algorithm2/index.html","c34b84db623322227e7f26364e2af35e"],["/2022/09/06/promise1/index.html","69b93cd11c87c107f8d0a6236eeee295"],["/2022/09/06/vuerouterandvuex/index.html","2be5d3a14b97ee648051a142586fa2bf"],["/2022/09/14/miniweixin/index.html","a8d2c5bec47535e9929b5cb0f8c25257"],["/2022/09/23/webgis1/index.html","563d57304e89a0f0c61a57dc07cd2899"],["/2022/09/24/vue32/index.html","18fde049201a3537601cf2736f600b17"],["/2022/09/27/go1/index.html","2a07f550d846772b8e45df53b6ab2805"],["/2022/10/07/canvas1/index.html","19fd2c225b2920c4efd3ecc297ccbef8"],["/2022/10/09/mobile1/index.html","5e22a1a594cddab598b936ac4b09ed96"],["/about/index.html","ddf09ece7995bbd28a53c16f162f1ea9"],["/archives/2022/05/index.html","c408ecd761aaaaac42bb187b6d1782e4"],["/archives/2022/05/page/2/index.html","7c602648ce3ae250fe3f15e0b5ea5a54"],["/archives/2022/06/index.html","222e691b39426aca9fe6f58d9adad1fe"],["/archives/2022/07/index.html","dadfdfbdec86659400257b06288e4c29"],["/archives/2022/08/index.html","1b8036f4025142662e5c329ab9f429fd"],["/archives/2022/09/index.html","5249ef21504b8193c98cf97baca6ec7e"],["/archives/2022/10/index.html","19f1c5cc87ea8e87db4c48748e266f4a"],["/archives/2022/index.html","2cf8dc9152a1ea0f910284725a101f51"],["/archives/2022/page/2/index.html","2b194582a79087320d469270f53bfb6b"],["/archives/2022/page/3/index.html","5a40b81ecc6486c2f73f163d2ca9e677"],["/archives/2022/page/4/index.html","a838cdf89a6ad45114639bea34dc121e"],["/archives/index.html","900eeae50a104b49f9cce8035c747a4f"],["/archives/page/2/index.html","894bdfabb6078ffb00ec08f2accce399"],["/archives/page/3/index.html","adc6128149e3057a2fdbff7c47a70f2b"],["/archives/page/4/index.html","844e07f3fb1e4d7cefa8c9ec99df3897"],["/books/index.html","5b64c324f1f443dd559dc7b54295e31b"],["/categories/Go/index.html","c731736a756f9c9ccaa95d8452a73827"],["/categories/HaoUI/index.html","9c52db418ffbd95d1f0cb9d3bea844ad"],["/categories/Node/index.html","70600400620bc96446612796d09e3efa"],["/categories/React/index.html","78653dc1800118aaab779d8a1a670394"],["/categories/WebGIS/index.html","f319db589012eca5135c87b7fd4b5dad"],["/categories/Webpack/index.html","f50e01c9dad63865060453cfddd73951"],["/categories/canvas/index.html","b8811d5e34953082182b74c78c10b53d"],["/categories/index.html","a27f4470337792bda32dc6e992a5ad12"],["/categories/promise/index.html","64792782b14e7090ad4362649c1557c3"],["/categories/typescript/index.html","b1bee76934ca8abf2a8d65279afc8111"],["/categories/utils/index.html","be64cac1930c9f08f05f09d9b9a4dda2"],["/categories/vite/index.html","c666da184ffd0eca986e184323bfa249"],["/categories/vue/index.html","fb4d10586dbe5b54c06b0b8203652c90"],["/categories/vue3/index.html","5fbc2daba5364a0340f68885c0810d71"],["/categories/vue框架源码/index.html","5beb39aa828d750fbbd6d7d9f8f9d54d"],["/categories/webGL/index.html","a121653396a57596aaf9dc37e5036562"],["/categories/websocket/index.html","99a3a7afeff877d4ffdf6babb358288c"],["/categories/微信小程序/index.html","d64ed194ffd4ad7baf90ef75b4cc5f7c"],["/categories/数据库mysql的学习/index.html","a058d1a98561f7faf4b1d74ad012df21"],["/categories/数据结构与算法/index.html","73103e064f0acf8837b36ab13924d58d"],["/categories/移动端适配/index.html","a535895795b0b0eae77b89e7e8091cd2"],["/categories/组件封装/index.html","10695c167de34d1126b8c603b3aaf003"],["/categories/面试/index.html","17c2b522dc7d22ca94f76f3f15f4abb2"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","80db17fc098bed5a517623e78ac9367e"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","0f011193ff9e4d9d887f705b25b15b62"],["/page/2/index.html","f176cffdd07a63cce175735e7b36aae6"],["/page/3/index.html","8cd4e1d33d6aa496b377d59dd0d1421d"],["/repository/index.html","f44cdc23ea030c893296c08429d07f78"],["/sw-register.js","5b29ca9949eabbcc021bd24d82c49f04"],["/tags/Go/index.html","2464a7d5a4bd243fe025c74409e90f4d"],["/tags/JS方法技巧/index.html","dbe5a27750e7f24dda2bbd20be524b7c"],["/tags/Node学习/index.html","9c6ba3788c19366ce59dcb987c81c64d"],["/tags/React/index.html","499684660563b9d61abd2fe72faae9ec"],["/tags/Vue2源码/index.html","fd01c75416b16f59c29abf4a1cbc1551"],["/tags/WebGIS/index.html","3c2c177ae4a5467ede4889aee557d1b6"],["/tags/Webpack学习/index.html","557362898ad1879c956fd554fcb0d677"],["/tags/canvas/index.html","0fd8a8c5157fef3d2c946cbb166bddf8"],["/tags/index.html","afb0079d038635a7737197ee234f282b"],["/tags/mysql/index.html","8d7a7396107425ca49ec53bbe98b9030"],["/tags/promise/index.html","334810378e088aa0a27b6ab9e432e098"],["/tags/ts/index.html","56758f8d042bea753fb984b24438acaa"],["/tags/vite/index.html","7779017d1014a401545f9984cc379153"],["/tags/vue/index.html","020a49ca26fe6af0400cda056ae083d5"],["/tags/vue3/index.html","a0692e6ae8e67ee60445e5373f1d3817"],["/tags/webGL/index.html","b2aaaa441bc62b373e087b896d073408"],["/tags/websocket/index.html","a098a8d757ab263469cfd12f14f2eeaf"],["/tags/个人组件库/index.html","17e304311caa99fb5efd7178e00b6b12"],["/tags/微信小程序/index.html","6e5f9cf3c971a7ac2005fb68f0424d5b"],["/tags/数据结构与算法/index.html","76323008cc1f7a53234274525d694250"],["/tags/数据结构与算法1/index.html","f917bd8b3ef9c11727b6aad09770fe58"],["/tags/移动端适配/index.html","89ec6d9030af7f09f907ec0e0174a8d5"],["/tags/组件封装/index.html","e4d892fdc1f69fe46e2389ed11857e1d"],["/tags/面试题/index.html","d081301e67f37a3a76943762ba895e56"]];
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
