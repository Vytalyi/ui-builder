var editor = require("./editor");

module.exports = {

    init: function (app) {
        app.get('/', this.getIndex);

        editor.init(app);
    },

    getIndex: function (req, res) {
        res.render('index', {
            editorPath: req.protocol + '://' + req.get('host')
        });
    }

};
