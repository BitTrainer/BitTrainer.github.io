    var appLog = (function () {
        var _logLevel = {
            Debug: "DEBUG",
            Information: "INFORMATION",
            Warning: "WARNING",
            Error: "Error"
        };

        function log(level, tag , message) {
            if (level === _logLevel.Error) {
                console.error((new Date()).toISOString(), level, tag, message);
            } else {
                console.log((new Date()).toISOString(), level, tag, message);
            }
        }

        return {
            logLevel: _logLevel,
            logError: function (tag, message) {
                log(_logLevel.Error, tag, message);
            },
            logInfo: function (tag, message) {
                log(_logLevel.Information, tag, message);
            },
            logWarning: function (tag, message) {
                log(_logLevel.Warning, tag, message);
            }

        };
    })();
