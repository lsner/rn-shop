import My from '../pages/My'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Discover from '../pages/Discover'

export default Routes = [{
  message: '我的页',//title
  index: 0,//索引
  component: My
}, {
  message: '首页',
  index: 1,
  component: Home
}, {
  message: '登陆',
  index: 2,
  component: Login
}, {
  message: '发现',
  index: 3,
  component: Discover
}];
