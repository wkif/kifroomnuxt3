export const siteConfig = {
  author: "kif",
  title: "kif room",
  description: "My blog site.",
  lang: "zh-CN",
};

export const subNavLinks = [
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Life",
    path: "/life",
  },
];

export const navLinks = [
  {
    title: "Blog",
    path: "/blog",
    icon: "i-icon-park-outline-align-text-right-one",
  },
  {
    title: "Travel",
    path: "/travel",
    icon: "i-icon-park-outline-airplane",
  },
  {
    title: "Projects",
    path: "/project",
    icon: "i-icon-park-outline-application",
  },
  {
    title: "Tags",
    path: "/tags",
    icon: "i-icon-park-outline-tag-one",
  },
  {
    title: "Search",
    path: "/search",
    icon: "i-icon-park-outline-search",
  },
  {
    title: "About",
    path: "/",
    icon: "i-icon-park-outline-grinning-face-with-open-mouth",
  },
];

export const FullWidthPath = ["photo"];

export const socialLinks = [
  {
    title: "掘金",
    path: "https://juejin.cn/user/2744831990044190",
    icon: "i-simple-icons-juejin",
  },
  {
    title: "Github",
    path: "https://github.com/wkif",
    icon: "i-icon-park-outline-github",
  },
];

export const projectList = [
  {
    name: "Projects",
    content: [
      {
        name: "bamboo",
        desc: "The bamboo powered by canvas",
        path: "/project/bamboo",
      },
    ],
  },
  {
    name: "Starter",
    content: [
      {
        name: "kifsnuxt3template",
        desc: "My simply nuxt3 starter, Vite, Unocss, TypeScript, Eslint, Vueuse",
        path: "https://github.com/wkif/kifsnuxt3template",
      },
      {
        name: "kifsReactTemplate",
        desc: "My simple react template",
        path: "https://github.com/wkif/kifsReactTemplate",
      },
    ],
  },
];

// valine配置
export const valineConfig = {
  el: "#valineBox",
  appId: "b7AAVOuWhWIEQsQfviV12FRp-gzGzoHsz",
  appKey: "TYFSaiPIN5WAmTU3nv8wG8wb",
  serverURLs: "https://b7aavouw.lc-cn-n1-shared.com",
  avatar: "wavatar",
  visitor: true,
  recordIP: true,
  placeholder: "我什么都知道，可还是想听你娓娓道来",
};
