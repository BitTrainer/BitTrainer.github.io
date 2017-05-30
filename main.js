(function app() {
    var TAG = "app";
    
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js').then(function (registration) {
                    // Registration was successful
                    appLog.logInfo(TAG, 'ServiceWorker registration successful with scope: ' +  registration.scope);
                }, function (err) {
                    // registration failed :(
                   appLog.logError(TAG, 'ServiceWorker registration failed: ' + err)
                });
            });
        } else {
            appLog.logWarning(TAG, "Service worker not supported.");
        }
    }
    appLog.logInfo(TAG, "App starting.");
    registerServiceWorker();
})();
