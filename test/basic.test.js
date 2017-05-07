import { Component } from "react"
import Paging from "../lib/index"
import Test from 'react-addons-test-utils'
import { delay } from "./util"
it('className', function (done) {
    var app = Test.renderIntoDocument(<Paging className="myclass" />)
    delay(done,[
        function checkClassName() {
            expect(Test.scryRenderedDOMComponentsWithClass(app, 'myclass').length)
                .toEqual(1)
            arguments[0]()
        }
    ])
})
