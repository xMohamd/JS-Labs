// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// 2. Write a JavaScript program to copy a string to the clipboard.
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
function csvTo2DArray(csvString) {
  return csvString.split("\n").map((row) => row.split(","));
}

// 4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
function csvToObjectArray(csvString) {
  const rows = csvString.split("\n");
  const headers = rows[0].split(",");
  const data = [];

  for (let i = 1; i < rows.length; i++) {
    const obj = {};
    const values = rows[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }

    data.push(obj);
  }

  return data;
}

// 5. Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.
function objectArrayToCSV(data, columns) {
  const headers = columns.join(",");
  const rows = [];

  for (const obj of data) {
    const row = columns.map((col) => obj[col]).join(",");
    rows.push(row);
  }

  return `${headers}\n${rows.join("\n")}`;
}

// 6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.
function getNestedValue(obj, key) {
  const keys = key.split(".");
  let value = obj;

  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      return undefined;
    }
  }

  return value;
}

// 7. Write a JavaScript program to convert a specified number into an array of digits.
function numberToArray(num) {
  return Array.from(String(num), Number);
}

// 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
function filterOut(arr, ...values) {
  return arr.filter((item) => !values.includes(item));
}

// 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
function combineNumbers(arr) {
  const combinations = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      combinations.push(`${arr[i]}${arr[j]}`);
    }
  }

  return combinations;
}

// 10. Write a JavaScript program to extract values at specified indexes from a specified array.
function extractValues(arr, ...indexes) {
  return indexes.map((index) => arr[index]);
}

// 11. Write a JavaScript program to generate a random hexadecimal color code.
function generateHexColor() {
  const hexChars = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }

  return color;
}

// 12. Write a JavaScript program to remove non-printable ASCII characters from a given string.
function removeNonPrintableChars(str) {
  return str.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
}

// 13. Write a JavaScript program to convert a given string's length to bytes.
function stringLengthToBytes(str) {
  return new Blob([str]).size;
}

// 14. Write a JavaScript program to replace multiple object keys' names with the values provided.
function replaceKeys(obj, keysMap) {
  const newObj = {};

  for (const [oldKey, newKey] of Object.entries(keysMap)) {
    if (obj.hasOwnProperty(oldKey)) {
      newObj[newKey] = obj[oldKey];
    }
  }

  return newObj;
}

// 15. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule.
function minMaxValue(arr, fn) {
  let min = Infinity;
  let max = -Infinity;

  for (const value of arr) {
    const result = fn(value);
    min = Math.min(min, result);
    max = Math.max(max, result);
  }

  return [min, max];
}

// 16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
function every(coll, predicate) {
  for (const item of coll) {
    if (!predicate(item)) {
      return false;
    }
  }

  return true;
}

// 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
function bifurcate(coll, filter) {
  const group1 = [];
  const group2 = [];

  for (let i = 0; i < coll.length; i++) {
    if (filter[i]) {
      group1.push(coll[i]);
    } else {
      group2.push(coll[i]);
    }
  }

  return [group1, group2];
}

// 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.
function dropElements(arr, func) {
  const dropCount = arr.findIndex(func);
  return arr.slice(dropCount >= 0 ? dropCount : arr.length);
}

// 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.
function dropRight(arr, func) {
  const dropCount = arr.length - arr.findLastIndex(func) - 1;
  return arr.slice(0, Math.max(arr.length - dropCount, 0));
}

// 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
function extendHexColor(shortHand) {
  return Array.from(shortHand.slice(1), (char) => char + char).join("");
}

// 21. Write a JavaScript program to get every nth element in a given array.
function everyNth(arr, nth) {
  const result = [];

  for (let i = 0; i < arr.length; i += nth) {
    result.push(arr[i]);
  }

  return result;
}

// 22. Write a JavaScript program to filter out non-unique values in an array.
function filterNonUnique(arr) {
  return [...new Set(arr)];
}

// 23. Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function.
function filterNonUniqueBy(arr, fn) {
  const uniqueSet = new Set();
  const result = [];

  for (const item of arr) {
    const key = fn(item);
    if (!uniqueSet.has(key)) {
      uniqueSet.add(key);
      result.push(item);
    }
  }

  return result;
}

// 24. Write a JavaScript program to dcapitalize the first letter of a string.
function decapitalizeFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// 25. Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.
function cartesianProduct(arr1, arr2) {
  const result = [];

  for (const a of arr1) {
    for (const b of arr2) {
      result.push([a, b]);
    }
  }

  return result;
}

// 26. Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.
function isYes(str) {
  const lowercased = str.toLowerCase();
  return lowercased === "y" || lowercased === "yes";
}

// 27. Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function.
function intersectionBy(a, b, fn) {
  const setA = new Set(a.map(fn));
  return b.filter((x) => setA.has(fn(x)));
}

// 28. Write a JavaScript program to measure the time a function to execute.
function timeTaken(func) {
  const startTime = performance.now();
  func();
  const endTime = performance.now();
  return endTime - startTime;
}

// 29. Write a JavaScript program to convert a value to a safe integer.
function toSafeInteger(num) {
  return Math.max(
    Math.min(num, Number.MAX_SAFE_INTEGER),
    Number.MIN_SAFE_INTEGER
  );
}

// 30. Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.
function filterOut(arr, ...values) {
  return arr.filter((item) => !values.includes(item));
}

// 31. Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.
function tail(arr) {
  return arr.length <= 1 ? arr : arr.slice(1);
}

// 32. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.
function sumBy(arr, fn) {
  return arr.reduce((sum, val) => sum + fn(val), 0);
}

// 33. Write a JavaScript program to generate a random number in the specified range.
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// 34. Write a JavaScript program to generate a random integer in the specified range.
function randomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 35. Write a JavaScript program to get an array of given n random integers in the specified range.
function getRandomInts(n, min, max) {
  const ints = [];

  for (let i = 0; i < n; i++) {
    ints.push(randomIntInRange(min, max));
  }

  return ints;
}

// 36. Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.
function over(...fns) {
  return (...args) => fns.map((fn) => fn.call(null, ...args));
}

