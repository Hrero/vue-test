let http = require('http'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({}),
    servers = [
        {target: "http://192.168.1.166:3501"},
        {target: "http://127.0.0.1:3500"}
    ],
    stopServers = [];

proxy.on('proxyReq', function (proxyReq, req, res, options) {
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

proxy.on('proxyRes', function (proxyRes, req, res) {
    let url = req.url;
    if (/^(\/baseGlobal\/updateByValue)/.test(url)) {
        servers.forEach(item => {
            http.get(item.target + url);
        });
    }
});

proxy.on("error", function (err) {
    let errIp = "http://" + err.address + ":" + err.port;
    if(servers.length){
        for (let i = 0; i < servers.length; i++) {
            if (servers[i].target == errIp) {
                stopServers.push(servers[i]);
                servers.splice(i, 1);
                return;
            }
        }
    } else {
        console.log("所有服务已断开");
    }

});

http.createServer(function(req, res){
    let target = servers.shift();
    proxy.web(req, res, target);
    servers.push(target);
}).listen(5050);