module.exports = {

    init: function (app) {
        app.get('/editor-api/inject/', this.allowCrossDomain, this.redirectToInjectionScript);

        app.get('/editor-api/editor/', this.allowCrossDomain, this.redirectToEditorPage);
    },

    redirectToInjectionScript: function (req, res) {
        res.redirect('/js/editor-injector.js?nocache=' + (new Date().getTime()));
    },

    redirectToEditorPage: function(req, res) {
        res.render('editor');
    },

    allowCrossDomain: function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    }

};
