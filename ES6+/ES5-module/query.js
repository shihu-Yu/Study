(function(w){
    //获取元素
    w.query = {
        getOne:function(selector){
            return document.querySelector(selector)
        }
    }
})(window);