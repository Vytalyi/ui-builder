;(function() {
    var api = getAPI();


    // process current document - put all necessary styles, events, etc...
    (function() {
        api.attachStyle("" +
            ".visualization:hover { background: grey !important; }" +
            ".visualization .visualization:hover { background: yellow !important; }" +
            "#visualizeEditor { position: fixed; right: 0; bottom: 0; }" +
            "");

        var elements = document.querySelectorAll('body *');
        for (var i in elements) {
        	if (elements[i].style && elements.hasOwnProperty(i)) {
        		var inn = elements[i], outt = inn.parentNode;
                api.bind(outt, "mouseover", function(e) { e.stopPropagation(); });
                api.bind(inn, "mouseout", function(e) { this.className = this.className.replace( /(?:^|\s)visualization(?!\S)/g , '' ); });
                api.bind(inn, "mouseover", function(e) { this.className += " visualization"; });
        	}
        }

        api.bind(document, "click", function(e) {
            var w = document.getElementById("visualizeEditor").contentWindow,
                curEl = e.target,
                msg = {};

            msg.serialized = curEl.outerHTML;

            w.postMessage(
                JSON.stringify(msg),
                api.getAppDomain()
            );

            e.preventDefault();
            return false;
        });
    })();


    // put an Editor's iframe
    (function() {

        var el = document.createElement("iframe");
        el.id = "visualizeEditor";
        el.src = api.getAppBaseUrl() + "editor";
        document.body.appendChild(el);

    })();


    /* API */
    /* **************** */
    function getAPI() {
        var API = function() {};

        API.prototype.bind = function(el, eventName, eventHandler) {
            el.addEventListener(eventName, eventHandler, false);
        };

        API.prototype.attachStyle =  function(css) {
            var head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        };

        API.prototype.getAppBaseUrl = function() {
            var src = document.querySelector('script[src$="editor-api/inject"]').getAttribute('src');
            src = src.replace("/inject", "/");
            src = location.protocol + "" + src;
            return src;
        };

        API.prototype.getAppDomain = function() {
            return this.getAppBaseUrl().replace("editor-api", "");
        };

        return ( new API() );
    }

})();
