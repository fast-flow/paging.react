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
            data.isFirstPage? getClassName('--isFirstPage'):'' ,
            data.prevHasMorePage? getClassName('--prevHasMorePage'):'',
            data.nextHasMorePage? getClassName('--nextHasMorePage'):'',
            data.isLastPage? getClassName('--isLastPage'):''
        ].join(' ')
        return self.props.render(self, pagingData, themesClassName, rootClassName)
    }
}
props(Paging)
export default Paging
