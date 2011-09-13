dojo.provide("cvdj.Ca");

cvdj.Cache = function() {
    // summary
    // return an object of type cvdj.Cache
    var k = [];
    var c = {};
    var max = 10;
    this.count = k.length;
    this.add = function(/* str */key, /* object */val) {
        for ( var i = 0; i < k.length; i++) {
            if (k[i] == key) {
                k.splice(i, 1);
                break;
            }
        }
        this.count = k.push(key);
        c[key] = val;
        this.count = k.length;
        this._prune();
        console.log(k);
    };
    this._prune = function() {
        while (k.length > max) {
            var v = k.shift();
            if (typeof c[v].destroy == 'function') {
                c[v].destroy();
            }
            delete c[v];
        }
        this.count = k.length;
    };
    this.get = function(/* str */key) {
        for ( var i = 0; i < k.length; i++) {
            if (k[i] == key) {
                k.splice(i, 1);
                this.count = k.push(key);
                return c[k];
            }
        }
        return false;
    };
};
