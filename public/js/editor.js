;(function() {
    var h = getAPI();
    h.attachStyle("*:hover { border: 1px dashed #000; }");


    /* API */
    /* **************** */
    function getAPI() {
        var API = function() {};

        API.prototype.bind = function(eventName, eventHandler) {
            el.addEventListener(eventName, eventHandler);
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
