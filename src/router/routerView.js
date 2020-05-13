import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'



export default ({routerConfig})=>{
    if(!routerConfig.length){
        return null;
    }
   const redirect=routerConfig.filter(item=>item.redirect)
   const allPage=routerConfig.filter(item=>item.path==='*')
        return <Switch>
            {
                routerConfig.map(item=>{
                    return (item.component&&(item.path!=='*'))?<Route key={item.path} path={item.path} render={props=>{
                        const Com=item.component;
                        return <Com {...props} routerConfig={item.children}/>
                    }}/>:null
                }).concat(redirect.map(item=>{
                    return <Redirect key={item.path} from={item.path} to={item.redirect}/>
                }))
            }
            {
                allPage.length&&allPage.map(item=>{
                    return <Route key={item.path} path={item.path} component={item.component}/>
                })
            }
        </Switch>
}
