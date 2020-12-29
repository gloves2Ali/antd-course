export default {
  singular: true,
  dva: {},
  antd: {},
  routes: [{
    path: '/',
    component: '../layout',
    routes: [{
      path: '/helloworld',
      component: './HelloWorld'
    },{
      path: '/list',
      component: './list'
    }, {
      path: '/dashboard',
      routes: [
        { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
        { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
        { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
      ]
    }]
  }]
};