var ReactDOM = require('react-dom')
var render = ReactDOM.render

// onChange
;(function (node) {
    if (!node) {return}
    require(['./onChange.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__onChange'))

// lang
;(function (node) {
    if (!node) {return}
    require(['./lang.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__lang'))

// dataCount
;(function (node) {
    if (!node) {return}
    require(['./dataCount.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__dataCount'))

// custom-style
;(function (node) {
    if (!node) {return}
    require(['./custom-style.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__custom-style'))
