/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","5e4a05161a6ad5aa35f3b406ae552237"],["/2022/05/13/HaoUI2/index.html","1cc21790235153d4a9f160f8ebe83e4a"],["/2022/05/13/Node1/index.html","3c130687475ed76970b28837ec713e48"],["/2022/05/14/Face/index.html","098d732f875e931f9028437cb3f8e9b2"],["/2022/05/14/algorithm1/index.html","b4239a8ebea2b3c3087c473b4e684c68"],["/2022/05/15/Node2/index.html","7b326dad91c32d105441e4b6ea76e132"],["/2022/05/18/Component1/index.html","e26929b91493305c32d970d6ef13dbf4"],["/2022/05/18/tips1/index.html","ccd2bc09a7c34b4fa31a0e01089552bc"],["/2022/05/23/Node3/index.html","127d7f5db75850d1823d9f8e2a475495"],["/2022/05/28/Node4/index.html","015ba04ed5d53b83c8b6b90ed497a3e5"],["/2022/05/28/webpack1/index.html","59b31b944f19113bea21681d645398b7"],["/2022/05/30/Node5/index.html","a12fedfb09c15f7ff396e864aaf71bc6"],["/2022/06/04/Node6/index.html","ef0339c26b3c2d5921b4b5db4ba5025c"],["/2022/06/12/mysql1/index.html","82f0d7097cfdc4704cb8b7aff685912a"],["/2022/06/12/websocket1/index.html","079682c2f5b207433e6a35f850b52784"],["/2022/06/26/Face2/index.html","48509dedd4f6cda3c55f602474248289"],["/2022/07/02/vue2code1/index.html","b4130b92a27af2240871bf00beb17278"],["/2022/07/10/tsstudy1/index.html","eb55d886b569bde20a774a3c83a26f4a"],["/2022/08/24/vite1/index.html","da26d58768139593e50ed68b552b541e"],["/2022/08/25/vue31/index.html","6e2ecbae0a60aab419ba98b5c1ac5a34"],["/2022/08/25/webgl1/index.html","e774813f3091520ba8672ff00174dd33"],["/2022/08/31/react18/index.html","d811332265052327d6e468f2cb23c431"],["/2022/09/01/algorithm2/index.html","28cfc92010922bc4eb43f1a592725072"],["/2022/09/06/promise1/index.html","33fe48ad8102cc2543d2440587427258"],["/2022/09/06/vuerouterandvuex/index.html","28d95fc0571049b14a7da9195cd28090"],["/2022/09/14/miniweixin/index.html","53b7fd02764dbb99ffa53fa5fb3a2499"],["/2022/09/23/webgis1/index.html","5a8e9ceac8d7f8d567c7482b435365bc"],["/2022/09/24/vue32/index.html","2e97b85037e741acc50116030e5cf17f"],["/2022/09/27/go1/index.html","6366bf9d808aa5a699a51f0a701d2a76"],["/2022/10/07/canvas1/index.html","4484349dae13c203fff3d8b86645a22a"],["/about/index.html","758c0da60bb0fdfbbe6ed1002736e940"],["/archives/2022/05/index.html","c474c69eafabca7b1740f546f7ad07a1"],["/archives/2022/05/page/2/index.html","12596af2a193371029f93f8265ae90e4"],["/archives/2022/06/index.html","062be7c2f3967c2316e0ac4f04a0607b"],["/archives/2022/07/index.html","3b6852a24e9c0c5b6f88af703a2ff1b4"],["/archives/2022/08/index.html","f5e215db86dc105b8bd88fe5f8c0a1fa"],["/archives/2022/09/index.html","9b56a98dc1552befcfefe20787540d78"],["/archives/2022/10/index.html","97ae54bb9985276c0386d6610645a2e6"],["/archives/2022/index.html","8023bf07f5f0117552c11801ce702b2c"],["/archives/2022/page/2/index.html","7aa1798a18f48406a41cf2c886795af4"],["/archives/2022/page/3/index.html","e93e317b3a2316368752079d13128c36"],["/archives/index.html","f36e61ee254877655e441e4c6aedd619"],["/archives/page/2/index.html","5503e7c826d3211914a0aa41f1f31dc0"],["/archives/page/3/index.html","da8e9283ee99ecef371fa2fa25a2adb2"],["/books/index.html","cee9106d11b3ad2f84e608f3d029cb0d"],["/categories/Go/index.html","eff9421dfb88a233183d04fcf16c58e3"],["/categories/HaoUI/index.html","e8339a5239f5be48b75a121511230a01"],["/categories/Node/index.html","829587f8ed5fc8495a6a13fbc4b80012"],["/categories/React/index.html","e23e4d087d967527756961de24fd44cc"],["/categories/WebGIS/index.html","2854c2c39c9be8439165efd58c20b2f8"],["/categories/Webpack/index.html","57770cacf80fdebf3f21984db1302fba"],["/categories/canvas/index.html","ab334a2854bfa5b63f53ba294d3f6aa3"],["/categories/index.html","f80a3ebf56915cc521d23600f9d12a8a"],["/categories/promise/index.html","e9cebd21948bd455b890821669674ef4"],["/categories/typescript/index.html","4b839f95abf6ff575478fd47d9e4a8f2"],["/categories/utils/index.html","857fbe2b9eb1a659150e5e2327dae1ae"],["/categories/vite/index.html","51af786345f322bc7dad37ab3b68db99"],["/categories/vue/index.html","6c3108ada599a9289fb17727b7359c69"],["/categories/vue3/index.html","67a1d53ec0161695a705cc203aa4da8b"],["/categories/vue框架源码/index.html","0f7a0ff6ce1501c1f2bfe130c584b249"],["/categories/webGL/index.html","5cf5587b55fd54d1209ab97a02c162c5"],["/categories/websocket/index.html","6ab9cff4798462692c62a3a6f4a523e6"],["/categories/微信小程序/index.html","6e1d8acc211c0076527222c09c3f0cf8"],["/categories/数据库mysql的学习/index.html","50549ad5dc1618525806e1dfcc140014"],["/categories/数据结构与算法/index.html","0845d4eca78e63aef9ad73a0ce462e5b"],["/categories/组件封装/index.html","bbfa46ff481a124815d36e20280456ce"],["/categories/面试/index.html","05cc38de715bece06f1c01a41b48ec67"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","cb287e5146a00c80c4617a62465b3e68"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","2eb9118e02c287e345a960921620ea26"],["/page/2/index.html","4b7d2057cf56d4db11b4652ef19e988b"],["/page/3/index.html","7d55a618c57f256f937eb8f52b8f9a4a"],["/repository/index.html","3df35c1ac8f57de705bd092721af6569"],["/sw-register.js","8e0bfc2376b66c7d81cf724a8c6a848e"],["/tags/Go/index.html","46c9316109b8fb9b6ad10ed4c21ee2b4"],["/tags/JS方法技巧/index.html","e85b639e6ced42df50a2ca3a6088b7a1"],["/tags/Node学习/index.html","c831b85e7a7d2925dde241670a6a25f6"],["/tags/React/index.html","976eebde5e700ff67c2ccd24e3963ddf"],["/tags/Vue2源码/index.html","e614cc85fbafff8888736acd91559c56"],["/tags/WebGIS/index.html","933261a11aab866bb7864d7d8064e954"],["/tags/Webpack学习/index.html","7e0714a8c533a1b220a75151b687f29c"],["/tags/canvas/index.html","4915362171a927b8c215237813c47d44"],["/tags/index.html","f390c9f1428abe854282dbf17fb0c6bf"],["/tags/mysql/index.html","d550b79a9f6b167cb12266e1fc732cda"],["/tags/promise/index.html","cdf04b075eafd41094252e7f0043d305"],["/tags/ts/index.html","d8be29f6d17535a2188aac1e05167b07"],["/tags/vite/index.html","51b749c10d9cf293d9eb557e9e17bdc5"],["/tags/vue/index.html","6460955a9f6dee309d9ebd89614b6542"],["/tags/vue3/index.html","5f220596c4b04f607f0806c5ae9fea39"],["/tags/webGL/index.html","1d22543d1a1bdd245ab91d9f59ab7ff5"],["/tags/websocket/index.html","9a98dd60722e615b1aab9b3cf846688c"],["/tags/个人组件库/index.html","057bfd4f61efa5423a73e5dd58a973ae"],["/tags/微信小程序/index.html","4c2bc9a383688c016b80ec73d95a6615"],["/tags/数据结构与算法/index.html","3e5a741c6341a211702d63fd764b467a"],["/tags/数据结构与算法1/index.html","4820f50ef23f2e949f290aa91a4eb8b3"],["/tags/组件封装/index.html","3bfc7128a106b922f6a072a38d2eb9c0"],["/tags/面试题/index.html","e50b546e7d27278640166441625f1891"]];
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
