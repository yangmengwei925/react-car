import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ColorAction from '../../store/actions/color'
import * as PictAction from '../../store/actions/picture'
import ColorDialog from '../../component/ColorDialog/colorDialog'
class Img extends Component {
    state={
        isState:false
    }
    render() {
        const{isState}=this.state
        const {colorList}=this.props
        return (
            <div className="car-img">
                <div className="img-top">
                    <span onClick={()=>this.bindDialog()}>颜色 <i className="iconfont icon-xiangxia"></i></span>
                    <span>车款 <i className="iconfont icon-xiangxia"></i></span>
                </div>
                {isState?<div>
                    <ColorDialog list={colorList} title="全部颜色" />
                </div>:null}
            </div>
        );
    }
    componentDidMount(){
        this.props.getColor(this.props.match.params.id)
    }
    bindDialog(){
        this.setState({
            isState:true
        })
    }
}

export default connect(
    (state)=>{
        return {
            ...state.picture
        }
    },
    (dispatch)=> {
        return{
            getColor:(id)=>{
                ColorAction.getColor(id)(dispatch)
            }
        }
    }
)(Img);