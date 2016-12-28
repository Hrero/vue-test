MathJax.Hub.Config({
    jax: ["input/TeX", "output/HTML-CSS"],
    extensions: ["tex2jax.js"],
    TeX: {
        extensions: ["mhchem.js"]
    },
    tex2jax: {
        inlineMath: [['$', '$'],["\\(", "\\)"]],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
    },
    menuSettings: {
        zoom: "Click",
        CTRL: false
    }
});