/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","5c0f71d129de6120b2e4d913e96dc59f"],["/2022/05/13/HaoUI2/index.html","eee3aa0ef9cc9f92486669de90b6586b"],["/2022/05/13/Node1/index.html","d431a8af8f3174e41d6bbf76d95f4d4b"],["/2022/05/14/Face/index.html","c23507b730a0db135096a26fa1f2f070"],["/2022/05/14/algorithm1/index.html","609996699763729b05ef534194efe5d6"],["/2022/05/15/Node2/index.html","f527984595e778fcd92cfad248bb8399"],["/2022/05/18/Component1/index.html","97c057f9c7c77aa0564a7a9634e5f4fa"],["/2022/05/18/tips1/index.html","ba421f4d15a3f2a3a2ccdc2506741188"],["/2022/05/23/Node3/index.html","c673c695bc53c85441d46dc69ecfb3b0"],["/2022/05/28/Node4/index.html","045f8ae974eace44b41d5e9de88f894e"],["/2022/05/28/webpack1/index.html","0ff87b9bb4e7d556bdeae72067423e89"],["/2022/05/30/Node5/index.html","68a0f652b5f33e6a63e955613f866603"],["/2022/06/04/Node6/index.html","2ba2d921bcf7aa1647f41694847415e3"],["/2022/06/12/mysql1/index.html","5bc675348dfa81b35e0f8c2ac08eb63d"],["/2022/06/12/websocket1/index.html","fe66af02d9c867ae951d19392469e0f3"],["/2022/06/26/Face2/index.html","dcc33571d66e0f69c50272fe7d5539b6"],["/2022/07/02/vue2code1/index.html","25eee8f1a4c579eb0bdb2970828f7454"],["/2022/07/10/tsstudy1/index.html","a9c083a82010fea5e8c532a7095252cb"],["/2022/08/24/vite1/index.html","f7f75030f1e2c110db3f22525a77640b"],["/2022/08/25/webgl1/index.html","d39b6a752cd4b9545015fd40c8c8b7c3"],["/about/index.html","81249a8c57d70c2420dab3e88da55583"],["/archives/2022/05/index.html","f4f141364270d1817623e4ed49aa7c37"],["/archives/2022/05/page/2/index.html","1b18541900df91d65ae7c5d9fd5ebefd"],["/archives/2022/06/index.html","e91007a4816feea2fbcba6f61cd05dbe"],["/archives/2022/07/index.html","1c33c86780bdfceea66a27c4acf861b3"],["/archives/2022/08/index.html","34f2ccd6a548c389c02cb5306f3d1c02"],["/archives/2022/index.html","cb4dfe55595d4476d4acbee85670be11"],["/archives/2022/page/2/index.html","e3db02043fedfe84205bcb9403f6bb86"],["/archives/index.html","4ad757ca18eff397eef4cc50860e9ad5"],["/archives/page/2/index.html","ec45a9fdabd1f371621835a074eb7cea"],["/books/index.html","09b95dea980c8e4a5503468793f84055"],["/categories/HaoUI/index.html","95104afe879c7da015b6f6ca5e153a72"],["/categories/Node/index.html","178fc61eede10a079b3fbb865d32d190"],["/categories/Webpack/index.html","0b23b514ce121ecb9050cbaab3ab7817"],["/categories/index.html","571492b3512a8971b657595d41005f7b"],["/categories/typescript/index.html","aedfccbbd8ff17071b0a41111857ea1e"],["/categories/utils/index.html","35d84782c9d083d4c51394a4233e7fa8"],["/categories/vite/index.html","626449e05ca794f661e72caf8db31dbb"],["/categories/vue框架源码/index.html","17e5286720b4ae44be3aac1eefd29bf0"],["/categories/webGL/index.html","b6f41316924aa8280f227b2a78915bf6"],["/categories/websocket/index.html","cfe7b2133aace48d230f6da5d18d4292"],["/categories/数据库mysql的学习/index.html","0789d46dd8387ecf7d2efa525a6c06ff"],["/categories/数据结构与算法/index.html","fce3ad2ecd8a1c0c007a33bebaa4a5f7"],["/categories/组件封装/index.html","03511a20007f84588ede3bb740f25272"],["/categories/面试/index.html","cee0105d5fc1969917b319e6faaa2789"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","dd8b56166c940d3926bc06e2470b5457"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","ebc969049603b1a9a5710f02c5d75111"],["/page/2/index.html","7df1e649b77d7aacaf16b3e61753ae0e"],["/repository/index.html","500a9500fe81e05b17f3a00e7fa12b8f"],["/sw-register.js","ba28379789e389ea3b8d5df0d5be3dc2"],["/tags/JS方法技巧/index.html","0a97a3a06cf3208027f44763c587daad"],["/tags/Node学习/index.html","af3690e1159782bdab65b3535a27c229"],["/tags/Vue2源码/index.html","6d18a7d37f25640a1fc5dbfcbdfa03b0"],["/tags/Webpack学习/index.html","52c19f9fa4875c1f52afe58302e49c8e"],["/tags/index.html","5a373deb7df122cdf90dcaacd098a34b"],["/tags/mysql/index.html","60d7f26d772bc061e32dd3418fdd4ba5"],["/tags/ts/index.html","617feb6e7f9d631fbc5d177837c9837c"],["/tags/vite/index.html","81ec64309e4709fe787470bba987834e"],["/tags/webGL/index.html","54f41e7563c32edd72c4e4da0eb4166b"],["/tags/websocket/index.html","4e221e3deb3067cef895631f746dc82e"],["/tags/个人组件库/index.html","9edc1418a5bb79240264735681186253"],["/tags/数据结构与算法/index.html","65f058e12c2bd9732ba16bce4470dbf5"],["/tags/组件封装/index.html","5ee0300fac2f964aa8eee2d0c2f5e10f"],["/tags/面试题/index.html","11fcd332636802138c81bf85a4109db2"]];
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
