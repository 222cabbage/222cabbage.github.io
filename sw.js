/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","9e753d1c229bb7c3644034da3251d454"],["/2022/05/13/HaoUI2/index.html","703f5e0e4af8ee170ffc41cb8dee9918"],["/2022/05/13/Node1/index.html","9390eb77a2bada9d7a7662c59fa2f403"],["/2022/05/14/Face/index.html","0eb892e2bbebb3d5db0ef271280d74eb"],["/2022/05/14/algorithm1/index.html","ec9b4ed906f20eeb9480859cf7e4d40e"],["/2022/05/15/Node2/index.html","caa32ebf806b3160af560f7a940d13e5"],["/2022/05/18/Component1/index.html","809182187c891eda1581f8856d05e121"],["/2022/05/18/tips1/index.html","46eb31ac740c91df00bdb7aaf7877475"],["/2022/05/23/Node3/index.html","df3f6eaef33cd4c941e269cb0e45aa36"],["/2022/05/28/Node4/index.html","221f489be38bbc74cf9c2727ec713c92"],["/2022/05/28/webpack1/index.html","0f0979d82e5a229b507f2634bb5aed8b"],["/2022/05/30/Node5/index.html","22e765378d475ca15bce9ac5ad31a5d0"],["/2022/06/04/Node6/index.html","53ecb477c1eeebc3b7139c9fd2f240b2"],["/2022/06/12/mysql1/index.html","e48de412ca41786f88cc0f4e3957ec78"],["/2022/06/12/websocket1/index.html","f87a9e36ceb39fa7f189fe4d54869778"],["/2022/06/26/Face2/index.html","b91425963b7732ea994c9fc0aa0c44ed"],["/2022/07/02/vue2code1/index.html","08095c8e8f53f82bfe307a5246019ff5"],["/2022/07/10/tsstudy1/index.html","8779db0e267c28588a1ff7b373d3fcaa"],["/about/index.html","b316f6b9dbb95176fce9c6137165a82e"],["/archives/2022/05/index.html","0fb9e63b259a36fd773f664d22d33921"],["/archives/2022/05/page/2/index.html","7d1f3f45238e3ca072aa04faeeaf4d46"],["/archives/2022/06/index.html","059233304e523bed6dc73b6300663428"],["/archives/2022/07/index.html","87c005a2ceae699204e71dc706317f3b"],["/archives/2022/index.html","cb54620d645262319a54af59ca21160a"],["/archives/2022/page/2/index.html","a18dc8964574966b69e59abb0c6b5640"],["/archives/index.html","2a5a1bec1a77fcf9e40e20b81424487c"],["/archives/page/2/index.html","3a733e992b50dc1d4428e4e96d1949ec"],["/books/index.html","307178c6dd919a3dcf718b56a97920b1"],["/categories/HaoUI/index.html","4e7374b82bf5c70761e2597078306928"],["/categories/Node/index.html","cddce22667c43728d42e851f72473b5a"],["/categories/Webpack/index.html","290c932b937e8d4d5db667e512fcd271"],["/categories/index.html","5c4100882da9ed1eae9536bc39392440"],["/categories/typescript/index.html","4d361ec37c39af86717d3c6524c7525f"],["/categories/utils/index.html","4a0d8e16cd707f8106f5dd110a3edcbb"],["/categories/vue框架源码/index.html","c489048f465a8fcdfb587d5787897d2c"],["/categories/websocket/index.html","e5161718223dda66a1ae0a8d68658cad"],["/categories/数据库mysql的学习/index.html","30714af71194b69827c7e8be0a7447f8"],["/categories/数据结构与算法/index.html","f1e209417be86f1e0abac8da6469ab15"],["/categories/组件封装/index.html","3343dc76f42ebae1ea434339722ade47"],["/categories/面试/index.html","ea4fdad6896b5683f7362693876f80ae"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","5dec80ee8fe8efd2d8b7f64ab111903a"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","1ec157bcccd07ec99358c0f9e1633b69"],["/page/2/index.html","cd67efc4b824c772f33b2d323e205a4c"],["/repository/index.html","2148c155734b3616fdf6f1fbba11c8b3"],["/sw-register.js","1c99153c7272c833f42ab34583ede221"],["/tags/JS方法技巧/index.html","efe21bf08d986b51af8bf798c02e68ab"],["/tags/Node学习/index.html","4ee9a9a3b62eea4621cc66961e2d2646"],["/tags/Vue2源码/index.html","a56e5f2e686380105940dcba4175de91"],["/tags/Webpack学习/index.html","9cc3f636a3edba0d6020987dd7dcf7e6"],["/tags/index.html","1ad57102603a0af82f0302efca95f034"],["/tags/mysql/index.html","086804d40e01c120a2ad59c837f24a99"],["/tags/ts/index.html","a2ab0b54dfef1160437f720a00b76596"],["/tags/websocket/index.html","2ca57814a880cd75ee00d52901585760"],["/tags/个人组件库/index.html","ffcccd1b8b3eaf5920eacd26a956b556"],["/tags/数据结构与算法/index.html","3d16d7b83d6118e9965c59056fd65f03"],["/tags/组件封装/index.html","3565adf3c6c6f993a00c637962ebfbad"],["/tags/面试题/index.html","355773ffce5894c81ac03a49165ab979"]];
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
