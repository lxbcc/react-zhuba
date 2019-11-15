import React, { Component } from 'react'
import { NavBar, Icon, Tabs ,WhiteSpace, WingBlank} from 'antd-mobile';

export default class AppIdea extends Component {
    renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      {/* <p>Content of {tab.title}</p> */}
      <WingBlank/>
      <div>
          <img src={require('../image/ling1.png')} alt=""style={{width:'100%'}}/>
          <WhiteSpace/>
          <img src={require('../image/ling2.png')} alt=""style={{width:'100%'}}/>
          <WhiteSpace/>
          <img src={require('../image/ling1.png')} alt=""style={{width:'100%'}}/>
          <WhiteSpace/>
          <img src={require('../image/ling2.png')} alt=""style={{width:'100%'}}/>
          <WhiteSpace/>
          <img src={require('../image/ling2.png')} alt=""style={{width:'100%'}}/>
          <img src={require('../image/ling2.png')} alt=""style={{width:'100%'}}/>
        </div>
        <WingBlank/>
    </div>);

    render() {
        const tabs = [
            { title: '推荐' },
            { title: '冬季' },
            { title: '宜家' },
            { title: '小清新' },
            { title: '小户型' },
            { title: '个性色彩' },
            { title: '文艺风' },
            { title: '复古' },
          ];
      
        return (
            <div>
                <NavBar
                        style={{height:'80px',backgroundColor:'#3fcccb'}}
                        mode="light"
                        icon={<Icon type="left" style={{color:'black'}}/>}
                        onLeftClick={() => console.log('onLeftClick')}
                        // rightContent={[
                        //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        //     <Icon key="1" type="ellipsis" />,
                        // ]}
                        >住吧家居</NavBar>
                        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
          {this.renderContent}
        </Tabs>
            </div>
        )
    }
}
