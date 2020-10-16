/*异步读取文件*/

const fs = require('fs')

//打开文件
fs.open('./01-txt','r',(err,fd)=>{
    //打开文件出错时
    if(err){
        console.log('open file err: ' , err)
    }else{
        //读取文件
        const buffer = Buffer.alloc(100)
        fs.read(fd,buffer,0,50,0,(err,number,buf)=>{
            if(err){
                console.log('read file err: ',err)
            }else{
                //使用文件
                console.log('get ' + number + ' bytes data');
                console.log(buf)
            }
            //关闭文件
            fs.close(fd,(err)=>{
                if (err) {
                    console.log('close file err:', err);
                } else {
                    console.log('close file success');
                }
            })    
        })
    }
})

