# js学习笔记
[toc]
### 1. 基础语法 
 **严格区分大小写**
1. **变量**  （存储数据的容器）
    1. 变量的声明 var
    2. 命名规范（只能以 字母 下划线 $符开头，只能以字母 下划线 $ 数字 组成） 驼峰方式 userName 不能以关键字和保留子命名
    3. 变量的声明提升  （将变量的声明过程提升到当前 script 或者 function 的最前面）
    4. 作用域
2. **数据类型**  （Undefined Null Boolean Number String 对象Object：存储一系列内容）
3. **数据类型之间的转换**
     一般来说从页面上获取的值都是字符串类型，除了索引值
     数据类型的检测  typeof
    1. 隐式转换:   乘法 除法 减法 加法 取余会自动将符号左右的值转换成数字类型再进行运算;  加法如果左右出现了字符串，则会自动将另外一个不是字符串的值转成字符串再做拼接
    1. 将字符串转换为数字  parseInt()  ParseFloat() Number 方法  （用法： parseINT(值) ）
    2. 转换规则：parseInt()  ParseFloat() 一个字符一个字符转换，只要满足数字要求就转换，不满足就停止，第一个不满足就直接NaN（不是一个数字）；Number()直接整体看，能转就转，不能转NuN
    3. 将数字转换成字符串 String(value) 值.toString()
    4. 转化成Bool值  Boolean(值)  隐式转换 if语句 （0 '' null undefined NaN会被转换成false） == 等号有两个 
    5. 转义符  \
4. **运算符**
    1. 数学运算 + - * / %
    2. 比较运算  > < >= <= == === != !==
        1. == 比较值   10==’10'  true
        2. === 比较值和数据类型  10 === '10’ false  常用
    3. 逻辑运算  与或非  &&  || !
    4. 自增自减 
5. **语句**  分支(if   switch) 循环 (do while    for)
6. **函数**

### 2. 面向对象
 对象： 属性的无序集合
      分类： 1 自定义对象  2 内置对象  3 浏览器对象
       
 #### 1. 自定义对象
        
```javascript
        var cat = {
            //对象里包含了属性和方法
            name : 'bro',
            age : 3,
            say: function(){
                console.log('I\'m bro ,miaomiaomiao')
            }
        }
 ```
 
 获取对象的属性和调用方法
 ```javascript
        var name =cat.name
        cat.say()  //调用方法
        //修改对象的内容  直接对属性的属性值进行修改即可
        cat.age = 2
        cat.say= function(){
            console.log('miaomiaomiao') 
        }
        cat.say()
        console.log(cat)
        //对象存储在内存中，对象比较的时候比较的是内存的地址是否相同
        //简单类型在浏览器中存储的是值本身，比较的是值
  ```    

***
#### 2. 内置对象 
>时间对象 数学运算等 （数组 日期 正则表达式 数学 字符串 数字 布尔）

##### 1. **数组 Aray** 
>数据的有序集合  数组对象的一种
    
 ```javascript
        var numArr = [1,2,3,4,5,5]
        //访问数组   
        var num1 = numArr[0]
        console.log(num1)
        //修改
        //1. 直接赋值
        numArr[0] = 3
        //2. 通过数组的方法  push pop concat shift unshift reverse slice splice sort indexOf
  ```
属性： length 数组的长度  numArry.length   **注意后面没有括号**
    **<u>学习对象的方法：</u>**
>       1. 方法是哪个对象的
        2. 方法的作用
        3. 方法有没有返回值
        4. 是否修改原来的对象
        

