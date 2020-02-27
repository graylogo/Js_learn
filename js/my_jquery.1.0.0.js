;(function(){
    function jQuery(selector){
        this.dom = document.querySelector(selector);
        this.selector = selector
    }
    jQuery.prototype.click = function(callBack){
        this.dom.onclick=function(){
            // document.querySelector(this.selector).onclick = function(){
            callBack();
        }
    }
    jQuery.prototype.css = function(attribute,_value){
        var currentAttribute,currentVale
        if(arguments.length>=2){
            currentAttribute = arguments[0];
            currentVale = arguments[1];
        }else if(arguments.length === 1){
            //传递对象作为参数  "color":"#ff0011", "background": "blue" 
            for(const key in arguments[0]){
                this.dom.style[key] = arguments[0][key]
            } 

        }
        else{
            alert('输入正确的参数！')
        }
        this.dom.style[currentAttribute] = currentVale
    }
    //主动暴露jQuery，让外面函数能获取里面的内容
    var $ = function(selector){
        return new jQuery(selector)
    }
    window.$ = $
})()