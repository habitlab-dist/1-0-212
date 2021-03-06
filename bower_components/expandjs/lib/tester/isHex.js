/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var isString  = require('../tester/isString');

    /**
     * Checks if `value` is a hexadecimal value.
     *
     * ```js
     *  XP.isHex('abc');
     *  //=> true
     *
     *  XP.isHex('a b-c');
     *  //=> false
     * ```
     *
     * @function isHex
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     * @hot
     */
    module.exports = function isHex(value) {
        return isString(value) && /^[0-9A-Fa-f]+$/.test(value);
    };

}());
