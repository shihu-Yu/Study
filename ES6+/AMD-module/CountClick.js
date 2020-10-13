define(['query'],($)=>{
    const getOne = $.getOne
    let countNum = 0
    const handleClick = () => {
        countNum++
        console.log('click ' + countNum + ' times')
    }
    return {
        count : function(selector){
            getOne(selector).addEventListener('click',handleClick)
        }
    }
})