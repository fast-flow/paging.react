import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-paging',
            themes: 'simple',
            onChange: function () {},
            render: function (self, data, themesClassName) {
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
                var rootClassName = [
                    pcls,
                    themesClassName,
                    data.isFirstPage? getClassName('--isFirstPage'):'' ,
                    data.prevHasMorePage? getClassName('--prevHasMorePage'):'',
                    data.nextHasMorePage? getClassName('--nextHasMorePage'):'',
                    data.isLastPage? getClassName('--isLastPage'):''
                ].join(' ')
                return (
                    <div className={rootClassName} >
                        {
                            data.dataCount?
                            (
                                <span className={getClassName('-dataCount')} >
                                    共有{data.dataCount}条数据
                                </span>
                            ):null
                        }
                        <span className={getClassName('-prev')} onClick={function(){onChange(data.page - 1)}} >上一页</span>
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
                        <span className={getClassName('-next')} onClick={function(){onChange(data.page + 1)}}  >下一页</span>
                        <span className={getClassName('-info')}>
                            {data.page}/{data.pageCount}页
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
            render: PropTypes.func
        }
    })
}
