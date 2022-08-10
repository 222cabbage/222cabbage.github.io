/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","85c3aa7e2563e13189bfeddb40574a93"],["/2022/05/13/HaoUI2/index.html","7f844dc7cb26a7d81223a9b0af8455c6"],["/2022/05/13/Node1/index.html","6e2f5019aaf0e33e516b14d96339dfb1"],["/2022/05/14/Face/index.html","e26d0abfc78fda823883d35c6f2854b3"],["/2022/05/14/algorithm1/index.html","c0db662c3168b00c532fd01779a45f7e"],["/2022/05/15/Node2/index.html","32804d1c31ba93d5a743e1edbd7c0713"],["/2022/05/18/Component1/index.html","69b718404023515b5fa95762dea8170a"],["/2022/05/18/tips1/index.html","19a3d46c3882bd94df830dd81fc6e484"],["/2022/05/23/Node3/index.html","f4f7cd33aea8e675c9ef2941b1fedda4"],["/2022/05/28/Node4/index.html","6d530078c909dc1ba8cd55a52c4e3a07"],["/2022/05/28/webpack1/index.html","579f3459db40226c412169443e5bf72a"],["/2022/05/30/Node5/index.html","c68952dbea08c83175af321b1bcb8d97"],["/2022/06/04/Node6/index.html","f03e216328a8d03746f9b2f3e4877d7d"],["/2022/06/12/mysql1/index.html","623454da7a237ef2538400046740c8cc"],["/2022/06/12/websocket1/index.html","9014671f5ac76f0d41222795ffbde6f7"],["/2022/06/26/Face2/index.html","e8e572a5cada3669855c033763ffd3f3"],["/2022/07/02/vue2code1/index.html","0ede5b4a6ead3c699db0f382976f4b4b"],["/2022/07/10/tsstudy1/index.html","c7764c355f424b722fb3910324036288"],["/about/index.html","c3e59c509e1eef978a8e24c411c3ace3"],["/archives/2022/05/index.html","d4cb7ce3769720d17a13aff3c80344fa"],["/archives/2022/05/page/2/index.html","ee1cb22798545b1512318315a3914c8e"],["/archives/2022/06/index.html","995fa259a6fe857bafeb792f6bbb6fdb"],["/archives/2022/07/index.html","fc277f8921b3f89a18a01d3e21f16623"],["/archives/2022/index.html","74cbef3fd987e69ec51993e9b90f52c9"],["/archives/2022/page/2/index.html","e258175c894b3d4587014976e39f1988"],["/archives/index.html","396794bc98e725f8848ad2057e06bd8e"],["/archives/page/2/index.html","b9c432178acf9a65551df159de51659a"],["/books/index.html","d5cc5a94658f17f806e4def92da5d855"],["/categories/HaoUI/index.html","c1374f05fb756eef7838cafb72586337"],["/categories/Node/index.html","66f57042997ab5ad8d0e4e08d008127d"],["/categories/Webpack/index.html","cc11df82370c73206eda2a9fca3f233c"],["/categories/index.html","54370611aaa880ece8b70812ab79bd6a"],["/categories/typescript/index.html","6df92b7686cb401d4fb2fd8c413fd508"],["/categories/utils/index.html","3efe6aceff1faee5bcd3f06ddf9bf8e4"],["/categories/vue框架源码/index.html","d5c90b5aea4548e424ed4fc6e1cf4304"],["/categories/websocket/index.html","25ed2b97699809b26e5bf7bb25ce58f9"],["/categories/数据库mysql的学习/index.html","a5996c259b5d8803890ddccbcb5e84d0"],["/categories/数据结构与算法/index.html","7d184a9d8d493bfeec35bc532d6e5a5e"],["/categories/组件封装/index.html","d11c9a551c4107550d91552cf9ca0231"],["/categories/面试/index.html","1a8d15d50a603455e0d86ee0fcf9faaf"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","0cfd434e511e8ce2847274a479679be9"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","47c523d77d0882d45eeead7795419be1"],["/page/2/index.html","92492f837232e395f21795a91ff2a3ce"],["/repository/index.html","e50cda5041fdfa3144d617b88f14fd38"],["/sw-register.js","527bd66e6a3adbf99c652f2db2822f69"],["/tags/JS方法技巧/index.html","a4d097eae1da96301098daa8ccfe2a21"],["/tags/Node学习/index.html","37e2f51a6dce556e89c60709c605fe85"],["/tags/Vue2源码/index.html","4c349777dfd05896d072b3a9358e1776"],["/tags/Webpack学习/index.html","db54aabe83797070d73f3182e81abbfa"],["/tags/index.html","a3ed462d5bc30042035d39a00010386d"],["/tags/mysql/index.html","f0445bfd1c06459101614e20e23bd9e6"],["/tags/ts/index.html","7f1b591a8928d40477ca7ba6743e91e6"],["/tags/websocket/index.html","9facd952b509d28e80cf9a430ebbdff5"],["/tags/个人组件库/index.html","af612d816b6b60c7dab87287330453a3"],["/tags/数据结构与算法/index.html","9656d74e49bb3817f648c71226c7610e"],["/tags/组件封装/index.html","d2f0e4a07dd575394b03133e6964dd13"],["/tags/面试题/index.html","1613ed83c4f97af84dbb499b9e52ee6c"]];
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
