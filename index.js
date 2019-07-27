'use strict';

function Geny(config) {
    //config = {} || config;
    this.config = config;
}

Geny.prototype.exec = function() {
    const config = this.config;
    console.log(config);
};

module.exports = Geny;