/**
 * Created by Jun.li on 2015/7/10.
 */
"use strict";

function init(list) {
    list._head = null;
    list._tail = null;
}
exports.init = init;

function getHead(list) {
    return list._head;
}
exports.getHead = getHead;


function cutHead(list) {
    var first = list._head;
    remove(list, first);
    return first;
}
exports.cutHead = cutHead;

function getTail(list) {
    return list._tail;
}
exports.getTail = getTail;

function cutTail(list) {
    var first = list._tail;
    remove(list, first);
    return first;
}
exports.cutTail = cutTail;

function remove(list, item, clear) {
    if (!item || !list) {
        return;
    }
    if (item._idleNext) {
        item._idleNext._idlePrev = item._idlePrev;
    }

    if (item._idlePrev) {
        item._idlePrev._idleNext = item._idleNext;
    }

    (item == list._head) && (list._head = item._idleNext);
    (item == list._tail) && (list._tail = item._idlePrev);
    item._idleNext = null;
    item._idlePrev = null;
    clear && (item = null);
}
exports.remove = remove;


function addTail(list, item) {
    remove(list, item);
    var tail = list._tail;
    tail && ( item._idlePrev = tail) && (tail._idleNext = item);
    list._tail = item;
    var head = list._head;
    (!head) && (list._head = item);
}
exports.addTail = addTail;

function addHead(list, item) {
    remove(list, item);
    var head = list._head;
    head && ( item._idleNext = head) && (head._idlePrev = item);
    list._head = item;
    var tail = list._tail;
    (!tail) && (list._tail = item);
}
exports.addHead = addHead;

function isEmpty(list) {
    return list._head === null && list._tail === null;
}
exports.isEmpty = isEmpty;