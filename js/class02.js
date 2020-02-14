// "use strict";  //使用严格模式
var string1 = "a";
var a = Boolean(string1);
if(a){
    console.log("string1的类型为:"+a);
}else{
    console.log("string1的类型为:"+a);
}
console.log(Number.MIN_VALUE);  //最小值5e-324
console.log(Number.MAX_VALUE); //最大值1.7976931348623157e+308
console.log(Infinity); //无穷大Infinity
console.log("\r");

function add(num1,num2) {
    var num3 = arguments[0]+num2;
    return num3;
}
console.log(add(1,2));