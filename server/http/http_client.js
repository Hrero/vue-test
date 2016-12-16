exports.getUrl = function get_http_GetUrl(host, port, path, type) {
    let options = {
        host: host,
        port: port,
        path: path,
        method: type,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return options;
};
