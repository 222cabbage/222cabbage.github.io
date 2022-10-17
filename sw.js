/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","3b055e7e8176efb8f08b669c60e53c48"],["/2022/05/13/HaoUI2/index.html","6040217ef65f3c0d6b67174a44c8f0da"],["/2022/05/13/Node1/index.html","0bbeb7267abb69e4d216fed065753cba"],["/2022/05/14/Face/index.html","699bb52a4145cebcec99b7c4dd0c3839"],["/2022/05/14/algorithm1/index.html","9f573663450790409e74a6d3a5cf692f"],["/2022/05/15/Node2/index.html","41df2846348687cf3c65c304bdb8dc53"],["/2022/05/18/Component1/index.html","d6d0da8e2bf6f449f1547df604c812a5"],["/2022/05/18/tips1/index.html","d65270253e081d5464e026bb4d41aa93"],["/2022/05/23/Node3/index.html","8877c25784e69f7c477b7806bcf1dd07"],["/2022/05/28/Node4/index.html","c0fd5476f46056ff1d3d009613ba0958"],["/2022/05/28/webpack1/index.html","9239ca14a3ca6eeb2de7f7526da11ebf"],["/2022/05/30/Node5/index.html","fcde23751751bc327dc4ea68e9fe08a7"],["/2022/06/04/Node6/index.html","24c13e4454f23f97b220f1d50b5cd6f4"],["/2022/06/12/mysql1/index.html","15d19a0ebc488ab81fe46923b8206f84"],["/2022/06/12/websocket1/index.html","1cace53a8b4c61c7c1fe9ddffd84cf8f"],["/2022/06/26/Face2/index.html","389e675847e4ca8eb94d82c8bb76e333"],["/2022/07/02/vue2code1/index.html","feabe654a9f6e42ba16ff72fadff45b6"],["/2022/07/10/tsstudy1/index.html","90f3ace432262f7d17839030d4a5e540"],["/2022/08/24/vite1/index.html","e6d7816229190725ce9459f7a0332e4e"],["/2022/08/25/vue31/index.html","eadb2aa72344b4a20ddaddc398ed5e1d"],["/2022/08/25/webgl1/index.html","c52f83f98ea762fa3c80fb37edfbdb9e"],["/2022/08/31/react18/index.html","87759997013aa5e5c82a704bb541cc63"],["/2022/09/01/algorithm2/index.html","653b08b862b1638af17702e3ab9ed071"],["/2022/09/06/promise1/index.html","ec78facbd51fdce0b3d19e1697a7133c"],["/2022/09/06/vuerouterandvuex/index.html","b75958ea0e2dd39c374fb31c9d2f01ff"],["/2022/09/14/miniweixin/index.html","9223a086ab0c428123fecc8143f7b519"],["/2022/09/23/webgis1/index.html","5d3b89b66cd56ac5388be560e43efeb8"],["/2022/09/24/vue32/index.html","bed69a99c1933f556f3067d98a62f757"],["/2022/09/27/go1/index.html","855098eaa2afdd19ce885e7f085a6df2"],["/2022/10/07/canvas1/index.html","ee4106f78818c5717859b4238d53aeb3"],["/2022/10/09/mobile1/index.html","8957e7dd7740be765afaeb50c23efa3b"],["/2022/10/17/work1/index.html","e4bb19bace5effa84be1473e5f85c91d"],["/about/index.html","a0561deeb409ef60952eb9cc08c85da4"],["/archives/2022/05/index.html","b55ff11320f42199e0bc6b63c1de183b"],["/archives/2022/05/page/2/index.html","a0a6555fcf588e7e61191fd3a9e83aa6"],["/archives/2022/06/index.html","6576c12b166cda4b21509aebcb4106b8"],["/archives/2022/07/index.html","9f8dc4e6fc110c104392a34d93d20085"],["/archives/2022/08/index.html","021e661aabcfc7b6cfc5d4d17bfe9f82"],["/archives/2022/09/index.html","3ba609be6d296cc81573b5145528ed9d"],["/archives/2022/10/index.html","976f5e2acaeac7840a8edfae1aedcaf0"],["/archives/2022/index.html","733796d46d9972ed2adc24ff85c2f0a1"],["/archives/2022/page/2/index.html","5eb56732274364cf7ef49ee4aa8c4d78"],["/archives/2022/page/3/index.html","b1199207a1e56eb398d6cd88197b99f2"],["/archives/2022/page/4/index.html","d3ad5530a94678cedfd56728ec98e5c8"],["/archives/index.html","d58e7b7ec3c2dd7b2f056456d69218bb"],["/archives/page/2/index.html","3bb3bcf6ebc2b873a5858924e441f36f"],["/archives/page/3/index.html","13cc291ce91b3796f7b9a8a62ca67f42"],["/archives/page/4/index.html","e8b9c6338fb67eae7306b344493fa15c"],["/books/index.html","32457c8a781da88d2a451c8d285ae088"],["/categories/Go/index.html","981f39e3912625f7659997106739cfa5"],["/categories/HaoUI/index.html","c6f80664945a1457b5c75fd9a876a1fa"],["/categories/Node/index.html","8f82269bd88e58900dfe63c8799f48f5"],["/categories/React/index.html","734ef435a9d9b65f538038c471c40c5b"],["/categories/WebGIS/index.html","ace1bd6a8b622877f4e561a8375e1834"],["/categories/Webpack/index.html","a2d9ca9619f918758888d76b2ba2acbb"],["/categories/canvas/index.html","55a82084ec5fc169fd2a991eb125d85a"],["/categories/index.html","b9ba94913b8d095a1a32dc0340d114a7"],["/categories/promise/index.html","91f735697b6e31b030451e281b5ff7ae"],["/categories/typescript/index.html","e83f5e6b9a582fc804cef2b661bffa6e"],["/categories/utils/index.html","826c14877ce1e93beeb5218e236a0abc"],["/categories/vite/index.html","a9c0eef9879f802073c58e47a2514040"],["/categories/vue/index.html","98d1712a863239697cf3c3d744b9bf1d"],["/categories/vue3/index.html","3ceb0fd260f3c60adb89a4f996cf6398"],["/categories/vue框架源码/index.html","ec4ae4fc99e4c2c3b509056db1010b90"],["/categories/webGL/index.html","6d8d816930d13f8e0f208105e26ab7c9"],["/categories/websocket/index.html","ecb9a9d9e38a32ee4f97fb13ea0373cd"],["/categories/工作日志/index.html","e4f7c038fce520628aed8f607054b6a7"],["/categories/微信小程序/index.html","c28349bb18d6665d0475ab0a3eca4c3a"],["/categories/数据库mysql的学习/index.html","858e3b87de1c97412e98a0302481bc2e"],["/categories/数据结构与算法/index.html","7f793c96a8dd9bdcc0f90f8bbb66c350"],["/categories/移动端适配/index.html","3bb044a567809e528cd76e906028f03f"],["/categories/组件封装/index.html","befb16de7026744425ee6fb6d47bd830"],["/categories/面试/index.html","42fd54e2987c6344ce56ea2f9621bfd9"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","45a5eae698216919106f4b973d60627b"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","8f463e073078f2a58abe6225fbb98268"],["/page/2/index.html","2304968bfb77aecd6a95a1df3248e6ff"],["/page/3/index.html","87f6bcc38b3b87589f682aba29613643"],["/repository/index.html","daac006434cc9ec4edcc35c46bd334d6"],["/sw-register.js","ac147028943d38b7e29b52014f2b6fb2"],["/tags/Go/index.html","630bb2b3d5676eff4943f2acf41c8e24"],["/tags/JS方法技巧/index.html","80874dd0d525a64ba9e62aa447031c22"],["/tags/Node学习/index.html","82ce53ff946188b0c5e1cf78f2cd3b35"],["/tags/React/index.html","e3c9c37b7004cf224445bf76ad21d46f"],["/tags/Vue2源码/index.html","bb600c5cc1b6e761dc107568e6d3feed"],["/tags/WebGIS/index.html","e4505bad497867d643fa7bafbe64e433"],["/tags/Webpack学习/index.html","e9e6bad7ed150f65abdaaee8789de9ca"],["/tags/canvas/index.html","191a9014380f75b9382bf583126bac47"],["/tags/index.html","ab6695732d74228719775f74a3c9bdd1"],["/tags/mysql/index.html","b609cb9cf55ed64ec8011313b4fb0122"],["/tags/promise/index.html","f1c682f681882accbd759bb05e9f3f99"],["/tags/ts/index.html","9e08a5143351a71c061a62ced363712a"],["/tags/vite/index.html","26da96bc4b9c1d798c7b68617c20941a"],["/tags/vue/index.html","0471181952c024d0afdb73e3c54e795b"],["/tags/vue3/index.html","73c1d05f59964b828f48f0d7df283916"],["/tags/webGL/index.html","309ca77af32bedfa01cd2febb6460b7d"],["/tags/websocket/index.html","eefda2da23775442435d329b8e87e3d5"],["/tags/个人组件库/index.html","5add45c7b83b381186b49b15dd5e2221"],["/tags/工作日志/index.html","6d53b2810781d708aeb894ff7048e74c"],["/tags/微信小程序/index.html","40093b357444ab86025856f37ad8cca2"],["/tags/数据结构与算法/index.html","34875b195d64d267105071de5d1625f9"],["/tags/数据结构与算法1/index.html","b3180054e972aba372b1bc2bde3623dd"],["/tags/移动端适配/index.html","d166b7ec5ba2450efad3e0c50717ede6"],["/tags/组件封装/index.html","43165268bdcadd9421541bc07664a57c"],["/tags/面试题/index.html","14f12fc60f11083759e5f8bc77cc5dda"]];
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
