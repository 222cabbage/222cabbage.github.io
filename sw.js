/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","77fc4decf85661584f046ed2a105e29a"],["/2022/05/13/HaoUI2/index.html","2dd55e51e68766dcab25f8f998841632"],["/2022/05/13/Node1/index.html","31b900bcf21ffec40bf6746a03fd61d4"],["/2022/05/14/Face/index.html","3536aee9287f46cf2fe2405dfed222fb"],["/2022/05/14/algorithm1/index.html","2d8bea0200758feed7130bf1ead1227e"],["/2022/05/15/Node2/index.html","acecd7a838b2af1f2defed27f6adef97"],["/2022/05/18/Component1/index.html","1930e138cb66cf0aec62a174f38fe8a3"],["/2022/05/18/tips1/index.html","29675704698b8f32efadec9aa7178200"],["/2022/05/23/Node3/index.html","905a0ef0abcf1ebb5432c0357c9adf43"],["/2022/05/28/Node4/index.html","70c30b31b17f7f8f7949fa13074b6ab2"],["/2022/05/28/webpack1/index.html","ba72fbf0ae1b6a49994341485ab51001"],["/2022/05/30/Node5/index.html","6dec0b9420249979bd9c47a0e402f859"],["/2022/06/04/Node6/index.html","938abb298487cde1beacd5833b146b89"],["/2022/06/12/mysql1/index.html","df448cf4e1d19ae455883ae4796f9465"],["/2022/06/12/websocket1/index.html","c9777277ed24f17b4c5ea2f969f8b1cf"],["/2022/06/26/Face2/index.html","7a835bd92b489bc6881ea6e7067408fd"],["/2022/07/02/vue2code1/index.html","892c7647fd79d35d665d4233e37133ad"],["/2022/07/10/tsstudy1/index.html","18cda6a13e8f46ec5957248ac5d0b569"],["/2022/08/24/vite1/index.html","71b3fe96b59ad2e53d3870daf7d4e490"],["/2022/08/25/vue31/index.html","a93d541580d8483da4aa832e22790bfe"],["/2022/08/25/webgl1/index.html","eff77095924b1a827ddf5ad8ace4d566"],["/2022/08/31/react18/index.html","e7449e43c08f37f058b3dc7571840768"],["/2022/09/01/algorithm2/index.html","87cfaca3603a6b557a2c920066621b5f"],["/2022/09/06/promise1/index.html","a157fdc127b7c31a2afbdd792e90319e"],["/2022/09/06/vuerouterandvuex/index.html","d63a3804934d984abd88e05e555e1bd8"],["/2022/09/14/miniweixin/index.html","c8cc4866e0d59c7d4d3e16799eaa009a"],["/2022/09/23/webgis1/index.html","7f8aefae2ba0259f24009cb8b4af6099"],["/2022/09/24/vue32/index.html","f1304a610109d004cb58bb1997e95429"],["/2022/09/27/go1/index.html","70285463cc6f43d23201fb726f73e37d"],["/2022/10/07/canvas1/index.html","c10dc7389aca93c8bea9485822323961"],["/2022/10/09/mobile1/index.html","0acaca08f8551cd20d400d51845735b2"],["/2022/10/17/work1/index.html","6c71da793f47bbc41b22529522a4cec4"],["/2022/10/19/rn1/index.html","03a540391f5ed44d7ddc7c4530dfd629"],["/2022/12/01/reactnative/index.html","b6624cf317bc3a46fb0b81971c5c2f27"],["/2022/12/07/realizationvue/index.html","b9464bceec2356f5d24ca7658bcdf7bd"],["/2022/12/11/mongostudy/index.html","64687b104afe0023c1af0acaf7d4180a"],["/2024/10/20/html1/index.html","3c72a93090eb3b3059ece77c7cf26658"],["/2024/10/21/html2/index.html","58bcd75da33a2ca06797da4ce93ccc8b"],["/2024/10/21/html3/index.html","0d6817d7bbb454a1fb63f4b8a082777d"],["/2024/10/21/html4/index.html","99dfc4b609c3fda2a273cc2be622992e"],["/2024/10/21/html5/index.html","ee47f5141bcdba59dd7952e98df47ec8"],["/2024/10/21/js1/index.html","b6fea05cccc244e67c6a6b3d63686dba"],["/2024/10/22/babel1/index.html","f6af42e93eaff7685352b3f394f82891"],["/2024/10/22/git1/index.html","f0332a37bb36679c335d776136e46f79"],["/2024/10/23/network1/index.html","bf36953c84a0ef39c9ab02273ff77a0f"],["/about/index.html","603941b77fa583a1331cbff8e02bf232"],["/archives/2022/05/index.html","414e35adf2801e3e0ffbf62240038de7"],["/archives/2022/05/page/2/index.html","414e35adf2801e3e0ffbf62240038de7"],["/archives/2022/06/index.html","9fc9aa65ecd04a71a09c00e4f9a15bcd"],["/archives/2022/07/index.html","df602ee2cc5d60832347974fd20421d4"],["/archives/2022/08/index.html","c9c384d765408d5d74f682730a9e84f5"],["/archives/2022/09/index.html","1de75e8ed866f5d8ee59d23986d9fb95"],["/archives/2022/10/index.html","f7983616523a586b9703df55ce34e44c"],["/archives/2022/12/index.html","cdab9a7627ccaae61d00750ece62e858"],["/archives/2022/index.html","ecb0b915f41ccca3514c604fb700c539"],["/archives/2022/page/2/index.html","ecb0b915f41ccca3514c604fb700c539"],["/archives/2022/page/3/index.html","ecb0b915f41ccca3514c604fb700c539"],["/archives/2022/page/4/index.html","ecb0b915f41ccca3514c604fb700c539"],["/archives/2024/10/index.html","2e1df2c37844e2d689e9848815e2abdd"],["/archives/2024/index.html","d61ae0bc824058b3fc04ce4be6e03d24"],["/archives/index.html","8b926d2c05470a62479c499ac104aae3"],["/archives/page/2/index.html","8b926d2c05470a62479c499ac104aae3"],["/archives/page/3/index.html","8b926d2c05470a62479c499ac104aae3"],["/archives/page/4/index.html","8b926d2c05470a62479c499ac104aae3"],["/archives/page/5/index.html","8b926d2c05470a62479c499ac104aae3"],["/books/index.html","c55ddd8f4fab29d257c2cb3fde8dcb58"],["/categories/Go/index.html","e12ad747b6453731c5a3ddb0236d0c67"],["/categories/HaoUI/index.html","ed7c8a1856b7c1cdd915e1e17e09f6bf"],["/categories/Node/index.html","77fb1d0d19ddc7d80a3df6a0ec521f3e"],["/categories/React/index.html","fdb98deeb208a46b081d5891bfe25445"],["/categories/WebGIS/index.html","049756a0aa802a02c1036a7121237dfe"],["/categories/Webpack/index.html","4a92a24cd1aa102b760e7e1c1cabb2d0"],["/categories/babel/index.html","ff62dd9f29ad02dfee673795b626c0d7"],["/categories/canvas/index.html","260526f3af4d1594135b4434d2ed7c05"],["/categories/git/index.html","ea11407f97eebb282755b57a0501adbc"],["/categories/html5/index.html","b95f448b05e61fe69af1d0c05586831d"],["/categories/index.html","af97b0ee979a483ec145635a40ea4b6e"],["/categories/js知识/index.html","621890956bcec19f3206b8af44b3760c"],["/categories/mongo/index.html","774514bd8e9c2f429a0b138ecac2b2c8"],["/categories/promise/index.html","2b154dc038346bb54ceea2af97f0b86a"],["/categories/react-native/index.html","1f7ba577024154c12e80577d9e876788"],["/categories/typescript/index.html","f7547581f9b2a0b3b8159dcd00167238"],["/categories/utils/index.html","d68669f4778d70262ff8605231ff9ce9"],["/categories/vite/index.html","8d2720856c16b7a9a042f6bcc2dfdbef"],["/categories/vue/index.html","a3f794e8e62504267078e14cf411dff8"],["/categories/vue3/index.html","d33dc422e5125eb382227a04ca37c09a"],["/categories/vue实现/index.html","c97bea7de7b32cb5060c6c43eb3addd6"],["/categories/vue框架源码/index.html","49cced26e56705c52c596b739c80009e"],["/categories/webGL/index.html","602e0787784246ff23df93f59ade0430"],["/categories/websocket/index.html","0969b7a73da21d7282e6ec1e70d627ef"],["/categories/工作日志/index.html","58cae5a5676834a7bb6bf5da6ec65ccb"],["/categories/微信小程序/index.html","7e4bed5350a5ad8def44443d13fa05cf"],["/categories/数据库mysql的学习/index.html","18247c3b4abb416a8933c74b45edc383"],["/categories/数据结构与算法/index.html","67eb1b54ba27da729206fa9e75ad556f"],["/categories/移动端适配/index.html","b6f4a5c410d7f0764d5499dfef0bd950"],["/categories/组件封装/index.html","89f2cff3b68cf2ad6db5690da2ce0da8"],["/categories/计算机网路/index.html","389fedf2fccb89840e9c7282cf59b905"],["/categories/面试/index.html","369ac75edafa7dd5d6e2080aa5f942df"],["/css/base.css","00ed97040d8a74c76b8561bc19aa2b88"],["/css/color-scheme.css","c752a3be21b5e99bf4e074054c90365b"],["/css/comments.css","025b93b66d02556ebc8a6591703d1f02"],["/css/figcaption/mac-block.css","c3dc13dea3c676bc5325bb8f4ad0495b"],["/css/github-markdown.css","87658421f0ca778e7404eae1c5817881"],["/css/highlight.css","66965534ddd0cada9f8fba6a9d2356ce"],["/images/avatar.png","dbe3ea01cf6547b7b69c76b7332833b0"],["/images/favicon.png","fb12e6ce0beb9ac94f79406f8486398e"],["/index.html","bac04adef6b543b0772436e79567c1eb"],["/js/activeNav.js","f2d8a8a1677ca19d0fee2c020d72fd3b"],["/js/backtotop.js","f098b9a99d5f9b911c8af9660ee9e030"],["/js/catalog.js","15ff2d6486398002859a9ed15b61d8c1"],["/js/codeCopy.js","bc467e2442c04f3b1a55326a6e8ea2a2"],["/js/colorscheme.js","f97ac1ab6267a0a2f8c84c2b6ef7cddd"],["/js/fancybox.js","99b78918fe2d929ca335f16dd4ad5f86"],["/js/search.js","e617a14a240c30c49633e51fe0adc1ed"],["/js/shares.js","a05736f96e13f2a5ac9dec0ced11e831"],["/links/index.html","f71c3a4f2e4e28729f898af99e84a960"],["/page/2/index.html","233fa5c061cd42b511475c00d6ebf03e"],["/page/3/index.html","51f6729514814ad556974f16dd717545"],["/page/4/index.html","f87d6552963913e650dfcd51f1f0881d"],["/plugins/clipboard.min.js","15f52a1ee547f2bdd46e56747332ca2d"],["/plugins/gitalk.css","8476031a633732dff9875feae0890070"],["/plugins/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/plugins/jquery.fancybox.min.css","0b8a5b13275298e7568eb7f0c40865d2"],["/plugins/jquery.fancybox.min.js","2e62b54f794ae2fae6a69feaad8f0820"],["/plugins/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/plugins/mathjax/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/plugins/mathjax/tex-chtml.js","dff7ce905f13c71637cd9931e4b3d6b8"],["/plugins/valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/plugins/waline.js","b7f2ccf1204f384ec27146922c889ec9"],["/repository/index.html","3206d865409bb01d76b6dc4e034ec67b"],["/sw-register.js","9a5294bab829d4a82535e17ff60e4a9e"],["/tags/Go/index.html","3128a93c8d66ba762cda3e6344d3ab13"],["/tags/JS方法技巧/index.html","8a611c19b3fdeaeef7e6a2f7a54f8bee"],["/tags/Node学习/index.html","5153a2e6d508244d74928e186bd7d053"],["/tags/React/index.html","488e372fdf555d4a703bf22d82d4bf3f"],["/tags/Vue2源码/index.html","930e451295b919a028e7fe57d8a9d9a2"],["/tags/WebGIS/index.html","55c07cf55b976bef099d1ef852733b10"],["/tags/Webpack学习/index.html","0448bf34e0657ab9d9dd3c5d4e7e34fa"],["/tags/babel/index.html","2f945836df89bf3b86e2cf00922f5429"],["/tags/canvas/index.html","ab9171d5c41f3bc250679c9f5da7117a"],["/tags/git/index.html","c47caa65e6fe2f7209e464214cb2d018"],["/tags/html5相关知识/index.html","fe8fd511504d3667faffd430fc385b6a"],["/tags/index.html","37605e5c055a018f1910d937e20c98a6"],["/tags/js/index.html","463230ae00adb0d48fd04d6758b24e1f"],["/tags/mongo/index.html","3068b41c0e994c3cbdaadec4d437f8b2"],["/tags/mysql/index.html","e7a33c3bb9f7d1b1b93c2808636d0542"],["/tags/promise/index.html","d15ee34ce3ac36f78ef52bd0b9270418"],["/tags/react-native/index.html","6c3c65f0892b155c6141d84846f2eac4"],["/tags/ts/index.html","751938e1ef2baf3a3411084af46aeb3e"],["/tags/vite/index.html","884876bfcd61a898117649375e42d72c"],["/tags/vue/index.html","f7d8dad8342f25dd0f429de2d299cd7d"],["/tags/vue3/index.html","749d86903f6de060afd27f002a0d5ea8"],["/tags/vue实现/index.html","4f1745721cb878624205456eb2f28e58"],["/tags/webGL/index.html","6a489878a4c38d0f8b12d54db343c0e4"],["/tags/websocket/index.html","a957ac86b9245651a309e5d38a7d3a26"],["/tags/个人组件库/index.html","bd1bf95b56fbab6628551c8a04b3c4a3"],["/tags/工作日志/index.html","ea3d36e36a23cc35a5c4867ab5318223"],["/tags/微信小程序/index.html","f62294d9fbaead4d5c05f70793089416"],["/tags/数据结构与算法/index.html","22abc2e5c7d4f2fa7592413c2b79858f"],["/tags/数据结构与算法1/index.html","7de949b9303f948a8d82fec62805dc73"],["/tags/移动端适配/index.html","f9ffc11754ffa589be0fda07477b7f70"],["/tags/组件封装/index.html","fbe729c14d8a74dfcdc8fc81d5abdf5d"],["/tags/计算机网路/index.html","8e2963114dcaa92700a854177340279a"],["/tags/面试题/index.html","b2beed2e41fa67e57d020b0562523cee"]];
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