// 37. Write a JavaScript program to get a sorted array of objects ordered by properties and orders.
function orderBy(objects, props, orders) {
  const arraysToSort = objects.map((obj, index) => {
    return {
      originArray: objects[index],
      tempArray: props.map((prop, i) => ({
        value: obj[prop],
        order: orders[i],
      })),
    };
  });

  arraysToSort.sort((a, b) => {
    for (let i = 0; i < a.tempArray.length; i++) {
      const { value: aVal, order: aOrder } = a.tempArray[i];
      const { value: bVal, order: bOrder } = b.tempArray[i];

      if (aVal < bVal) return aOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return aOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return arraysToSort.map((obj) => obj.originArray);
}

// 38. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.
function pad(str, length, char = " ") {
  const paddingLength = length - str.length;

  if (paddingLength <= 0) {
    return str;
  }

  const totalPads = paddingLength / 2;
  const paddingLeft = char.repeat(Math.floor(totalPads));
  const paddingRight = char.repeat(Math.ceil(totalPads));

  return paddingLeft + str + paddingRight;
}

// 39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
function omit(obj, ...keys) {
  const result = { ...obj };

  for (const key of keys) {
    delete result[key];
  }

  return result;
}

// 40. Write a JavaScript program to create an array of key-value pair arrays from a given object.
function entries(obj) {
  return Object.entries(obj);
}

// 41. Write a JavaScript program to create an object from the given key-value pairs.
function fromPairs(pairs) {
  return Object.fromEntries(pairs);
}

// 42. Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.
function coalesce(...args) {
  return args.find((arg) => arg != null);
}

// 43. Write a JavaScript program to change a function that accepts an array into a variadic function.
function spreadArray(func, arr) {
  return func(...arr);
}

// 44. Write a JavaScript program to remove false values from a given array.
function removeFalsy(arr) {
  return arr.filter(Boolean);
}

// 45. Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
function bifurcate(coll, filter) {
  const group1 = [];
  const group2 = [];

  for (let i = 0; i < coll.length; i++) {
    if (filter[i]) {
      group1.push(coll[i]);
    } else {
      group2.push(coll[i]);
    }
  }

  return [group1, group2];
}

// 46. Write a JavaScript program to curry (curries) a function.
function curry(fn) {
  const arity = fn.length;

  return _curriedFn([], 0);

  function _curriedFn(accArgs, depth) {
    return function (...args) {
      const totalArgs = accArgs.concat(args);

      if (totalArgs.length >= arity) {
        return fn(...totalArgs);
      } else {
        return _curriedFn(totalArgs, depth + 1);
      }
    };
  }
}

// 47. Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.
function isEqual(value, other) {
  if (value === other) {
    return true;
  }

  if (
    value == null ||
    other == null ||
    typeof value !== "object" ||
    typeof other !== "object"
  ) {
    return false;
  }

  const valueKeys = Object.keys(value);
  const otherKeys = Object.keys(other);

  if (valueKeys.length !== otherKeys.length) {
    return false;
  }

  for (const key of valueKeys) {
    if (!otherKeys.includes(key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
}

// 48. Write a JavaScript program to get an array of function property names from the own (and optionally inherited) enumerable properties of an object.
function functions(obj, inherited = false) {
  const props = inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj);

  return props.filter((prop) => typeof obj[prop] === "function");
}

// 49. Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.
function pick(obj, ...selectors) {
  return selectors
    .map((selector) => {
      if (selector.indexOf(".") > -1) {
        const [first, ...rest] = selector.split(".");
        return { [selector]: obj[first][rest.join(".")] };
      }
      return { [selector]: obj[selector] };
    })
    .reduce((res, prop) => ({ ...res, ...prop }), {});
}

// 50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.
function formatTime(num) {
  const isPM = num >= 12;
  const hourNum = ((num + 11) % 12) + 1;
  const suffix = isPM ? "pm" : "am";
  return `${hourNum}${suffix}`;
}

// 51. Write a JavaScript program to get an object containing the current URL parameters.
function getURLParameters(url) {
  return [...new URLSearchParams(url.split("?")[1] || "")].reduce(
    (obj, pair) => {
      const [key, value] = pair;
      obj[key] = value;
      return obj;
    },
    {}
  );
}

// 52. Write a JavaScript program to group the elements of a given array based on the given function.
function groupBy(arr, fn) {
  return arr.reduce((groups, item) => {
    const key = fn(item);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}

// 53. Write a JavaScript program to initialize a two-dimensional array of given size and value.
function initializeArray(rows, cols, value = 0) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => value)
  );
}

// 54. Write a JavaScript program to initialize an array containing numbers in the specified range. Start and end are inclusive of their common point of difference.
function initializeArrayRange(start, end, step = 1) {
  if (step === 1) {
    throw new Error("Step cannot be 1");
  }

  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, i) => start + i * step);
}

// 55. Write a JavaScript program to join all given URL segments together, then normalize the resulting URL.
function normalizeUrlSegments(...segments) {
  return new URL(segments.join("/"), "http://example.com").href.slice(
    "http://example.com".length
  );
}

// 56. Write a JavaScript program to check whether all elements in a given array are equal or not.
function areAllEqual(arr) {
  return arr.every((item) => item === arr[0]);
}

// 57. Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.
function avgBy(arr, fn) {
  const sum = sumBy(arr, fn);
  return sum / arr.length;
}

// 58. Write a JavaScript program to split values into two groups according to a predicate function. This specifies which group an element in the input collection belongs to.
function partition(arr, predicate) {
  const group1 = [];
  const group2 = [];

  for (const item of arr) {
    if (predicate(item)) {
      group1.push(item);
    } else {
      group2.push(item);
    }
  }

  return [group1, group2];
}

// 59. Write a JavaScript program to create a function that invokes fn in a given context. Optionally add any additional variables to the arguments beginning.
function bind(fn, context, ...boundArgs) {
  return function (...callArgs) {
    return fn.apply(context, [...boundArgs, ...callArgs]);
  };
}

// 60. Write a JavaScript program to create a function that invokes the method at a given key of an object. Optionally, add any parameters that are supplied to the beginning of the arguments.
function bindKey(obj, key, ...boundArgs) {
  return function (...callArgs) {
    return obj[key].apply(obj, [...boundArgs, ...callArgs]);
  };
}

// 61. Write a JavaScript program to cast the provided value as an array if it's not one.
function castArray(value) {
  return Array.isArray(value) ? value : [value];
}

// 62. Write a JavaScript program to chain asynchronous functions.
async function chainAsync(...fns) {
  let result = null;
  for (const fn of fns) {
    result = await fn(result);
  }
  return result;
}

// 63. Write a JavaScript program to clone a given regular expression.
function cloneRegExp(regExp) {
  return new RegExp(regExp.source, regExp.flags);
}

// 64. Write a JavaScript program to get the first non-null / undefined argument.
function coalesce(...args) {
  return args.find((arg) => arg != null);
}

// 65. Write a JavaScript program to add special characters to text to print in color on the console (combined with console.log()).
function colorizeText(str, color) {
  const codes = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: "\x1b[0m",
  };

  const start = codes[color] || "";
  const end = codes.reset;
  return start + str + end;
}

// 66. Write a JavaScript program to perform right-to-left function composition.
function composeRight(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// 67. Write a JavaScript program to perform left-to-right function composition.
function compose(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

// 68. Write a JavaScript program that accepts a converging function and a list of branching functions. It returns a function that applies each branching function to the arguments. The results of the branching functions are passed as arguments to the converging function.
function converge(conv, ...funcs) {
  return (...args) => conv(...funcs.map((func) => func(...args)));
}

// 69. Write a JavaScript program to group array elements based on the given function. It return the count of elements in each group.
function countBy(arr, fn) {
  return arr.reduce((counts, item) => {
    const key = fn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

// 70. Write a JavaScript program to count a value in an array.
function countOccurrences(arr, value) {
  return arr.reduce((count, val) => (val === value ? count + 1 : count), 0);
}

// 71. Write a JavaScript program to create a deep clone of an object.
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

// 72. Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.
function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileDevicePatterns = [
    /android/,
    /webos/,
    /iphone/,
    /ipad/,
    /ipod/,
    /blackberry/,
    /windows phone/,
  ];

  return mobileDevicePatterns.some((pattern) => userAgent.match(pattern));
}

// 73. Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both.
function differenceBy(arr1, arr2, fn) {
  const mapped1 = arr1.map(fn);
  const mapped2 = arr2.map(fn);

  return mapped1.filter((item) => !mapped2.includes(item));
}

// 74. Write a JavaScript program to filter out all values from an array for which the comparator function does not return true.
function filterFalsy(arr, predicate) {
  return arr.filter((item) => predicate(item));
}

// 75. Write a JavaScript program to compute the updated ratings between two or more opponents using the Elo rating system. It takes an array of pre-ratings and returns an array containing post-ratings. The array should be ordered from top to bottom (winner -> loser).
function computeNewRatings(ratings, kFactor = 32, scored = 1, scored0 = 0) {
  const newRatings = [...ratings];
  const len = ratings.length;

  for (let i = 0; i < len - 1; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      const diffRatings = ratings[i] - ratings[j];
      const expectChance = 1 / (1 + Math.pow(10, diffRatings / 400));

      const actualChance = j < len - 1 ? scored : scored0;

      newRatings[i] += kFactor * (actualChance - expectChance);
      newRatings[j] -= kFactor * (actualChance - expectChance);
    }
  }

  return newRatings.sort((a, b) => b - a);
}

// 76. Write a JavaScript program to execute a provided function once for each array element, starting with the array's last element.
function forEachRight(arr, fn) {
  for (let i = arr.length - 1; i >= 0; i--) {
    fn(arr[i], i, arr);
  }
}

// 77. Write a JavaScript program to iterate over all the properties of an object, running a callback for each one.
function forIn(obj, fn) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      fn(obj[key], key, obj);
    }
  }
}

// 78. Write a JavaScript program to invert the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.
function invert(obj, fn) {
  return Object.entries(obj).reduce((inverted, [key, value]) => {
    const invertedKey = fn ? fn(value) : value;
    inverted[invertedKey] = inverted[invertedKey] || [];
    inverted[invertedKey].push(key);
    return inverted;
  }, {});
}

// 79. Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.
function longest(...args) {
  return args.reduce((a, b) => (a.length >= b.length ? a : b));
}

// 80. Write a JavaScript program to implement the Luhn Algorithm used to validate identification numbers. For example, credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
function luhnCheck(numStr) {
  const digits = numStr.split("").reverse().map(Number);
  const sum = digits.reduce((total, digit, index) => {
    if (index % 2 === 1) {
      digit *= 2;
      digit = digit > 9 ? digit - 9 : digit;
    }
    return total + digit;
  }, 0);
  return sum % 10 === 0;
}

// 81. Write a JavaScript program to create an object with keys generated by running the provided function for each key. The object will have the same values as the provided object.
function mapKeys(obj, fn) {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    newObj[fn(key)] = value;
    return newObj;
  }, {});
}

