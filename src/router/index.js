import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import routerConfig from './router.config'
import RouterView from './routerView'

export default ()=>{
    return <BrowserRouter>
            <RouterView routerConfig={routerConfig} />
    </BrowserRouter>
}