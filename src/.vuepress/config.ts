import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  

  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "Blog",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "博客",
  //   },
  // },
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
