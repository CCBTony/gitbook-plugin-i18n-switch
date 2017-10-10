var footer = require('./assets/lib/plugin');

module.exports = {
    book: {
        assets: "./assets",
        css: ["style/plugin.css"]
    },
    hooks: {
        'page': function (page) {
            return footer(this, page);
        }
    }
};