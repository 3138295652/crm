//cookie加密的盐
exports.keys = "sdfdshlkfdsakdfsahdsfakjfhasfkdsa";
//post请求可用
exports.security = {
  csrf: false
};
//mysql配置
exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '5266',
    database: 'bs',
  },
};
//跨域
exports.cors = {
	  origin:'*',
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

};


exports.multipart = {
	mode: 'file',
};
//加上后post请求才能成功,文件上传才能成功 1
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	} 
};