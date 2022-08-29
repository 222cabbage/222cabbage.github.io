/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","2e4e42347966463c22cb4dcce855adaa"],["/2022/05/13/HaoUI2/index.html","014afbf8389560f51cf34b158864f318"],["/2022/05/13/Node1/index.html","51adfca8008fcb71597868de282e71de"],["/2022/05/14/Face/index.html","1a4999c117e791e8e882406ce5197136"],["/2022/05/14/algorithm1/index.html","bc6baf291169db9b977b1758950f8345"],["/2022/05/15/Node2/index.html","d75d2117c82ae0fb9eaa8258172ca70e"],["/2022/05/18/Component1/index.html","eccfa7bf25a2f1c125e328a348cc384b"],["/2022/05/18/tips1/index.html","d1764a1358878cd0b4602597fcf35965"],["/2022/05/23/Node3/index.html","ec657b75c349f958682b25f9a56a0296"],["/2022/05/28/Node4/index.html","694551d663e89c3b0a4171882bf16cda"],["/2022/05/28/webpack1/index.html","9cff0a389ed2d8adc1dee8279af5b59a"],["/2022/05/30/Node5/index.html","1638e129d2fed4d6d59d29188b0907dd"],["/2022/06/04/Node6/index.html","e94c643d32a6b1eb1f141f4d119ef761"],["/2022/06/12/mysql1/index.html","f55001c53f1128a884a805d9eabe545a"],["/2022/06/12/websocket1/index.html","470fd5d0c775222e2ed5aaf5ef68dab4"],["/2022/06/26/Face2/index.html","7ccb0fe06ae1049317507b781472c910"],["/2022/07/02/vue2code1/index.html","22cd94adbd013a0a766fe710fd0aca4b"],["/2022/07/10/tsstudy1/index.html","883e0f9ff787175f1b6dfc49d0d4af49"],["/2022/08/24/vite1/index.html","fd77499589cbc508e45f76c445b8d8f6"],["/2022/08/25/vue31/index.html","2898825cc80fcc101caae29b52350337"],["/2022/08/25/webgl1/index.html","2d8b623f4b940f91eb31936c686955eb"],["/about/index.html","4179c61af8ae357034cba3a8c450130b"],["/archives/2022/05/index.html","11c678eac76d5a08df5de10195430244"],["/archives/2022/05/page/2/index.html","f636a1cbf94742e22a67b5afe1857f52"],["/archives/2022/06/index.html","bda3eef97fcf5bd3462ce56e9d132d7f"],["/archives/2022/07/index.html","badfacfb163cdd82a82943995ad2d065"],["/archives/2022/08/index.html","47cdf03b7854c7baf751b654ca723676"],["/archives/2022/index.html","f6c38f5be29be347b6f7eb2d1431bb1b"],["/archives/2022/page/2/index.html","9017972fd538b6c0ee20f93d108b1a46"],["/archives/2022/page/3/index.html","6e10517ece20510a364f00c5c86560eb"],["/archives/index.html","244b004ae4de43aa6b297d7b12abbc65"],["/archives/page/2/index.html","15c6fddf8ebdb07bb0d62076c284c5f4"],["/archives/page/3/index.html","659d729e8ca8531a6c30aa30b04154df"],["/books/index.html","89d17b11f69741f4ef139470f8a70ba1"],["/categories/HaoUI/index.html","7689021a9786dfd8bb233730696a6862"],["/categories/Node/index.html","b341a7e78b4fa89a0b4d66c71166c213"],["/categories/Webpack/index.html","f20ddc5580d3239d51e7c353029669b6"],["/categories/index.html","d1ff75bba797f390ebb949ff6b6ef829"],["/categories/typescript/index.html","662eef5eae2be1dbfece9acb31e7c20a"],["/categories/utils/index.html","fb453cac0d819f26e895e8eaf0bfe345"],["/categories/vite/index.html","fcc2022d2a3e4d68179fbca46f5c7cbb"],["/categories/vue3/index.html","22fc60647f741e934771cdc597456936"],["/categories/vue框架源码/index.html","ecb843dfa5cbd25aa0f126b93ce894ce"],["/categories/webGL/index.html","a0f83784e6c0e2fa0ac9a8d0d9a13aea"],["/categories/websocket/index.html","6a19f7eeafcd21c0aee7c41d2a70d9aa"],["/categories/数据库mysql的学习/index.html","68298415c1512f8c7a3f3426ab013e5a"],["/categories/数据结构与算法/index.html","b3527551aeefd68bec7faa15f175b675"],["/categories/组件封装/index.html","e62ca37845339ff38e8fa0fed924d520"],["/categories/面试/index.html","a42ed0a49157d80986cf3cc6eb80a906"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","2f50218f64075a664b782a4ef65e5921"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","08684ee5d0534d2711f322544db5762d"],["/page/2/index.html","cddcfc4451bf61c2c0fc4759943908f6"],["/repository/index.html","f93d08cc97d61b618af1c882427faa92"],["/sw-register.js","776c59f2b22f19d40a9e6f7105ed8104"],["/tags/JS方法技巧/index.html","a5af6b1be0e619913dbf9542b074a6ce"],["/tags/Node学习/index.html","c28e7eeb120c070b9f25a5daf509d0af"],["/tags/Vue2源码/index.html","88bec0aefe5fe7a613bcdfd45346f911"],["/tags/Webpack学习/index.html","30b076c262907fbb1feb9f316081411e"],["/tags/index.html","c9b3481bb4b492ce08ad31d54dc8f307"],["/tags/mysql/index.html","a8fd75bd2fbebd36d8d5a7b98d07c910"],["/tags/ts/index.html","6e518065677c4394826a69abe1c4a98b"],["/tags/vite/index.html","508dc8a5e1163ad0c855ffbd0697296f"],["/tags/vue3/index.html","d416da0dc1a6655f77488aafc39316ae"],["/tags/webGL/index.html","ea767e67658b89fd81fa9a4030e9d2e6"],["/tags/websocket/index.html","fc7084f54d5b889b670589b592a0a7d9"],["/tags/个人组件库/index.html","2981013e7ae30c99f27c04c4d383e9b7"],["/tags/数据结构与算法/index.html","91d4a0ea5a896f2d3fb65bb5a1d33552"],["/tags/组件封装/index.html","2acaa90356cdda55f6107a19632dc66c"],["/tags/面试题/index.html","e3896205538dc0e969cc5e83f872768d"]];
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