| 数组方法 | 描述|
| --- | --- |
| concat() | 连接两个或更多的数组，并返回结果。不改变原来的数组 |
| push() | 向数组的末尾添加一个或更多元素，并返回新数组的长度。 修改原来的数组 |
| pop() | 删除并返回数组的最后一个元素 修改原来的数组 |
| shift() | 删除并返回数组的第一个元素 修改原来的数组 |
| unshift()| 向数组的开头添加一个或更多元素，并返回新的长度。 修改原来的数组 |
| reverse() | 颠倒数组中元素的顺序。修改预案来的 |
| slice(a,b) | 数组的截取 从某个已有的数组返回选定的元素 不修改原来的数组 包括a不包括b|
| splice(1,2,3) | 删除元素，并向数组添加新元素 返回被删除的元素数组 三个参数，第一个开始位置，负数表示从尾开始；第二个删除个数，为0表示不删除；第三个可选，添加的元素，添加在第一个索引值之后 |
| indexOf() | 检索所给值的第一次出现的位置，并返回索引值，如果没有，返回-1 不修改原来的数组  indexOf方法不能用来检测对象数组是否包含对象 |
| sort() | 对数组的元素进行排序 修改原来的数组 参数可选，但必须是函数 1. 不添加参数：适用于英文字符串排序，按照首字符排序，汉字除外 |
  
  
  ```javascript
     var numArry = [12,1123,13,45,67]
       numArry.sort(function(a,b){ return a-b}   //数字的大小排序 降序 b-a
      //a,b代表的是数组内相邻的两个元素，如果是对象的话，用a.number>b,number
  ```


| 数组方法 | 属性 |
| --- | --- |
| forEach() | 遍历数组 ```numArry.forEach(function(value,index, array ){ console.log(value) } ``` 详情见js_learn 下的shopping.html页面|
| join() | 把数组中所有元素放入一个字符串默认,分隔，可以自定义分隔符```arr.join(".")``` 原数组不变 |
| filter() | 筛选过滤 筛选数组内满足条件的元素组成新的数组，返回新数组 不修改原来的``` numArr.filter(function(value,index,array){ return value>100}```|
| every() | 检测数组内的所有元素是否全部满足一个条件，满足的话返回true，不满足返回false 不修改原数组 |
| find() | 查找数组中是否存在（不一定是相等，可以是满足某一个条件）某个元素，存在的话返回查找到第一个满足条件的元素，不存在返回undefined ```arr,find(function(value,index,array){return value > 20})```|
| findIndex() | 返回查找到第一个满足条件元素的索引值 不存在返回-1  |
| map() | 数组的映射 将数组转化成新的数组 新数组的值和原数组内的值是以一对应的（通过某个操作），返回新数组，不修改原数组 ```arr.map(function(value){return value*value})``` |
| reduce() | 重要 在每个数组元素上运行函数，以生成（减少它）单个值。|
| includes() |  |

2. 数组的用法  
    将数组的内容创建成一个列表展示出来（数组的遍历） 
    思考： 1.依次输出数组内的元素
        2. 每次输出的时候将输出的内容创建一个新的li
        创建新的空标签  var li = $('<li>')
        3. 将创建好的li添加到页面的ul内
        $('.list').append(li)  //添加到最后当作一个子集
        
   ```javascript
   //<div>
   //   <ul class="list">
   //body中html部分
   //  </ul>
   // </div>
       var numArr2 = [1,9,3,4,5,6]
        for(var i=0;i<numArr2.length;i++){
            var li = $('<li>') //创建新的li
            li.text(numArr2[i])
            $('.list').append(li)
        }
    ```
    
    禁用按钮的方法：
    1. ``` $(this).attr('disabled',true)```将按钮的属性设置为disabled
    2. ```$('.but').off('click') ```解除事件绑定
    > 解除事件绑定 off方法   $('.but').off('click')  不传参解除所有事件绑定

简单的冒泡排序算法：

   ```javascript
 <script>
        var numArr =[2,3,1,9,6,7]
        for (var i =0; i<numArr.length-1; i++){
            for(var j = 0; j<numArr.length-1-i; j++){
                if(numArr[j]>numArr[j+1]){
                    var temp = numArr[j]  //创建中间变量
                    numArr[j] = numArr[j+1]
                    numArr[j+1] = temp
                }
            }
        }
```

日期对象方法：
>内置对象  用于获取当前时间   对日期进行处理
首先要新建一个对象才能使用  ```var date = new Date()```

|编号| 对象 | 说明 |
|---| --- | --- |
|1| getFullYear() | 获取年份 ``` var year = date.getUTCFullYear()```|
|2| getMonth() | 获取月份 0-11  得到后+1 |
|3| getDate() | 获取日 |
|4| getDay()| 获取星期  0-6  0表示星期日|
|5| getHours() | 获取小时 |
| 6|getMinute | 获取分钟 |
| 7|getSeconds | 获取秒数 |
| 8|getMilliconds | 获取毫秒数 |
|9|getTime | 获取格林威克 1970.1.1 0.0.0 到现在的毫秒数，用来做永远不会重复的数|
| 10|getUTCFullYear() |获取世界时间在上述方法加入UTC|
|11||设置时间  get换成set|

