(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{426:function(t,s,a){"use strict";a.r(s);var n=a(62),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress的使用"}},[t._v("#")]),t._v(" VuePress的使用")]),t._v(" "),a("h2",{attrs:{id:"_1-创建项目-打包及运行。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建项目-打包及运行。"}},[t._v("#")]),t._v(" (1).创建项目，打包及运行。")]),t._v(" "),a("h3",{attrs:{id:"_1-进入文档-然后执行-npm-init-产生package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-进入文档-然后执行-npm-init-产生package-json"}},[t._v("#")]),t._v(" 1.进入文档，然后执行 (npm init) 产生package.json")]),t._v(" "),a("h3",{attrs:{id:"_2-配置package-json-添加下述兩行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置package-json-添加下述兩行"}},[t._v("#")]),t._v(" 2.配置package.json，添加下述兩行.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-进入docs文件夹-创建-readme-md文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-进入docs文件夹-创建-readme-md文件"}},[t._v("#")]),t._v(" 3.进入docs文件夹 创建 README.md文件")]),t._v(" "),a("h3",{attrs:{id:"_4-npm-run-docs-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-npm-run-docs-dev"}},[t._v("#")]),t._v(" 4.（npm run docs:dev）")]),t._v(" "),a("h3",{attrs:{id:"_5-sudo-npm-run-docs-build-也就是打包-文件会多出node-modules-docs文件下会多出一个-vuepress文件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-sudo-npm-run-docs-build-也就是打包-文件会多出node-modules-docs文件下会多出一个-vuepress文件。"}},[t._v("#")]),t._v(" 5. (sudo npm run docs:build）也就是打包，文件会多出node_modules docs文件下会多出一个.vuepress文件。")]),t._v(" "),a("h3",{attrs:{id:"参考官网-http-caibaojian-com-vuepress-guide-getting-started-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考官网-http-caibaojian-com-vuepress-guide-getting-started-html"}},[t._v("#")]),t._v(" 参考官网 http://caibaojian.com/vuepress/guide/getting-started.html")]),t._v(" "),a("h2",{attrs:{id:"_2-导航栏logo。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导航栏logo。"}},[t._v("#")]),t._v(" (2).导航栏logo。")]),t._v(" "),a("h3",{attrs:{id:"_1-导航栏logo-docs-vuepress-config-js-配置文件的入口文件配置logo-也可以是-yml-或-toml。设置logo图片。logo图片的路径-docs-vuepress-public-静态资源目录-public-assets-img"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-导航栏logo-docs-vuepress-config-js-配置文件的入口文件配置logo-也可以是-yml-或-toml。设置logo图片。logo图片的路径-docs-vuepress-public-静态资源目录-public-assets-img"}},[t._v("#")]),t._v(" 1.导航栏logo, docs/.vuepress/config.js: 配置文件的入口文件配置logo，也可以是 YML 或 toml。设置logo图片。logo图片的路径：docs/.vuepress/public: 静态资源目录 public/assets/img")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  themeConfig: {\n    logo: '/assets/img/logo.png',\n     nav:[\n     {text:'首页',link:'/'},   \n     {text:'项目的创建',link:'/guide'},   \n     {text:'关于',link:'/about'},   \n    ]\n  }\n}\n")])])]),a("h3",{attrs:{id:"_2-右侧导航栏。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-右侧导航栏。"}},[t._v("#")]),t._v(" 2.右侧导航栏。")]),t._v(" "),a("p",[t._v("官网地址https://www.vuepress.cn/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  themeConfig: {\n    logo: '/assets/img/logo.png',\n    nav:[\n     {\n       text:'首页',\n       link:'/',\n       items:[\n        {text:'子列表1',link:'/guide'},   \n        {text:'子列表2',link:'/about'},   \n       ]\n    },   \n     {text:'项目的创建',link:'/guide'},   \n     {text:'关于',link:'/about'},   \n    ]\n  }\n}\n")])])]),a("h3",{attrs:{id:"_3-如果对于页面不要导航条-在md页面写-navbar-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如果对于页面不要导航条-在md页面写-navbar-false"}},[t._v("#")]),t._v(" 3.如果对于页面不要导航条 在md页面写:navbar:false")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\nnavbar: false\n---\n")])])]),a("h3",{attrs:{id:"_4-左边侧边栏-侧边栏分组-config-js-在md页面使用-在页面中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-左边侧边栏-侧边栏分组-config-js-在md页面使用-在页面中使用"}},[t._v("#")]),t._v(" 4.左边侧边栏 侧边栏分组 config.js 在md页面使用 在页面中使用##")]),t._v(" "),a("p",[t._v("如果对某一个页面去掉侧边栏 在页面使用，sidebar: false")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\n  sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '接口文档'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// collapsable: false,")]),t._v("\n      children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        '/'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        '/about'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        '/guide'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        '/about'\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '接口文档'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        '/'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        '/about'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        '/guide'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        '/about'\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-左边侧边栏-多个侧边栏-config-js-在md页面使用-在页面中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-左边侧边栏-多个侧边栏-config-js-在md页面使用-在页面中使用"}},[t._v("#")]),t._v(" 5.左边侧边栏  多个侧边栏 config.js 在md页面使用 在页面中使用##")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule.exports = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      '/foo/'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        ''"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /foo/ 需要创建fool文件，然后创建README.md */")]),t._v(" \n        'one'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /foo/one.html */")]),t._v("\n        'two'   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /foo/two.html */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      '/bar/'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        ''"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /bar/ 需要创建bar文件，然后创建README.md */")]),t._v(" \n        'three'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /bar/three.html */")]),t._v("\n        'four'   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /bar/four.html */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fallback")]),t._v("\n      '/'"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        ''"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 然后创建README.md 就是入口/ */")]),t._v("\n        'contact'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /contact.html */")]),t._v("\n        'about'    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* /about.html */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-默认主题。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-默认主题。"}},[t._v("#")]),t._v(" (3).默认主题。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("如果是默认主题 在md页面拷贝。\n\nhome: true\n# heroImage: /hero.png\nheroText: VuePress的使用\ntagline: VuePress的使用\nactionText: 快速上手 →\nactionLink: /guide/\nfeatures:\n- title: 简洁至上\n  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n- title: Vue驱动\n  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n- title: 高性能\n  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\nfooter: MIT Licensed | Copyright © 2018-present Evan You\n")])])]),a("h2",{attrs:{id:"_4-seo-图片和设置。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-seo-图片和设置。"}},[t._v("#")]),t._v(" (4).seo 图片和设置。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  title:'QAS文档',\n  descrition:\"描述1111\",\n  head:[\n    ['link',{rel:'icon',href:'/assets/img/logo.png'}],\n    ['meta',{name:'author',content:'作者aofeilin'}],\n    ['link',{name:'keywords',content:'aofeilin00000'}],\n  ],\n")])])]),a("h2",{attrs:{id:"_5-添加更新时间。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-添加更新时间。"}},[t._v("#")]),t._v(" (5).添加更新时间。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  themeConfig: {\n    lastUpdated: 'Last Updated', // string | boolean\n  }\n}\n")])])]),a("h2",{attrs:{id:"_6-官方时间插件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-官方时间插件。"}},[t._v("#")]),t._v(" (6).官方时间插件。")]),t._v(" "),a("p",[t._v("1.npm install moment")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("添加更新时间  - 官方插件添加-并且有git提交时间。\nplugins: [\n    [\n      '@vuepress/last-updated',\n      {\n        transformer: (timestamp, lang) => {\n          // 不要忘了安装 moment npm install moment\n          const moment = require('moment')\n          moment.locale(\"zh-cn\")\n          return moment(timestamp).format(\"YYYY-MM-DD HH:mm:ss\")//更新时间: 2022-05-18 16:55:56\n        }\n      }\n    ]\n  ],\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);