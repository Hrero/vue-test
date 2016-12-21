module.exports = MathJax.Hub.Config({
    jax: ["input/TeX","output/HTML-CSS"],
    extensions: ["tex2jax.js"],
    TeX: {
        extensions: []
    },
    tex2jax: {
        inlineMath: [ ["\\(", "\\)"] ],
        displayMath: [ ['$$','$$'], ['\\[','\\]'] ]
    },
    menuSettings: {
        zoom: "Click",
        CTRL: false
    }
});