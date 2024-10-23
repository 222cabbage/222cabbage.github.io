/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","88ebc1387aab5235c109c762a5f5cc26"],["/2022/05/13/HaoUI2/index.html","9149ea5b4e5615c9ed6f9bff84987955"],["/2022/05/13/Node1/index.html","085c7a87b5264766de3380342cf2ff17"],["/2022/05/14/Face/index.html","4352422a80698a4ffea0996cce196349"],["/2022/05/14/algorithm1/index.html","197a693062e0f062f9509ee95372fca4"],["/2022/05/15/Node2/index.html","24954e6b0f4c1083b1623a0685e99958"],["/2022/05/18/Component1/index.html","75279af11436f0a64ea89d85ec84169d"],["/2022/05/18/tips1/index.html","93c7e3f2e69cc43768f39ef0aa515e85"],["/2022/05/23/Node3/index.html","04a98aa38bd02cd03037fc3eb2075b62"],["/2022/05/28/Node4/index.html","7e7975e004c10a4b50be6de4c5a76d9a"],["/2022/05/28/webpack1/index.html","ab89dadc0f38f8e5731fce14c95fb1eb"],["/2022/05/30/Node5/index.html","c093e31edaf68142e6dd6d4fd9d408f0"],["/2022/06/04/Node6/index.html","20b29394584f65fc9b8f4edb313ae3e8"],["/2022/06/12/mysql1/index.html","62c6656ad6be1bfbb4562da401e74e2c"],["/2022/06/12/websocket1/index.html","3d5211ae247bea8bb3452cd590d3d43f"],["/2022/06/26/Face2/index.html","ca59beef3829d8432d03f70d2071e15c"],["/2022/07/02/vue2code1/index.html","49e6495ebfbe9c109fc9c4d81719fb25"],["/2022/07/10/tsstudy1/index.html","a146caf51ee7ab89381c05b2610b49ce"],["/2022/08/24/vite1/index.html","4926997b32c578b28787a9f9a5e6fe41"],["/2022/08/25/vue31/index.html","af98dcaf76f33f7b23fdeef4e2138845"],["/2022/08/25/webgl1/index.html","2dcc38c9e640e5d05877ee63eb2828b0"],["/2022/08/31/react18/index.html","fc5b70720c64cbda798b4711817d0273"],["/2022/09/01/algorithm2/index.html","e0dca5c2ae44688355c69d4d2ff5343f"],["/2022/09/06/promise1/index.html","32e48ee3d13e1d95e53f0302c251013d"],["/2022/09/06/vuerouterandvuex/index.html","7886d1c88cac10412f5c27a1eb25a86c"],["/2022/09/14/miniweixin/index.html","97185937a114dec58e283fafdaab3e7b"],["/2022/09/23/webgis1/index.html","ede2a6362f0fce36c03def24da022fbe"],["/2022/09/24/vue32/index.html","be705e32d95e138e53eb8c257a92f757"],["/2022/09/27/go1/index.html","01d5d7de0851e82f37c653a83941d7d2"],["/2022/10/07/canvas1/index.html","60e57151292a61049f1f6d16286d3970"],["/2022/10/09/mobile1/index.html","49ae9c661871a02d480efe6cec0713d3"],["/2022/10/17/work1/index.html","bd09a3de6cd37384196d180176b85f4b"],["/2022/10/19/rn1/index.html","bf47ee2a451b2eebf738a6bc4a34751e"],["/2022/12/01/reactnative/index.html","bb015c4d66b8aa52c1282868e6ec54b6"],["/2022/12/07/realizationvue/index.html","50ddeb0eb5e769de813d2e4519833b03"],["/2022/12/11/mongostudy/index.html","84d49f97dd309f425edf8dc0cb9e2472"],["/2024/10/20/html1/index.html","f6cd7a36520afaffe546371ba74fe23a"],["/2024/10/21/html2/index.html","6bc273277b1c643ad496bec52df2eccc"],["/2024/10/21/html3/index.html","41b2a8ed94c9917dcf5ff874663fa2a9"],["/2024/10/21/html4/index.html","0bffd8d8ca598fe8e1b6815cc33a1412"],["/2024/10/21/html5/index.html","702eb362306ac26450343d4a387ab935"],["/2024/10/21/js1/index.html","6bc3d58ffb22b78422468b9f981fdf5b"],["/2024/10/22/babel1/index.html","4c83e342f9ae81740e15fca0e063edc5"],["/2024/10/22/git1/index.html","fbb388643b01c63cbd735aeddca3eb1d"],["/2024/10/23/network1/index.html","2c7a3f1c54d34fdd028c6738a44760ed"],["/about/index.html","51a3e80ca109ac0ad316dd409168eae0"],["/archives/2022/05/index.html","bfb666e1b1da0351b55eaa2cdb78fdeb"],["/archives/2022/05/page/2/index.html","0a40a206b65a6a61744e5f2ab3dba75d"],["/archives/2022/06/index.html","32217c4f3f9660d539c085286dc46bdd"],["/archives/2022/07/index.html","40de974e648af073575b08e1529adc7a"],["/archives/2022/08/index.html","815a4ae22c90b5f4128e2cb702ee4e39"],["/archives/2022/09/index.html","61a77becc0b24bb3b3372dba25f92cd9"],["/archives/2022/10/index.html","56b977ac0cd613d95b7f94c7fd6f6fad"],["/archives/2022/12/index.html","53fefd174732f8e42cc691ad05d3061a"],["/archives/2022/index.html","c7a6e6fd00e06ae7d66224ba7b16d52c"],["/archives/2022/page/2/index.html","ced584b6b030ce8c8294bc2699740b77"],["/archives/2022/page/3/index.html","441a9807d2dc6e9b07097d6a7da9f7e3"],["/archives/2022/page/4/index.html","0420801a2f1a3976cd34da1c16a7600e"],["/archives/2024/10/index.html","9e7e9e5f8465de49ec51cc4ddb5dc947"],["/archives/2024/index.html","98c36d9911529f9beafaa8c1293f0161"],["/archives/index.html","263c654f9b55a6987e9b1aba3f05709a"],["/archives/page/2/index.html","026ffc1856b4b6e1d8b6ef921746b761"],["/archives/page/3/index.html","bb06d4b4695d60e59e696289d4ca4f98"],["/archives/page/4/index.html","cebe9055b40d3c3f25634965db0fccf2"],["/archives/page/5/index.html","f9b8ffab56adb6f931303dbb6154b55d"],["/books/index.html","8dec3b63abe1781cd8b94b30a9ece02f"],["/categories/Go/index.html","5554a1fd9faa4606503136fc1876f341"],["/categories/HaoUI/index.html","23131f7df85d5ca92ec644d6ceefbeab"],["/categories/Node/index.html","5b565099b3abaa1d2c95732d9683f764"],["/categories/React/index.html","b2f2201c14ea4babe93c4b9c496a62b7"],["/categories/WebGIS/index.html","60ac87bdf6fb235bdb44e59add8265be"],["/categories/Webpack/index.html","1ab11ba03c228ba8951aa2c7f609e92f"],["/categories/babel/index.html","efd9e6338e5e3e20daf2199a48144e9d"],["/categories/canvas/index.html","f8c99d2ae92cb04566dfcdaba6a81847"],["/categories/git/index.html","7eda4194440c93c6cbe0a691ca93923f"],["/categories/html5/index.html","d43426f1befec12b21e0b9e9f56ddb9f"],["/categories/index.html","4a924ef42838f5dbaee9c467a7cf99e1"],["/categories/js知识/index.html","447367cce08e2c83f343d01ae51caa37"],["/categories/mongo/index.html","8ea94c880461de1ee71cb5c0d86cd767"],["/categories/promise/index.html","766eca8e6ff693f323dd93ebe99881fe"],["/categories/react-native/index.html","eceaceac1a6f4da7a4e56857e2b8e005"],["/categories/typescript/index.html","af5b7c0ecf462a8a65f03b0b5f9557aa"],["/categories/utils/index.html","addb5bbec98b8c8a7d19afe9c0cc20bf"],["/categories/vite/index.html","42b08fbc3eeaa50c88fa84ab716b98f3"],["/categories/vue/index.html","c93b0527eff94907eae41545510bbd0f"],["/categories/vue3/index.html","c5c2eed8c6d1a869e49641e93154a007"],["/categories/vue实现/index.html","e9b7347568e8ae3a78e8966b48da8e6e"],["/categories/vue框架源码/index.html","c07967680b0fa9373896b1034f101936"],["/categories/webGL/index.html","f34b5ffa1aa5ab9dd34287d459121a21"],["/categories/websocket/index.html","9ca30a9326dd77a382055b955b9b3604"],["/categories/工作日志/index.html","e79aed22cba0dc2ed6564751bceb6ea0"],["/categories/微信小程序/index.html","0e88fdb0235967b1d921c9249587a6e7"],["/categories/数据库mysql的学习/index.html","b225dc449e647e9be2b67533696c647b"],["/categories/数据结构与算法/index.html","a3d3f733b595d833f10603790e9c371e"],["/categories/移动端适配/index.html","acbea9add3fe53d38d7aa45e8882411f"],["/categories/组件封装/index.html","935a368281c43157512d327d0459aaeb"],["/categories/计算机网路/index.html","fa7b2d36e98f054f2b970c97bdbbc23c"],["/categories/面试/index.html","41629dffb6a51e7a8d1d109d19cf3d30"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","36ee3a2450ea3b3a461b16ad69eb9595"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","7e7469308ea41173c11ecbb2a4375a8f"],["/page/2/index.html","ab96eb9a64323f3f58820e77d3d86506"],["/page/3/index.html","9f573083e03949a5a3d650e8ad86c396"],["/page/4/index.html","830bb8b14810ea222d06c798100658a8"],["/repository/index.html","12213354593e4706bdc445567100fff8"],["/sw-register.js","791cfafe6db5b5f8588565469ed54783"],["/tags/Go/index.html","a9dc74bc9fc107b7ac2e1f461220d0e9"],["/tags/JS方法技巧/index.html","011772674c0ebf2d894e19c1c27b5c58"],["/tags/Node学习/index.html","c210b87f60fdcb8fad4bcbce0045f2f0"],["/tags/React/index.html","ddbc0c1d0d6b47344fb307cb56fc3879"],["/tags/Vue2源码/index.html","a2e14942ce3672133f1ba3aa8289cccb"],["/tags/WebGIS/index.html","8eee12edcd342f9a29a759c4049ad562"],["/tags/Webpack学习/index.html","2a9c3c56f44bc401f47c0eb77421e5a8"],["/tags/babel/index.html","0821803339f58b84c27c674c3bb3b59c"],["/tags/canvas/index.html","7b83fc0631a224f9fc0771932464dc86"],["/tags/git/index.html","b60cd94bb833001531a432bb9be2fb7f"],["/tags/html5相关知识/index.html","0c959c1802cb507676a1ca189f56d922"],["/tags/index.html","2bb4b6b3bbc770f4012b6ca946dd9d08"],["/tags/js/index.html","49acf9d4b18c9caa870bdf9cc147a4f8"],["/tags/mongo/index.html","5d20894c62a8b445eba7a239d21c0a93"],["/tags/mysql/index.html","d8173b589e4bfaf8955e60bbcd0a3607"],["/tags/promise/index.html","569b0b84a837a93f9c82435f2c9fedd2"],["/tags/react-native/index.html","ef08fb7383ca721ab2c92c408025b81d"],["/tags/ts/index.html","4262ac5df6028dd39bb2f4b8de8c07b2"],["/tags/vite/index.html","3f61700abbe002b05e21094f13b66db5"],["/tags/vue/index.html","91da535b0ad8335ad3ef40adb7824b9d"],["/tags/vue3/index.html","2ac26936183fa76c204d2c947ef5eeea"],["/tags/vue实现/index.html","e1d80ecbcec3abfdeaa3bbaa1cfb34a1"],["/tags/webGL/index.html","38d56b7fb580b03fec37a54ae9dcd388"],["/tags/websocket/index.html","ff28c3b484941a72e137620c8a665571"],["/tags/个人组件库/index.html","d700a2fe3a2b188e4177ce3fef9b7e59"],["/tags/工作日志/index.html","a8cefd76fc595b606caf180bff428159"],["/tags/微信小程序/index.html","225dcfcf2f019734080cc5fc4b71cc43"],["/tags/数据结构与算法/index.html","b2907da0c22921b93d484a595635aad6"],["/tags/数据结构与算法1/index.html","eee3a922b60efe7a618e3f437ffb7ad1"],["/tags/移动端适配/index.html","16227ecb53ffb7795785e1d7428ba8a3"],["/tags/组件封装/index.html","7893770d4f0c32f584c3c3437554fefe"],["/tags/计算机网路/index.html","4e42ffbdfffc549465964cacd0cbecd9"],["/tags/面试题/index.html","c2a5b2539f13cccd41ba07f8211a9d07"]];
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
