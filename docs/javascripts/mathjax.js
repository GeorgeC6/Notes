window.MathJax = {
  loader: {
    load: [
      "[tex]/boldsymbol",
      "[tex]/braket",
      "[tex]/cancel"
    ]
  },
  tex: {
    packages: {
      "[+]": ["boldsymbol", "braket", "cancel"]
    },
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true
  },
  options: {
    ignoreHtmlClass: "mathjax_ignore"
  },
  // output: {
  //   font: 'mathjax-stix2'
  // }
};

// Instant Loading
document$.subscribe(() => { 
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})