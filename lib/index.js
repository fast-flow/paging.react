import "./index.css"
import { Component } from "react"
import util from "util.react"
import props from "./props"
import classNames from "classnames"
import paging from "paging"
class Paging extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        const pagingData = paging.createData(self.props)
        const themesClassName= self.props.themes ? util.themes(self.props): ''
        const getClassName = function (className) {
            return pcls + className
        }
        const rootClassName = [
            pcls,
            themesClassName,
            pagingData.isFirstPage? getClassName('--isFirstPage'):'' ,
            pagingData.prevHasMorePage? getClassName('--prevHasMorePage'):'',
            pagingData.nextHasMorePage? getClassName('--nextHasMorePage'):'',
            pagingData.isLastPage? getClassName('--isLastPage'):''
        ].join(' ')
        if (pagingData.hasPaging) {
            return self.props.render(self, pagingData, rootClassName)
        }
        else {
            return <span style={{display: 'none'}} pagingReactTip="pageCount = 1 Do not need paging" >{JSON.stringify(pagingData)}</span>
        }
    }
}
props(Paging)
export default Paging
