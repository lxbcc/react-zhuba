import React, { Component } from 'react'
import { NavBar, Icon,List,InputItem,WhiteSpace,Button, WingBlank,SearchBar,Carousel,Grid} from 'antd-mobile';
const arr=['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
const data = Array.from(new Array(10)).map((_val, i) => ({
    // icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    icon:'../imagex/tu'+(i+1)+'.png',
     text: arr[i],
  }));
export default class AppStore extends Component {
    handleClick = () => {
        this.manualFocusInst.focus();
      }
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
                        rightContent={[
                            //<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                        >商城</NavBar>
                        <SearchBar
                            placeholder="输入关键字搜索"
                            ref={ref => this.manualFocusInst = ref}
                        />
                        <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2,3,4].map((val ,i)=> (
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
                    {/* <div className="sub-title">No border</div> */}
                    <Grid data={data} hasLine={false} columnNum={5}/>
                    <WhiteSpace/>
                    <WingBlank>
                    <div>
                        <div style={{float:'left',width:'50%'}}>
                        <img src={require('../image/chabei.png')} style={{width:'100%'}}/>
                        <p style={{margin:'0'}}>Top Art Studio</p>
                        <p style={{margin:'0'}}>￥39.95</p>

                        </div>
                        <div style={{float:'left',width:'50%'}}>
                        <img src={require('../image/biao.png')} style={{width:'100%'}}/>
                        <p style={{margin:'0'}}>顺顺工艺欧式风格塑料外框</p>
                        <p style={{margin:'0'}}>￥83.99</p>
                        </div>
                    </div>
                    </WingBlank>
                    <WhiteSpace/>
                    <WingBlank>
                    <div>
                        <img src={require('../image/bg2.png')} style={{width:'100%'}}/>
                    </div>
                    </WingBlank>
            </div>
        )
    }
}
