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
                    if(result.code == 0){
                        //生成元素
                        var data = result.data
                        var $elem = $(`<li class="todo-item" data-id="${data.id}">${data.task}</li>`)
                        //追加元素
                        $wrap.append($elem)
                        $input.val('')
                    }
                    //2.2 失败的情况弹出失败消息
                    else{
                        alert(result.msg)
                    }
                }
            })
        }
    })
    //利用事件代理的方法来实现点击时删除DOM节点同时删除后台中的数据
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

    //上传头像
    //通过监听change事件
    $('.avatar-input').on('change',function(){
        
        // 获取表单数据
        var formData = new FormData($('#avatar-form')[0])
        //使用ajax上传
        $.ajax({
            url:'/uploadAvatar',
            type:'POST',
            data:formData,
            contentType:false,//必须设置
            processData:false,//必须设置
            dataType:'json',
            success:function(result){
                if(result.code == 0){
                    $('.avatar img').attr('src',result.data)
                }
                //2.2处理失败,弹出失败消息
                else {
                    alert(result.msg)
                } 
            }
        })
    })
})(jQuery)