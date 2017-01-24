module.exports = {
    product: [
        {
            name: "产品",
            icon: "#icon-caidan",
            href: "/product",
            children: [
                {
                    sideBarH: "产品管理",
                    //href:"/product/productManage",
                    list: [
                        {sideBarName: "产品管理", href: "/product/productManage"}
                    ]
                }
            ]
        }
    ],
    resource: [
        {
            name: "资源",
            icon: "#icon-fangzi",
            href: "/questions",
            children: [
                {
                    sideBarH: "试题",
                    //href:"/questions/questionsIndexOf",
                    list: [
                        {sideBarName: "创建试题", href: "/questions/questionsCreate"},
                        {sideBarName: "试题检索", href: "/questions/questionsIndexOf"}
                    ]
                },
                {
                    sideBarH: "视频",
                    //href:"/questions/videoIndexOf",
                    list: [
                        {sideBarName: "视频录入", href: "/questions/videoCreate"},
                        {sideBarName: "视频查询", href: "/questions/videoIndexOf"}
                    ]
                }
            ]
        }
    ],
    knowledge: [
        {
            name: "知识点录入",
            icon: "#icon-luru",
            href: "/knowledge",
            default: "/knowledge/knowledgeTextbook",
            children: [
                {
                    sideBarH: "知识点录入",
                    //href:"/knowledge/knowledgeBasis",
                    list: [
                        {sideBarName: "基础知识点", href: "/knowledge/knowledgeBasis"},
                        {sideBarName: "教材知识点", href: "/knowledge/knowledgeTextbook"}
                    ]
                }
            ]
        }
    ],
    classes: [
        {
            name: "课程管理",
            href: "/course",
            children: [
                {
                    sideBarH: "大课程",
                    //href:"/course/independentIndexOf",
                    list: [
                        {sideBarName: "创建大课程", href: "/course/bigCourseCreate"},
                        {sideBarName: "大课程检索", href: "/course/bigCourseIndexOf"}
                    ]
                },
                {
                    sideBarH: "小课程",
                    //href:"/course/independentIndexOf",
                    list: [
                        {sideBarName: "创建小课程", href: "/course/smallCourseCreate"},
                        {sideBarName: "小课程检索", href: "/course/smallCourseIndexOf"}
                    ]
                },
                {
                    sideBarH: "独立课程",
                    //href:"/course/independentIndexOf",
                    list: [
                        {sideBarName: "创建独立课程", href: "/course/independentCreate"},
                        {sideBarName: "独立课程检索", href: "/course/independentIndexOf"}
                    ]
                }
            ]
        }
    ],
    data: [
        {
            name: "数据字典",
            icon: "#icon-zidian",
            href: "/data",
            children: [
                {
                    sideBarH: "字典",
                    //href: "/datas/dataSubject",
                    list: [
                        {sideBarName: "学年管理", href: "/data/dataSubject"},
                        {sideBarName: "学段管理", href: "/data/dataStatus"}
                    ]
                }
            ]
        }
    ]
}