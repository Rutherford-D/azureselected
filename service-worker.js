/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "922bc5acee1cda5fd4b02759bbe112da"
  },
  {
    "url": "assets/css/0.styles.0e2430c9.css",
    "revision": "115578340882566d73e2f3789f20f19e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0cae88d6.js",
    "revision": "645decf6c7b119eed63661cc6b8f2dbd"
  },
  {
    "url": "assets/js/11.b0ec18a9.js",
    "revision": "f28a1e5aae3d6f549a3a6877409f7b28"
  },
  {
    "url": "assets/js/12.1defd341.js",
    "revision": "0359f1d89eacba1e9e75e741f28d45ad"
  },
  {
    "url": "assets/js/13.c75bf86d.js",
    "revision": "c4b8b80a209bf905c30b2458c10a9752"
  },
  {
    "url": "assets/js/14.0da58482.js",
    "revision": "ebbefa1b9daac531279a96b49debccc7"
  },
  {
    "url": "assets/js/15.ef8bdb61.js",
    "revision": "89694f0d385890f20a7cba0aa87a30e5"
  },
  {
    "url": "assets/js/16.afbc9b57.js",
    "revision": "a303e505cb55285aee1f5f05a2062920"
  },
  {
    "url": "assets/js/17.c42bb141.js",
    "revision": "ae376e88be09bae7b6e5bc0ff6cb6273"
  },
  {
    "url": "assets/js/18.4db6777f.js",
    "revision": "f082a083f51306fe35151a6c88e5e5df"
  },
  {
    "url": "assets/js/19.eacf13f6.js",
    "revision": "d27cca2588218e5b13ca1a6693d0efd5"
  },
  {
    "url": "assets/js/2.08baae6d.js",
    "revision": "7234e455f3553221caf25cc31bc368e5"
  },
  {
    "url": "assets/js/20.9a7b9c1c.js",
    "revision": "1c2d56bdafce612e94289e443e259d47"
  },
  {
    "url": "assets/js/21.429061c9.js",
    "revision": "e70175ef9980c82032e584bbb29b4cc0"
  },
  {
    "url": "assets/js/22.cede0d30.js",
    "revision": "541780b07f01638866e424e0cfffb3e6"
  },
  {
    "url": "assets/js/23.d30ce7f3.js",
    "revision": "0433f3d597b234d89a50969997132eff"
  },
  {
    "url": "assets/js/24.9f482473.js",
    "revision": "9a2e9dad075614d7c1cb2212bc7c5487"
  },
  {
    "url": "assets/js/25.a17b4cdd.js",
    "revision": "5988c8b6dd923f00b0cc63605b186562"
  },
  {
    "url": "assets/js/26.fce1e8aa.js",
    "revision": "f366b77c18caf60125ecb0147c0506b6"
  },
  {
    "url": "assets/js/27.ddd2ebdf.js",
    "revision": "09f737bcef288e56c12446321eb7dfbc"
  },
  {
    "url": "assets/js/28.fd7286ce.js",
    "revision": "e80f7025d8e4264a7f18a1fc73247cb4"
  },
  {
    "url": "assets/js/29.02dfeaae.js",
    "revision": "086e0d05a8aba946d0e87a88c17b458b"
  },
  {
    "url": "assets/js/3.a5bfbd82.js",
    "revision": "c9882c4a877aacd53170990a5cee7831"
  },
  {
    "url": "assets/js/4.0ba3a85d.js",
    "revision": "3c8c03667b58a9374f23a2c4122bc620"
  },
  {
    "url": "assets/js/5.eebe458a.js",
    "revision": "5173a454ee0b75bd3bc5fa8ad7fd2ed5"
  },
  {
    "url": "assets/js/6.73d4eacc.js",
    "revision": "9c85a56c7345f8e68e3b3bf9a0ef68fa"
  },
  {
    "url": "assets/js/7.6adafdd9.js",
    "revision": "8066e3dcf3d7d2b7fc2c0092f3b93299"
  },
  {
    "url": "assets/js/8.4acf5fbe.js",
    "revision": "753746b88f9e9917e32cb33416aa7a32"
  },
  {
    "url": "assets/js/9.aacc1606.js",
    "revision": "cbda0bc29e870c7de193f0d011beb7ac"
  },
  {
    "url": "assets/js/app.c33e88f9.js",
    "revision": "d9e32c8c176db449cc9220bb05a5233c"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "37b149ed0ed47c6799f8cfb7c6bda995"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "01eceffc56ac429fad7da5777812e3e2"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "b32593d5d7913e3c598e361e24201a20"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "68c6eb3da1ff1c17fac11a6498f5fc7c"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "144609fdf874143e467d0339f3bb95da"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "a64f12b539a465b1b512c55184c58731"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "69272a5d8ed56564f7995e1990489481"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "6c93683a8ec7766de68e421dd6beec2f"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "23ec6a5eca9409fa2d3ad0d41ad053d6"
  },
  {
    "url": "content/cloud-advocate/2020-01/index.html",
    "revision": "5c0f0d91315064f336b88e05bedee71f"
  },
  {
    "url": "content/cloud-advocate/2020-01/Managing-security-with-Azure-Lighthouse-and-Azure-Arc/index.html",
    "revision": "81475aa78bf8d3c4a919b601e880e266"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "f3fe5bd2a00a93ec229e8437ebbec202"
  },
  {
    "url": "content/cloud-advocate/index.html",
    "revision": "f6b0930e6f147d4b8e6d2ded3811c8b7"
  },
  {
    "url": "content/index.html",
    "revision": "8714a98472e187d57f6256d1a559fd33"
  },
  {
    "url": "content/tips-tricks/index.html",
    "revision": "3f2dedcb903f27924110808a49281ad2"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "0f499a9de50fa3713cff0b67c93495b8"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "56a46208a90b52d8b6f971db66f74623"
  },
  {
    "url": "LICENSE.html",
    "revision": "2ceaac45ca33df686849a76ceb1bc9ac"
  },
  {
    "url": "tags.html",
    "revision": "95c20d649c146d275eac691288c2ff79"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
