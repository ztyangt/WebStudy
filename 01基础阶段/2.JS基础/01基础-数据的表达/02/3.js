/* 
  有一个非常特别的对象，它的键值对是：
  0: 'a'
  1: 'b'
  how are you: 'fine thank you'
*/
// 用字面量表示该对象，然后分别读取它的每个属性输出

var obj = {
  0: 'a',
  1: 'b',
  'how are you': 'fine thank you'
}

console.log(obj[0])
console.log(obj['1'])
console.log(obj['how are you'])
