/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","0bae0b9d7abd40766553c22a8976c447"],["/2022/05/13/HaoUI2/index.html","e62bfa0ff4db9d7004315d5ef8f1c9b6"],["/2022/05/13/Node1/index.html","2008165ac413434a1afa3ec547d3d3dc"],["/2022/05/14/Face/index.html","a953ffc6351645458b5739a480caba03"],["/2022/05/14/algorithm1/index.html","3cef371ca43c0972d57aac88e61c6d58"],["/2022/05/15/Node2/index.html","1a8b5fdeda909ffacd64cef362d689b1"],["/2022/05/18/Component1/index.html","e5541a6d096198ae311ddc1055ffc9b5"],["/2022/05/18/tips1/index.html","69b44b00e110def1631aeeac3d593323"],["/2022/05/23/Node3/index.html","5b834d7dbdf5d1aa4c94c4a20f4be0fe"],["/2022/05/28/Node4/index.html","0dd81d42bcfaf4b2bc9ec6506db47c4e"],["/2022/05/28/webpack1/index.html","157d14c4e36e37250829871ba06bcf28"],["/2022/05/30/Node5/index.html","a1670d2864b8687a07565b1413a0c9ef"],["/2022/06/04/Node6/index.html","abb5c17d2751f2a41cfc438c0108d37e"],["/2022/06/12/mysql1/index.html","be493fd6caf17de2e60f8a72a7cb1c0a"],["/2022/06/12/websocket1/index.html","461376a5039e18628cd1f23eaa64e8aa"],["/2022/06/26/Face2/index.html","93575c35ff88ed8e45279aa3bec7a35d"],["/2022/07/02/vue2code1/index.html","e615559cc914433fa677edad7fc01cba"],["/2022/07/10/tsstudy1/index.html","38ccd368a4643a91bce09b588b818ebc"],["/2022/08/24/vite1/index.html","81d7f2e40bd0196e587bde99986f438e"],["/2022/08/25/vue31/index.html","47c40ca89250debdb4a4b65c73a60608"],["/2022/08/25/webgl1/index.html","fd8074021da1ac382e0468e64629f436"],["/2022/08/31/react18/index.html","aa1b1ae57ce3f9c21ee5d53a75fefb09"],["/2022/09/01/algorithm2/index.html","721050b906f4a3a4050cbb4412d677cf"],["/2022/09/06/promise1/index.html","409faa48399c548a8011cc515c9f63db"],["/2022/09/06/vuerouterandvuex/index.html","b961f167c7d083b5a283c4001759daad"],["/2022/09/14/miniweixin/index.html","303173610af445e90883aa5ff19de194"],["/about/index.html","e3e851aee5f0f4bdc80c5d5bd1122ad2"],["/archives/2022/05/index.html","54b6967736203e0a1d7faf3ce6d4c272"],["/archives/2022/05/page/2/index.html","0075f3989c2e2a89bd5003b2353aad82"],["/archives/2022/06/index.html","f803139ec2d3c5054f58b9f258e3f9ea"],["/archives/2022/07/index.html","1925f615ff30d9e847b05246ac6a42cd"],["/archives/2022/08/index.html","2eadc3a0df677f251780dc74ef2bb093"],["/archives/2022/09/index.html","0e5f9739d765149b2396249708e2b880"],["/archives/2022/index.html","1bab1174fc423760f42ef2187a8db77f"],["/archives/2022/page/2/index.html","fd27716965b5ef2a2f1dcbd3e1196f3b"],["/archives/2022/page/3/index.html","bce9a19a1e251abd25e4a6a9786ad3d4"],["/archives/index.html","51a417af0e36d51f642e082d7339b21f"],["/archives/page/2/index.html","b268d5e2fdad85902e1bae1163a24922"],["/archives/page/3/index.html","7aeea3787f5c25d02d90a03d7e58cecd"],["/books/index.html","dedf81c2ed6fde66a50661f404ff8bcd"],["/categories/HaoUI/index.html","0a366cbfb38a02c85dd0f8cfaba6c521"],["/categories/Node/index.html","f9403d6c62d18cec67c4c8b1696a6831"],["/categories/React/index.html","48fdc3638beb78268d2ff1706253a4d6"],["/categories/Webpack/index.html","996e190d725a095a87301fb43988062b"],["/categories/index.html","e25aece1f48c417c99cb9dcd174a713f"],["/categories/promise/index.html","ee49329076ae066736eba2fe2bc697ef"],["/categories/typescript/index.html","ff41b9c04990f3e9927a538834463a80"],["/categories/utils/index.html","f3b3f7ae644cd985407bb4dd2da8164a"],["/categories/vite/index.html","2cb40310a491da04d20514e0c148bcff"],["/categories/vue/index.html","80cfa19e40af5a4a680aeaa53768df44"],["/categories/vue3/index.html","ed92ede5c6ac3c1d480a40058012b007"],["/categories/vue框架源码/index.html","a4a6d92569b721600f0d136f6c0ba99a"],["/categories/webGL/index.html","994dffe89286357f18fe942265ecec4a"],["/categories/websocket/index.html","f9dc718709de957afd3c2e918d209c7b"],["/categories/微信小程序/index.html","4daa037fbe632354597506ba7c25f7e8"],["/categories/数据库mysql的学习/index.html","69ef23b1804fa5c3d8ce2ce17c8c97c4"],["/categories/数据结构与算法/index.html","d0b1e4440805a818793e03238988c8f3"],["/categories/组件封装/index.html","af9a57d8839ec4a1b0008774d5c65be3"],["/categories/面试/index.html","70be7dd624901205077bfe41ad3dffdc"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","272c165d1886979257d5b30836f871ca"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","e7f7817383e3a4dbcf10e4c4fcaaa5e8"],["/page/2/index.html","10dcf4619575ae31226263994bdd22a4"],["/page/3/index.html","b019dea84e263cbf3f624a7e16bddfb6"],["/repository/index.html","94aaba7122de511ec798fbbe55d1d889"],["/sw-register.js","c1b2e4f2901b86a03be820b770f21d51"],["/tags/JS方法技巧/index.html","fb964d8bb58f2c1f1fb64e5559d32791"],["/tags/Node学习/index.html","b5df2918b49af9bb4a65f423dd69427d"],["/tags/React/index.html","9260b42ff9ad8f21fe0146496dc23b0e"],["/tags/Vue2源码/index.html","b6c3321e647d415f460165e1f3bc92e5"],["/tags/Webpack学习/index.html","d50889e63e436f42244e347e7b036580"],["/tags/index.html","19543d34f39fca56114ce477395d98d1"],["/tags/mysql/index.html","990d1601a20f5edaf762b92424cda194"],["/tags/promise/index.html","b6cc7d801ae2d67e4fde70aa924517a1"],["/tags/ts/index.html","5a6b745f3eca7828e0533351a78d646a"],["/tags/vite/index.html","7f7b72bad1e6072956a0ed1c0c359875"],["/tags/vue/index.html","d23264740cc248b02227e4fcaa4c66cf"],["/tags/vue3/index.html","ed23c75508e4a523e6bfc22ce88e50de"],["/tags/webGL/index.html","719fe0c0814664cde982c18987a218af"],["/tags/websocket/index.html","ddc12b49eb0cbd28b1c694172e30dfe9"],["/tags/个人组件库/index.html","cdd4fe38f1fe7c9799ea0052c782dde3"],["/tags/微信小程序/index.html","42875e00de28871d61a492e428f1f2c7"],["/tags/数据结构与算法/index.html","43f14916ef9f212c4b5100d1759238ca"],["/tags/数据结构与算法1/index.html","52fe0139527fea12925dc9da6c444fb5"],["/tags/组件封装/index.html","9ebf39281a274e5c7eff0800d08f7089"],["/tags/面试题/index.html","5d940668ec3bebb98e38921ef046b01b"]];
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
