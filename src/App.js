import React from 'react';

// 引入路由
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
//导入首页和城市选择两个组件
import Home from './pages/Home'
import CityList from './pages/CityList'

// 导入要使用的UI组件

function App() {
  return (
    <Router>
      <div className="App">
        {/* 默认路由匹配时，跳转到/home,实现路由重定向到首页 */}
       <Route path='/' exact render={() => <Redirect to="/home"></Redirect>}></Route>
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
       </div>
    </Router>
  );
}
 
export default App;
