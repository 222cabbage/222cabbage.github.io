/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","0348324efb2e57be9b8ef0726402014e"],["/2022/05/13/HaoUI2/index.html","6565f0f9de4d88baacc6eef8ea55fc44"],["/2022/05/13/Node1/index.html","25b922c43136c883ce0141951aee771d"],["/2022/05/14/Face/index.html","f2a9970aa3c47fa599a28cf7e9c8e1d8"],["/2022/05/14/algorithm1/index.html","c2c19b81a3f37b0ee45ca8b872af3413"],["/2022/05/15/Node2/index.html","48e01978d5f5482d1416a5a5667892de"],["/2022/05/18/Component1/index.html","96973e7c52c399e839a5d9bc4a2b7420"],["/2022/05/18/tips1/index.html","68cf85011cccce7c3d3ac65600fcfe50"],["/2022/05/23/Node3/index.html","1bf82c2f173e97d79773ab7933bff67e"],["/2022/05/28/Node4/index.html","652917494a30a0f66e245e42aef18653"],["/2022/05/28/webpack1/index.html","d5d851bec8772a0eb914f2a4d9fbd701"],["/2022/05/30/Node5/index.html","9c083f5e50c18c779728c47999c5b302"],["/2022/06/04/Node6/index.html","f66fde7a9413c8ce93cabf8e332baa9c"],["/2022/06/12/mysql1/index.html","d69f5300029ba8ab4ebadab19fc1ada3"],["/2022/06/12/websocket1/index.html","a4eb6102bd044d931c5ef8bb85ff877c"],["/2022/06/26/Face2/index.html","d0e72e9b26d3903852c9e053569fc2e3"],["/2022/07/02/vue2code1/index.html","61f7d3c3f10ec5d8365d2b6a05bad0e9"],["/2022/07/10/tsstudy1/index.html","a085dc0ad3ed531659036b545b08bea2"],["/2022/08/24/vite1/index.html","1a77e646199503cb7bd383943a233880"],["/2022/08/25/vue31/index.html","a2240cfee63d5e85e64938981c2b56ad"],["/2022/08/25/webgl1/index.html","ee2fd5c9e7e32385dc3a2fe303bdee70"],["/2022/08/31/react18/index.html","1187cefa241829f81dc62e939de537a2"],["/2022/09/01/algorithm2/index.html","5422815be909b1e8a15e7fda2aa96e0f"],["/2022/09/06/promise1/index.html","ab9394611f92f31ba0d2d470927e1027"],["/2022/09/06/vuerouterandvuex/index.html","a074cdf0a6a09793938148a04e2b97eb"],["/2022/09/14/miniweixin/index.html","5e6da181fdd846d86cef7f341b360f12"],["/about/index.html","aa4e342e450dc52b3e52ba55facf0c08"],["/archives/2022/05/index.html","c5d0cc30c9aa6cc4fe6b9d8f6c762923"],["/archives/2022/05/page/2/index.html","fb8f1f95c530182857803c795c83c693"],["/archives/2022/06/index.html","4a35ae138300cea171218710e6e5c925"],["/archives/2022/07/index.html","f072beb3b2b37435ab2d4df76ad72d8e"],["/archives/2022/08/index.html","414b9d2f7f040ea168a808a2cc58ffe3"],["/archives/2022/09/index.html","473ba1ee97b1880d0dbae05743eb2c9c"],["/archives/2022/index.html","f15a297e514f279f7d4a8b6d4bd70937"],["/archives/2022/page/2/index.html","8bba344a17fa1b2168258903fc79c160"],["/archives/2022/page/3/index.html","e813872759da697609775066f88c22d4"],["/archives/index.html","eabcfa2a83565a43f9148b59af9b6f9a"],["/archives/page/2/index.html","98da69ffe7d0c885384c4b81cbb3048e"],["/archives/page/3/index.html","ee222b50cbc9237ddba63bcc1c6f795e"],["/books/index.html","b07b32e251a423164c434884c2b5af7d"],["/categories/HaoUI/index.html","91affe718d9fa936cea82436e84887e9"],["/categories/Node/index.html","55302eaf41d34549417bc86bb3199a96"],["/categories/React/index.html","f25e4fa0266834dde293b3ea8a56322d"],["/categories/Webpack/index.html","0d8939689a536054dd8567236f593a4a"],["/categories/index.html","866124dc9ad2ce6164c5c82102d15ac1"],["/categories/promise/index.html","16ea3ecf759c7029ce1c72c23591e4d4"],["/categories/typescript/index.html","e80c9c90f95efbc05f44a1a7f995e482"],["/categories/utils/index.html","d1144335486cefd078d3093b9ffdd651"],["/categories/vite/index.html","e880b6fb567b589359c04db4867d39b7"],["/categories/vue/index.html","152d9fe4fd44f06dca5b1393678ba039"],["/categories/vue3/index.html","7fe3b8e5df2454d33e8cfa8b08053670"],["/categories/vue框架源码/index.html","5d2d2c5f666a2e111588bc1c72e702d4"],["/categories/webGL/index.html","826129f21e2878843d45401eb15ee930"],["/categories/websocket/index.html","8762b51c27a49864d40177729746ec37"],["/categories/微信小程序/index.html","02481d824a774f6a6ee55c3841018c06"],["/categories/数据库mysql的学习/index.html","0ab11102c406c987b6e30a3c15273a60"],["/categories/数据结构与算法/index.html","cb47d50e9fbf3db94ac485de7decdbf8"],["/categories/组件封装/index.html","41f7f97124b94f889e157a8d26d653c0"],["/categories/面试/index.html","7ba5646228a2a10a60206fed07c1131a"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","f583c46aa6f2866a0e2413dbaf37e56d"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","3f661a531f7dc31c6aa259c7e270b100"],["/page/2/index.html","d18eaa93489ecfbc0d42db165d4a2a46"],["/page/3/index.html","0346b5699e91c88ecf77525b27ed374d"],["/repository/index.html","2fb3ef60a0ab115d17f7442deb5294ac"],["/sw-register.js","6eb3d58d771460616bf29d40da765231"],["/tags/JS方法技巧/index.html","5dba586bf20b4dea66891a03de1b63e0"],["/tags/Node学习/index.html","8b177423932821c8e5d444f9a5ce8cc5"],["/tags/React/index.html","78e2db2ad589a296734fb163b6f57d87"],["/tags/Vue2源码/index.html","70114cd1cf94feb6fe619484395a87a9"],["/tags/Webpack学习/index.html","0cb95f32eb676375694b1b3f6bfe6329"],["/tags/index.html","36882f7c3f11b66cbdd09ef5d57b2ab4"],["/tags/mysql/index.html","080bcba345938c3e100ecb8aadf69c9b"],["/tags/promise/index.html","edf475753406ac9680c36214f766b597"],["/tags/ts/index.html","2833ad87a253214456e91b275221b2f3"],["/tags/vite/index.html","99ccd9d2b7286fb5eba368122d183a59"],["/tags/vue/index.html","2f8fe664dbde801964a3636644d66521"],["/tags/vue3/index.html","4d248f4ae9f7eefb30d74b84ce9d76e8"],["/tags/webGL/index.html","338251129d386718d82b39e6d36e6083"],["/tags/websocket/index.html","7c2218a4c42db35dadb7c825505f0436"],["/tags/个人组件库/index.html","38feb3d592ca8b3961f4dc50eb9ca26a"],["/tags/微信小程序/index.html","2ad076571ef9c6e05817b6e74c1cad37"],["/tags/数据结构与算法/index.html","e30f7106fb7a1f0112bde7269703d5f0"],["/tags/数据结构与算法1/index.html","626fa0e61e7fdd670e8ea183586b706a"],["/tags/组件封装/index.html","ffa6a9ae9b9eec294e03c0e0e7cd684c"],["/tags/面试题/index.html","295c4cf3bbd4e1ca8485f7d215aab05b"]];
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
