if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const g=e=>a(e,n),r={module:{uri:n},exports:t,require:g};s[n]=Promise.all(i.map((e=>r[e]||g(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1034-7a786eec84bdbed9.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/1749-1ef02a70f3afe693.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/4384-d167ad92a043371b.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/5018-e950206811dc516f.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/5250-86cd67ef8d75453a.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/5468-3de96b76f8959bcc.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/6108-f1d010d7ef3bc2ae.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/6785-94350a5b46d6bd88.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/(agree)/agree1/page-396d11f24b78c850.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/(agree)/agree2/page-7f99e32bc88e7565.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/(agree)/agree3/page-eea625b0518d2bb8.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/(signup)/signup/page-0cfb1e52e200e61c.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/(signup)/signup2/page-e85aa13b6513eebc.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/(signup)/signup3/page-7d21e6215d1c9358.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/(signup)/signup4/page-e79325dacf6bf9a7.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/explore/detail/%5Bid%5D/page-db9322a629312c1c.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/explore/page-7f2204588f4b5489.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/first/page-e7ea24f9a5de5b80.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/home/bookmark/page-b65625cc6313de31.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/home/notification/page-fd1c6fb5f1590d75.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/home/page-d2458e3b1cab89e4.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/login/kakao/page-c1bc7986238a893d.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/login/page-8a2b29669b6e3817.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/mypage/account/page-3ebc931d6922bfaa.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/mypage/page-fdb97afdc4637b17.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/mypage/point/page-b887644c2fce3a8c.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/mypage/terms/page-21e23847a5e0238d.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/page-f0d0aab833ee68b4.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/page-3ade095121957575.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/review-stage/page-0f2f578334e769b3.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/%5Bid%5D/page-9acb58f5682ea43a.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c1/1/page-94e63a3a7ab70b48.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c1/page-ca99571399a9730c.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c2/1/page-0ea8a5e5be689d88.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c2/page-9616e0da1438594d.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c3/1/page-e2d3f051cbba0801.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c3/page-fc4b9fc4c5e1642a.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c4/1/page-b16f927da8b67ab7.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/c4/page-b5827e25863f0a35.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/page-fb85074a0a576288.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/quiz/stage/recommend/page-a3f626c7aa3c924b.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/(pages)/tab1/page-fc0fd18b17725a42.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/_not-found-4f2c4cb145556b29.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/app/layout-5a273c78dab77217.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/f4e5f4e1-7a2c3c4f27bb9b70.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/fd9d1056-76eed7026ba4a25c.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/main-app-3fd8cef45fa7ebd9.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/main-b47af25d98d0f5c8.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b51a9063751dd5c4.js",revision:"xwg8nNUzd-TQghf62ymub"},{url:"/_next/static/css/0437bc5a8e86303a.css",revision:"0437bc5a8e86303a"},{url:"/_next/static/css/9a3eaa132cdb9804.css",revision:"9a3eaa132cdb9804"},{url:"/_next/static/css/d8824d6c7ee25f2a.css",revision:"d8824d6c7ee25f2a"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/8f31ad00efa6737e-s.p.otf",revision:"30cea2c35912497417654028f0d39625"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/xwg8nNUzd-TQghf62ymub/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/xwg8nNUzd-TQghf62ymub/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/fonts/PretendardVariable.ttf",revision:"872a6c5775ec910058a9a409a201972a"},{url:"/assets/icons/back-arrow-white.svg",revision:"3f685b81a7aa848d3688f7648b954f4a"},{url:"/assets/icons/back-arrow.svg",revision:"86b25693de5009c6ef6d24d3f56ed736"},{url:"/assets/icons/calendar.svg",revision:"0591faf98ea6ec396697bdfe39162c92"},{url:"/assets/icons/check-blue.svg",revision:"0c8dd91ffe724f2d0cf9d8c9ba5244be"},{url:"/assets/icons/check-circle-disable.svg",revision:"de640ba461d28c64b276f16045e7cb12"},{url:"/assets/icons/check-circle.svg",revision:"d1300a261b41d366ae21c66a89a6fd50"},{url:"/assets/icons/close-white.svg",revision:"251a00e2a7ec54da3ddc1f12ebfdc237"},{url:"/assets/icons/close.svg",revision:"d0ecbd2d1cf52af80e004f4528b72525"},{url:"/assets/icons/coin.svg",revision:"77e8b11a2c74dcb123c45aebac43c717"},{url:"/assets/icons/home_success.svg",revision:"7f36e2450a1ce8ed25509136b0e09a8e"},{url:"/assets/icons/kakao.svg",revision:"bc61a02d08cd52413c2ff70eec3d1119"},{url:"/assets/icons/lock.svg",revision:"1f04e341b022ce359156ea2170297719"},{url:"/assets/icons/mainlogo_blue.svg",revision:"5f9493f40215d9a4f54d3e2bfd0a0995"},{url:"/assets/icons/mainlogo_white.svg",revision:"84d7220b766abd83990f5de79539ec68"},{url:"/assets/icons/next-arrow-blue.svg",revision:"edb18aaae451705eb2913dbe35c2255f"},{url:"/assets/icons/next-arrow.svg",revision:"bef702143c44670bb4e3013af180deff"},{url:"/assets/icons/or.svg",revision:"930a321f9ec03898cbada8ff22b12b88"},{url:"/assets/icons/present-box-opened.svg",revision:"f7e47237174c8aba20d529282900285d"},{url:"/assets/icons/present-box.svg",revision:"4d37b5c75a44b6f71de2b77989e5075e"},{url:"/assets/icons/pwa192.png",revision:"2749d2eee4130c8d66f88df48ea1f679"},{url:"/assets/icons/pwa384.png",revision:"32fc28283afa9b59fa31417b808d217a"},{url:"/assets/icons/pwa512.png",revision:"a1032c8f53c303f5c3ce017c9d590794"},{url:"/assets/icons/radio-disabled.svg",revision:"c5b5b32cfb8b840b6b96445059a883d5"},{url:"/assets/icons/radio.svg",revision:"14a528bcad6e88809ed6cf03dc2cffab"},{url:"/assets/icons/x-circle.svg",revision:"2e49a334a63596c6d660fbef28ee7550"},{url:"/assets/icons/x-red.svg",revision:"c9bd2e1fda4ac17c4ca63955a7a33753"},{url:"/assets/images/b/explore/images/bookmark_outline.svg",revision:"4ce36103b056a96dc9936852cf7cfefe"},{url:"/assets/images/b/explore/images/error.svg",revision:"266c238dfddfee3afd67f6c7c7c89a9d"},{url:"/assets/images/b/explore/images/explore_filter_down.svg",revision:"f60d792cc6baebae10f6e313e37649e2"},{url:"/assets/images/b/explore/images/explore_filter_up.svg",revision:"6e2139c550802184c1f3ee95afef1d02"},{url:"/assets/images/b/explore/images/share.svg",revision:"b9ce1d62a03726e54782e1517f3c3b0a"},{url:"/assets/images/b/home/images/alarm.svg",revision:"596f433c5fd995741201be4a39af84f3"},{url:"/assets/images/b/home/images/back.svg",revision:"b052af4c20f47beea40c515b0084d94a"},{url:"/assets/images/b/home/images/bell.svg",revision:"831db23b075a5cdf2a46d1839317d605"},{url:"/assets/images/b/home/images/bookmark_off.svg",revision:"e0dc8eb038c8d9ba3110d8f4164a4674"},{url:"/assets/images/b/home/images/bookmark_tab_on.svg",revision:"fa2bca1a111ce6fa2908273bda64a2d5"},{url:"/assets/images/b/home/images/bunny_char_2.svg",revision:"c63052cbc852e349bf78a968e974cf78"},{url:"/assets/images/b/home/images/card_two_bookmark.svg",revision:"845e92140130e65b838b58528fa17633"},{url:"/assets/images/b/home/images/card_two_more.svg",revision:"41189a399f1da9062d8ba38914e5e550"},{url:"/assets/images/b/home/images/card_two_view.svg",revision:"e29d8c0e1649faf46c614c70c60faee5"},{url:"/assets/images/b/home/images/clock.svg",revision:"bd3316da4bd0fd263ada295410d86fc8"},{url:"/assets/images/b/home/images/close.svg",revision:"b78bc5d32c8043220572b366ba157767"},{url:"/assets/images/b/home/images/fire.svg",revision:"348fb4be0ecfc06775216cbc61b8eb43"},{url:"/assets/images/b/home/images/home_banner.svg",revision:"700f7bc7306645a10e5476e3ddbd5a53"},{url:"/assets/images/b/home/images/icon_choose.svg",revision:"8e4c4e2f2cab2cede1b2d70da4f131d0"},{url:"/assets/images/b/home/images/lightbulb.svg",revision:"9b3ec0775ee9bfc342638553cd51e0c7"},{url:"/assets/images/b/home/images/notification_ellipse.svg",revision:"3ec8b01d08c5079a43449372b58738d3"},{url:"/assets/images/b/home/images/search.svg",revision:"827df857b933b921dac53e4eebe8948a"},{url:"/assets/images/b/mypage/images/coin.svg",revision:"db1fff5c11c0ae883193f26b57c1dcff"},{url:"/assets/images/b/mypage/images/cone.svg",revision:"0ebc21dcedc552f983e3017866774c97"},{url:"/assets/images/b/mypage/images/kakao_circle.svg",revision:"fb6384991da83964ae9240ee2aa9c0da"},{url:"/assets/images/b/mypage/images/my_banner.svg",revision:"87ece52f764e5559ea374bc6870a9d7d"},{url:"/assets/images/b/mypage/images/nooo.svg",revision:"e9a18face477a248c0443e28df1b46fa"},{url:"/assets/images/b/mypage/images/point_0.svg",revision:"93c41a97aed8af22aa3015e1ecd4cbf1"},{url:"/assets/images/b/mypage/images/point_1.png",revision:"c3e2a3e99428e5d61054215398c609b1"},{url:"/assets/images/b/mypage/images/point_2.svg",revision:"9e3dce27255ae5f2fe9f189db1b7a951"},{url:"/assets/images/b/mypage/images/point_3.svg",revision:"0d98e45944b3a19715ef5693de361108"},{url:"/assets/images/b/mypage/images/point_tab.svg",revision:"5fc41d61fbfa65433ffb1da7aa6c0e98"},{url:"/assets/images/b/mypage/images/right_arrow.svg",revision:"fcfb34d59b47073cf2d0d3c34b0a57a1"},{url:"/assets/images/b/mypage/images/rock.svg",revision:"625e904e610c87ee8e5f499d7b5964d8"},{url:"/assets/images/b/mypage/images/round_cube.svg",revision:"68639a9ae46dfb3c19a0c7acc30d6fac"},{url:"/assets/images/b/mypage/images/x.svg",revision:"75307330819eda157ea8130f1437f80c"},{url:"/assets/images/b/mypage/images/yay.svg",revision:"6be405b9e18c14bb2fb561bc5933419e"},{url:"/assets/images/category1.png",revision:"5960caa980ba16532e35cff3a29094cb"},{url:"/assets/images/category1.svg",revision:"caaf1e3ae2248415cf02f169c664b901"},{url:"/assets/images/category2.png",revision:"bf66b681d020fa4b806dce39ac08b611"},{url:"/assets/images/category2.svg",revision:"c943c74e2e5c8f124ec5ce9cca60cbcd"},{url:"/assets/images/category3.png",revision:"5bf942cdff38d21c76b34deca476d3e2"},{url:"/assets/images/category3.svg",revision:"792ebd8c8b0fb09addc18a235ab3a35a"},{url:"/assets/images/category4.png",revision:"d5d323575a139e6b706ed9cb53162ce1"},{url:"/assets/images/category4.svg",revision:"9379b20be9a107ccd2af98069e64e21d"},{url:"/assets/images/main-character.svg",revision:"1b2ffcca96727a310f85d4df72ccdfa9"},{url:"/firebase-messaging-sw.js",revision:"41f6ba4cd55fbe9e970ce693473f930e"},{url:"/manifest.json",revision:"a011b41c0194e37a2cad456ea4049131"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
