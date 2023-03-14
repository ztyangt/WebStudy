/**
 * 得到一个指定长度的随机字符串
 * 字符串包含：数字、字母
 * @param {number} length 字符串的长度
 * @return {number} 随机字符串
 */
function getRandomString(length) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

console.log(getRandomString(5));
