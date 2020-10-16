//异步写入文件

const fs = require('fs')
//打开文件
fs.open('./01-txt','w',(err,fd)=>{
    if(err){
        console.log('open file err:' , err)
    }else{
        //写入文件
        fs.write(fd,'da yu de chi bang ',err=>{
            if(err){
                console.log('write file err:',err)
            }else{
                console.log('write file success')
            }
             //关闭文件
            fs.close(fd,err=>{
                if(err){
                    console.log('close file err',err)
                }else{
                    console.log('close file success')
                }
            })
        })
       
    }
})