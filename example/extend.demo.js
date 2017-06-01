var React = require('react')
var Paging = require('paging.react').default
var Goto = React.createClass({
    componentWillReceiveProps: function (nextProps) {
        var value = Number(this.state.value)
        if (nextProps.page !== value) {
            this.setState({
                value: nextProps.page
            })
        }
        if (nextProps.data.pageCount < value) {
            this.setState({
                value: nextProps.data.pageCount
            })
        }
    },
    go: function () {
        this.props.onChange(Number(this.state.value))
    },
    onChange: function (e) {
        this.setState({
            value: e.target.value.replace(/\D/g, '')
        })
    },
    getInitialState: function () {
        return {
            value: this.props.page
        }
    },
    render: function () {
        const self = this
        return (
            <div>
                <input type="text" value={self.state.value} onChange={self.onChange} />
                <button type="submit" onClick={self.go} >GO</button>
            </div>
        )
    }
})
// props.render copy from the https://github.com/fast-flow/paging.react/blob/master/lib/props.js
var MyPaging = React.createClass({
    pagingRender: function (self, data, themesClassName, rootClassName) {
        var pcls = self.props.prefixClassName
        var getClassName = function (className) {
            return pcls + className
        }
        var onChange = function (page) {
            if (page > 0 && page <= data.pageCount) {
                console.log('onChange')
                self.props.onChange(page)
            }
        }
        var lang = self.props.lang
        return (
            <div className={rootClassName} >
                {/* Inset component */}
                <Goto {...self.props} data={data} />
                {/* Inset component */}
                {
                    data.dataCount?
                    (
                        <span className={getClassName('-dataCount')} >
                            {lang.dataCount(data)}
                        </span>
                    ):null
                }
                <span className={getClassName('-prev')} onClick={function(){onChange(data.page - 1)}} >{lang.prev}</span>
                <span className={getClassName('-firstPage')} onClick={function(){onChange(1)}} >1</span>
                {
                    data.prevHasMorePage?
                    (
                        <span className={getClassName('-prevHasMorePage')} onClick={function(){onChange(data.prevSomePage)}} >...</span>
                    ):null
                }
                {
                    data.prevBatch.map(function (page, key) {
                        return (
                            <span key={key} className={getClassName('-prevBatch')} onClick={function(){onChange(page)}} >{page}</span>
                        )
                    })
                }
                <span className={getClassName('-page')} onClick={function(){onChange(data.page)}} >{data.page}</span>
                {
                    data.nextBatch.map(function (page, key) {
                        return (
                            <span key={key} className={getClassName('-nextBatch')} onClick={function(){onChange(page)}} >{page}</span>
                        )
                    })
                }
                {
                    data.nextHasMorePage?
                    (
                        <span className={getClassName('-nextHasMorePage')} onClick={function(){onChange(data.nextSomePage)}} >...</span>
                    ):null
                }
                <span className={getClassName('-lastPage')} onClick={function(){onChange(data.pageCount)}}  >{data.pageCount}</span>
                <span className={getClassName('-next')} onClick={function(){onChange(data.page + 1)}}  >{lang.next}</span>
                <span className={getClassName('-stats')}>
                    {data.page}/{data.pageCount}{lang.stats.unit}
                </span>
            </div>
        )
    },
    render: function () {
        return <Paging {...this.props} render={this.pagingRender} />
    }
})
var App = React.createClass({
    getInitialState: function () {
        return {
            page: 1
        }
    },
    onChange: function (page) {
        this.setState({
            page: page
        })
    },
    render: function () {
        var self = this
        return (
            <MyPaging page={self.state.page} pageCount={10} pageSize={10} onChange={self.onChange} />
        )
    }
})
module.exports = App
