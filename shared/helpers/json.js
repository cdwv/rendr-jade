/*
 * @Author: grzegorz
 * @Date:   2016-06-09 08:46:38
 * @Last Modified by:   grzegorz
 * @Last Modified time: 2016-06-09 08:48:58
 */

'use strict';

module.exports = function (jade, getTemplate) {
    return function (object, spacing) {
        return JSON.stringify(object, null, spacing);
    }
}