/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","cbd30a6ea7c7493523cb322ab3e880e2"],["/2022/05/13/HaoUI2/index.html","c652763556ff756a2c8db9f0965877c8"],["/2022/05/13/Node1/index.html","0488d916ad3f3a1e731d45f5c923d7df"],["/2022/05/14/Face/index.html","ce7411b6e837b91e4cdc2651686bd4f4"],["/2022/05/14/algorithm1/index.html","21c192387706d9a2ce5a20f60886b292"],["/2022/05/15/Node2/index.html","4e49ffe898386d6ce2b575a601e1b8e8"],["/2022/05/18/Component1/index.html","2604556b93b640462d6e95c904eb537e"],["/2022/05/18/tips1/index.html","b2b07dd7b3cfa01fcd7f0e95e2a13e62"],["/2022/05/23/Node3/index.html","ba907a4999c98709689f1a8e04f6b489"],["/2022/05/28/Node4/index.html","fbbc94da7964d4508709351c48169eac"],["/2022/05/28/webpack1/index.html","426316e2c3226603bc744b2e04e72644"],["/2022/05/30/Node5/index.html","64c6a5991f5c4426cc6b27198a08804f"],["/2022/06/04/Node6/index.html","bbdcc2ef15541ece198751e227d5a5c1"],["/2022/06/12/mysql1/index.html","8dea8a5357f456393e17005127db2bf7"],["/2022/06/12/websocket1/index.html","f00d95c17a1c80a33f485e994342cb6d"],["/2022/06/26/Face2/index.html","04d3b3db05b761ee127917b336b00d10"],["/2022/07/02/vue2code1/index.html","de6d500e3b6d0abbd49a1fe9fd5b6759"],["/2022/07/10/tsstudy1/index.html","848ef6e03e0289478ffa29afa25675d6"],["/2022/08/24/vite1/index.html","817493302e1574bc25846fd8432b53e4"],["/2022/08/25/vue31/index.html","ce13aa3988f342e5ea87746846447f97"],["/2022/08/25/webgl1/index.html","214b246b40f139ad1692e4ecf1996e87"],["/2022/08/31/react18/index.html","48583887b5876e2ecbe6c500e4982a32"],["/2022/09/01/algorithm2/index.html","56d97e250da3982d13c478ef36c2b3bf"],["/2022/09/06/promise1/index.html","dab55067309738ec7ff947bbe5e8c966"],["/2022/09/06/vuerouterandvuex/index.html","b63bc93598676dd0f0d38b28f3cce4a4"],["/about/index.html","2b0514e4a83c452b196e4d494564db88"],["/archives/2022/05/index.html","74baf56fa4714ce5bfc3c6fecd5643eb"],["/archives/2022/05/page/2/index.html","adc042f796e2940b49a6941bc945c692"],["/archives/2022/06/index.html","e4df52449ea63832e0c2884093dd2a22"],["/archives/2022/07/index.html","0b2979528b2ee6a14c71e12e1c0b5468"],["/archives/2022/08/index.html","a5f62644d9f370f042607b7eb2b84535"],["/archives/2022/09/index.html","109c57c3052fe5a966c55bae21514629"],["/archives/2022/index.html","265fc32678878cefe187a3c3869da4ae"],["/archives/2022/page/2/index.html","ad6402b9c25b309cb0a220d2a0337d5f"],["/archives/2022/page/3/index.html","6977f3da5ace9f313d69d5c2168cc6da"],["/archives/index.html","a13e1c505b59a160e38997907d561361"],["/archives/page/2/index.html","5bb9454e1a3fb0f8d3da89e148265518"],["/archives/page/3/index.html","26517878bfdce9d7c3b0577ece26b872"],["/books/index.html","1f8bff0f1932543417ba4ea3fa1748b7"],["/categories/HaoUI/index.html","e945a49202ddfb2597b45bdbd77e7b06"],["/categories/Node/index.html","79ee1cd27775605798f65f287cc76469"],["/categories/React/index.html","9cb3b052292632e3816dbffffd71fe1c"],["/categories/Webpack/index.html","afff59223dac6c001c8d9eb570ce5414"],["/categories/index.html","39c9860fdfdcb21f9058efe0cc6b98ea"],["/categories/promise/index.html","646bc026e40d434eec69f12fb404f2f6"],["/categories/typescript/index.html","e037672c042342b5d25d1af85cc1821c"],["/categories/utils/index.html","a644776607c97fffd5478dd2fcca9f4c"],["/categories/vite/index.html","5ee7a240d46468aef5831819bd6c228a"],["/categories/vue/index.html","3889b9e696afb19b3f25e9676569d710"],["/categories/vue3/index.html","d94d0b362d1b72cdacfa8d8fc70c0a44"],["/categories/vue框架源码/index.html","32db2834d86f91a86eb16d3902e7edad"],["/categories/webGL/index.html","6ec6ed1228e22c20fd0ee0065429fdb6"],["/categories/websocket/index.html","19ed5ff1132a889b33b26268142c97d5"],["/categories/数据库mysql的学习/index.html","7f4f2fee71bb48c8a4074715a9eb69a2"],["/categories/数据结构与算法/index.html","0ee6948b363adb3a09e8b11f0070bf6c"],["/categories/组件封装/index.html","4a7a55f7fe157daf3a8ca18dfa4cc2df"],["/categories/面试/index.html","d80485195afbaa8d98c895e196ca9ce5"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","e53f2d1f3efdc493d3e3941e35d44328"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","84a55fbef318515fb3891b35d1a8ee66"],["/page/2/index.html","d226cd4a0be747337caa96c2bad94411"],["/page/3/index.html","ede54ec8b21a5311ddff02940e2619fd"],["/repository/index.html","ee36098380fff1547c349d0d7ced933a"],["/sw-register.js","ff9edad75515164a5342624c5c2a82d8"],["/tags/JS方法技巧/index.html","9c13d68ec5c74bb0b0cfbd306aada759"],["/tags/Node学习/index.html","69718ff85a5c5252282c521a55a10a45"],["/tags/React/index.html","d549af980594c99c0cb45d00aa6bea5a"],["/tags/Vue2源码/index.html","c67fe7270e6ed74648683850b904d800"],["/tags/Webpack学习/index.html","d5f956fb6d9cd2835345c7295a6dc916"],["/tags/index.html","a391742e66a4f75179ae4dc82d162b64"],["/tags/mysql/index.html","206dbb027ff3b5fd03d133c04d6d5ad2"],["/tags/promise/index.html","49dcf1eceb6fda82850d41d7e302f922"],["/tags/ts/index.html","9799e1bf5f34060dee66d4302babf6e7"],["/tags/vite/index.html","88d338056efc719ff6f1904e34bf77ce"],["/tags/vue/index.html","837c13da7e1dcd67f6795847ee7ba642"],["/tags/vue3/index.html","4f6a1b57d036c9722b57867227454462"],["/tags/webGL/index.html","e57811e6ffd44742fb5acf9b496bc5be"],["/tags/websocket/index.html","11438b0b1660c6886e57ab2c010b44ff"],["/tags/个人组件库/index.html","1ed45b63902f054be2f778488e1d154c"],["/tags/数据结构与算法/index.html","24d067ad80400251e3b0329cc70d2175"],["/tags/数据结构与算法1/index.html","79d69c8bd5eb20a6d748d49b36d95de6"],["/tags/组件封装/index.html","808d69644ec6729474bbbaf2b35a845f"],["/tags/面试题/index.html","1874f43d984f6a5d227546f148650a1c"]];
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
