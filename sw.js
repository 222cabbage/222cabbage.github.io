/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","0b9c36a069d01bdd7ff62af112d5d544"],["/2022/05/13/HaoUI2/index.html","620a86353b41e4adc7757b2bfd448376"],["/2022/05/13/Node1/index.html","18fcdcf1e65fa2d88fe095213b1935ae"],["/2022/05/14/Face/index.html","8ce4de66de38cc6a6a39f6410ffc151b"],["/2022/05/14/algorithm1/index.html","89847ce6006ddda47ce9ca42a6dcd0ef"],["/2022/05/15/Node2/index.html","83b42670b7cb8493d20ca1588d2f9649"],["/2022/05/18/Component1/index.html","878812053de3e56ad1644028f2312495"],["/2022/05/18/tips1/index.html","f9f21b791be93f2ac7d298eab9df3866"],["/2022/05/23/Node3/index.html","3ddcf2668416e1cb05696ea3ffe981c7"],["/2022/05/28/Node4/index.html","9eae8bfd56f0b767fd4f37ab02418439"],["/2022/05/28/webpack1/index.html","ffb5f46c398cffe1133853e43f51e520"],["/2022/05/30/Node5/index.html","27b306fafdc7aeb800727e253f5489ac"],["/2022/06/04/Node6/index.html","11bd6d81cfed4ced67a0a7ead91e3cb2"],["/2022/06/12/mysql1/index.html","ccaa03cd796ca016443b46c14522c380"],["/2022/06/12/websocket1/index.html","c43c33b92997313375e31f26c06cfc0c"],["/2022/06/26/Face2/index.html","44e2cd0ed84bf75e8745b59afb37d97f"],["/2022/07/02/vue2code1/index.html","ef95da9e722c2254397dfd4f74f69d4c"],["/2022/07/10/tsstudy1/index.html","fb421550c01c782ee91816ea99115f42"],["/2022/08/24/vite1/index.html","a976cff5461eb4a0026624c18025e85b"],["/2022/08/25/vue31/index.html","1a374ddaae36b035bf19a48766f13834"],["/2022/08/25/webgl1/index.html","713be8cbbd50f517fc88a6f1b6b1c686"],["/2022/08/31/react18/index.html","5a83f21f0798129ebd6c4eda72ae7fc0"],["/2022/09/01/algorithm2/index.html","aa4306d6e280f55e414b719d981a6f46"],["/2022/09/06/promise1/index.html","b07810dfb6b175e5e9adb2fa3cdf8d77"],["/2022/09/06/vuerouterandvuex/index.html","97ebab432294acb104518a9f07536074"],["/2022/09/14/miniweixin/index.html","30a77dd63d2cf545161b6c512f4d41b1"],["/2022/09/23/webgis1/index.html","4bd2637a8fda24e28fd22f301c14fc2d"],["/2022/09/24/vue32/index.html","71535437a401dbf8e0d38c7362483f68"],["/2022/09/27/go1/index.html","cf0de5e55d02391c59a088080f791186"],["/2022/10/07/canvas1/index.html","d8d6df43fde2d9180c7b2979769ba19c"],["/2022/10/09/mobile1/index.html","fa2548876c084732bccbed4ef9ffbdf2"],["/2022/10/17/work1/index.html","65214256c71af5de9228f1b06670a8e6"],["/2022/10/19/rn1/index.html","f5a42f6a9d209bfa726f226899830372"],["/2022/12/01/reactnative/index.html","990723292fe48e57e7820b5a8b0ddd7c"],["/2022/12/07/realizationvue/index.html","39343846a266e7f5c4d938b8cd7cc879"],["/2022/12/11/mongostudy/index.html","3b139ef83d579b041d021a6fbfd7c91d"],["/2024/10/20/html1/index.html","ad52c8ec8750f1f8dc0cfebcca77cdeb"],["/2024/10/21/html2/index.html","c4157552eaca63bd85e70aee8a19d177"],["/2024/10/21/html3/index.html","42b2c0143b5f63d8bf4822d7b0ea25ce"],["/2024/10/21/html4/index.html","bfa7ad3d01d5f6701a354e4ce2067b64"],["/2024/10/21/html5/index.html","d8682cb4520073afd5bc43d6086f0981"],["/about/index.html","aaee40cd87a62922bc23fe36c6b43c34"],["/archives/2022/05/index.html","e8d0eb62af82151b775766cd3451de99"],["/archives/2022/05/page/2/index.html","0178f568f066a619696b70c6410e226c"],["/archives/2022/06/index.html","bc32b5550ac6e16b08183c538a2e463a"],["/archives/2022/07/index.html","5b7dc9b62d4e0015b0780f55a00b45a8"],["/archives/2022/08/index.html","8b71ba9a9583af0a57a83443db46bf12"],["/archives/2022/09/index.html","30db4d43383544425356dddf74835ae6"],["/archives/2022/10/index.html","45a275bbe8290e80ae50dcde3bd2dead"],["/archives/2022/12/index.html","53cf8b2d48564b7fe5d148ed4e3a34d8"],["/archives/2022/index.html","3b926f97711ab019e332f466226755cc"],["/archives/2022/page/2/index.html","7f11322488db62c6bbdbeaee7c510a24"],["/archives/2022/page/3/index.html","4b5182e338709b937e43c399f5b35e6c"],["/archives/2022/page/4/index.html","915509a49122f05a81a4675a6fd96155"],["/archives/2024/10/index.html","10ab24171f99e383a1e922edd6b17e70"],["/archives/2024/index.html","f3b60fcb93641d2d203eb219a698f044"],["/archives/index.html","766f0d2e1ad3413683fc16370e5d5295"],["/archives/page/2/index.html","dde533146fc00e7d3e752a54ce2af33d"],["/archives/page/3/index.html","583c42e0798a4f10b4efe4ab6d911d9d"],["/archives/page/4/index.html","56d9aff93cfdd26f5928865e46a87561"],["/archives/page/5/index.html","daae7a728ebf8ec2e8f22ebd032bdb59"],["/books/index.html","d7d32112470bbca81fafeb7ba49bd57d"],["/categories/Go/index.html","023c4dd287e3a684beae5f95aa0d92d8"],["/categories/HaoUI/index.html","1d505fed3d6d7ce39219eda8c3a7f0c4"],["/categories/Node/index.html","7241a43674389de872f2ca5c16e2385f"],["/categories/React/index.html","850a3071c5bb4948f64c16d2a41bdfd5"],["/categories/WebGIS/index.html","452709ba950f6d2f1aafb83de2c08f29"],["/categories/Webpack/index.html","439ed4766c9d9b234fb7f51b942dcf4a"],["/categories/canvas/index.html","935ad3d0f853a5381133f0b8b7102447"],["/categories/html5/index.html","3dcdaa9fa3829c5b68f738cd5000cf1d"],["/categories/index.html","9eaf2b6e267ce27bf39f2d9682a79768"],["/categories/mongo/index.html","11bf1b13e883c35936bc9cbea7f36e4a"],["/categories/promise/index.html","9447ed10c4337158879cfe602bdc91f3"],["/categories/react-native/index.html","7dcb3221ad7e14ba27220327cb50e0ee"],["/categories/typescript/index.html","f8333f911405561ff6cd34c1e1e9932f"],["/categories/utils/index.html","998c2107548c6da17c420b73c4ed6aa4"],["/categories/vite/index.html","a5e01809bc1bd76f2a73347e9c7c4dd3"],["/categories/vue/index.html","7814cb4aef6957e071cf129b3c2f7401"],["/categories/vue3/index.html","fd7466e8341da99a307f2e8c4a1de252"],["/categories/vue实现/index.html","1c113849ccc1460a86ab2277a26d45e4"],["/categories/vue框架源码/index.html","6519a07ab011d1b564fdcb753fb1fdd5"],["/categories/webGL/index.html","cc4ebbf2a09905138282f06856cb43e7"],["/categories/websocket/index.html","bf0b5575704497cabd3e0e3112196d95"],["/categories/工作日志/index.html","5b4128bf7f8ad84e0bce3e77ec52c0ce"],["/categories/微信小程序/index.html","f13454adba7b8e022eb59f1fefa40336"],["/categories/数据库mysql的学习/index.html","9bbcc56a599e984eb39ec337d4544229"],["/categories/数据结构与算法/index.html","150f7c767f8ec2de7c2ba52d746bed6d"],["/categories/移动端适配/index.html","3e7ea1a6555c2626e20a63a239b59367"],["/categories/组件封装/index.html","a30f6847878846e6914bcf8bd85028f4"],["/categories/面试/index.html","131baf904141dec169692fb5e3f749e4"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","b24d656376dbc01a047a7633fa9f58af"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","c7440362c2787d89cdf931bc6f04af01"],["/page/2/index.html","d03785f1238c51e065924ea9e1a5b1ef"],["/page/3/index.html","2bb65fc151a109ca19afa82acbe5e88d"],["/page/4/index.html","072b77f3fcddfd2ec2b65aa877aa0da9"],["/repository/index.html","9e239715dd789e8b9976903227893917"],["/sw-register.js","0d18d0a7227a5861bc462e0735d270cf"],["/tags/Go/index.html","8775b889e2185831941f106000a3f5da"],["/tags/JS方法技巧/index.html","4811e1e58f571596a10f13b5688b270c"],["/tags/Node学习/index.html","c10833b70ff606122f1891ac7bcf38f0"],["/tags/React/index.html","ff4c620a9863f792512de535844a4af8"],["/tags/Vue2源码/index.html","423529fc1c3769e7e939c857b16d35f2"],["/tags/WebGIS/index.html","e4fec3a2ccc2068ed7e5802ffd010937"],["/tags/Webpack学习/index.html","5f248ef3bda31a6ec2ac0e3309091f76"],["/tags/canvas/index.html","1ef48ded75b89503de7fb3368d7d358a"],["/tags/html5相关知识/index.html","2a5d18bf60df8ebff7fc80133984e08f"],["/tags/index.html","fa4137d76164c26c027e91612117c246"],["/tags/mongo/index.html","659cc9f1e4a75852b3a2048f779599d2"],["/tags/mysql/index.html","c195d9e582e1a3e46b6d14f2bd623b1f"],["/tags/promise/index.html","220882c9e178bf0bf2a61809414f06e3"],["/tags/react-native/index.html","d2830f3c16219c8fabf3bd5976af8dc1"],["/tags/ts/index.html","6d90182cfa9e922ef1ecd70291e79f3b"],["/tags/vite/index.html","d4152a1c86f2f341406dcac262c8ceb1"],["/tags/vue/index.html","52049ba0ba65ea59a857c1067ec5d232"],["/tags/vue3/index.html","5473323bdf68bdd6afc54316c4cf1569"],["/tags/vue实现/index.html","a50e0c189270b19d69786478acc5d398"],["/tags/webGL/index.html","c14fdd5fe21c2011a84f40ca0f90996e"],["/tags/websocket/index.html","1f0ee822ca8e2599b158eb423eba4420"],["/tags/个人组件库/index.html","8cd53ff753e059c05e2152126efd97ce"],["/tags/工作日志/index.html","987f20950ac8510bc88457dcb9fe7d5a"],["/tags/微信小程序/index.html","c3f1e5a65bab9d59b9183549fdc50201"],["/tags/数据结构与算法/index.html","46e320a878e7b6d7cf7b2271ec933561"],["/tags/数据结构与算法1/index.html","cefe039a4fe23834f0b035146dca15b7"],["/tags/移动端适配/index.html","894d4b5b2e58e954437c868a7b198dec"],["/tags/组件封装/index.html","2f762a7f2fc8d0ef24f919a7d75ad067"],["/tags/面试题/index.html","defe0dd95a1783f2bc7dab25f382cdc6"]];
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