// 82. Write a JavaScript program to map array values to an object using a function. The key-value pairs consist of the original value as the key and the mapped value.
function mapValues(arr, fn) {
  return arr.reduce((obj, val) => {
    obj[val] = fn(val);
    return obj;
  }, {});
}

// 83. Write a JavaScript program to create an updated string with the results of calling a provided function on every character in the called string.
function mapString(str, fn) {
  return str.split("").map(fn).join("");
}

// 84. Write a JavaScript program to create an object with the same keys as the provided object. It will also generate values generated by running the provided function for each value.
function mapValues(obj, fn) {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    newObj[key] = fn(value);
    return newObj;
  }, {});
}

// 85. Write a JavaScript program to replace all but the last number of characters with the specified mask character.
function maskString(str, maskChar = "#", keepLength = 4) {
  const mask = maskChar.repeat(str.length - keepLength);
  return mask + str.slice(-keepLength);
}

// 86. Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.
function maxBy(arr, fn) {
  return Math.max(...arr.map(fn));
}

// 87. Write a JavaScript program to get the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, return the original array (sorted in descending order).
function maxN(arr, n = 1) {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted.slice(0, n);
}

// 88. Write a JavaScript program to get the median of an array of numbers.
function median(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const midIndex = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[midIndex - 1] + sorted[midIndex]) / 2
    : sorted[midIndex];
}

// 89. Write a JavaScript program to negates a predicate function.
function negate(predicate) {
  return (...args) => !predicate(...args);
}

