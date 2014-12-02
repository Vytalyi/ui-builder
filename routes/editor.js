module.exports = {

    init: function (app) {
        app.get('/editor-api/inject/', this.allowCrossDomain, this.redirectToInjectionScript);
    },

    redirectToInjectionScript: function (req, res) {
        res.redirect('/js/editor.js?nocache=' + (new Date().getTime()));
    },

    allowCrossDomain: function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    }

};
