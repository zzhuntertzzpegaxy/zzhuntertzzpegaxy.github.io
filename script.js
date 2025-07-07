var buildUrl = "Build";
var loaderUrl = buildUrl + "/development.loader.js?638874987640229938";
var config = {
    dataUrl: buildUrl + "/9fa1267014bab1f9f670bff71069f6bb.data.unityweb",
    frameworkUrl: buildUrl + "/1e39fb98dd0ad193332ff0105a73a708.js.unityweb",
    codeUrl: buildUrl + "/7890b4b134568e8cb7a522eeeb937790.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Mirailabs",
    productName: "Merge Pals | Mini Dapp",
    productVersion: "3.0.1",

    cacheControl: function (url) {
        // Caching enabled for .data and .bundle files.
        // Revalidate if file is up to date before loading from cache
        if (url.match(/\.data/) || url.match(/\.bundle/)) {
            return "must-revalidate";
        }

        // Caching enabled for .mp4 and .custom files
        // Load file from cache without revalidation.
        if (url.match(/\.mp4/) || url.match(/\.custom/)) {
            return "immutable";
        }

        // Disable explicit caching for all other files.
        // Note: the default browser cache may cache them anyway.
        return "no-store";
    },
};

if (isMobile) {
    const maxPixelRatioMobile = 2.0;
    config.devicePixelRatio = Math.min(window.devicePixelRatio, maxPixelRatioMobile);
}
else {
    config.devicePixelRatio = 2.0;
}

var loadingBar = document.querySelector("#unity-loading-fg");
var unityGame;
var script = document.createElement("script");
script.src = loaderUrl;
script.onload = function () {
    createUnityInstance(canvas, config, function (progress) {
        loadingBar.style.width = 75 * progress + "%";
    }).then(function (unityInstance) {
        unityGame = unityInstance;
    }).catch(function (message) {
        alert(message);
    });
};
document.body.appendChild(script);

