(function(w){
    const getOne = query.getOne
    let countNum = 0
    const handleClick = ()=>{
        countNum ++
        console.log('click ' + countNum + ' times');
    }
    w.CountClick = {
        count : function(selector){
            getOne(selector).addEventListener('click',handleClick)
        }
    }
})(window);