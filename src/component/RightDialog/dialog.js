import React, { Component } from 'react'
import { connect } from 'react-redux'
import{withRouter} from 'react-router-dom'
import * as dialogAction from '../../store/actions/dialog'
import { bindActionCreators } from 'redux'

 class dialog extends Component {
    render() {
     const {carList}=this.props
        return (
            <div className="dialog">
            {
                carList.map((v,i)=>{
                  return <div key={v.GroupId} className="dialog-item">
                      <p>{v.GroupName}</p>
                            {v.GroupList.map((item,index)=>{
                               return <dl key={item.SerialID} onClick={()=>this.bindDetail(item.SerialID)}>
                                   <dt>
                                        <img src={item.CoverPhoto} alt=""/>
                                   </dt>
                                    <dd>
                                    <span>{item.AliasName}</span>
                                    <p>{item.DealerPrice}</p>
                                    </dd>
                                </dl>
                            })}
                        </div>
                })
            }
        </div>
        )
    }
    bindDetail(id){
       this.props.history.push({pathname:`/car/${id}`})
    //    this.props.history.push({path:'/car',query:{id:id}})
    //    this.props.history.push({name:'car',params:{id:id}})
    }
    componentDidMount(){
        this.props.getEveryCar(this.props.id)
    }
}
export default connect(
    (state)=>{
        return{
            ...state.dialog
        }
    },
    (dispatch)=>{
        return {
            getEveryCar:(id)=>{
                dialogAction.getEveryCar(id)(dispatch)
            }
        }
        
    }
)(withRouter(dialog))
