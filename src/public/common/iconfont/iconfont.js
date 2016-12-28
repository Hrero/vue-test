;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-fangzi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M816.112 400.704v-272.336h-155.59v116.74l-155.682-155.643-427.964 427.919h77.794v428.015h233.434v-350.123h233.477v350.123h233.387v-428.015h77.794l-116.653-116.694zM426.951 945.507h155.871v-311.273h-155.871v311.273z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-luru" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M659.2 44.8 537.6 185.6 140.8 185.6 140.8 185.6 140.8 838.4 787.2 838.4 787.2 544 921.6 377.6 915.2 979.2 0 979.2 0 44.8Z"  ></path>'+
      ''+
      '<path d="M608 652.8"  ></path>'+
      ''+
      '<path d="M998.4 108.8c0 6.4 6.4 12.8 6.4 19.2 0 6.4 0 12.8 0 19.2 0 6.4 0 12.8-6.4 25.6 0 6.4-6.4 12.8-12.8 19.2-6.4 6.4-12.8 12.8-19.2 19.2C960 217.6 960 217.6 953.6 224c-6.4 6.4-6.4 6.4-12.8 12.8l-166.4-166.4c6.4-6.4 12.8-12.8 25.6-25.6 12.8-6.4 19.2-19.2 25.6-19.2 6.4-6.4 19.2-12.8 25.6-12.8 6.4 0 19.2-6.4 25.6-6.4 6.4 0 19.2 0 25.6 6.4 6.4 0 12.8 6.4 19.2 6.4 12.8 6.4 25.6 19.2 38.4 32C979.2 70.4 992 89.6 998.4 108.8L998.4 108.8 998.4 108.8z"  ></path>'+
      ''+
      '<path d="M320 537.6C320 531.2 326.4 524.8 339.2 512c12.8-12.8 32-32 51.2-51.2l64-64 70.4-70.4 185.6-185.6 166.4 166.4-185.6 185.6L614.4 563.2c-25.6 25.6-44.8 44.8-64 64-19.2 19.2-32 32-44.8 44.8-12.8 12.8-19.2 19.2-19.2 19.2-6.4 6.4-12.8 12.8-19.2 19.2-6.4 6.4-12.8 12.8-25.6 12.8-6.4 6.4-19.2 6.4-38.4 12.8-12.8 6.4-32 12.8-51.2 19.2C339.2 761.6 326.4 768 307.2 768c-12.8 6.4-25.6 6.4-32 6.4-12.8 0-25.6 0-32-6.4-6.4-6.4-6.4-19.2-6.4-32 0-6.4 6.4-19.2 6.4-38.4 6.4-12.8 6.4-32 12.8-51.2C268.8 640 268.8 620.8 275.2 608c6.4-12.8 6.4-25.6 12.8-32 6.4-6.4 6.4-12.8 12.8-19.2C300.8 550.4 307.2 544 320 537.6L320 537.6 320 537.6z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zidian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M969.4 145 969.4 54.4 883.2 54.4 883.2 247.2 969.4 247.2Z"  ></path>'+
      ''+
      '<path d="M883.2 326.4l54.4 0 0 195-54.4 0 0-195Z"  ></path>'+
      ''+
      '<path d="M0 72.8l0 833.2 0 28 0 0c1 49.8 43.8 90 93.8 90l731.2 0 0-60L93.8 964c-17.6 0-31.8-14.2-31.8-31.8 0-17.6 14.2-31.8 31.8-31.8l731.2 0 0-51L825 840 825 0 71.2 0C35.6 7.8 7.6 36.8 0 72.8zM267.6 217.4l416.8 0 0 72.4L267.6 289.8 267.6 217.4zM267.6 411.6l416.8 0L684.4 484 267.6 484 267.6 411.6zM267.6 605.6l416.8 0L684.4 678 267.6 678 267.6 605.6zM126.8 217.4l72.4 0 0 72.4L126.8 289.8 126.8 217.4zM126.8 411.6l72.4 0L199.2 484 126.8 484 126.8 411.6zM126.8 605.6l72.4 0L199.2 678 126.8 678 126.8 605.6z"  ></path>'+
      ''+
      '<path d="M883.2 599.8l121.8 0 0 203-121.8 0 0-203Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M570.326724 283.890131l242.051617 0 0 243.616237-242.051617 0L570.326724 283.890131zM570.326724 588.035602l242.051617 0 0 243.675433-242.051617 0L570.326724 588.035602zM241.335138 588.035602l242.051617 0 0 243.675433L241.335138 831.711035 241.335138 588.035602zM174.76584 520.155821l308.56274 0L483.32858 209.675325 174.76584 209.675325 174.76584 520.155821zM223.282309 258.434703l211.647174 0 0 212.902544-211.647174 0L223.282309 258.434703zM916.539329 0 107.066709 0c-58.256301 0-105.704174 47.742834-105.704174 106.302261l0 811.395479c0 58.558406 47.388677 106.302261 105.704174 106.302261l809.471599 0c58.197104 0 105.644978-47.742834 105.644978-106.302261l0-811.395479C1022.184307 47.742834 974.736433 0 916.539329 0zM958.523792 917.696719c0 23.364166-18.824422 42.186547-41.984463 42.186547L107.066709 959.883266c-23.160041 0-42.04468-18.822381-42.04468-42.186547L65.022029 106.30124c0-23.303949 18.825443-42.186547 42.04468-42.186547l809.471599 0c23.160041 0 41.984463 18.882598 41.984463 42.186547L958.522772 917.696719z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-cuowu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
