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
        return self.props.render(self, pagingData, themesClassName)
    }
}
props(Paging)
export default Paging
