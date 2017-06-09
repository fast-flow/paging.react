var React = require('react')
var Paging = require('paging.react').default
var App = React.createClass({
    render: function () {
        var self = this
        return (
            <Paging page={1} pageCount={1} dataCount={3} />
        )
    }
})
module.exports = App
