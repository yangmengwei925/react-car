import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class colorDialog extends Component {
    state={
        currentIndex:0,
        colorList:[],
    }
    render() {
        const {currentIndex,colorList}=this.state
        const {list,title}=this.props
        let arr=[];
        for(let key in list)//拿到年份
        {
            arr.push(key)
        }
        return (
            <div className="color">

                <div className="color-top">
                    <b onClick={()=>this.props.history.go(-1)}>&lt;</b>
                   {title}
                </div>
                {/* 渲染年份 对应颜色*/}
                <nav>
                    {arr.map((item,i)=>{
                    return <span key={item} onClick={()=>this.bindColor(item,i)} className={currentIndex==i?'active':''}>{item}</span>
                    })}
                </nav>
                <div className="wonderful">
                   {colorList&&colorList.map(item=>{
                       return <ul key={item.ColorId}>
                           <li><span style={{background:item.value}}></span>{item.Name}</li>
                       </ul>
                   })}
                </div>
            </div>
        );
    }
    bindColor(type,i){
        this.setState({
            currentIndex:i
        })
        
        for(let v in this.props.list)
        {
            if(type===v)
            {
                this.state.colorList=this.props.list[v]
            }
        }

    }
}

export default connect(
    (state)=>{
        return{

        }
    },
    (dispatch)=>{
        return{

        }
    }
)(withRouter(colorDialog));