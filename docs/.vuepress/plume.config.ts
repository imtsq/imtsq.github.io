import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,
  footer: { message: 'Double小屋', copyright: 'by Double' },
  profile: {
    avatar: 'https://cdn.jsdelivr.net/gh/imtsq/My_Pic/67afe7a74dcf0763.jpg',
    name: 'Double小屋',
    description: '立志成为游戏开发者,已经失败 (╥_╥), 最近又对python感兴趣挺好玩',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/imtsq' },    
  ],

})
