module.exports = {
  title: "김화영 페이지", // 사이트 타이틀
  description: "vuepress로 만든 문서입니다.",
  head: [
    ['link', { rel: 'icon', href: 'https://avatars1.githubusercontent.com/u/50225173?s=460&v=4' }]
  ],
  themeConfig: {
    logo: "https://avatars1.githubusercontent.com/u/50225173?s=460&v=4", // 로고 이미지
    // nav: [{ text: "Home", link: "/" },{text:"guide", link:'/guide/'}],
    sidebar: "auto", // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
    displayAllHeaders: true,
  },
  markdown: {
    toc:{includeLevel: [1,2,3]}
  }
};
