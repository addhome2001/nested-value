/*!
 * nested-value <https://github.com/addhome2001/nested-value>
 *
 * Copyright (c) 2016 addhome2001, contributors.
 * Licensed under the MIT License
 */

module.exports = function (obj, goal, cb) {
  var goalArr;
  var result;
  var init;
  var length;

  if (goal.length) {
    goalArr = Array.isArray(goal) ? goal : goal.split('.');
    result = obj[goalArr[0]];
    init = 1;
    length = goalArr.length;

    for (init; init < length; init++) {
      result = result[goalArr[init]];
    }
  } else {
    throw new TypeError('The second argument is not Array or String.');
  }
  return cb ? cb(result) : result;
};
