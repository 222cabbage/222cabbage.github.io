/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","78f9fbe421fee5ec983b3b4d2c919aee"],["/2022/05/13/HaoUI2/index.html","d515e2a4d260c61d0c8b86b2b2a77e49"],["/2022/05/13/Node1/index.html","9d4f4e98b75fbb038a604f89c73822f2"],["/2022/05/14/Face/index.html","4f075288d483487fe82835bc89aa7cf6"],["/2022/05/14/algorithm1/index.html","063637a68b926cefb813ca61b7d7c976"],["/2022/05/15/Node2/index.html","e72a385f6aca3d1a305229e0482e8ae6"],["/2022/05/18/Component1/index.html","71be5531303e773beceb1136be5bdd67"],["/2022/05/18/tips1/index.html","3dbefea5e507f298560e2faada4daf2d"],["/2022/05/23/Node3/index.html","1aed96e7fb7480432c3812b07f849ca4"],["/2022/05/28/Node4/index.html","dd02d3f392c790208abb6d83bcee0c11"],["/2022/05/28/webpack1/index.html","36e9414de22d90e0326508218c4dc6a2"],["/2022/05/30/Node5/index.html","eca025a85a79eef3e5e3f6411076a501"],["/2022/06/04/Node6/index.html","bf5ec5afcfb30eeb1815219083c3a90f"],["/2022/06/12/mysql1/index.html","930645d83d1de3d0def56549e206f533"],["/2022/06/12/websocket1/index.html","bb5204381e14c88c570cea71b804224c"],["/2022/06/26/Face2/index.html","4b75c41d2895d0c06f424dd35432692f"],["/2022/07/02/vue2code1/index.html","f577a7c4d0ba26c85084d06a24cdcb0e"],["/about/index.html","de4df135d9e6b0b4da84ce23fa2e5b71"],["/archives/2022/05/index.html","03879a36af93219cf95084f3d0dfb4e3"],["/archives/2022/05/page/2/index.html","f61d83979e4d2db45e8b3ee67d1bea43"],["/archives/2022/06/index.html","8c0e5a932dd05f6f2359cda13f667f86"],["/archives/2022/07/index.html","ed5105a2bcb71eacc4e4b1cbe2e3d485"],["/archives/2022/index.html","ae751f018bc863867af852c83fa4e601"],["/archives/2022/page/2/index.html","fa75d707878888cee1dd2e205d7bb8fb"],["/archives/index.html","dfb0ae06862109ec2706b03c79875d45"],["/archives/page/2/index.html","1b5b6fa7534dba4b84fef145d60d7e3d"],["/books/index.html","35f2ae0d2cbdd1bc5d2d9e8a1d802922"],["/categories/HaoUI/index.html","7fd9fabdf94414e8ecd6cd3c876274c9"],["/categories/Node/index.html","4229d1ce5d92ad0335d1375c92dacc06"],["/categories/Webpack/index.html","b350ad5052f838fa0ed30e1709b7ce0c"],["/categories/index.html","301c5405c5675915787b78c2abb82a06"],["/categories/utils/index.html","78018dccceee205bb0c3278e3e8fc156"],["/categories/vue框架源码/index.html","dc27d20ad5455ec7c69c092b395c44a4"],["/categories/websocket/index.html","1ead1fc55549903cd8209c0cec25bb43"],["/categories/数据库mysql的学习/index.html","32d3034a7893ae37266fa3ca5748974d"],["/categories/数据结构与算法/index.html","eb574ea170600a1ac487e1b891d39c27"],["/categories/组件封装/index.html","6d58dd8f3ad223b57137a6ef0f893283"],["/categories/面试/index.html","c43eef50515ddb33102eabfba7281e39"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","276c8ee1bc11039d98a77a8f4703b53c"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","644357ba4986e23394311bd2fba67570"],["/page/2/index.html","6e0b00b497fd728630162205a1a2b3cd"],["/repository/index.html","f6ac4917fc28cdc744ae5561d3c07ea5"],["/sw-register.js","5e5c497f5bf96582600dd739ec692c10"],["/tags/JS方法技巧/index.html","993601ae26c03506591470b43488d812"],["/tags/Node学习/index.html","8bf9ae894870eda9eeaa696a605ee067"],["/tags/Vue2源码/index.html","c401dd4030ce94d0144e5e9224c09729"],["/tags/Webpack学习/index.html","4b850c1c605a0aeb2c49ead4ad048a46"],["/tags/index.html","0e8ca96b7c4d68a6198709bb06cbda71"],["/tags/mysql/index.html","7eebc1d7b0fa5166d935547908245846"],["/tags/websocket/index.html","89de3f9417252a37737a1cdf67020b6b"],["/tags/个人组件库/index.html","33ae37cde6c619582ddb74d88f9a2a8f"],["/tags/数据结构与算法/index.html","1fcbf708af3f804da45680da0b6af986"],["/tags/组件封装/index.html","e5b629b8052844307caafa02670aa02f"],["/tags/面试题/index.html","2404848b6a291e9f93ad898a7917a297"]];
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
