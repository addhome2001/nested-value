/*!
 * nested-value <https://github.com/addhome2001/nested-value>
 *
 * Copyright (c) 2016 addhome2001, contributors.
 * Licensed under the MIT License
 */

/**
 * @param  {Object}         obj  [source]
 * @param  {Array|String}   goal [structure]
 * @param  {Function}       cb   [callback]
 * @return {*}                   [result]
 */
module.exports = function (obj, goal, cb) {
  var goalArr;
  var result;
  var init;
  var length;

  switch (Object.prototype.toString.call(goal)) {
    case '[object Array]':
      goalArr = goal;
      break;
    case '[object String]':
      goalArr = goal.split('.');
      break;
    default:
      throw new TypeError('The second arguments is not Array or String.');
  }

  length = goalArr.length;

  if (length > 0) {
    result = obj[goalArr[0]];
    init = 1;

    for (init; init < length; init++) {
      result = result[goalArr[init]];
    }
  }
  return cb ? cb(result) : result;
};
