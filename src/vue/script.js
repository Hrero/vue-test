MathJax.Hub.Config({
    jax: ["input/TeX", "output/HTML-CSS"],
    extensions: ["tex2jax.js"],
    TeX: {
        extensions: ["mhchem.js"]
    },
    tex2jax: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
    },
    menuSettings: {
        zoom: "Click",
        CTRL: false
    }
});

if(process.env.NODE_ENV != "production"){
    let head = document.getElementsByTagName("head")[0];
    let link = document.createElement("link");
    link.setAttribute("href", "/dist/css/styles.css");
    link.setAttribute("rel", "stylesheet");
    head.appendChild(link);
    let body = document.getElementsByTagName("body")[0];
    let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "/dist/js/build.js");
    body.appendChild(script);
    console.log(body);
} else {
    let body = document.getElementsByTagName("body")[0];
    let config = document.getElementById("config");
    body.removeChild(config);
    console.log($)
}