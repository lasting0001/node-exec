/**
 * Created by Jun.li on 2015/8/3.
 */
"use strict";


function Exec() {
    return {
        parallel: function (params) {
            params = params || {};
            var fns = params.fns;
            var overBack = params.overBack;
            var errorBack = params.errorBack;
            if (!errorBack) {
                return;
            }
            if (!fns || !overBack) {
                return errorBack(new Error('params error'));
            }
            var over = 0;
            var count = 0;
            var len = fns.length;
            var args = params.args || [];
            var entities = params.entities || [];
            for (var j = 0; j < len; j++) {
                var fj = fns[j];
                var ps = {arg: args[j]};
                ps.callBack = function (err, results) {
                    if (over) {
                        return;
                    }
                    if (err) {
                        over = true;
                        return errorBack(err);
                    }
                    (++count === len) && overBack(results);
                };
                (typeof  fj === 'function') && (fj.call(entities[j] || null, ps));
            }
        },
        serial: function (params) {
            params = params || {};
            var fns = params.fns;
            var overBack = params.overBack;
            var errorBack = params.errorBack;
            if (!errorBack) {
                return;
            }
            if (!fns || !overBack) {
                return errorBack(new Error('params error'));
            }
            var over = 0;
            var ll = new _LinkedList();
            var args = params.args || [];
            var entities = params.entities || [];
            for (var i = 0, len = fns.length; i < len; i++) {
                var fi = fns[i];
                ll.addTail(fi);
            }
            var index = 0;
            var elm = ll.cutHead();
            var ps = {arg: args[index]};
            ps.callBack = function (err, results) {
                if (over) {
                    return;
                }
                if (err) {
                    over = true;
                    return errorBack(err);
                }
                elm = ll.cutHead();
                if (!elm) {
                    return overBack(results);
                }
                ++index;
                ps.arg = args[index];
                ps.pre_results = results;
                (typeof  elm === 'function') && (elm.call(entities[index] || null, ps));
            };
            (typeof  elm === 'function') && (elm.call(entities[index] || null, ps));
        }
    }
}

global._Exec = Exec();