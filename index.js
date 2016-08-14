/*!
 * nested-value <https://github.com/addhome2001/nested-value>
 *
 * Copyright (c) 2016 addhome2001, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function (obj, goal, cb) {
    if(goal.length){
        var goalArr = Array.isArray(goal) ? goal : goal.split('.');
        var result = obj[goalArr[0]],
            init = 1,
            length = goalArr.length;

        for( init ; init < length ; init++){
            result = result[goalArr[init]]
        }

        return cb ? cb(result) : result

    } else {
        throw new TypeError('The second argument is not Array or String.')
    }
};
