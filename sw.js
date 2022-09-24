/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","01954b5e01d71ae129d787860da4cad5"],["/2022/05/13/HaoUI2/index.html","a9e3c6f194d02f196bcbbb1c43224a1c"],["/2022/05/13/Node1/index.html","5963d2bad25bb3c9cff9c300ee8bcce3"],["/2022/05/14/Face/index.html","a31f7c6225d8a045c61b23172a7c2095"],["/2022/05/14/algorithm1/index.html","97ab6ddd83dc4b9dc40996661096c0f1"],["/2022/05/15/Node2/index.html","ec69d8a05f3d64c8f1201fd9f9a5d2f7"],["/2022/05/18/Component1/index.html","49b1c71f428de51c6e53ebebf0a0750e"],["/2022/05/18/tips1/index.html","c3f6f6c2f5ab02649e0aef922e021418"],["/2022/05/23/Node3/index.html","96c5b827a164cd71148a9987b7772d37"],["/2022/05/28/Node4/index.html","cab4d697c9b725712483bc57aff6b9ef"],["/2022/05/28/webpack1/index.html","e9389bef7a5689c674aa2f90d1a07475"],["/2022/05/30/Node5/index.html","224f8bf457326eae12fb1cf7bd722b54"],["/2022/06/04/Node6/index.html","7cb61b284a96f65509ea990a5ce050e5"],["/2022/06/12/mysql1/index.html","e3dadd32d900072189d1b4f9cbe4e879"],["/2022/06/12/websocket1/index.html","7e78b68139c61761afc4ab71c7c5a6e5"],["/2022/06/26/Face2/index.html","62ad2b45b7328867c76ba309e2b62156"],["/2022/07/02/vue2code1/index.html","a022551abfd60aa4c3211636d7d10342"],["/2022/07/10/tsstudy1/index.html","62df51da7b1c9137b44643b9d38acc03"],["/2022/08/24/vite1/index.html","f3c86294328ce7b1fb717cff7c03942c"],["/2022/08/25/vue31/index.html","5f1c8185bb2cd31166c28f1aea27c2b7"],["/2022/08/25/webgl1/index.html","72a8459f5b99d5328f32fd77a30ab27a"],["/2022/08/31/react18/index.html","a200cc13fca6edd66e410f6e99c834db"],["/2022/09/01/algorithm2/index.html","b0b58b299d273b1243b7f433d13183f5"],["/2022/09/06/promise1/index.html","c428ca57673788b0e7e5433e8e096c23"],["/2022/09/06/vuerouterandvuex/index.html","191c0499796414b2034ba78dc1529bcb"],["/2022/09/14/miniweixin/index.html","5bd2c33989060810de650f1fcd1d267e"],["/2022/09/23/webgis1/index.html","78facaf1f69f6d027c35bce055f5eaa4"],["/about/index.html","fed7755242b65741e084e54927da1f40"],["/archives/2022/05/index.html","44b5e68a00f4dd63d09119b1c1ec5679"],["/archives/2022/05/page/2/index.html","0933306172b395ee9cb3eb64b3084f6a"],["/archives/2022/06/index.html","c12a7f5836ad7d19ab059bb1d7beecd2"],["/archives/2022/07/index.html","808298067278963cde6231e15020b349"],["/archives/2022/08/index.html","214451942721dcb38ec6faddbea8f19b"],["/archives/2022/09/index.html","e8e34334c09c20b30ea5415a90ae5cff"],["/archives/2022/index.html","2c8c58b13eed6cf0c0fe4741c7f038f4"],["/archives/2022/page/2/index.html","2fbc13349670a4a24895b0202c23b0d4"],["/archives/2022/page/3/index.html","022f9586a1b4c7a3290b55284a179aca"],["/archives/index.html","1846ce16807b3bb4c6d97300dad557ba"],["/archives/page/2/index.html","b2edd7b5de513cbdf86bcc2ec45d3fa8"],["/archives/page/3/index.html","db599f2d71fb808ff4b804b1d2f1cb3b"],["/books/index.html","10e4250830305aef107e8e974db1aea7"],["/categories/HaoUI/index.html","15ad26502d51e93df8c8ef4bb9b2089d"],["/categories/Node/index.html","59c20a47ab8362e7f476dc20846ad311"],["/categories/React/index.html","cee5adf0acab45934a632b81b8487c4c"],["/categories/WebGIS/index.html","a9337ec8b51f7fac21895443024cfd66"],["/categories/Webpack/index.html","9719ec9c2d7226aa9125065c5cd653ae"],["/categories/index.html","495b001573c3ab3795ed6b3812497b25"],["/categories/promise/index.html","88ae87a4201125abfffa31ae8bc36077"],["/categories/typescript/index.html","dfdef26b2bd05e06fa7973ae57fa88a2"],["/categories/utils/index.html","e6eb857e0ae6d90d7469148f47c26b86"],["/categories/vite/index.html","8a10c1f6bb723bf89f5535a251409144"],["/categories/vue/index.html","770d887805372c58607ea32cd7ddfa67"],["/categories/vue3/index.html","497a32dc4cf0d9e4da171e892f2027af"],["/categories/vue框架源码/index.html","66d049e52d9924d5b923b5aa0882644a"],["/categories/webGL/index.html","0af14a316b8645fd87515716391e46e6"],["/categories/websocket/index.html","b2ec2cea53c16c1329a9355dcd51b2d6"],["/categories/微信小程序/index.html","7de66fb33c260c15cfb67d5e833393da"],["/categories/数据库mysql的学习/index.html","2ad6144c98a2015b36081a80f87c67e2"],["/categories/数据结构与算法/index.html","4614852ee64843578cb2b6a60d911b6a"],["/categories/组件封装/index.html","bcadafb31c585903327eff1af0f0e811"],["/categories/面试/index.html","4eb84496b3ad9aa5edd264dd72e01874"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","8b7f6d3edbde2ed49398b51f2fa6bfd8"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","6659060913bf57422f53311b8f2df66e"],["/page/2/index.html","04070e5de40a3887ef6b36b3d7f2a301"],["/page/3/index.html","7c6b4112ae90e35ba60619198c7bb894"],["/repository/index.html","87d9a9afad50f5798387297dc9281cb4"],["/sw-register.js","3c73bdde5e0d8ad9199e06dc5bc5433a"],["/tags/JS方法技巧/index.html","d4190ce672f549eb49514f295886f258"],["/tags/Node学习/index.html","6d46a4e471ad8d286d806b199b57e90d"],["/tags/React/index.html","94adf8f4e632fe232a36364c5afa97b8"],["/tags/Vue2源码/index.html","ae7347e7d0e9114f5e8d03fefc7afc99"],["/tags/WebGIS/index.html","afba4ad04cd246bcdcda5d4f7b41d4a2"],["/tags/Webpack学习/index.html","64f46d21ca926225c8d1156710c0eba5"],["/tags/index.html","3b9ab245848ce73fd1d8b3c064f674fc"],["/tags/mysql/index.html","71ca59d8682e9b1d439570cb3f82d836"],["/tags/promise/index.html","e6509298d9c5383d195a36081baa192f"],["/tags/ts/index.html","465b023adf6568e07b87883822ee976f"],["/tags/vite/index.html","4854cda55ba41dd1ef724a2ca5e10d86"],["/tags/vue/index.html","2c6eaa3ec359e9adb281da97050ddf5b"],["/tags/vue3/index.html","4a094e7c28f8f706f640a77a48186922"],["/tags/webGL/index.html","efedf0a303a2df81f6c23c4b670c5689"],["/tags/websocket/index.html","cbaac75c7048933ae250b52c83b219df"],["/tags/个人组件库/index.html","63600dd01e60e4f94dd5d7d4af924391"],["/tags/微信小程序/index.html","a39fa5d5363b4ac4840dc2c7042093f5"],["/tags/数据结构与算法/index.html","94db9ae4389624106ea9d9c30863b654"],["/tags/数据结构与算法1/index.html","02e9a4a59f42a8bdfc8410b4edbe3265"],["/tags/组件封装/index.html","a8ae25dab466aa923bf95d49d6be7079"],["/tags/面试题/index.html","083ada50a516b88155446b029dea8dfa"]];
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