// 90. Write a JavaScript program to nest a given flat array of objects linked to one another recursively.
function nest(
  items,
  idKey = "id",
  parentKey = "parentId",
  childrenKey = "children"
) {
  const nests = [];
  const roots = [];

  for (const item of items) {
    const id = item[idKey];
    const parentId = item[parentKey];

    if (!nests[parentId]) {
      nests[parentId] = { children: [] };
    }

    nests[parentId].children.push(item);

    if (parentId === null) {
      roots.push(item);
    }
  }

  for (const root of roots) {
    nests[null] = { children: roots };
  }

  const result = nests[null][childrenKey];

  function graft(items) {
    for (const item of items) {
      if (nests[item[idKey]]) {
        item[childrenKey] = nests[item[idKey]][childrenKey];
      } else {
        item[childrenKey] = [];
      }
    }
    return items;
  }

  return graft(result || []);
}

// 91. Write a JavaScript program that returns true if the provided predicate function returns false for all elements in a collection, false otherwise.
function none(coll, predicate) {
  return !coll.some(predicate);
}

// 92. Write a JavaScript program to create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.
function nthArg(n) {
  return (...args) =>
    args.slice(n < 0 ? args.length + n : n, n < 0 ? n : n + 1)[0];
}

// 93. Write a JavaScript program to remove an event listener from an element.
function off(el, eventName, handler) {
  el.removeEventListener(eventName, handler);
}

// 94. Write a JavaScript program to move the specified amount of elements to the end of the array.
function moveToEnd(arr, n = 1) {
  const elements = arr.slice(-n);
  return [...arr.slice(0, -n), ...elements];
}

// 95. Write a JavaScript program to add an event listener to an element with the ability to use event delegation.
function on(el, eventName, delegate, handler) {
  el.addEventListener(eventName, function (event) {
    const potentialElements = el.querySelectorAll(delegate);
    let hasMatch = false;

    potentialElements.forEach((potentialEl) => {
      if (event.target === potentialEl) {
        hasMatch = true;
        handler.call(potentialEl, event);
      }
    });

    if (!hasMatch) {
      handler.call(this, event);
    }
  });
}

// 96. Write a JavaScript program to pick the key-value pairs corresponding to the given keys from an object.
function pick(obj, ...keys) {
  return keys.reduce((newObj, key) => {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
    return newObj;
  }, {});
}

// 97. Write a JavaScript program to create an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).
function pickBy(obj, predicate) {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    if (predicate(value, key)) {
      newObj[key] = value;
    }
    return newObj;
  }, {});
}

// 98. Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.
function pickBy(objects, predicate, ...keys) {
  return objects
    .filter((obj) => predicate(obj))
    .map((obj) =>
      keys.reduce(
        (newObj, key) => ({
          ...newObj,
          [key]: obj[key],
        }),
        {}
      )
    );
}

// 99. Write a JavaScript program to hash a given input string into a whole number.
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return hash;
}

// 100. Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays. Use function as the last value to specify how grouped values should be combined.
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  const combiner = arrays.pop();

  return Array.from({ length: maxLength }, (_, index) =>
    arrays.map((arr) => arr[index]).reduce(combiner)
  );
}

// 101. Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.
function zipObject(props, values) {
  return props.reduce((obj, prop, index) => {
    obj[prop] = values[index];
    return obj;
  }, {});
}

// 102. Write a JavaScript program to create an array of elements, grouped based on the position in the original array.
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  return Array.from({ length: maxLength }, (_, index) =>
    arrays.map((arr) => arr[index])
  );
}

// 103. Write a JavaScript program to convert a given string into an array of words.
function words(str, pattern) {
  return str.split(pattern || /\s+/);
}

// 104. Write a JavaScript program to test a value, x, against a predicate function. If true, return fn(x). Else, return x.
function conforms(predicate, fn) {
  return (x) => (predicate(x) ? fn(x) : x);
}

// 105. Write a JavaScript program that returns true if the given value is a number, false otherwise.
function isNumber(value) {
  return typeof value === "number";
}

// 106. Write a JavaScript program to create an array of elements, ungrouping the elements in an array produced by zip and applying the provided function.
function unzip(arrays, fn = (...args) => args) {
  const maxLength = Math.max(...arrays.map((arr) => arr.length));
  return Array.from({ length: maxLength }, (_, index) =>
    fn(...arrays.map((arr) => arr[index]))
  );
}

// 107. Write a JavaScript program to get all distinct values (from the right side of the array) of an array, based on a provided comparator function.
function uniqByRight(arr, fn) {
  const distinctValues = new Set();
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const value = fn(arr[i]);
    if (!distinctValues.has(value)) {
      distinctValues.add(value);
      result.unshift(arr[i]);
    }
  }

  return result;
}

// 108. Write a JavaScript program to get all unique values of an array, based on a provided comparator function.
function uniqBy(arr, fn) {
  const uniqueSet = new Set();
  return arr.filter((item) => {
    const key = fn(item);
    if (uniqueSet.has(key)) {
      return false;
    } else {
      uniqueSet.add(key);
      return true;
    }
  });
}

// 109. Write a JavaScript program to get the nth element of a given array.
function nth(arr, n = 0) {
  return n >= 0 ? arr[n] : arr[arr.length + n];
}

// 110. Write a JavaScript program to get every element in any of the two arrays at once.
function union(...args) {
  return [...new Set([].concat(...args))];
}

// 111. Write a JavaScript program to build an array, using an iterator function and an initial seed value.
function unfold(fn, seed) {
  const result = [];
  let value = seed;

  while (true) {
    const next = fn(value);
    if (next && next.length) {
      result.push(next[0]);
      value = next[1];
    } else {
      break;
    }
  }

  return result;
}

// 112. Write a JavaScript program to unflatten an object with the paths for keys.
function unflattenObject(obj) {
  return Object.keys(obj).reduce((result, key) => {
    const value = obj[key];
    const keys = key.split(".");

    if (keys.length === 1) {
      result[keys[0]] = value;
    } else {
      keys.reduce((acc, k, i) => {
        if (i === keys.length - 1) {
          acc[k] = value;
        } else {
          acc[k] = acc[k] || {};
        }
        return acc[k];
      }, result);
    }

    return result;
  }, {});
}

