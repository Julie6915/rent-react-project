import React from 'react'
import axios from 'axios'
import { Carousel} from 'antd-mobile';

export default class Index extends React.Component{
    state = {
        // 生成图片名称
        swipers: [],
      }
    //   定义获取轮播图状态数据的方法
    async getSwipers(){
        const res = await axios.get('http://localhost:8080/home/swiper')
        this.setState(()=>{
            return{
                swipers:res.data.body
            }
        })
    }
    // 渲染轮播图方法
    renderSwipers(){
        return this.state.swipers.map(item => (
            <a
              key={item.id}
              href="http://www.baidu.com"
              style={{ display: 'inline-block', width: '100%', height: 212}}
            >
              <img
                src={`http://localhost:8080${item.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
        ))
    }
      componentDidMount() {
       this.getSwipers()
      }
      render() {
        return (
          <div className="index">
            <Carousel
              autoplay
              infinite
            >
               {/* 调用渲染轮播图的方法 */}
               {this.renderSwipers()}
            </Carousel>
          </div>
        );
      }
}