const {Writable} = require('stream')

class CustomWritableStream extends Writable{
    _write(chunk,encoding,callback){
        console.log('chunk' + chunk)
        console.log('encoding' + encoding)
    }
}
const ws = new CustomWritableStream()

ws.write()