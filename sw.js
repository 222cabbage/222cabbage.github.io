/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","5d4f5324cd644450eebbc4438e660395"],["/2022/05/13/HaoUI2/index.html","274580db3a0b29dd001c844511945f07"],["/2022/05/13/Node1/index.html","5e661a0783ccccb9db707b3bfbf81e6b"],["/2022/05/14/Face/index.html","119561fa7a636b81f0cff068c096efdf"],["/2022/05/14/algorithm1/index.html","41ade4830287fece61a26c83d1f1e39c"],["/2022/05/15/Node2/index.html","516a9c64f602a59101ffe26b38e614bd"],["/2022/05/18/Component1/index.html","6e911d15e3343638822f122e1ab31813"],["/2022/05/18/tips1/index.html","d637c28c1182e65a1f0918b4da1a063e"],["/2022/05/23/Node3/index.html","fdfef98e8bbc0961c412e6850c3c1f78"],["/2022/05/28/Node4/index.html","481e561cb203d5f4df0bf37a52f79ec9"],["/2022/05/28/webpack1/index.html","5466b53f87e394a550b2459675dd91ad"],["/2022/05/30/Node5/index.html","3dc120b89d5de3abf963b2897215dc92"],["/2022/06/04/Node6/index.html","969f8b73a4a3e9f738f0f926c6bda5b3"],["/2022/06/12/mysql1/index.html","9b45f2ba1ee4d41062050b164ebe16fe"],["/2022/06/12/websocket1/index.html","a9ea56737387b41c1f5c73718c852364"],["/2022/06/26/Face2/index.html","cd0a2d6bda7d59451301c15bc211df81"],["/2022/07/02/vue2code1/index.html","3a8fc205a4ae06650534cd31c4fd5be7"],["/2022/07/10/tsstudy1/index.html","388745751cac7c0462ffe882734e2b6b"],["/2022/08/24/vite1/index.html","7cfec4d941d860c8ab606b72813679c4"],["/2022/08/25/vue31/index.html","7095dcf47419e2017eda14d0595e2602"],["/2022/08/25/webgl1/index.html","846c88463ee82263d4eabb25a6a624a8"],["/2022/08/31/react18/index.html","674c184d0169c9bf5b510eee0531c05f"],["/2022/09/01/algorithm2/index.html","2902809463e2c8f90346fccbab44cbeb"],["/2022/09/06/promise1/index.html","e2492e374d5ed519a245448a11e6ada2"],["/2022/09/06/vuerouterandvuex/index.html","cede11d94cc69d8b66ae98ff1be58bea"],["/2022/09/14/miniweixin/index.html","0c8b484f4b52e0be52c8b002a1cadf81"],["/2022/09/23/webgis1/index.html","96ca64f0fe9b4ac046808d8d39e325bf"],["/2022/09/24/vue32/index.html","b55025b05f2a0ba2040791d451bcdff0"],["/2022/09/27/go1/index.html","0e3586ef2eac723a8840d103fcf1267d"],["/2022/10/07/canvas1/index.html","2ff782743588c88523e170202df38d95"],["/2022/10/09/mobile1/index.html","cbcfbeacacab81e7ae44e6ee1cea7f5a"],["/2022/10/17/work1/index.html","24af3aa4964dbcd9c22e400708f5a7ea"],["/2022/10/19/rn1/index.html","dbbb9e8eaee136f9e886f85b9238a2a5"],["/2022/12/01/reactnative/index.html","8ddd914e4cd62b35787c2ffcdf79cc54"],["/2022/12/07/realizationvue/index.html","6fa7736e54dc245c63e692249e605fc0"],["/2022/12/11/mongostudy/index.html","ab9b8bf73682ad79365942f6ce7ded04"],["/2024/10/20/html1/index.html","0bb8049192cb107430f807f37bfd4f9c"],["/2024/10/21/html2/index.html","2bcea49f93b1827eaf60fdb4589f3733"],["/2024/10/21/html3/index.html","4de1c63727ab27c8c5669f53b6e5c613"],["/2024/10/21/html4/index.html","f21030d210c78cbb29229442f017596b"],["/2024/10/21/html5/index.html","c0ef7f8fc5241127aeedd7e58d34e8b0"],["/2024/10/22/babel1/index.html","38be58d0ea448630690dd8ee6e0adc41"],["/2024/10/22/git1/index.html","6317a5b51757c76327d6b87c7cabfa9c"],["/2024/10/23/network1/index.html","28e945a95fa473caeaae055944cf7b1d"],["/about/index.html","ea3b325aef6ec0fb708f30771a694291"],["/archives/2022/05/index.html","91ba79a8d823078cfd1aef1d28c5bcac"],["/archives/2022/05/page/2/index.html","4c3b10d8d635ce898d93898c330639ff"],["/archives/2022/06/index.html","efc4b5171c40ee4bd114d27d2f368081"],["/archives/2022/07/index.html","b699c1e4e5115f50a6f6c7ca29e9a781"],["/archives/2022/08/index.html","cc6c05894c816f80e83864988e6b98e8"],["/archives/2022/09/index.html","0b44a3d683f3dec0e7294e6a688d1857"],["/archives/2022/10/index.html","64b5818ce1cab2d7c706201881a31cf1"],["/archives/2022/12/index.html","1230c604ea4555eb2fd58bb88e90b381"],["/archives/2022/index.html","0b55acb01a71871392c2685b66b42927"],["/archives/2022/page/2/index.html","b2d0a4c2d4200d74fe949a5b487252c9"],["/archives/2022/page/3/index.html","4916c8b923776f38a1c32b764f4069a5"],["/archives/2022/page/4/index.html","b24476a6ecb8170f22c23cd66f417162"],["/archives/2024/10/index.html","c068b94a676b7fc2a1e5920952238645"],["/archives/2024/index.html","6a6ace04234ea62287c85d25aca69257"],["/archives/index.html","63bcaccf6d6de41966025072adc77e98"],["/archives/page/2/index.html","1fbda239a3797c66cb6fb468cc60654b"],["/archives/page/3/index.html","31524ac94a950cd14ad07819068db9cc"],["/archives/page/4/index.html","594490629a2a66b3ad5864c33b0cec9a"],["/archives/page/5/index.html","13772f385c58757cdcb73e6a274c9ce2"],["/books/index.html","fc56e1f3cca366c48cccb3fdeb0db8d4"],["/categories/Go/index.html","95b015813bb6ed0082e09a332dbefd52"],["/categories/HaoUI/index.html","ddcda8e7229d65880b6dd597d70e8110"],["/categories/Node/index.html","1c23ac60561b965fb286cbdf3ea1ed24"],["/categories/React/index.html","39a6e4140247c59649f66c6e3859f0fa"],["/categories/WebGIS/index.html","586fbdbacfb17619deb559b5d186ab63"],["/categories/Webpack/index.html","345d8d515d8c1bac9e2d99d6ff17b4aa"],["/categories/babel/index.html","ba363d4646c3dfb97b5791338b05a7ee"],["/categories/canvas/index.html","75734d927fed32eeac7928438b3a04a2"],["/categories/git/index.html","297fa03d6bf9a7d9899ef1e95a9b7e3b"],["/categories/html5/index.html","cc8b956e2a5e890126d5eefc845b7121"],["/categories/index.html","cbc3b4cba88e0829e41ef1a1c48be45b"],["/categories/mongo/index.html","314fd9b66d5ee1d5b4d6fd50b6f8bf21"],["/categories/promise/index.html","782f896b63472ce88d91e2305f1b79f7"],["/categories/react-native/index.html","a1bc540eaa91a605cdd9f02828569d05"],["/categories/typescript/index.html","b367566eec9c9503c67204b0ac66272d"],["/categories/utils/index.html","1e6f74b2283c968451ae1d8a548f8cce"],["/categories/vite/index.html","d86c120adced32aca97811c69d9dacc8"],["/categories/vue/index.html","9dba23bd5e2a15135e3e4490b7665cb2"],["/categories/vue3/index.html","ae7f7d91b0537cd115c151f18701c557"],["/categories/vue实现/index.html","2f6cfd64512dab808f78993918257847"],["/categories/vue框架源码/index.html","af1c6d0ea7a85c6b2f2a13b430770831"],["/categories/webGL/index.html","e496dbc39c0597bb8b2060e497298e4e"],["/categories/websocket/index.html","e8f372aa49362cefff9f6eeb3043c9d8"],["/categories/工作日志/index.html","686a24e206647a9d5016a2c5d566eadd"],["/categories/微信小程序/index.html","1c32603b5a4f947fa7b2ad30ce73d46b"],["/categories/数据库mysql的学习/index.html","a1ca22fcd5b86a62884061af68d2caa5"],["/categories/数据结构与算法/index.html","4819134332d3160aa3a742af8bfc66ff"],["/categories/移动端适配/index.html","d3a9a00e1a6b36eae900e47963d6daa9"],["/categories/组件封装/index.html","500731d0c97d74af6aeba7c2fad2bf40"],["/categories/计算机网路/index.html","8a6ec5e389002f5d09598261fbc7ffcb"],["/categories/面试/index.html","70307168086b77cf40d3614c957c396e"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","cfcd1bdbfb8b6e49d615c75a02966bef"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","d754cc32fc52b3272eca0a72bcac7b4e"],["/page/2/index.html","35eb7b4b90edd0f1df8399e7ae1c867d"],["/page/3/index.html","aa07f63f5b12770a6e8eb823962d0588"],["/page/4/index.html","533993acbf7a1a4a7f12e19525f918ed"],["/repository/index.html","dfa7298be5d808e40e67ffb1ffebe2be"],["/sw-register.js","8c027ee5499ff9c94d426bdee20ca2c4"],["/tags/Go/index.html","61a5ba2266a0d8218729589a22e08b97"],["/tags/JS方法技巧/index.html","c26a9b4ebf83ec3e024e2bcd7cd5dc44"],["/tags/Node学习/index.html","589c2160bde59583b214d7c6c6fdbc1c"],["/tags/React/index.html","6b3f1da38ab755b749ac491ba2d16a95"],["/tags/Vue2源码/index.html","25d5b7f249f15b966b065c9075848c6b"],["/tags/WebGIS/index.html","9ec7a560723288fac138cc71ef97dfa7"],["/tags/Webpack学习/index.html","a4baf7dd26bfd8fe46f7f7572cab8088"],["/tags/babel/index.html","369c243842824a3c448151f8f5952a5f"],["/tags/canvas/index.html","06552b8ce8b109e4ce3b82502c5e92d2"],["/tags/git/index.html","4a295e468c03e2fece91508c634cd9c1"],["/tags/html5相关知识/index.html","eafd39e649386cbe72368e104636d4a3"],["/tags/index.html","92613800f99304071472e065a14f31a3"],["/tags/mongo/index.html","87536b6e76be8f3d98a831c16a2fa262"],["/tags/mysql/index.html","bb772821b6fed820eb73fbf04a549e32"],["/tags/promise/index.html","1127409bc485acd11ad8507f54c9a121"],["/tags/react-native/index.html","1c1000dfc6abd52485f706016c7374f2"],["/tags/ts/index.html","d1bc54cce80a01043370248c75b300bf"],["/tags/vite/index.html","131eb894c987ee13ad52a938845e40c7"],["/tags/vue/index.html","da2cf22a277f53470286d58e8514b819"],["/tags/vue3/index.html","8151f6dd09be9c943bb5805dec2508b6"],["/tags/vue实现/index.html","218888f91ef0a117bce67711e685c11e"],["/tags/webGL/index.html","5b97ffe235c1bafe006726c2e3e25a3c"],["/tags/websocket/index.html","de46a0f756b8d822605542540220b419"],["/tags/个人组件库/index.html","e80b7c02fdda89f806200c8b543bd929"],["/tags/工作日志/index.html","1e7994d8dd23825201c482bc2241c61e"],["/tags/微信小程序/index.html","436048ce6e1998f80199fc43875b05d7"],["/tags/数据结构与算法/index.html","dab6b1c6342abd173d1ec854fd3b3d39"],["/tags/数据结构与算法1/index.html","1db3439d8dbd4fa7f721efcee03fdc48"],["/tags/移动端适配/index.html","3808a4a6ffc95c00a47d8de1a80acafa"],["/tags/组件封装/index.html","8de7f16afdca87f3a2bdd2b96e13de66"],["/tags/计算机网路/index.html","587692473baeedda568eef63463d7908"],["/tags/面试题/index.html","295de526f6cacf6760554f6278b2ff12"]];
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
