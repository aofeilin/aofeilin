/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/usr/local/lib/node_modules/vuepress/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-7fb82cc6",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7fb82cc6").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-1a24d27e",
    path: "/bar/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1a24d27e").then(next)
    },
  },
  {
    path: "/bar/index.html",
    redirect: "/bar/"
  },
  {
    name: "v-c1741696",
    path: "/about.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c1741696").then(next)
    },
  },
  {
    name: "v-346476dd",
    path: "/bar/read.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-346476dd").then(next)
    },
  },
  {
    name: "v-1dfa29d0",
    path: "/foo/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1dfa29d0").then(next)
    },
  },
  {
    path: "/foo/index.html",
    redirect: "/foo/"
  },
  {
    name: "v-d488877a",
    path: "/foo/read.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d488877a").then(next)
    },
  },
  {
    name: "v-5a5e54d5",
    path: "/read.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5a5e54d5").then(next)
    },
  },
  {
    name: "v-d795d856",
    path: "/guide.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d795d856").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]