js 计时器 setInterval
    ```setInterval(function(){},1000)``` 
>传两个参数，第一个是函数，第二个是时间  
每过一段时间就执行一次这个函数，不实用其它方法就不停止
先过了定义的一段时间后再来执行函数

同步和异步
>同步阻塞：上一个同步语句不执行完毕，下一个同步语句不会开始执行
异步非阻塞： 一般异步操作都是需要时间参数的 相对于同步，异步操作在后面执行
js中异步语法： setInterval  fadeIn slideUp show hide animate (很多js动画) 
setTimeout计时器  延迟执行  ```setTimeout(function(){},1000)```  延迟1000ms后执行函数内容 只执行一次

##### 2. **字符串对象 String** 
创建字符串对象：```var string = new String(hello)```

属性： length 
方法： cahraAt(n)  n代表索引位置，获取指定下标的字符
    toLowerCase()   将大写转换为小写
    toUpperCase()  转换为大写
    trim() trimLeft() trimRight() 去掉字符串两边的空白
    replace()      str.replace(regexp|substr, newSubStr|function)  替换字符串
    正则表达式修饰符 
    g（全局）   /a/g  放在正则后面
    i（不区分大小写）    
    search(RegExp) 查询字符串是否满足某个正则，满足返回开始的索引，不满足返回-1 
    match() 检测字符串是否满足某个规则，满足返回结果的数组，不满足返回undefined

### 3. 正则表达式
>用来检测字符串的某种规则

| 规则 | 说明 | 用例 |
| --- | --- | --- |
| var re = /a/ | 包含一个小写字母a | [ab] 代表连续的ab |
| [] | 代表一位 中括号内不管写多少，都是检测其中一位 | [abc] a或b或c |
|[0-9]|代表一位纯数字|\d|
|[a-z]|代表一位小写字母||
|[A-z]|代表一位字母或者下划线||
|{} {数字} | 控制{}前面一位个数 | /ba{4}/ 4位连续的小写字母a  {}|
|{1,4}|  ||
|{1,}| + |+ 号代表前面的字符必须至少出现一次（1次或多次）|
|{0,}| * |* 号代表字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）。|
|{0,1}| ? |?问号代表前面的字符最多只可以出现一次（0次、或1次|
| ^ | 开头 |  |
|$|控制结尾|
|\||代表或| |
|()|分组的内容先计算|先计算括号内 |
|\d| 和[0-9]表示一样|[0-9]|
|\D| 非\d| |
|\w|一位数字、字母、下划线|
|\W| not \w 特殊字符|
|\s|空格|
|\S|非空格|
|(?=x)|紧跟着小写字母x|


更多可参考**[正则表达式手册](https://tool.oschina.net/uploads/apidocs/jquery/regexp.html)**
qq邮箱 ：  
``` javascript 
    //qq邮箱  4-12位数字 + @ +(qq QQ)+ . + (con COM)
     var reQq = /^[0-9]{4,12}@(qq|QQ).(com|COM)$/
      console.log(reQq.test('1943113956@qq.com')) //-->>true
 ```
 >一位汉字  ：```/^[\u2E80-\u9FFF]+$/```
 
正则表达式的方法（用来检测））

| 方法 | 用例 | 返回值 |
| --- | --- | --- |
| test() | ```var str = 'hello'; var re = /h/; re.test(str);```返回true | test方法返回true或false |
| exec() | ```re.exec(str)```输出：0: "h" index: 0 input: "hello" groups: undefined length: 1 | 返回类数组（1. 正确匹配的字符串；2. 正确匹配的开始索引 3. 被检测的字符串）或者null  |
|  |  |  |

设置带变量的正则
```javascript
    var keyText = 'javascript'
    var title = 'javascript从入门到放弃'  //检测是否包含javascript
    
    //var re = /keyText/  //这种方式不行了
    var re = new RegExp(keyText)  //创建带变量的正则
    re.test(title)  // -->>true
   ```
