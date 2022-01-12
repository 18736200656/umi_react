import { defineConfig } from 'umi';
import routes from './config/route'
export default defineConfig({
  // layout: {},
  publicPath: '/static/',
  hash: true,
  theme: {
    "@primary-color": "#1DA57A",
    "@link-color": "#1DA57A",
    "@border-radius-base": "2px",
    "@font-size-base": "16px",
    "@line-height-base": "1.2"
  },
  dva:{
    immer:true,
    hmr:false
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  mfsu: {}
});
