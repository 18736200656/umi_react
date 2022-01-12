export default [
 
  { 
    path: '/', 
    component: '@/layouts/BasicLayout/index',
    // wrappers: [
    //   '@/wrappers/auth',
    // ],
    routes:[
      {path:'/',component:'index'},
    ]
   }, // 主页加载layout公共组件
  { path: '/login', component: 'login' },
  { path: '/register', component: 'register' },
  
]