// 113. Write a JavaScript program to unescape escaped HTML characters.
function unescapeHTML(str) {
  const entityMap = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };

  return str.replace(/&(amp|lt|gt|quot|#39);/g, (m) => entityMap[m]);
}

// 114. Write a JavaScript program to uncurry a function up to depth n.
function uncurry(fn, n = 1) {
  const allowedArity = typeof n === "number" ? n : 1;
  const original = fn;

  return function (...args) {
    let currentArity = Math.max(args.length, allowedArity);
    while (currentArity >= allowedArity) {
      currentArity = currentArity - allowedArity;
    }
    const fnToCall = currentArity
      ? uncurry(original(args.slice(0, currentArity)))
      : original;
    return currentArity
      ? fnToCall(args.slice(currentArity))
      : original(...args);
  };
}

// 115. Write a JavaScript program to create a function that accepts up to one argument, ignoring any additional arguments.
function unary(fn) {
  return (arg) => fn(arg);
}

// 116. Write a JavaScript program to check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function universalPredicate(coll, predicate) {
  return coll.every(predicate);
}

// 117. Write a JavaScript program to truncate a string up to a specified length.
function truncate(str, length, ending = "...") {
  return str.length > length
    ? str.slice(0, length - ending.length) + ending
    : str;
}

// 118. Write a JavaScript program to apply a function against an accumulator and each key in the object (from left to right).
function updateKeys(obj, fn) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[fn(key)] = obj[key];
    return acc;
  }, {});
}

// 119. Write a JavaScript program to create tomorrow's date in a string representation.
function tomorrow() {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);
  return tomorrow.toISOString().slice(0, 10);
}

// 120. Write a JavaScript program to convert a string to snake case.
function toSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, "_$1")
    .replace(/^_/, "")
    .toLowerCase();
}

// 121. Write a JavaScript program to convert a value to a safe integer.
function toSafeInteger(num) {
  return Math.max(
    Math.min(num, Number.MAX_SAFE_INTEGER),
    Number.MIN_SAFE_INTEGER
  );
}

// 122. Write a JavaScript program to add an ordinal suffix to a number.
function addOrdinalSuffix(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

// 123. Write a JavaScript program to convert a string to kebab case.
function toKebabCase(str) {
  return str
    .replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

// 124. Write a JavaScript program to reduce a given Array-like into a value hash (keyed data store).
function transform(obj, fn, acc = {}) {
  return Object.keys(obj).reduce((result, key) => {
    const value = fn(obj[key], key, obj);
    result[key] = value;
    return result;
  }, acc);
}

// 125. Write a JavaScript program that converts float-point arithmetic to decimal form, and creates a comma separated string from a number.
function toDecimalMark(num) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// 126. Write a JavaScript program to create a specified currency format from a given number.
function toCurrencyFormat(num, currency = "$", decimal = 2) {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  });
}

// 127. Write a JavaScript program to Iterate over a callback n times.
function times(n, fn) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

// 128. Write a JavaScript program to get removed elements of a given array until the passed function returns true.
function dropRightWhile(arr, predicate) {
  let i = arr.length;
  while (i-- && predicate(arr[i])) {}
  return arr.slice(0, i + 1);
}

// 129. Write a JavaScript program to get removed elements from the end of a given array until the passed function returns true.
function dropWhile(arr, predicate) {
  const result = [];
  let i = 0;
  while (i < arr.length && !predicate(arr[i])) i++;
  return arr.slice(i);
}

// 130. Write a JavaScript program to remove n elements from the end of a given array.
function dropRight(arr, n = 1) {
  return arr.slice(0, -n);
}

// 131. Write a JavaScript program to get an array with n elements removed from the beginning from a given array
function drop(arr, n = 1) {
  return arr.slice(n);
}

// 132. Write a JavaScript program to get the symmetric difference between two given arrays, using a provided function as a comparator.
function differenceBy(a, b, fn) {
  const setA = new Set(a.map(fn));
  const setB = new Set(b.map(fn));

  return [
    ...a.filter((x) => !setB.has(fn(x))),
    ...b.filter((x) => !setA.has(fn(x))),
  ];
}

// 133. Write a JavaScript program to get the symmetric difference between two given arrays, after applying the provided function to each array element of both.
function differenceWith(arr1, arr2, fn) {
  return arr1
    .filter((a) => !arr2.some((b) => fn(a, b)))
    .concat(arr2.filter((b) => !arr1.some((a) => fn(b, a))));
}

// 134. Write a JavaScript program to get the symmetric difference between two given arrays.
function difference(arr1, arr2) {
  return [
    ...arr1.filter((x) => !arr2.includes(x)),
    ...arr2.filter((x) => !arr1.includes(x)),
  ];
}

// 135. Write a JavaScript program to get the sum of the powers of all the numbers from start to end (both inclusive).
function sumPower(start, end, power = 2) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += Math.pow(i, power);
  }
  return sum;
}

// 136. Write a JavaScript program to generate all permutations of a string (contains duplicates).
function permutations(str) {
  if (str.length <= 1) {
    return [str];
  }

  const allPermutations = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);

    for (const permutation of permutations(remainingChars)) {
      allPermutations.push(char + permutation);
    }
  }

  return allPermutations;
}

// 137. Write a JavaScript program to perform stable sorting of an array, preserving the initial indexes of items when their values are the same. Returns a new array instead of mutating the original array.
function stableSort(arr, fn) {
  return arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const order = fn(a.item, b.item);
      if (order !== 0) return order;
      return a.index - b.index;
    })
    .map(({ item }) => item);
}

// 138. Write a JavaScript program that takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.
function spreadOver(fn) {
  return (argsArr) => fn(...argsArr);
}

// 139. Write a JavaScript program to split a multiline string into an array of lines.
function lines(str) {
  return str.split(/\r?\n/);
}

// 140. Write a JavaScript program to get the highest index at which value should be inserted into an array in order to maintain its sort order. This is based on a provided iterator function.
function sortedLastIndexBy(arr, value, fn) {
  const values = arr.map((val, index) => [fn(val), index]);
  values.push([fn(value)]);
  values.sort((a, b) => {
    if (a[0] === b[0]) return 0;
    return a[0] < b[0] ? -1 : 1;
  });
  return values.findIndex((val) => val[0] === fn(value));
}

// 141. Write a JavaScript program to get the highest index at which value should be inserted into an array in order to maintain its sort order.
function sortedLastIndex(arr, value) {
  let j = arr.length;
  while (j--) {
    if (arr[j] <= value) {
      return j + 1;
    }
  }
  return 0;
}

// 142. Write a JavaScript program to get the lowest index at which values should be inserted into an array in order to maintain its sorting order.
function sortedIndex(arr, value) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < value) low = mid + 1;
    else high = mid;
  }

  return low;
}

