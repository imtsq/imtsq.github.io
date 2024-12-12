import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  {
    text: '计算机基础',
    items: [
      { text: '数据结构', link: '/notes/csbase/数据结构/README.md' },
      { text: '计算机组成', link: '/notes/csbase/计算机组成/README.md' },
      { text: '计算机网络', link: '/notes/csbase/计算机网络/README.md' },
      { text: '操作系统', link: '/notes/csbase/操作系统/README.md' },
      { text: '数据库', link: '/notes/csbase/数据库/README.md' },
    ]
  },
  { text: '项目', link: '/notes/project/README.md' },
  { text: '随笔', link: '/notes/mynote/README.md' },
  {
    text: '工具',
    items: [
      { text: 'Picgo', link: 'https://picgo.github.io/PicGo-Doc/zh/' }
    ]
  },
])
