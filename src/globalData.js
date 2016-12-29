let global = null;

// 直接从node中获取数据
$.ajax({
    url: "/baseGlobal/getData",
    type: "get",
    async: false,
    success (data) {
        global = data;
    }
});

/*// 从后端获取数据
$.ajax({
    url: "/baseGlobal/updateData",
    type: "get",
    async: false,
    success (data) {
        global = data;
    }
});*/


module.exports = global;
