// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import reducers from './redux/store'
import App from './App'
import { routerReducer } from 'react-router-redux'

//公用样式文件
require('common/css/base.scss') 
 
// 弹窗
import popup from 'popup'
import $ from 'jquery'
import config from 'common/js/config'
import util from 'common/js/util'

window.popup 	= popup
window.config 	= config
window.util     = util
window.$ 		= $

// 创建 Redux 的 store 对象
const store = createStore(
    combineReducers({
        reducers,
        routing: routerReducer
    })
)
	
render(
    <Provider store={store} >  
        <App /> 
    </Provider>,
    document.getElementById('app')
)

function aa(a:string,b:string){
    alert(a+b)
}

aa(1,2)
