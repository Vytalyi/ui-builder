;(function() {

    var docEl = $(document.documentElement),
        win = $(window);

    win.on("message", function(e) {
        var body = $("body"),
            msg = JSON.parse(e.originalEvent.data);

        body.text("Clicked on " +  JSON.stringify(msg.serialized));
    });

})();
