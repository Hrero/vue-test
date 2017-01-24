var http = require('http'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({}),
    servers = [
        {target: "http://192.168.1.166:3501"},
        {target: "http://127.0.0.1:3500"}
    ];

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
    console.log(proxyReq, req, res, options);
});

proxy.on("error", function(err){
    console.log(err);
    let errIp = "http://" + err.address + ":" + err.port;
    for(var i=0; i<servers.length; i++){
        if(servers[i].target == errIp){
            servers.splice(i, 1);
            return ;
        }
    }
});


http.createServer(function(req, res) {
    var target = servers.shift();
    proxy.web(req, res, target);
    servers.push(target);
}).listen(5050);