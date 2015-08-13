/**
 * Created by Jun.li on 2015/7/10.
 */
"use strict";
var ll = require('./base_link_list');

function LinkedList() {
    function _LinkedList() {
        this.obj = {};
        this.init();
    }

    _LinkedList.prototype = {
        init: function () {
            ll.init(this.obj);
        },
        getHead: function () {
            return ll.getHead(this.obj);
        },
        cutHead: function () {
            return ll.cutHead(this.obj);
        },
        getTail: function () {
            return ll.getTail(this.obj);
        },
        cutTail: function () {
            return ll.cutTail(this.obj);
        },
        remove: function (item) {
            if (this.checkObj(item))
                ll.remove(item, true);
        },
        addHead: function (item) {
            if (this.checkObj(item))
                ll.addHead(this.obj, item);
        },
        addTail: function (item) {
            if (this.checkObj(item))
                ll.addTail(this.obj, item);
        },
        checkObj: function (item) {
            return typeof  item === 'object' || typeof  item === 'function';
        },
        toString: function (key) {
            for (var i = this.obj._head; i !== null && i._idleNext !== i._tail; i = i._idleNext) {
                console.log(key && i[key] || i);
            }
        }
    };
    return new _LinkedList();
}

module.exports = LinkedList;