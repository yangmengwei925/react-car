import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../api/car'
import * as detailAction from '../../store/actions/detail'
import {withRouter} from 'react-router-dom'

class Car extends Component {
    state={
        tabList:[],
        currentIndex:0,
        
    }
    render() {
        const{tabList,currentIndex}=this.state
        const{detailList}=this.props
        // console.log(detailList)
        const{market_attribute}=detailList
        let arr=[];
        let yearList=[];
        let navList=[];
        for(let key in market_attribute)
        {
            if(key==='dealer_price'){
                arr.push(market_attribute[key])
            }
            if(key==='official_refer_price')
            {
               
                arr.push(market_attribute[key])
            }
        }
        const {list}=detailList
        list&&list.map(item=>{
            yearList.push(item.market_attribute.year)
        })
        navList = [...new Set(yearList)]
        
        return (
            <div className="detail">
                <div className="detail-top">
                    <span className="back" onClick={()=>this.bindBack()}>&lt;</span>
                    <img src={detailList.CoverPhoto} alt=""/>
                    <span className="num" onClick={()=>this.bindPict(detailList.SerialID)}>{detailList.pic_group_count}张图片</span>
                </div>
                <nav>
                    <div className="left">
                    {
                        arr.map((item,i)=>{
                        return <div key={i}>
                            <p>{item}</p>
                        </div>
                        })
                    }
                    </div>
                    <div className="right">
                        <button>询问底价</button>
                    </div>
                </nav>
                {/* tab切换 */}
                <div className="tab">
                    <span onClick={()=>this.changeYear('全部',0)}>全部</span>
                    {navList.map((item,i)=>{
                        return <span key={i+1} onClick={()=>this.changeYear(item,i)} className={currentIndex==i?'active':""}>{item}</span>
                    })}
                </div>
                {/* tab切换内容 */}
                <div className="tab-content">
                    {tabList&&tabList.map(v=>{
                       return <div className="every" key={v.car_id}>
                           <p>{v.exhaust_str}{v.inhale_type}</p>
                           <div className="one">
                            <p>{v.market_attribute.year}款  {v.car_name}</p>
                            <p>{v.trans_type}</p>
                             <p>{v.market_attribute.dealer_price}</p>
                           </div>
                           <button onClick={()=>this.question()}>询问底价</button>
                       </div>
                    })}
                </div>
                <button className="bottom" onClick={()=>this.question()}><p>询问底价</p> <span>本地经销商为你报价</span></button>
            </div>
        );
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
    //tab切换
    changeYear(type,i){
        //更新下标 切换类
       this.setState({
           currentIndex:i
       })
      // 切换数据
        const {list}=this.props.detailList
        list.map(item=>{
            if(type==='全部')
            {
                this.state.tabList=list;
            }
            else if(type===item.market_attribute.year)
            {
                this.state.tabList.push(item)
            }
           
        })
    }
    //跳转图片页面
    bindPict(id){
        this.props.history.push({pathname:`/img/${id}`})
    }
    //询问底价
    question(){
        this.props.history.push('/price')
    }
    //返回页面
    bindBack(){
        this.props.history.go(-1)
    }
   
}

export default connect(
    (state) =>{
        return {
            ...state.detail
        }
    },
    (dispatch) =>{
        return {
            getDetail:(id) =>{
                detailAction.getDetail(id)(dispatch)
            }
        }
    }
)(withRouter(Car));