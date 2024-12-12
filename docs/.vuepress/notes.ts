import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// 计算机基础
const csbase = defineNoteConfig({
  dir: 'csbase',
  link: '/csbase',
  sidebar: 'auto'
})
// 随笔
const mynote = defineNoteConfig({
  dir: 'mynote',
  link: '/mynote',
  sidebar: 'auto',
})
const project = defineNoteConfig({
  dir: 'project',
  link: '/project',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [mynote, csbase, project],
})
