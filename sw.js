/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","d146d74c2843226f2a447eccfccf0b7c"],["/2022/05/13/HaoUI2/index.html","68522cef38d408894a30384b87396bf9"],["/2022/05/13/Node1/index.html","da17d73685cdebf07b4944049d20b7c7"],["/2022/05/14/Face/index.html","45bd6e21c09375f7a242520f6157708c"],["/2022/05/14/algorithm1/index.html","59aa5dbd5baaa73ecf6eb586819f4621"],["/2022/05/15/Node2/index.html","4ed6a4f797de67afcafebccdc40da5e7"],["/2022/05/18/Component1/index.html","df0fa3331838b326030861b115745ffc"],["/2022/05/18/tips1/index.html","6b9198399e41e2265e56a8937ced150b"],["/2022/05/23/Node3/index.html","71c3b1504e53cdffc3bd96cdb74711c9"],["/2022/05/28/Node4/index.html","dda76dc7180a7013f5cec17b2304fb5e"],["/2022/05/28/webpack1/index.html","5290af0ab5d96765c7a87667bc439ad6"],["/2022/05/30/Node5/index.html","2bd7d4746e329dcaf035c1ace796ad8e"],["/2022/06/04/Node6/index.html","a31cdb5407ff0c7fceb9c8fa91273bbf"],["/2022/06/12/mysql1/index.html","d4bb70e5638eb07572a3f510ac1872a5"],["/2022/06/12/websocket1/index.html","03051a84e6f59768d5685cc2056e1f9c"],["/2022/06/26/Face2/index.html","245507b9cc287b737b0c0173be152556"],["/2022/07/02/vue2code1/index.html","bd0bddd51e6faa3ebb6d190cabee5f56"],["/2022/07/10/tsstudy1/index.html","f835d929cb1880fa68af179bbb3a302f"],["/2022/08/24/vite1/index.html","3d82ebee1279b07d58401ca1d52cf2d3"],["/2022/08/25/vue31/index.html","49d55fbd0dc59da1fd0abd5071a7f59e"],["/2022/08/25/webgl1/index.html","c724df76dff4d020bd5556e90a3d7feb"],["/2022/08/31/react18/index.html","206aaf233d0f109baae06de7bdd6cf09"],["/2022/09/01/algorithm2/index.html","eba381877fab49519e0f5fd7202be132"],["/2022/09/06/promise1/index.html","d7190e6d4b316319e1b72582ed835cc2"],["/2022/09/06/vuerouterandvuex/index.html","36e77f0795f1230ca02c5796f4a5a254"],["/2022/09/14/miniweixin/index.html","afd2f121079db64ccf3669086d140ccf"],["/2022/09/23/webgis1/index.html","cd8d113f16676abfc17c54207aeea489"],["/2022/09/24/vue32/index.html","1590e2b4aacb6bf64060e8acba026879"],["/2022/09/27/go1/index.html","8286c8749aabdeb1aa58579973480bca"],["/2022/10/07/canvas1/index.html","95b5ecf4395a4ace372691818da87b9b"],["/2022/10/09/mobile1/index.html","535be4085eae8814fd482a3e1c290775"],["/2022/10/17/work1/index.html","8be5c49a01544069f579034e0df7c4da"],["/2022/10/19/rn1/index.html","9f1efee5a8d5d82d49ce028b89c68cab"],["/2022/12/01/reactnative/index.html","2c7395e6c93786deee102fbdfe4c601e"],["/2022/12/07/realizationvue/index.html","e2cd135e66dbaab484444225920fb45c"],["/2022/12/11/mongostudy/index.html","415ae0166b3948e3a8988b4643175c17"],["/about/index.html","7585191150e6b2314410a5e6675a25ed"],["/archives/2022/05/index.html","5010cd7395d381488f1f859bcf3fb7d7"],["/archives/2022/05/page/2/index.html","569837128ed1c4a83667397f494d041e"],["/archives/2022/06/index.html","01309f62a5d97c3ba2498369002a308c"],["/archives/2022/07/index.html","b97253543349a7b633f6db9a67586fb5"],["/archives/2022/08/index.html","4c6e22d76d92598219c78672dd20cbc9"],["/archives/2022/09/index.html","2ca1613c31100cdddc32e77846dcc676"],["/archives/2022/10/index.html","02e23c57b355e96353e08f9b87e026f7"],["/archives/2022/12/index.html","aabfddfdd42a26a2af976cbba4899416"],["/archives/2022/index.html","c0cc82de89c69b975ab264b87d956320"],["/archives/2022/page/2/index.html","7b9e8d4033e672fdd708a8762e52cace"],["/archives/2022/page/3/index.html","47b50e1f22147d3f5f39b395aef1d3b7"],["/archives/2022/page/4/index.html","0bcff4a7b541645b374b58d0a6f82f55"],["/archives/index.html","6af1ddd7ac5047e9daf55d86c073ed62"],["/archives/page/2/index.html","0e5f75cc4676c9f0a9528e5de6a0f08f"],["/archives/page/3/index.html","8c76a2aa61a757c158b52fced798bfad"],["/archives/page/4/index.html","4481395a3d5de38e92182d95d13a546e"],["/books/index.html","53e197a5aee4663fa32801677e271d6c"],["/categories/Go/index.html","88d79ae3a544742b071cb479beeca147"],["/categories/HaoUI/index.html","2c34142f35f20632595f4bd19ae47178"],["/categories/Node/index.html","6733c138ae0380cfdc00399da8a9af99"],["/categories/React/index.html","8d3c096c755ce38a4254a9649dc10ec7"],["/categories/WebGIS/index.html","68592e8889f0537663057b2be8ac1919"],["/categories/Webpack/index.html","3ce2c2a746607998af4065d7a391aab5"],["/categories/canvas/index.html","1411af78422f70d53527df04a68931a0"],["/categories/index.html","7dec3c488b5bb43d0ddbdf800e29390e"],["/categories/mongo/index.html","49a3ee1d66bddb6c2e01ec189e59f188"],["/categories/promise/index.html","057145785456cd886727ae00553a4dde"],["/categories/react-native/index.html","6d52b0821b19d11dd5b5b8c4c2b7901b"],["/categories/typescript/index.html","bfb345f1ae67748a651f7a078ab62a7a"],["/categories/utils/index.html","b938c41d39c475de30eae646fe6840eb"],["/categories/vite/index.html","9a6f8b64f37f527f2a9c9429fd525a31"],["/categories/vue/index.html","75d8f5390234980743677a259614d893"],["/categories/vue3/index.html","2b8835f29e5e23dcecc022647d9cad7e"],["/categories/vue实现/index.html","8d40e9f528f88a9750b88748c4f09a4d"],["/categories/vue框架源码/index.html","a8df70f0a34e26b9ff9740be243898bc"],["/categories/webGL/index.html","dc1d1a49317339d98cde53d538c91612"],["/categories/websocket/index.html","946cd4376dda2048276d98ee62858bc6"],["/categories/工作日志/index.html","67e5643315c1c18a04664402ca8925e2"],["/categories/微信小程序/index.html","a9c02b148c0730fcb057812f3a6a1a8c"],["/categories/数据库mysql的学习/index.html","c6e5cd7bf87f48b82d1d3bea7e4bfdaf"],["/categories/数据结构与算法/index.html","0f63905d9baa8555f92b61c79115f667"],["/categories/移动端适配/index.html","1ab3551e549fac0368011bf33bd930ff"],["/categories/组件封装/index.html","1933cb243cb0ddda06ffa0fae0d2a222"],["/categories/面试/index.html","381d2dfca81523a81312cb3f6dd0e0be"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","d2a2e72391fd7e7b2e85e473e5238723"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","9c4eb375b87845a076db308116e56019"],["/page/2/index.html","38a9d3a7345bac0c2dbc65c51968896b"],["/page/3/index.html","152acced9516b5fb3a965aaa6d6d62e1"],["/repository/index.html","85f76175f5b672bb2be95dc8c5e844eb"],["/sw-register.js","ae272e3c2f6057aa01ab94debb97bf72"],["/tags/Go/index.html","7cf6e731b4c013eed443f60fd6562eae"],["/tags/JS方法技巧/index.html","2358124ed58025e2e55a5e5f24ce1ac3"],["/tags/Node学习/index.html","3287fa4d9cadc4b9ebdf92ddfbfee9bc"],["/tags/React/index.html","8319629ca70fb6321908a11fadfcacc5"],["/tags/Vue2源码/index.html","13ae54fed14b961f1ce37b794f2be565"],["/tags/WebGIS/index.html","2a6eecfe1b90519779219e16265be072"],["/tags/Webpack学习/index.html","69355c901e0a94d6e5d46c4a1737f527"],["/tags/canvas/index.html","3c6659b3586f2ca01252d243bd3c07a9"],["/tags/index.html","1a3b189f0077945a3a51945e187c94e2"],["/tags/mongo/index.html","311168a96d06cf31813738eed8c31a18"],["/tags/mysql/index.html","793d15c1583061149602bf861b3fad12"],["/tags/promise/index.html","d564f8139ca1c33006ecbc002aa683e2"],["/tags/react-native/index.html","54e2832ddb38344f54b5b9f432b6e10e"],["/tags/ts/index.html","0234102bbe6607fd2b062a295b9d09c0"],["/tags/vite/index.html","31e66d3ee038500560f68de88b58ca39"],["/tags/vue/index.html","9ec5400846cfbff6b92e333a92a2693d"],["/tags/vue3/index.html","8d3b273b091480b261f0dced3d9f941e"],["/tags/vue实现/index.html","d56a90e08131393998c690ecc1bc561c"],["/tags/webGL/index.html","5540ff8311761c6a2a9005d62f61a8d0"],["/tags/websocket/index.html","a7f8e0a3ea2945b0b690b377fff76f3d"],["/tags/个人组件库/index.html","648d5d74a2a650b9c903839b5ae8dc3a"],["/tags/工作日志/index.html","fbd5033dbeb709ee5fef73a2cebbeb3e"],["/tags/微信小程序/index.html","29f2ca5630bef2a828ce53e0ba0de899"],["/tags/数据结构与算法/index.html","681129ded6fe86f8fc7b75044d4f6d19"],["/tags/数据结构与算法1/index.html","5c3586f1f16965b523e74e8c0974e597"],["/tags/移动端适配/index.html","2bcbff2f9c7a06eec15d189207cda5c9"],["/tags/组件封装/index.html","08bd3a16aca966a21a9d456d6e60ba9a"],["/tags/面试题/index.html","98648d78b7609373f7671801dd5c69e6"]];
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
