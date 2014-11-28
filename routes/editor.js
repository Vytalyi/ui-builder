module.exports = {

    init: function (app) {
        app.get('/editor-api/inject/', this.redirectToInjectionScript);
    },

    redirectToInjectionScript: function (req, res) {
        res.redirect('/js/editor.js');
    }

};
