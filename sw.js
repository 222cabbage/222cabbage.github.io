/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","5d16310e32200b8bf070eaf44e2d1550"],["/2022/05/13/HaoUI2/index.html","03245d524ca9f79273b63fae50892282"],["/2022/05/13/Node1/index.html","0748cf1ffc4202a4a1263f15e794bcde"],["/2022/05/14/Face/index.html","d8c8de160fe2b2bc7b8430527c49741f"],["/2022/05/14/algorithm1/index.html","9f260e5dcdedaf4930878e0cf59ad28e"],["/2022/05/15/Node2/index.html","530c5153a7ec843f8ba149205aa79a11"],["/2022/05/18/Component1/index.html","f75e1198f2aafa508be0eafe675ac981"],["/2022/05/18/tips1/index.html","5a79a181401c7056a28cf298e830de76"],["/2022/05/23/Node3/index.html","545eedda1215f5537735e058ba09a215"],["/2022/05/28/Node4/index.html","a8fa3eb1b99e5daa50e234e36e24fb4d"],["/2022/05/28/webpack1/index.html","7e7532d6f3472ebce0cba4cc52955aa5"],["/2022/05/30/Node5/index.html","9fc75772732635b8c42ec924ae7c416a"],["/2022/06/04/Node6/index.html","5c409bc8332d87ebf912a73f518b0966"],["/2022/06/12/mysql1/index.html","0d5935cbcab1d39a12e212c5d409138c"],["/2022/06/12/websocket1/index.html","34b0d8815cfcf9e7fff525713a906e9f"],["/2022/06/26/Face2/index.html","eeb6fdf2774a7724ea664e69cb19a076"],["/2022/07/02/vue2code1/index.html","949191060e76beb80f5060bc8c40e7d2"],["/2022/07/10/tsstudy1/index.html","2cae9f3cc760d6d28a4c22ab0f948288"],["/2022/08/24/vite1/index.html","ff74b11f76e3fdbc31601b7dcc1ce8b4"],["/2022/08/25/vue31/index.html","ef44b3a4a87bed8b9ae92fb4e57a63ea"],["/2022/08/25/webgl1/index.html","2c13a02596b8ec11a84da1485a2d2447"],["/2022/08/31/react18/index.html","99f0fa037f246589450c5d8a493f4d51"],["/2022/09/01/algorithm2/index.html","eb03d12367e9f2337002f9f312657027"],["/2022/09/06/promise1/index.html","4f6a53e0e1fe99ab8a45170e2994ed5b"],["/2022/09/06/vuerouterandvuex/index.html","4c3749508526d4c4c3e210c4c122a179"],["/2022/09/14/miniweixin/index.html","84cca8d311e19e4730e924014cb8ca5c"],["/2022/09/23/webgis1/index.html","3f103c8cb9a27ca6491d43e3da5094a9"],["/2022/09/24/vue32/index.html","adf44bd7994309365bafdc1c926c6f85"],["/2022/09/27/go1/index.html","9f34f43800fd33a36e3218b23f459ee9"],["/2022/10/07/canvas1/index.html","9faa8189204f6cdad13b790d41e5009a"],["/2022/10/09/mobile1/index.html","ba46ac1155512c9e27b724f5a615905f"],["/2022/10/17/work1/index.html","f602c09983e5d0cd93b6afd522329d8e"],["/2022/10/19/rn1/index.html","af33c720b8a999779799794ba3266b76"],["/2022/12/01/reactnative/index.html","1141fd1cdf40838c6fc90d9b9e03b9f8"],["/2022/12/07/realizationvue/index.html","89c135fa295e2ec4d20d7439bd6476a1"],["/2022/12/11/mongostudy/index.html","6783f8a26637a7f260051c6870521feb"],["/2024/10/20/html1/index.html","da3565b86818d5cb09f6d7d0a2057b4f"],["/2024/10/21/html2/index.html","a9e82b03e0fc58cc8dc5b77eddfe364b"],["/2024/10/21/html3/index.html","cde19f9b8e3645e6da152b8d111e3ad5"],["/2024/10/21/html4/index.html","f65b561bd13b8869ab5309b960b24aa6"],["/2024/10/21/html5/index.html","afdc06a7938f8047e7521e10842a9479"],["/2024/10/22/babel1/index.html","c48f2fbc5b41cf4219924b486424d526"],["/2024/10/22/git1/index.html","0ba8feaefb881daac4868ef949a5e9a7"],["/2024/10/23/network1/index.html","c84bc1b54cb41f2a6758f67e3a4cfb3c"],["/about/index.html","8d10181bfb47299b3e2594f7a9d18c20"],["/archives/2022/05/index.html","3b13d89c0f7027f2e6905b8509b1a36c"],["/archives/2022/05/page/2/index.html","3b13d89c0f7027f2e6905b8509b1a36c"],["/archives/2022/06/index.html","477033b2b26c606486ac1445f5f7f669"],["/archives/2022/07/index.html","5e6699e3bb64870bc4c84b348a2dec87"],["/archives/2022/08/index.html","4504010726c8901e95835f895648cd50"],["/archives/2022/09/index.html","dc2513611e6dfb48fcab70945146b7e2"],["/archives/2022/10/index.html","86d46f35597e487026eda543542fbf1b"],["/archives/2022/12/index.html","46bcfd86f35203e38fd9d771ef3532c2"],["/archives/2022/index.html","4bef0826e59fd5e8e59286c4b1bb148a"],["/archives/2022/page/2/index.html","4bef0826e59fd5e8e59286c4b1bb148a"],["/archives/2022/page/3/index.html","4bef0826e59fd5e8e59286c4b1bb148a"],["/archives/2022/page/4/index.html","4bef0826e59fd5e8e59286c4b1bb148a"],["/archives/2024/10/index.html","2bc95db2ca6d04445e1ce0431abab9ea"],["/archives/2024/index.html","8f4a0dbff8056b1b5d3976bf6013a3fa"],["/archives/index.html","8ce41ea27911f4492455ce1f4d880447"],["/archives/page/2/index.html","8ce41ea27911f4492455ce1f4d880447"],["/archives/page/3/index.html","8ce41ea27911f4492455ce1f4d880447"],["/archives/page/4/index.html","8ce41ea27911f4492455ce1f4d880447"],["/archives/page/5/index.html","8ce41ea27911f4492455ce1f4d880447"],["/books/index.html","155c390403bdb45c347a2d982852eb14"],["/categories/Go/index.html","414dc692fa17b59d13915cf299baf2a1"],["/categories/HaoUI/index.html","65ec5b8c56ee32f62b9b2b251d0d5920"],["/categories/Node/index.html","2149895c5bbdb05ad7a7e2f08f2d3de9"],["/categories/React/index.html","29f9751787c143cb42085d2541e26266"],["/categories/WebGIS/index.html","0372d7699fcf9bc919a82fe223875e5c"],["/categories/Webpack/index.html","2d81223f102485a4dc416318e8c076b4"],["/categories/babel/index.html","69835e9a3a269e988c7b45c25393e016"],["/categories/canvas/index.html","c3c39a296996f59d7b78da06fb1d3159"],["/categories/git/index.html","c3c55aa4f0ea642dc131699f10ba1cc2"],["/categories/html5/index.html","8c822fbb8172c88142a0d37237d39ef4"],["/categories/index.html","eb534461f8dc5a271d773099acb3c138"],["/categories/mongo/index.html","b7b4aa5091237457e30d9cfbf50f5e5c"],["/categories/promise/index.html","3218c198ab9339cff7d326cc833e052f"],["/categories/react-native/index.html","aeb514ff95aa41eea1ef6576df4538c0"],["/categories/typescript/index.html","d4eeb57598a1fe5c56b5be77ed2ac430"],["/categories/utils/index.html","49241728a27f4c4fb1b6fce4fa599241"],["/categories/vite/index.html","301e5371f54fcb3f0b48fdce99e927e1"],["/categories/vue/index.html","7e427e84c6706aa6a2bf25e9c4ff9356"],["/categories/vue3/index.html","44f4a9ff55de14147edcf7ab5da1baa4"],["/categories/vue实现/index.html","9684c1a8932369d800dd9c87cad86316"],["/categories/vue框架源码/index.html","120a11caf20e646d11bc1f876dd30752"],["/categories/webGL/index.html","e401bc3129aab14fb09eee6f25d1cd9a"],["/categories/websocket/index.html","e8623c647d43094647570cf23cbe00a1"],["/categories/工作日志/index.html","2ef24779eb235ae0a3bcb45071f1a951"],["/categories/微信小程序/index.html","8e58dfb71b196e73806fda9eaddd7c96"],["/categories/数据库mysql的学习/index.html","6ab8599c7e349a763e8fac267dab899b"],["/categories/数据结构与算法/index.html","f8e7999fc7e196a40b057136dd4dc570"],["/categories/移动端适配/index.html","dc2532fc576fd2f3a0637fdc96cb6c3c"],["/categories/组件封装/index.html","adf65759dbc83e02a13ad16c0019c0be"],["/categories/计算机网路/index.html","7f22771ec2964e9ca283d521e6fb86ca"],["/categories/面试/index.html","c4ba44cca64a607ea4855a2612531348"],["/css/base.css","00ed97040d8a74c76b8561bc19aa2b88"],["/css/color-scheme.css","c752a3be21b5e99bf4e074054c90365b"],["/css/comments.css","025b93b66d02556ebc8a6591703d1f02"],["/css/figcaption/mac-block.css","c3dc13dea3c676bc5325bb8f4ad0495b"],["/css/github-markdown.css","87658421f0ca778e7404eae1c5817881"],["/css/highlight.css","66965534ddd0cada9f8fba6a9d2356ce"],["/images/avatar.png","dbe3ea01cf6547b7b69c76b7332833b0"],["/images/favicon.png","fb12e6ce0beb9ac94f79406f8486398e"],["/index.html","8207fb71a6e9767a5e13bcdd6cdeb4cf"],["/js/activeNav.js","f2d8a8a1677ca19d0fee2c020d72fd3b"],["/js/backtotop.js","f098b9a99d5f9b911c8af9660ee9e030"],["/js/catalog.js","15ff2d6486398002859a9ed15b61d8c1"],["/js/codeCopy.js","bc467e2442c04f3b1a55326a6e8ea2a2"],["/js/colorscheme.js","f97ac1ab6267a0a2f8c84c2b6ef7cddd"],["/js/fancybox.js","99b78918fe2d929ca335f16dd4ad5f86"],["/js/search.js","e617a14a240c30c49633e51fe0adc1ed"],["/js/shares.js","a05736f96e13f2a5ac9dec0ced11e831"],["/links/index.html","472081d6dbc5c90e67a4bbc7d4654de4"],["/page/2/index.html","baa99358e1f2181c2af2df1884c80aa5"],["/page/3/index.html","a2f0d7a9e81cd2507e49cf66297b631d"],["/page/4/index.html","6207ab1b32bf34b2dbcb9c94b64433e7"],["/plugins/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/plugins/gitalk.css","8476031a633732dff9875feae0890070"],["/plugins/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/plugins/jquery.fancybox.min.css","0b8a5b13275298e7568eb7f0c40865d2"],["/plugins/jquery.fancybox.min.js","2e62b54f794ae2fae6a69feaad8f0820"],["/plugins/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/plugins/mathjax/tex-chtml.js","dff7ce905f13c71637cd9931e4b3d6b8"],["/plugins/valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/plugins/waline.js","b7f2ccf1204f384ec27146922c889ec9"],["/repository/index.html","508b521400387bfebe812865877a3ac0"],["/sw-register.js","446848c6bb672a3086ca03b1082ef5c0"],["/tags/Go/index.html","dba4a97cb0dc71c7f6c2c631de838698"],["/tags/JS方法技巧/index.html","3b26b5bebd1d848a8a331e307ae43246"],["/tags/Node学习/index.html","c71ab93704043891e7b6f3cd6941125a"],["/tags/React/index.html","0de5eca35de791b6e124232133f615bd"],["/tags/Vue2源码/index.html","7d701838f4b21007e18f5ee0718ad634"],["/tags/WebGIS/index.html","5b618c9d60203ce277e6d01f48d8a999"],["/tags/Webpack学习/index.html","547cfd5b575d8e3f63b41b7dce9e3b10"],["/tags/babel/index.html","9d6ac5abcae53d0d73837d98deee0d21"],["/tags/canvas/index.html","a9cd5928b79262a9237bf484dd2817f7"],["/tags/git/index.html","c4ea64ace44db41a4ee70bb1780b9eb4"],["/tags/html5相关知识/index.html","565ed2ab511cefa39c078547f6bc3c82"],["/tags/index.html","dc7465f78a7f1b3befcec926f215a23a"],["/tags/mongo/index.html","68fb5a2b894a96936cef2e17efdc22bf"],["/tags/mysql/index.html","7442706c94870610d653da8dad829cb2"],["/tags/promise/index.html","6132c49b14fc1bcc304ae4cd41ad8d58"],["/tags/react-native/index.html","4dcb3a820c4c1507c79ebc0282148afe"],["/tags/ts/index.html","a58b963c6929db679934db16c6b2b3ae"],["/tags/vite/index.html","47853ca101bd92f7714c72777bfb86ac"],["/tags/vue/index.html","267fbbe884e2f876c63589cadd546225"],["/tags/vue3/index.html","279df75d275403f14a8aef91b256b989"],["/tags/vue实现/index.html","9156570111adb96846fc1dca4a50a328"],["/tags/webGL/index.html","c4d6cb31edd8dfd4204083e03d9eb53e"],["/tags/websocket/index.html","6851d8f8ed8a7f8de39645f57d5fe1e5"],["/tags/个人组件库/index.html","d9a6859f28d787e4a76e530e19f8804e"],["/tags/工作日志/index.html","02b6b07b2bf755ed7479e75351a3e7f6"],["/tags/微信小程序/index.html","6d8e1a0bede45620aba5eb67c3d8c67a"],["/tags/数据结构与算法/index.html","8fc7222e39fd945e4e2d7e8aee25f03f"],["/tags/数据结构与算法1/index.html","56c027296acc58fb726582e394b2b3dc"],["/tags/移动端适配/index.html","b720c799acd90fb6c8d7065f489a0b6b"],["/tags/组件封装/index.html","fe48273259c640d9fd90901a628031ba"],["/tags/计算机网路/index.html","c81cde8fc82aed18a1e7fe83e1c4019a"],["/tags/面试题/index.html","c385883a30aa7711d83da1d3e8a6cc52"]];
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
