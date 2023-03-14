function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + lastName;
}

// 能否不使用new，通过User函数创建对象（不能更改User函数）

var u = {};
User.call(u, "猪", "八戒");
console.log(u);
