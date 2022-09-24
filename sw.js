/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","83bd273f84e2167748002c1d8079a786"],["/2022/05/13/HaoUI2/index.html","bd2b177e31b98f27108defaf29f60165"],["/2022/05/13/Node1/index.html","debec3c87bd5924a480678e1e0a21cf5"],["/2022/05/14/Face/index.html","6fa253f81937b2df487ed73f4931d9c8"],["/2022/05/14/algorithm1/index.html","9efc07f483ecb944ce185e84d038d9b2"],["/2022/05/15/Node2/index.html","e0873fca17d1ba02401fec9abf182f5a"],["/2022/05/18/Component1/index.html","ac1721a94dccde6053bed93f71440151"],["/2022/05/18/tips1/index.html","9cb6e48aba306e310ea2ebaaf3a51040"],["/2022/05/23/Node3/index.html","8e2587f02f7020d2b0d9554d29a72c43"],["/2022/05/28/Node4/index.html","906be74a490b776145118f0a8d2a9031"],["/2022/05/28/webpack1/index.html","a14ebd6f9cf93ede163e19887614d6a3"],["/2022/05/30/Node5/index.html","7d6895ba91cd19b14e49e178ec73a381"],["/2022/06/04/Node6/index.html","315ae5e75aa2201504598aa352816025"],["/2022/06/12/mysql1/index.html","fa5e7885ebab7315fe777e8b6ac89c78"],["/2022/06/12/websocket1/index.html","c36199b2812a9d66aff4f53090b51663"],["/2022/06/26/Face2/index.html","9e0f5813abc34dccfb603f0fc239c3f8"],["/2022/07/02/vue2code1/index.html","e9b3dd7fea5d5be88612b5bd2f1e3d0f"],["/2022/07/10/tsstudy1/index.html","7657a0f6eed2d061d7816147a12c4fe6"],["/2022/08/24/vite1/index.html","b0055ebaa4e4807679829ff89f31328e"],["/2022/08/25/vue31/index.html","71c7be5926a537d50d3a97d4c4bb6382"],["/2022/08/25/webgl1/index.html","a909f24ea7a49dc44b517737f1a95886"],["/2022/08/31/react18/index.html","485d156e664d1991f884b6fbf178f199"],["/2022/09/01/algorithm2/index.html","83ae478b6b36cfb3ab9997e443301119"],["/2022/09/06/promise1/index.html","4450926ce85ee2f8319cb9b4215918e8"],["/2022/09/06/vuerouterandvuex/index.html","2f4d7dd136389b0f703711a3ca7a4632"],["/2022/09/14/miniweixin/index.html","34af25c9ba1bf19faef4746d6b625b34"],["/2022/09/23/webgis1/index.html","57c650a13162032aee0f61e63ed168cb"],["/2022/09/24/vue32/index.html","d839ba8741a9bf75a99e431b129adb0d"],["/about/index.html","80c14820a3fade68a736cdd0368cb874"],["/archives/2022/05/index.html","544bec2494fe1a33071d6ba3380a5036"],["/archives/2022/05/page/2/index.html","da20dc5aa727c3987587d54b099a261b"],["/archives/2022/06/index.html","7ec6227bcc12688a2fc203e8d768e09a"],["/archives/2022/07/index.html","76b3f30f09689ed96c2abc7e23172f5d"],["/archives/2022/08/index.html","98f9fadfa3179fd88b4ada0ccd80a54c"],["/archives/2022/09/index.html","818ffc7164fb491ca5d10d9d59565b9b"],["/archives/2022/index.html","12e14d74a91a40bf4fdd9403dba9133f"],["/archives/2022/page/2/index.html","c663dccde1142a51491e2f7e5831b878"],["/archives/2022/page/3/index.html","1598012362fe6f43590ba0de95a4430b"],["/archives/index.html","25ab93d1058295baa1c54f3abd2e5a96"],["/archives/page/2/index.html","ace04b6049248a06ec0c36f5f9a0bcc6"],["/archives/page/3/index.html","749f9999b9f3170f66aeaaf627911035"],["/books/index.html","1f8ec35682ff5e4578a538f889473766"],["/categories/HaoUI/index.html","09021686a034f9e2f6cda8d1fdc4043f"],["/categories/Node/index.html","055883299c5688c6fd86869246e42d28"],["/categories/React/index.html","83cef4a88a2b418c283fa58df8fa8a00"],["/categories/WebGIS/index.html","86683b6f59a2fb10ee78c451db4a4bc3"],["/categories/Webpack/index.html","1a20dc5c7817bdf5c85289d0c9b56edb"],["/categories/index.html","b577db80fb1392bcadea59ca6554ac42"],["/categories/promise/index.html","7f5d054cc8d808086dd9f80f0d89a63a"],["/categories/typescript/index.html","3a116f9e20a587ea9746c90e043d5fd6"],["/categories/utils/index.html","fe72f10cb1cb9d833cc9903fa630017b"],["/categories/vite/index.html","6525bc46315bb0d8c9dcdcb08340301d"],["/categories/vue/index.html","658e2c8b1cc97816d5483466490f2913"],["/categories/vue3/index.html","299b6a865e6eff4bbefbf62e5301792a"],["/categories/vue框架源码/index.html","ac6590cd57664463b3d30b080993f585"],["/categories/webGL/index.html","e724ad2ad9f5a12b1e6f321e5d683b77"],["/categories/websocket/index.html","e4330ec2c0342f29f94ba5e3f503cebb"],["/categories/微信小程序/index.html","dfe52945cdd51a9d238ac6f1875bae0d"],["/categories/数据库mysql的学习/index.html","115e5d8d9aec6cce8dfaaa08ecb64d3d"],["/categories/数据结构与算法/index.html","775534dd584de3037bdb3d0ea7e790f4"],["/categories/组件封装/index.html","00948797d89ce9ab536a4391efd4dac5"],["/categories/面试/index.html","c1092e5bddc1c8cf7155c5e21930bbc7"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","8f3727237b790362ddea27ef0bd0b101"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","936f8d5356f8f957b04064247f2b43e4"],["/page/2/index.html","073366644d7fee0356f03b4aed56f947"],["/page/3/index.html","82eb5f5929628f2924e61569b4757e76"],["/repository/index.html","d75c347643b472b45165d4831b750144"],["/sw-register.js","3f4c8b2d1e9e566945ed9dab73a65df4"],["/tags/JS方法技巧/index.html","2f1de77a1be4662a60bf24a9a0f43bef"],["/tags/Node学习/index.html","7581e261dc7e45b6df97986f4ab6db19"],["/tags/React/index.html","872af2da77ecbe094912ad2ac32a18a3"],["/tags/Vue2源码/index.html","6c227bc79f81705c6e051a17fe83e782"],["/tags/WebGIS/index.html","e26e7e031f838e20ec0496cb83b56a6a"],["/tags/Webpack学习/index.html","6687b783d5fe512f42a41fc951fd8a70"],["/tags/index.html","4661320793713ce0be4f302b07991152"],["/tags/mysql/index.html","14306e5ea5fcf45dde8218c2a5f1a3e0"],["/tags/promise/index.html","5e0708503f34ccb3e0b76962e4d5a8b8"],["/tags/ts/index.html","165fa9375a69383e7a5466c5b1c47ebe"],["/tags/vite/index.html","0940e2ce33adaf675679a86d964d81a6"],["/tags/vue/index.html","6a5be7080f15b88b588100ca377ebeab"],["/tags/vue3/index.html","648379aaea416bd9498dedf9572995e4"],["/tags/webGL/index.html","abb0057074ca967f949971f015222cff"],["/tags/websocket/index.html","b9cf4f03c068aa2060647e0593c461fe"],["/tags/个人组件库/index.html","a549c6aa4a89411187142cfc4525509f"],["/tags/微信小程序/index.html","2feb6cadc25333f912735b87ba4e324b"],["/tags/数据结构与算法/index.html","3e4a3189bb190bc9e52c64519dfe1e62"],["/tags/数据结构与算法1/index.html","339a7e71db98c35b85c4e1d290d4578c"],["/tags/组件封装/index.html","f7a96ef2b230a2a2941b317b9d0dc8cb"],["/tags/面试题/index.html","24e04f092fe839bb116c1a6a857a12ed"]];
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
