const {Readable} = require('stream')

class CustomReadableStream extends Readable{

}

const rd = new CustomReadableStream()

rd.on('data',chunk=>{
   
})