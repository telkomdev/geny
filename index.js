'use strict';

const giveColor = require('./colors');
const menuAction = require('./menu');

function Geny(config) {
    //config = {} || config;
    this.config = config;
}

Geny.prototype.exec = function() {
    menuAction();
};

module.exports = {
    Geny, giveColor
};