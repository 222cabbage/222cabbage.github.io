/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","c4b00a817c7d1d1b5bbc937e4d14a6d6"],["/2022/05/13/HaoUI2/index.html","a10651b8d369288446cc70293677b58b"],["/2022/05/13/Node1/index.html","55c1c348cb7873d41c391670054a395f"],["/2022/05/14/Face/index.html","4c34481dc26002ca098afae00a48abda"],["/2022/05/14/algorithm1/index.html","f0baa7219af219862a4efff6712b4d99"],["/2022/05/15/Node2/index.html","f6c6a9b91b80ac2d7c78f41fabda2be5"],["/2022/05/18/Component1/index.html","f3437a2f3cd87c1dbaf67133de13734d"],["/2022/05/18/tips1/index.html","2065ac30480f849882904dda5b22b291"],["/2022/05/23/Node3/index.html","3a931602bc844319280ecab8f8ee4f68"],["/2022/05/28/Node4/index.html","10ac3ac52803c36e395b94cb6d1ef399"],["/2022/05/28/webpack1/index.html","3b9068d21a1d8ce5b12a955fdc3fcfee"],["/2022/05/30/Node5/index.html","755e49ff00e2400a6191146976df2253"],["/2022/06/04/Node6/index.html","8459fd474bd963027af2380ea6e71b29"],["/2022/06/12/mysql1/index.html","5eac0cbb4197397206a08667982d52e7"],["/2022/06/12/websocket1/index.html","2e8944812bd9f0bc44051daabb9f38f2"],["/2022/06/26/Face2/index.html","59cc69addf1024c98f6ce9dc1ce74da9"],["/2022/07/02/vue2code1/index.html","d716cc3e7dd4e2df68ceb3c89ca29fd7"],["/2022/07/10/tsstudy1/index.html","47c34a1b16574d3314fd64d8b60d7bab"],["/2022/08/24/vite1/index.html","d76c76584b02b81428dae9f4940115eb"],["/2022/08/25/vue31/index.html","2d1738d30a4da0dbb96af5459c9846bb"],["/2022/08/25/webgl1/index.html","54c54f3007cd54b2e18593eae67acd87"],["/2022/08/31/react18/index.html","ed84297aa84081b4d849d1a92fa34c6f"],["/2022/09/01/algorithm2/index.html","54f575ef2e40def4ee4dd782996a4336"],["/2022/09/06/promise1/index.html","08061bc19f79cbb8b9e93c5ac41cffb7"],["/2022/09/06/vuerouterandvuex/index.html","9efa778df7a5bf83dc0a19db1e4cf62b"],["/2022/09/14/miniweixin/index.html","445dbac64bd881018a194996ccabb3ae"],["/2022/09/23/webgis1/index.html","44ab7091ac5164b83e9168af797f5520"],["/2022/09/24/vue32/index.html","5c3158007abcd4efd70d91bebf2178a8"],["/2022/09/27/go1/index.html","97a32c3f361a20fa99cea536ea1b7f10"],["/2022/10/07/canvas1/index.html","a840abd5ec4f6b716ea47e731439a3ad"],["/2022/10/09/mobile1/index.html","ce5aadb68483861e7d1fce5211c6466f"],["/2022/10/17/work1/index.html","7fffe60f16cbe7cfa6380436049bb0e6"],["/2022/10/19/rn1/index.html","59b179e9785d1d3a7405493138eaf14e"],["/2022/12/01/reactnative/index.html","fabb69331ace80abbbae04f2d6f817d8"],["/2022/12/07/realizationvue/index.html","07866b2cd5d85e538efe68c7c54f7978"],["/2022/12/11/mongostudy/index.html","d0bc9f882907d53fdfb94cc1ce42c30c"],["/2024/10/20/html1/index.html","f0b17584074b20814fe71ffd1d9d01f6"],["/2024/10/21/html2/index.html","1e847304f7cc6b75924021bce85d0708"],["/2024/10/21/html3/index.html","bebfce353bd51ba8011284b0ca8010e1"],["/2024/10/21/html4/index.html","134724e4ec235b9bb38fdbed798508a1"],["/2024/10/21/html5/index.html","c651ed788c51fd649caec74328dc5f40"],["/2024/10/21/js1/index.html","3fead5d58ec89b10f32c9b5baaca10fc"],["/2024/10/22/babel1/index.html","0f2dc8fb599193871b331584c904eb8f"],["/2024/10/22/git1/index.html","11e1364b571076797a3fb9989e853838"],["/about/index.html","503ffa230b0b07dcf5c3d6b3702ba579"],["/archives/2022/05/index.html","70e6fef64e5559c673f3b31d19bac4a3"],["/archives/2022/05/page/2/index.html","7b7931b4061c1238391c0decabc47e1b"],["/archives/2022/06/index.html","f22c7b45b2deb7f03f076e020a914354"],["/archives/2022/07/index.html","88a840558b93d8e08b9a0fa901b91400"],["/archives/2022/08/index.html","fa123853df3e963fb8698660b2b28355"],["/archives/2022/09/index.html","7c067703465ed5676c97029ab9d717ac"],["/archives/2022/10/index.html","99cb738b1a9adc103542162cab71fc84"],["/archives/2022/12/index.html","48565844bae147407155d58036aa58b0"],["/archives/2022/index.html","a13433f1a3f030062798f02888625c84"],["/archives/2022/page/2/index.html","58c972467f7d177afe6d898b97a3caf2"],["/archives/2022/page/3/index.html","eed429c022258f335e639d4044c7586d"],["/archives/2022/page/4/index.html","10a9f728e36be6b4fdfd3b3af59036cd"],["/archives/2024/10/index.html","1758f52288612875f1b0f176f23f088d"],["/archives/2024/index.html","35742e19fd39d13fb5f9db8e3058dbf2"],["/archives/index.html","c15e206b04a79c449314862df0893dc1"],["/archives/page/2/index.html","c15ebab2fb94caf4391a6e9039223643"],["/archives/page/3/index.html","fccbba7e80af1929ff2d9018bdc05310"],["/archives/page/4/index.html","780b6dfa2155dfd08fd2a20fb213d665"],["/archives/page/5/index.html","3ebdce0a224d273d0d0bbc2dffe568e7"],["/books/index.html","1adb2303b6a3dfc94f02c1ca0eff9b1f"],["/categories/Go/index.html","a837aa230e267d4bac8047bdebb02ed0"],["/categories/HaoUI/index.html","e9a51fda24bf701d1f2dd5b0f4c6b037"],["/categories/Node/index.html","b4582c5b3d50b3274125081f65eec8e0"],["/categories/React/index.html","2ee59a558c6656966f80d6c0a737ac3b"],["/categories/WebGIS/index.html","621af8ba41cd170695b9c1d455a4d262"],["/categories/Webpack/index.html","4b8bc7a1661c9ce3b808c78ce286d439"],["/categories/babel/index.html","54db40fea9861259b28231519033fa5a"],["/categories/canvas/index.html","7bd1f3458814f9f10e83d2c6ccc89c0b"],["/categories/git/index.html","d8743a844f691fa70f069d8130129ed6"],["/categories/html5/index.html","7728745ca2a834e491672674e8f6acbc"],["/categories/index.html","eb0d63d9298110830332a8fbfedeb1be"],["/categories/js知识/index.html","5679526db298cedb6c3a5bc6dbffdc00"],["/categories/mongo/index.html","f192899b1162c7c4a599844a2656fcc6"],["/categories/promise/index.html","c7455156595135d02d62c2a21ab9065c"],["/categories/react-native/index.html","f9a70774e9fc0877ef164bee088bf576"],["/categories/typescript/index.html","4f251f84f8504f36d99f89e73e3ff17a"],["/categories/utils/index.html","88b3ab4ffa7b5d2fb591f0487ff05112"],["/categories/vite/index.html","3535b05ca784801189b7c1861d6cf45b"],["/categories/vue/index.html","0757a592827bc3222a8513878dd08874"],["/categories/vue3/index.html","3d709d9acdd376b51b064723aecd9af0"],["/categories/vue实现/index.html","dea6fc8f3cc322ded6626709cfaeae35"],["/categories/vue框架源码/index.html","6b4e45a7455b2749433d39241abef8a7"],["/categories/webGL/index.html","283799d5b7b79a599332ba6ae03c68ba"],["/categories/websocket/index.html","c6998cbc105edd6897405b5ae7663550"],["/categories/工作日志/index.html","2a8d1bfb81423911c6f18589d37c33a7"],["/categories/微信小程序/index.html","5470dabd233f01b38c3b5d91decf5842"],["/categories/数据库mysql的学习/index.html","0718b2e6437ce2099b2cef5d69e6bb51"],["/categories/数据结构与算法/index.html","8e697147c3dd753c0a85a306691cc60d"],["/categories/移动端适配/index.html","191a2845f82581badfaa8fbbbe758b23"],["/categories/组件封装/index.html","1fd890fcf8e9643b22e8f2361204d60d"],["/categories/面试/index.html","b8c7c6acd438e715a0c23c7d012f85e0"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","a45e9fbd5dfb295dfb24042181c94b5d"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","9f3ed558b44fafd65c415d986eac307d"],["/page/2/index.html","b2a13356b023b3a8f84e4a6e63a98084"],["/page/3/index.html","0ba25faf51322885e9b2ec28362faa83"],["/page/4/index.html","96ec4bbe18ab88884dc580c50a834a26"],["/repository/index.html","5e464d627ea7c936a152176d4040bf95"],["/sw-register.js","cbc2daac26cdbcbdff1f2f484859f6af"],["/tags/Go/index.html","bcc27eb146d35ec926eb97ceca4898d7"],["/tags/JS方法技巧/index.html","a5e7bb9798372f952d5997b8832ad565"],["/tags/Node学习/index.html","41d9e105a27b4331abc5353169b4c617"],["/tags/React/index.html","f76ec364bff768b6ad20a3cf6df13b6d"],["/tags/Vue2源码/index.html","26f03b50f98e654bd70c877afd5ce015"],["/tags/WebGIS/index.html","278fed59383610ec9ab90042fea2af1c"],["/tags/Webpack学习/index.html","11220cfbf1223c7e0f6ee57d87c5803e"],["/tags/babel/index.html","9e39e4a17b831fd9525e50a5bb2d63ef"],["/tags/canvas/index.html","96375ac726c2e6cde097807088a3cfe6"],["/tags/git/index.html","5ceecb60567e76e42ad0080a6b2e960e"],["/tags/html5相关知识/index.html","6bd3655870ab49a4116996b6cd9085f0"],["/tags/index.html","f93ed40a6ddf8dca8fcb39ba1a279a52"],["/tags/js/index.html","08a0e86a512aec1fabfde730f0b16f6b"],["/tags/mongo/index.html","50f0b185d1019b89e08905bb4a0550e6"],["/tags/mysql/index.html","78c7de2e9051c26777f7797e54b9bebe"],["/tags/promise/index.html","f8ff4a1c3014805ce5282c858b680782"],["/tags/react-native/index.html","c1d62cabb736efe6382da6893f42ed8b"],["/tags/ts/index.html","15df1aab23eddb69d62767e1f0a585fb"],["/tags/vite/index.html","356eefc56d68e097eea1d6e113f64c9a"],["/tags/vue/index.html","68e200289e5566ef9707035ee32f7eac"],["/tags/vue3/index.html","93ca73cc23bf295f748349551aa009f7"],["/tags/vue实现/index.html","5b10673c429549ac9dbf02e86f8c32fc"],["/tags/webGL/index.html","b486f3020c657fe2074fa46bfcd03013"],["/tags/websocket/index.html","59edeeb69c849f229c7aa1240335b26c"],["/tags/个人组件库/index.html","e87ee63701429ffe37817af48d72418a"],["/tags/工作日志/index.html","663facf9bb15613a1bf284b1054b905d"],["/tags/微信小程序/index.html","c90faf611a70aeb5e3e9dd672f12967b"],["/tags/数据结构与算法/index.html","c8cf0de49b83e85d072f67e3eea3a42f"],["/tags/数据结构与算法1/index.html","0915ca991743a8b22343d22aa3d2ad35"],["/tags/移动端适配/index.html","9994b19f90ba974b5a4c8227572c2511"],["/tags/组件封装/index.html","dbbc54c6a3a983b0978771edb924339e"],["/tags/面试题/index.html","8ed4cd6c130bdf8a62a8f3163e6e45dd"]];
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
