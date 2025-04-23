/**
 * RebB2B tracker initialization
 * This ensures the tracking code runs even if there's an issue with the script in index.html
 */

export const initializeReb2B = () => {
    try {
        // Run the RebB2B initialization script
        !function () {
            var reb2b = window.reb2b = window.reb2b || [];
            if (reb2b.invoked) return;
            reb2b.invoked = true;
            reb2b.methods = ["identify", "collect"];
            reb2b.factory = function (method) {
                return function () {
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift(method);
                    reb2b.push(args);
                    return reb2b;
                };
            };
            for (var i = 0; i < reb2b.methods.length; i++) {
                var key = reb2b.methods[i];
                reb2b[key] = reb2b.factory(key);
            }
            reb2b.load = function (key) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/5NRP9HG83WO1.js.gz";
                var first = document.getElementsByTagName("script")[0];
                first.parentNode.insertBefore(script, first);
            };
            reb2b.SNIPPET_VERSION = "1.0.1";
            reb2b.load("5NRP9HG83WO1");
        }();
        console.log("RebB2B tracker initialized");
    } catch (error) {
        console.error("Error initializing RebB2B tracker:", error);
    }
};
