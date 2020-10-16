// 通过可读流的pipe()方法可以将可读流的数据传递给可写流

process.stdin.pipe(process.stdout)//在控制台输入aaa 会再输出一行aaa 
/*
aaa
aaa
*/