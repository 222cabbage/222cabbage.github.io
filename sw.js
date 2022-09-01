/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","0585448f1967f2694fbdc1098c68b2fd"],["/2022/05/13/HaoUI2/index.html","4a71c2ad02c7178cdbe0eb49f8c289a0"],["/2022/05/13/Node1/index.html","632529e7e9b1295f083ac1d7e3a6fa3a"],["/2022/05/14/Face/index.html","73e588636bd5a7a6d4e79952584f2be4"],["/2022/05/14/algorithm1/index.html","ebb19df9825f8555cc7e214f355fe8e1"],["/2022/05/15/Node2/index.html","cca5b24d8146e51f3ae7cf5e7c239d94"],["/2022/05/18/Component1/index.html","5be98d76ffa2cc432794d349b16c4b6f"],["/2022/05/18/tips1/index.html","2768c696c19c8e066ee35af2df2eef45"],["/2022/05/23/Node3/index.html","25956e2b29ca2fca862c46bd8ec07367"],["/2022/05/28/Node4/index.html","65ca25481349fd7959238ee65cfc0e88"],["/2022/05/28/webpack1/index.html","b5d63e325ace30cc52062c3e623d4502"],["/2022/05/30/Node5/index.html","fab776abe7673e1e03f9c099f9f66f30"],["/2022/06/04/Node6/index.html","7ffae48f2baa9303165e3f8df95a8587"],["/2022/06/12/mysql1/index.html","293b3a21f1a011fee1f42f3fa1290db9"],["/2022/06/12/websocket1/index.html","cb90ad0a001edbafeaa2d31e2cbc1762"],["/2022/06/26/Face2/index.html","e4c5772c49ed7c56ff79e89fec511147"],["/2022/07/02/vue2code1/index.html","1a92b70400f57dc5a6981dfc3be96df8"],["/2022/07/10/tsstudy1/index.html","b1caafcf3f4f46ea52e8cef6164d1ddc"],["/2022/08/24/vite1/index.html","5b1c0c4ca1fff70d2bc47164b9ecce22"],["/2022/08/25/vue31/index.html","e9cf4711f5021271a75fa609dca8ea5c"],["/2022/08/25/webgl1/index.html","0ad7f9cb2594bc55392c2c4b3f525e9a"],["/2022/08/31/react18/index.html","b5c4f91f7ef4740484b297911bb90a0c"],["/about/index.html","144bd7230924973c535a061436a2a296"],["/archives/2022/05/index.html","c2a7910f88778f9396a4b24c28f18f5b"],["/archives/2022/05/page/2/index.html","94d5c4b8c098f7cf6081b46f2a27e515"],["/archives/2022/06/index.html","782a9c0e0f66968e8e09ee26c6bdb9c6"],["/archives/2022/07/index.html","7f18dacc50e83f6cc4462e01750ee5fd"],["/archives/2022/08/index.html","be256093c31f382af07a20cadf741c6b"],["/archives/2022/index.html","bea5a3000b64166d2a9211f551b81671"],["/archives/2022/page/2/index.html","de63645f319e8f9ff638c78d62954779"],["/archives/2022/page/3/index.html","e84fbdf1c42a3315edab175c0b8bed2f"],["/archives/index.html","eae15b522b11a5f41e1124ecf573dac1"],["/archives/page/2/index.html","f1d4027a8f8fe060da64f448fc66202b"],["/archives/page/3/index.html","d156af10b716d252ca3015180954b4af"],["/books/index.html","061db43f3d5d9ee9d835857a5d38d6cc"],["/categories/HaoUI/index.html","1cb26f463016bb8f3b52b6709bfe97b7"],["/categories/Node/index.html","3c461a92104c1aed346ecc6dab4dfe00"],["/categories/React/index.html","24b16b0bebb68c1c39a0da7609d49a1c"],["/categories/Webpack/index.html","e790393d1231e499d570ed8ebd538f1d"],["/categories/index.html","9fb8276f26a9e17243c864c33c64b6e0"],["/categories/typescript/index.html","4e1399b4cd2cc5df58f72578db14be8e"],["/categories/utils/index.html","cb93c895ee4e9a8a617827575057ba85"],["/categories/vite/index.html","d6972a2b188a93ba9cc4922d58f435c8"],["/categories/vue3/index.html","86043bbf0bff82224c8250068835c780"],["/categories/vue框架源码/index.html","bcce6872dae41dba95b954c70da918a8"],["/categories/webGL/index.html","a7c33115f5ce80959ca5736e14863a67"],["/categories/websocket/index.html","688834142474e5ce088c19b127c5f445"],["/categories/数据库mysql的学习/index.html","f71dd299ce128fcaae7308e9f42241e2"],["/categories/数据结构与算法/index.html","f1877ea977f05cdecc873078d110e209"],["/categories/组件封装/index.html","7778f30b3c47b8e963958db814432a2b"],["/categories/面试/index.html","86fbcffa77bc5f9bbac94b1e12e31305"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","f5990f82bf1ce71433a2135dec87ee1c"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","21831202c4d46d43a03f0c4744d082f8"],["/page/2/index.html","79c416ebacd5b2600782942b78ec6b62"],["/repository/index.html","1073eabef07b07f7a758777f09e86a95"],["/sw-register.js","cb753e98c6d5524493ac87a9e24f0563"],["/tags/JS方法技巧/index.html","4a9125c7c8ee05f049c301aa865cd85c"],["/tags/Node学习/index.html","e0980e697232b39485a2c5211c238b0e"],["/tags/React/index.html","9fb4124c49ea22704824106e1b1b8baa"],["/tags/Vue2源码/index.html","8c7dca7a8b1af56c7268d4ea096c0dd4"],["/tags/Webpack学习/index.html","15a98174b073ca0ec7dbf1230c71a13e"],["/tags/index.html","34e642a5313d8194b2280846e2d84e8f"],["/tags/mysql/index.html","3f48b768d349629c2b60cdd86d91f8af"],["/tags/ts/index.html","98f980fd5198f50816b6c752383d169c"],["/tags/vite/index.html","a6b8fd05cb613fb38f1fbc3210e66081"],["/tags/vue3/index.html","774989fb14ef10c77b65dcb66a2799b1"],["/tags/webGL/index.html","3ce4277a3b24a7e04f9126be2d3ee842"],["/tags/websocket/index.html","800fb56ae434cc8f3d283fd38bdf10b8"],["/tags/个人组件库/index.html","d4e207b36352fc554032a7cd066dbaf7"],["/tags/数据结构与算法/index.html","da5116e44bc5eefec4a44ed8bdc28978"],["/tags/组件封装/index.html","174d06a669c343ea2a407b0c8869cb8d"],["/tags/面试题/index.html","78c74bc3a143ac5cde3bcc8458f0e6f9"]];
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
