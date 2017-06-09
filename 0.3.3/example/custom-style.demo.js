var React = require('react')
var Paging = require('paging.react').default
var App = React.createClass({
    render: function () {
        return (
            <Paging themes="info" >basic</Paging>
        )
    }
})
module.exports = App
