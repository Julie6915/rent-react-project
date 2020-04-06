import React from 'react'

// 1.导入路由
import {Route} from 'react-router-dom'
// 2.导入新建的组件
import News from '../News'
import Index from '../Index'
import HouseList from '../HouseList'
import Profile from '../Profile'
// 导入UI组件
import { TabBar } from 'antd-mobile';

// 修改TabBar菜单项文字标题
// 修改TabBar菜单文字标题颜色
// 使用字体图标，修改TabBar菜单的图标
// 修改TabBar菜单项的图标大小
// 调整TabBar的位置，固定在最底部
// 去掉TabBar的徽章

// 导入自己写的ui组件样式
import './index.css'

// TabBar数据
const tabItems = [
    {
        title:'首页',
        icon:'icon-ind',
        path:'/home'
    },
    {
        title:'找房',
        icon:'icon-findHouse',
        path:'/home/list'
    },
    {
        title:'资讯',
        icon:'icon-infom',
        path:'/home/news'
    },
    {
        title:'我的',
        icon:'icon-my',
        path:'/home/profile'
    },
]
export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //   控制默认选中的TabBar栏
        selectedTab: this.props.location.pathname,
        // 用于控制TabBar的展示和隐藏
        // hidden: false,
        // 全屏
        // fullScreen: false,
      };
    }
    // 定义一个方法 渲染TabBar.item
    renderTabBarItem(){
        return tabItems.map(item => {
            return <TabBar.Item
            title={item.title}
            key={item.title}
            icon={<i className={`iconfont ${item.icon}`}></i>}
            selectedIcon={
              <i className={`iconfont ${item.icon}`}></i>
            }
            selected={this.state.selectedTab === item.path}
            onPress={() => {
              this.setState({
                selectedTab: item.path,
              });
              // 路由切换
              this.props.history.push(item.path)
            }}
          >
          </TabBar.Item>
        })
    }

    render() {
      return (
        <div className="home">
            {/* 2.渲染子路由(嵌套路由) */}
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/list" component={HouseList}></Route>
            <Route exact path="/home" component={Index}></Route>
            <Route path="/home/profile" component={Profile}></Route>
            {/* TabBar */}
          <TabBar
            tintColor="#21b97a"
            barTintColor="white"
            noRenderContent={true}
            // hidden={this.state.hidden}
          >
          {this.renderTabBarItem()}
          </TabBar>
        </div>
      );       
    }
  }
  