// 143. Write a JavaScript program to sort the characters of a string Alphabetically.
function sortCharacters(str) {
  return str.split("").sort().join("");
}

// 144. Write a JavaScript program to get an array of elements that appear in both arrays.
function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

// 145. Write a JavaScript program to randomize the order of array values, returning an updated array.
function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 146. Write a JavaScript program to create a shallow clone of an object.
function shallowClone(obj) {
  return { ...obj };
}

// 147. Write a JavaScript program to serialize a cookie name-value pair into a Set-Cookie header string.
function serializeCookie(name, value, options = {}) {
  const { path, domain, expires, secure, httpOnly, sameSite } = options;

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (path) cookie += `; path=${path}`;
  if (domain) cookie += `; domain=${domain}`;
  if (expires) cookie += `; expires=${expires.toUTCString()}`;
  if (secure) cookie += "; secure";
  if (httpOnly) cookie += "; HttpOnly";
  if (sameSite) cookie += `; SameSite=${sameSite}`;

  return cookie;
}

// 148. Write a JavaScript program to hash the input string into a whole number.
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return hash;
}

// 149. Write a JavaScript program to get a random element from an array.
function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 150. Write a JavaScript program to run a given array of promises in series.
async function runPromisesSeries(promises) {
  let result;
  for (const promise of promises) {
    result = await promise();
  }
  return result;
}

// 151. Write a JavaScript program to run a function in a separate thread using a Web Worker. This allows long running functions to not block the UI.
function runInWorker(fn, ...args) {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`(${fn})(${args.join(",")})`]))
  );

  return new Promise((resolve, reject) => {
    worker.onmessage = ({ data }) => {
      resolve(data);
      worker.terminate();
    };
    worker.onerror = (err) => {
      reject(err);
      worker.terminate();
    };
  });
}

// 152. Write a JavaScript program to round a number to a specified amount of digits.
function round(num, decimals = 0) {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

// 153. Write a JavaScript program to reverse the order of characters in the string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 154. Write a JavaScript program to create an object composed of the properties the given function returns false for. The function is invoked with two arguments: (value and key).
function rejectBy(obj, predicate) {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    if (!predicate(value, key)) {
      newObj[key] = value;
    }
    return newObj;
  }, {});
}

// 155. Write a JavaScript program that takes a predicate and an array, like Array.filter(), but only keeps x if pred(x) returns false.
function rejectPredicate(arr, predicate) {
  return arr.filter((item) => !predicate(item));
}

// 156. Write a JavaScript program to apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.
function reduceRight(arr, fn, acc) {
  let result = acc;
  for (let i = arr.length - 1; i >= 0; i--) {
    result = fn(result, arr[i], i, arr);
  }
  return result;
}

// 157. Write a JavaScript program to redirect to a specified URL.
function redirect(url) {
  window.location.href = url;
}

// 158. Write a JavaScript program to create a function that invokes the provided function with its arguments arranged according to the specified indexes.
function reorderArgs(fn, ...indexes) {
  return (...args) => fn(...indexes.map((index) => args[index]));
}

// 159. Write a JavaScript program to get an array of lines from the specified file.
async function readFileLines(file) {
  const text = await file.text();
  return text.split(/\r?\n/);
}

// 160. Write a JavaScript program to mutate the original array to filter out the values specified, based on a given iterator function.
function remove(arr, predicate) {
  const removed = [];
  arr.forEach((item, index, arr) => {
    if (predicate(item)) {
      removed.push(arr.splice(index, 1)[0]);
    }
  });
  return removed;
}

// 161. Write a JavaScript program to mutate the original array to filter out the values specified. Returns the removed elements.
function pull(arr, ...values) {
  const removed = [];
  arr.forEach((item, index) => {
    if (values.includes(item)) {
      removed.push(arr.splice(index, 1)[0]);
    }
  });
  return removed;
}

// 162. Write a JavaScript program to convert an asynchronous function to return a promise.
function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
}

// 163. Write a JavaScript program to convert a number in bytes to a human-readable string.
function bytesToHumanReadable(bytes, divisor = 1024) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let counter = 0;
  let size = bytes;

  while (size >= divisor && counter < units.length - 1) {
    size /= divisor;
    counter++;
  }

  return `${size.toFixed(2)} ${units[counter]}`;
}

// 164. Write a JavaScript program that returns the singular or plural form of the word based on the input number.
function pluralize(word, count) {
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}

// 165. Write a JavaScript program to perform left-to-right function composition.
function pipe(...fns) {
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

// 166. Write a JavaScript program to perform left-to-right function composition for asynchronous functions.
async function pipeAsync(...fns) {
  const firstFn = fns.shift();
  let result = await firstFn();

  for (const fn of fns) {
    result = await fn(result);
  }

  return result;
}

// 167. Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value. This is done using the percentile formula.
function percentile(arr, val) {
  const sorted = [...arr].sort((a, b) => a - b);
  const count = sorted.reduce((acc, num) => (num <= val ? acc + 1 : acc), 0);
  return (count / sorted.length) * 100;
}

// 168. Write a JavaScript program to group the elements into two arrays, depending on the provided function's truthiness for each element.
function partition(arr, fn) {
  const [truthy, falsy] = [[], []];
  arr.forEach((item) => (fn(item) ? truthy : falsy).push(item));
  return [truthy, falsy];
}

// 169. Write a JavaScript program to create a function that invokes fn with partials appended to the arguments it receives.
function partialRight(fn, ...partials) {
  return (...args) => fn(...args, ...partials);
}

// 170. Write a JavaScript program to create a function that invokes fn with partials prepended to the arguments it receives.
function partial(fn, ...partials) {
  return (...args) => fn(...partials, ...args);
}

// 171. Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs.
function parseCookie(str) {
  return str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1]);
      return acc;
    }, {});
}

// 172. Write a JavaScript program to create a function that invokes the provided function with its arguments transformed.
function overArgs(fn, transforms) {
  return (...args) => fn(...args.map((val, i) => transforms[i](val)));
}

// 173. Write a JavaScript program to get the nth element of a given array of elements.
function nth(arr, n = 0) {
  return n >= 0 ? arr[n] : arr[arr.length + n];
}

// 174. Write a JavaScript program to convert a NodeList into an array.
function nodeListToArray(nodeList) {
  return [...nodeList];
}

