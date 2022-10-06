/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","892c3f3eab36c1b68f0414e7daa97556"],["/2022/05/13/HaoUI2/index.html","7e841ac51dd9ab4568df308eb3cf9ce6"],["/2022/05/13/Node1/index.html","467c733e826a1be4749be6b663b478be"],["/2022/05/14/Face/index.html","1cc3c8640e8d413fd843e69d454b0a42"],["/2022/05/14/algorithm1/index.html","fde9545d0acf3437c865cacfee7cea75"],["/2022/05/15/Node2/index.html","191c2479046a9164bac164748cf566fd"],["/2022/05/18/Component1/index.html","b0ff998abedf716db681dd2e17cbc01b"],["/2022/05/18/tips1/index.html","716c3ecef5dcdc373e2180dda981bbee"],["/2022/05/23/Node3/index.html","4f906883828889c1540003d7fa7f77f3"],["/2022/05/28/Node4/index.html","f07cc0403cae2d7fdf186b4ab78795fc"],["/2022/05/28/webpack1/index.html","d26336547966185b62eaade7f0e8d02c"],["/2022/05/30/Node5/index.html","bb044eea381c568a7c5104bbdebe1ff0"],["/2022/06/04/Node6/index.html","a8e1aa3622a96c70bccbb66aefc9564f"],["/2022/06/12/mysql1/index.html","b7becfe66b6145fd749cef01e058c0ea"],["/2022/06/12/websocket1/index.html","9c799c4e61bfb0a2aa065c4aad796a19"],["/2022/06/26/Face2/index.html","92f12067d2b3822c629928548ae5a34d"],["/2022/07/02/vue2code1/index.html","637ce783edb7519f24ea051e020b13d1"],["/2022/07/10/tsstudy1/index.html","3a08c2ff40ba5d3874f7449739f47a7a"],["/2022/08/24/vite1/index.html","931d075167397f3028dc927cfbb8eed0"],["/2022/08/25/vue31/index.html","b28bba7ef5f713e95c13a4f95ada3631"],["/2022/08/25/webgl1/index.html","3703239c1e302e3f38af81110fdd1fc0"],["/2022/08/31/react18/index.html","d32ec31d95e51ee2c126fcce73827ab8"],["/2022/09/01/algorithm2/index.html","e4da5eaebe21c81a35ce550aaa5e6fb6"],["/2022/09/06/promise1/index.html","e63b7cd30bd899e3131e50130efd61f9"],["/2022/09/06/vuerouterandvuex/index.html","74d52e44e904d79c655a390228a2114d"],["/2022/09/14/miniweixin/index.html","72331d9670f8aaefff033357cb7202e0"],["/2022/09/23/webgis1/index.html","5882d00e7e809e014c741ba222d142db"],["/2022/09/24/vue32/index.html","2d2e27310b9790a87ef1313ac37fd44c"],["/2022/09/27/go1/index.html","cae76aa407c9a4acac3035641e90fa3f"],["/about/index.html","b39f270a5484198d0f3ccb757ff8eb3d"],["/archives/2022/05/index.html","d4da63b9ad7ab2edaca71dbcee9feb33"],["/archives/2022/05/page/2/index.html","af4bf48d9912097fbf791b9eaff46702"],["/archives/2022/06/index.html","3d1aadd659a751c37fc46bb3d18d2a4e"],["/archives/2022/07/index.html","82cc202b0e67263d87003a65d00f54c7"],["/archives/2022/08/index.html","32704afa64a5b344a43fb9186153c913"],["/archives/2022/09/index.html","36a8866f957eed012aeeb5baad09ad7f"],["/archives/2022/index.html","c78a7ea20773bb9d246f64d632f2b2a9"],["/archives/2022/page/2/index.html","da6aa2a5243d648e689729a5666e912b"],["/archives/2022/page/3/index.html","33628997ad0156b6befbc31f159967d2"],["/archives/index.html","bd6dc6f55d7b7fd94478c7deb89ec9a4"],["/archives/page/2/index.html","5f9094918b5686f61bd5263e34595413"],["/archives/page/3/index.html","1c4a53473517c8a854e5fa08ef79635b"],["/books/index.html","38cdd0fa313d7c2d4b47e71ff3f77207"],["/categories/Go/index.html","d0f548f886163c1ecf6a90729226bf15"],["/categories/HaoUI/index.html","290b771703cff67a1cb7b0304a34a0cd"],["/categories/Node/index.html","973e4d2fe0451f73a12b2f63472ebe85"],["/categories/React/index.html","a25a17235e39aae5417004789842a5d5"],["/categories/WebGIS/index.html","4075c0014208d46a0f4c2bff8c634d45"],["/categories/Webpack/index.html","bcb373fd7b3d92c801c26fec63444056"],["/categories/index.html","89b82fa6e57137efab6e7977af827baa"],["/categories/promise/index.html","24be9a8c1b47dafe56af4b6e60989650"],["/categories/typescript/index.html","8e99e293f84a68e50f8fff016d4495e7"],["/categories/utils/index.html","17c33c2af9a3f35f06fa82f22648d171"],["/categories/vite/index.html","0c4f7e7a09a023b14897eee808b990e6"],["/categories/vue/index.html","2c954bd182d934f039c32bf3b12870f2"],["/categories/vue3/index.html","863a11e555883c24192c721f1ef8da27"],["/categories/vue框架源码/index.html","44294a2f3eefe1a4f814b20b6c5f4cee"],["/categories/webGL/index.html","f6d61a21f014eff4d099ac9a9d5dc71e"],["/categories/websocket/index.html","3ae6f6c80f808f3247cbe97516ee438c"],["/categories/微信小程序/index.html","adb336c2169b3b445a23dc104ffa6431"],["/categories/数据库mysql的学习/index.html","cefadd5de87204e645b980b305d276c1"],["/categories/数据结构与算法/index.html","8a5851d2fed0a2a4e5f7a5f98f3e5092"],["/categories/组件封装/index.html","aba52f15a0e927468b4faae07bd5d8d0"],["/categories/面试/index.html","4d03b54fa9b3c9f206ca3ea6f70b9a88"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","28b42351f3bad6709ad7afbb2b88d385"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","237dcc572919bbd8db12a71af96b7963"],["/page/2/index.html","e4570b3d67ed50e7d776ad0a6c24f472"],["/page/3/index.html","2f95dc3337048d1ee064dd53b7374a0b"],["/repository/index.html","61b31f9e73896239b967b322666baf19"],["/sw-register.js","33bdc46dacf7339c5d363e7ae01e0547"],["/tags/Go/index.html","4d3e754a19000f43cf5cad21abdcf619"],["/tags/JS方法技巧/index.html","b4617b92f64bd76cd1b8e9f236cadf98"],["/tags/Node学习/index.html","f90ab2d727adf1b2311d94b6c3105908"],["/tags/React/index.html","9d7a86f78f4d4f74c66ec1d68f2dd487"],["/tags/Vue2源码/index.html","a648c72002230530a4f5531ce105c060"],["/tags/WebGIS/index.html","09a3f63dddbb757d1078ea2de1d2ea5a"],["/tags/Webpack学习/index.html","004dc0fd33d9c3aa3d966340a0933e22"],["/tags/index.html","9846b9870d3500ddd6412fe0c4e31e27"],["/tags/mysql/index.html","122432ebdf07232e22c9ee1587b8ed2f"],["/tags/promise/index.html","c6ac377b34da8f0d125c22d380567a99"],["/tags/ts/index.html","00107049d73352a060d457b1037c4c4d"],["/tags/vite/index.html","0e72df5c2b195180191f4ab1b8d6b601"],["/tags/vue/index.html","da0326014a27c7a7136f381cb54f303e"],["/tags/vue3/index.html","78b0e1064f758503e35d13d45497871c"],["/tags/webGL/index.html","e64d1539dca13e5fe41e1d3614d42748"],["/tags/websocket/index.html","b0d664241130ad71bffa3cc543167b9b"],["/tags/个人组件库/index.html","bdf8525f73d2b1af181b090c6203a25e"],["/tags/微信小程序/index.html","ea7b4859cc0f13e3c8da47c861b621b5"],["/tags/数据结构与算法/index.html","31e663cac2714dfd51e830f39dfaaa16"],["/tags/数据结构与算法1/index.html","c06111929e915182d5e1a529bff67480"],["/tags/组件封装/index.html","95827a96cd075395fadb64b0eb6834e7"],["/tags/面试题/index.html","818e29420c09a5d2841ef205aa78345b"]];
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
