import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as carAction from '../../store/actions/car'
import Dialog from '../../component/RightDialog/dialog'
//bindActionCreators 绑定action到这个方法里面
// 匹配car里边所有
class Official extends Component {
    state = {
        isState: false,
        id: ''
    }
    changeState = (id) => {
        this.setState({
            isState: true,
            id: id
        })
    }
    changewords(i){
        if(i===this.lastindex){
            return false
        }
        this.lastindex=i;
        if(i==='#')
        {
            this.refs.everyword0.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})
        }else{
            this.refs['everyword'+i].scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'})
        }
    }
    render() {
        const { brandList } = this.props;
        const { isState, id } = this.state;
        let arr = [];
        let first = brandList.map(item => item.Spelling.charAt(0))
        arr = [...new Set(first)]
        return (
            <div className="official">
                {isState?<header onClick={()=>this.setState({isState:false})}>收起</header>:null}
                {arr.map((v, i) => {
                    return <div className="alphabet" key={v} ref={'everyword'+i}>
                        <p>{v}</p>
                        {brandList.map((item, index) => {
                            if (item.Spelling.charAt(0) === v) {
                                return <li onClick={() => this.changeState(item.MasterID)} key={item.MasterID}>
                                    <img src={item.CoverPhoto} alt="" />
                                    <span>{item.Name}</span>
                                </li>
                            }
                        })}
                    </div>
                })}
                <div className="letter">
                    <span onClick={()=>this.changewords('#')}>#</span>
                    {arr.map((v,i)=>{
                        return <li className="le" key={i} onClick={()=>this.changewords(i)}>{v}</li>
                    })}
                </div>
                {
                    isState ? <div className="dialog-box">
                        <Dialog id={id} />
                    </div> : null

                }

            </div>
        );
    }
    componentDidMount() {
        this.props.getBrandList()
        // this.props.dispatch() 派发仓库状态
    }

}


export default connect(
    (state) => {
        // console.log(state) car和detail里边的数据
        return {
            ...state.car,
        }
    },
    (dispatch) => {
        return bindActionCreators(carAction, dispatch)//第二个参数是dispatch
        // bindActionCreators让这个对象里边的每一个函数都可以得到一个dispatch
    }
)(Official);