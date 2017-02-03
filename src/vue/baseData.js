let baseData = null;

// 直接从node中获取数据
$.ajax({
    url: "/baseGlobal/getaDta",
    type: "get",
    async: false,
    success (data) {
        baseData = data;
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


module.exports = baseData;
