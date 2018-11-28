
(function () {

    window.JojoBadge = {
        favicon: new Favico({animation: 'none'}),
        actualBadge: 0,
        numToUpdate: 5,
        updatesSkipped: 0,
        update: function (newNum) {
            if (this.actualBadge !== newNum) {
                this.numToUpdate = 5;
            }
            if (this.updatesSkipped >= 4) {
                this.numToUpdate = 1;
            }
            if (this.numToUpdate > 0) {
                this.favicon.badge(newNum);
                console.log('real badge updated to ' + newNum);
                this.numToUpdate--;
                this.updatesSkipped = 0;
                this.actualBadge = newNum;
            } else {
                this.updatesSkipped++;
            }
        }
    };

})();