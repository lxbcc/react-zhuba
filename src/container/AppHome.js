import React, { Component } from 'react'
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
      }
    render() {
        return (
            <div>
                    <NavBar
                        style={{height:'80px',backgroundColor:'#3fcccb'}}
                        mode="light"
                        icon={<Icon type="left" style={{color:'black'}}/>}
                        onLeftClick={() => console.log('onLeftClick')}
                        >住吧家居</NavBar>
                    <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2].map((val,i) => (
                        // <a
                        // key={val}
                        // href="http://www.alipay.com"
                        // style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        // >
                        <img
                            //src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            src={require('../image/bg'+(i+1)+'.png')}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        // </a>
                    ))}
                    </Carousel>
                    <WingBlank>
                    <div style={{
                        //width:'100%',
                    }}>
                        <WhiteSpace/>
                        <img src={require('../image/remen.png')} style={{width:'31%',float:'left',margin:'0 auto'}} alt=""/>
                        <div style={{width:'3%',height:'20px',float:'left'}}></div>
                        <img src={require('../image/siren.png')} style={{width:'31%',float:'left',margin:'0 auto'}} alt=""/> 
                        <div style={{width:'3%',height:'20px',float:'left'}}></div>
                        <img src={require('../image/xuangou.png')} style={{width:'31%',float:'left',margin:'0 auto'}} alt=""/> 

                        <WhiteSpace/>
                    </div>
                    </WingBlank>
                    <div style={{
                        width:'100%'

                    }}>
                        <p style={{
                            float:'left',
                            marginLeft:'5px',
                            width:'100%',
                            height:'20px',
                            fontSize:'20px',
                            lineHeight:'20px',
                            borderLeft:'solid 2px #3fcccb',
                            paddingLeft:'8px'
                        }}>热门推荐</p>
                        <img src={require('../image/tuijian.png')} style={{
                            width:'100%',
                            //height:'200px',
                            float:"left"}}
                            alt=""/>
                    </div>
            </div>
        )
    }
}