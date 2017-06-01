import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-paging',
            themes: 'simple',
            onChange: function () {},
            lang: {
                dataCount: function (data) {
                    return '共有' + data.dataCount + '条数据'
                },
                prev: '上一页',
                next: '下一页',
                stats: {
                    unit: '页'
                }
            },
            render: function (self, data, themesClassName, rootClassName) {
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
            }
        },
        propTypes: {
            page: PropTypes.number.isRequired,
            pageSize: PropTypes.number.isRequired,
            pageCount: PropTypes.number,
            dataCount: PropTypes.number,
            prevBatch: PropTypes.array,
            nextBatch: PropTypes.array,
            prevSomePage: PropTypes.number,
            nextSomePage: PropTypes.number,
            prefixClassName: PropTypes.string,
            themes: PropTypes.string,
            onChange: PropTypes.func,
            lang: PropTypes.object,
            render: PropTypes.func
        }
    })
}
