module.exports = {

    init: function (app) {
        app.get('/', this.getIndex);
    },

    getIndex: function (req, res) {
        res.render('index');
    }
};
