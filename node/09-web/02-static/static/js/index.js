;(function($){
    var $input = $('.todo-input')
    var $wrap = $('.todo-wrap')
    $input.on('keydown',function(ev){
        if(ev.keyCode == 13){
            $.ajax({
                url:'/add',
                type:'post',
                dataType:'json',
                data:{
                    task:$input.val()
                },
                success:function(result){
                    console.log(result)
                }
            })
        }
    })
    $wrap.on('click','li',function(){
        var $this = $(this)
        $.ajax({
            url:'/del',
            type:'get',
            dataType:'json',
            data:{
                id:$this.data('id')
            },
            success:function(result){
                if(result.code == 0){
                    $this.remove()
                }else{
                    alert(result.msg)
                }
                
            }
        })
    })
})(jQuery)