// 175. Write a JavaScript program to get the index of the function in an array of functions which executed the fastest.
function getFastestIndex(funcs) {
  const times = funcs.map((func) => {
    const start = performance.now();
    func();
    return performance.now() - start;
  });

  return times.indexOf(Math.min(...times));
}

// 176. Write a JavaScript program to get the n minimum elements from the provided array. If n is greater than or equal to the provided array's length, return the original array (sorted in ascending order).
function minN(arr, n = 1) {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted.slice(0, n);
}

// 177. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.
function minBy(arr, fn) {
  return Math.min(...arr.map(fn));
}

// 178. Write a JavaScript program to create a new object from the combination of two or more objects.
function merge(...sources) {
  return sources.reduce((acc, source) => ({ ...acc, ...source }), {});
}

// 179. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one. This is based on a provided function.
function matchesWith(obj, source, fn) {
  return Object.keys(source).every((key) =>
    fn ? fn(obj[key], source[key], key, obj, source) : obj[key] === source[key]
  );
}

// 180. Write a JavaScript program to create an object from the specified object, where all keys are in lowercase.
function mapKeys(obj) {
  return Object.entries(obj).reduce((newObj, [key, value]) => {
    newObj[key.toLowerCase()] = value;
    return newObj;
  }, {});
}

// 181. Write a JavaScript program to get the last element from an given array.
function last(arr) {
  return arr[arr.length - 1];
}

// 182. Write a JavaScript program to join all elements of an array into a string and return this string. Use a separator and an end separator.
function join(arr, separator = ",", endSeparator = separator) {
  return arr.reduce(
    (str, val, index) =>
      str + val + (index === arr.length - 1 ? endSeparator : separator)
  );
}

// 183. Write a JavaScript program to check if the provided argument is valid JSON.
function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

// 184. Write a JavaScript program to check if a given string is upper case or not.
function isUpperCase(str) {
  return str === str.toUpperCase();
}

// 185. Write a JavaScript program that returns true if the specified value is undefined, false otherwise.
function isUndefined(val) {
  return val === undefined;
}

// 186. Check if the given argument is a symbol
const isSymbol = (val) => typeof val === "symbol";

// 187. Check if the given argument is a string
const isString = (val) => typeof val === "string";

// 188. Returns 1 if sorted in ascending, -1 if sorted in descending, 0 if not sorted
const isSorted = (arr) => {
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
  }
  return direction > 0 ? 1 : -1;
};

// 189. Check if a value looks like a Promise
const isPromiseLike = (val) =>
  val !== null &&
  (typeof val === "object" || typeof val === "function") &&
  typeof val.then === "function";

// 190. Check if a value is primitive
const isPrimitive = (val) => Object(val) !== val;

// 191. Check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// 192. Check if a value is object created by Object constructor
const isObjectConstructor = (val) => val !== null && typeof val === "object";

// 193. Check if a value is object-like (not null and typeof 'object')
const isObjectLike = (val) => typeof val === "object" && val !== null;

// 194. Check if a value is an object
const isObject = (val) => val !== null && typeof val === "object";

// 195. Check if a value is a number
const isNumber = (val) => typeof val === "number";

// 196. Check if a value is null
const isNull = (val) => val === null;

// 197. Check if a string is lower case
const isLowerCase = (str) => str === str.toLowerCase();

// 198. Check if a value is a function
const isFunction = (val) => typeof val === "function";

// 199. Check if a number is even
const isEven1 = (num) => num % 2 === 0;

// 200. Check if a value is an empty object, collection, map or set
const isEmpty = (val) =>
  val == null ||
  !(
    Object.getPrototypeOf(val) === Object.prototype ||
    val.constructor === Object
  ) ||
  !Object.keys(val).length;

// 201. Check if the first argument is divisible by the second
const isDivisible = (dividend, divisor) => dividend % divisor === 0;

// 202. Check if a number is even
const isEven2 = (num) => num % 2 === 0;

// 203. Check if current runtime environment is a browser
const isBrowser = () => !(typeof window === "undefined");

// 204. Check if argument is a native Boolean element
const isBoolean = (val) => typeof val === "boolean";

// 205. Check if argument is an array (iterable)
const isArray = (val) => Array.isArray(val);

// 206. Check if two strings are anagrams (case-insensitive, ignore spaces, punctuation and special chars)
const isAnagram = (str1, str2) => {
  const normalize = (str) =>
    str
      .replace(/[^a-z0-9]/gi, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
};

// 207. Check if a string is an absolute URL
const isAbsoluteURL = (str) => /^[a-z][a-z0-9?:/%#&=]*$/i.test(str);

// 208. Check if a value is of the specified type
const is = (type, val) =>
  ![null, undefined].includes(val) && val.constructor === type;

// 209. Get list of elements in both arrays using comparator
const intersection = (a, b, comp) =>
  a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);

// 210. Get list of elements in both arrays after applying function to each
const intersection = (a, b, fn) => {
  const aValues = a.map((val) => fn(val));
  const bValues = b.map((val) => fn(val));
  return a.filter((val, i) => bValues.includes(aValues[i]));
};

// 211. Get list of elements that exist in both arrays
const intersection = (a, b) => {
  const sB = new Set(b);
  return [...new Set(a.filter((val) => sB.has(val)))];
};

// 212. Create a n-dimensional array with given value
const nDimensionalArray = (value, n) =>
  Array.from({ length: Math.pow(value, n) }).map(() => value);

// 213. Initialize and fill an array with the specified values
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

// 214. Initialize array containing numbers in specified range in reverse
const initializeArrayRangeRev = (end, start = 0, step = 1) =>
  Array.from({ length: Math.max(Math.ceil((end + 1 - start) / step), 0) }).map(
    (_, i) => end - i * step
  );

// 215. Get all elements of array except last one
const initial = (arr) => arr.slice(0, -1);

// 216. Get all indices of val in an array
const getAllIndices = (arr, val) => arr.flatMap((a, i) => (a === val ? i : []));

// 217. Check if a number falls within the given range
const inRange = (num, a, b) => Math.min(a, b) <= num && num < Math.max(a, b);

// 218. Get the number of times a function executed per second
const hz = (fn, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};

// 219. Calculate the hamming distance between two values
const hammingDistance = (num1, num2) =>
  ((num1 ^ num2).toString(2).match(/1/g) || "").length;

// 220. Get the native type of a value
const getType = (val) =>
  val === undefined
    ? "undefined"
    : val === null
    ? "null"
    : val.constructor.name.toLowerCase();

// 221. Get a string like HH:MM:SS from a Date object
const toHHMMSS = (datetime = new Date()) => datetime.toTimeString().slice(0, 8);

// 222. Initialize array with range and ratio
const initializeArrayWithRangeAndRatio = (end, start = 0, step = 1) =>
  Array.from(
    { length: Math.max(Math.ceil((end + 1 - start) / step), 0) },
    (_, i) => start + i * step
  );

// 223. Calculate the greatest common divisor for any number of values
const gcd = (...arr) => {
  const _gcd = (a, b) => (!b ? a : _gcd(b, a % b));
  return [...arr].reduce((a, b) => _gcd(a, b));
};

// 224. Remove HTML/XML tags from string
const stripHTMLTags = (str) => str.replace(/<[^>]*>?/gm, "");

// 225. Get the standard deviation of an array of numbers
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};

