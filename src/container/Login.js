import React, { Component } from 'react'
import{HashRouter as Router,Route,Link}from 'react-router-dom'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank} from 'antd-mobile';
import AppTab from './AppTab'
export default class Login extends Component {
    render() {
        return (
            <div>
                <div style={{}}>
                    <NavBar
                        style={{height:'80px'}}
                        mode="light"
                        icon={<Icon type="left" style={{color:'black'}}/>}
                        onLeftClick={() => console.log('onLeftClick')}
                        // rightContent={[
                        //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        //     <Icon key="1" type="ellipsis" />,
                        // ]}
                        >登录</NavBar>
                </div>
                <div style={{height:'782px',backgroundColor:'white'}}>
                    <List>
                        <InputItem placeholder="手机/邮箱">
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem placeholder="手机/邮箱">
                            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace />
                    {/* <WingBlank><Button type="primary"style={{marginTop:'30px'}}><Link to='/home'>登录</Link></Button><WhiteSpace /></WingBlank> */}
                    <button style={{width:"100px",height:"30px",margin:"20px 60px"}}>
                        <Link to='/home'>登录</Link>
                        </button>
                    <div style={{
                        margin:'20px auto',
                        width:'200px',
                        height:'50px',
                        lineHeight:'50px',
                        textAlign:'center'
                    }}>
                        <p style={{fontSize:'18px',color:'#3fcccb'}}>新用户注册 | 忘记密码</p>
                    </div>
                    <div style={{width:'100%',height:'200px'}}>
                        <p style={{width:'100%',height:'70px',fontSize:'16px',lineHeight:'70px',textAlign:'center'}}>第三方登录</p>
                        <div style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                }}>
                            
                        </div>
                    </div>
                </div>
                <div>
                {/* <Route path='/home' component={Home}/> */}
                </div>
            </div>
        )
    }
}