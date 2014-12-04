;(function() {
    var api = getAPI();

    (function() {

        //api.attachStyle(".visualization:hover { border: 1px dashed #000 !important; }");
        api.attachStyle("" +
            ".visualization:hover { background: grey !important; }" +
            ".visualization .visualization:hover { background: yellow !important; }" +
            "");

        var elements = document.querySelectorAll('body *');
        for (var i in elements) {
        	if (elements[i].style && elements.hasOwnProperty(i)) {
        		var inn = elements[i], outt = inn.parentNode;

                api.bind(outt, "mouseover", function(e) {
                    e.stopPropagation();
                });
                api.bind(inn, "mouseout", function(e) {
                    this.className = this.className.replace( /(?:^|\s)visualization(?!\S)/g , '' );
                });
                api.bind(inn, "mouseover", function(e) {
                    this.className += " visualization";
                });

        	}
        }

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
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        };

        return ( new API() );
    }

})();