// 226. Get n random elements with unique keys from an array up to the size of the array
const sample = (arr) => {
  let result = new Map();
  arr.forEach((a) => (result.has(a.id) ? null : result.set(a.id, a)));
  return [...result.values()];
};

// 227. Remove elements from an array for which the given function returns false
const removed = (arr, fn) => (arr.filter((v, i, self) => !fn(v, i, self)), arr);

// 228. Log the name of a function
const log = console.log.bind(console);

// 229. Convert a string from camelCase
const unCamelCase = (str) =>
  str.replace(/([^][A-Z])/g, ($1) => `-${$1.toLowerCase()}`);

// 230. Generate human-readable format from milliseconds
const formatDuration = (ms) => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};

// 231. Iterate over all properties of an object in reverse
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach((key) => fn(obj[key], key, obj));

// 232. Make first argument the last
const makeLastInArr =
  (fn, arr) =>
  (...args) =>
    fn(...arr, ...args);

// 233. Flatten an object with the paths for keys
const flattenObject = (obj, prefix = "") =>
  Object.entries(obj).reduce((res, [key, val]) => {
    const pre = prefix ? `${prefix}.${key}` : key;
    return isObjectLike(val)
      ? { ...res, ...flattenObject(val, pre) }
      : { ...res, [pre]: val };
  }, {});

// 234. Flatten a given array to specified depth
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

// 235. Get the last key that satisfies the given testing function, else undefined
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find((key) => fn(obj[key], key, obj));

// 236. Get the first key that satisfies the testing function, else undefined
const findKey = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));

// 237. Generate an array containing the Fibonacci sequence to the nth term
const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

// 238. Calculate the factorial of a number
const factorial = (n) =>
  n < 0
    ? (() => {
        throw new TypeError("Negative numbers are not allowed!");
      })()
    : n <= 1
    ? 1
    : n * factorial(n - 1);

// 239. Escape a string to use in a RegExp
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// 240. Check if parent contains child element
const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

// 241. Remove elements from array until passed function returns true, return remaining
const dropElements = (arr, fn) => {
  for (; !fn(arr[0]); arr = arr.slice(1));
  return arr;
};

// 242. Remove elements from end of array until passed function returns true, return remaining
const dropRightWhile = (arr, fn) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !fn(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1);
};

// 243. Get the distance between two points
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 244. Get the difference between two arrays
function difference(a, b) {
  return a.filter(function (v) {
    return !b.includes(v);
  });
}

// 245. Invoke the provided function after milliseconds
function delay(fn, wait, ...args) {
  return setTimeout(fn, wait, ...args);
}

// 246. Convert angles from degrees to radians
function degreesToRads(deg) {
  return (deg * Math.PI) / 180;
}

// 247. Assign default values to all undefined properties in an object
function defaults(obj, ...defs) {
  return Object.assign({}, ...defs.reverse(), obj);
}

// 248. Deep flatten an array
function deepFlatten(arr) {
  return [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
}

// 249. Get the current URL
function currentURL() {
  return window.location.href;
}

// 250. Create an element from a string
function createNode(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

// 251. Write a JSON object to a file
function writeToFile(obj, fileName) {
  const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${fileName}.json`);
  link.click();
}

// 252. Convert RGB values to a hexadecimal color code
function rgbToHex(r, g, b) {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
}

// 253. Generate a UUID in the browser
function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16);
  });
}

// 254. Generate a UUID in Node.js
function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16);
  });
}

// 255. Check if predicate function returns true for at least one element
function some(arr, fn = Boolean) {
  return arr.some(fn);
}

// 256. Check if two numbers are approximately equal
function approximatelyEqual(v1, v2, epsilon = 0.001) {
  return Math.abs(v1 - v2) < epsilon;
}

// 257. Convert a 2D array to a comma-separated value (CSV) string
function fromPairs(arr) {
  return arr
    .map(function (item) {
      return item.join(",");
    })
    .join("\n");
}

// 258. Create a function that accepts up to n arguments, ignoring additional ones
function rari(fn, n) {
  return function (...args) {
    return fn(...args.slice(0, n));
  };
}

// 259. Decode a base64-encoded string
function decodeBase64(base64Str) {
  return Buffer.from(base64Str, "base64").toString("ascii");
}

// 260. Evaluate the binomial coefficients of two integers n and k
function binomialCoefficient(n, k) {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) return binomialCoefficient(n, n - k);
  let res = n;
  for (let j = 2; j < k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
}

// 261. Check if the page bottom is visible
function isBottomVisible() {
  return (
    window.scrollY >
    window.innerHeight - document.documentElement.getBoundingClientRect().height
  );
}

// 262. Create a base-64 encoded ASCII string from a String object
function base64Encode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode("0x" + p1);
    })
  );
}

// 263. Capitalize the first letter of a string
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 264. Capitalize the first letter of every word in a string
function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, function (char) {
    return char.toUpperCase();
  });
}

// 265. Chunk an array into smaller arrays of a specified size
function chunk(array, size) {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    function (_, index) {
      return array.slice(index * size, index * size + size);
    }
  );
}

// 266. Clamp a number within the inclusive range
function clampNumber(num, a, b) {
  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

// 267. Calculate the midpoint between two pairs of points
function midpoint(pt1, pt2) {
  return [(pt1.x + pt2.x) / 2, (pt1.y + pt2.y) / 2];
}

// 268. Find the index of an array item in a for loop
function indexOfItem(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}
