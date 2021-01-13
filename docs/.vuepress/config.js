module.exports = {
  title: 'SPX Interview',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Interview', link: '/http/' },
      {
        text: 'Frame',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'vue', link: '/vue/' },
          { text: 'react', link: '/react/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/banzispx/vuePress' },
    ],
    // logo: './public/logo.jpg',
    // sidebar: {
    //   '/http/': [
    //     'http'
    //   ],
    //   '/html-css/': [
    //     'html-css'
    //   ],
    //   '/js/': [
    //     'base'
    //   ],
    //   '/': [
    //     '',        /* / */
    //     'contact', /* /contact.html */
    //     'about'    /* /about.html */
    //   ]
    // }
    sidebar: {
      '/http': getbase(),
      '/html-css': getbase(),
      '/js': getbase(),
      // '/git': getbase(),
      '/vue': getframe(),
      '/react': getframe(),
      '/': [
        '',        /* / */
        'git', /* /git.html */
        'webpack'
      ]
    }
  }
}
function getbase(params) {
  return [
    {
      title: 'HTTP',
      collapsable: false,
      sidebarDepth: 3,
      children: [
        { title: '基础', path:'/http/'},
        { title: '从url到页面渲染', path:'/http/url'},
        { title: 'https', path:'/http/https'},
      ]
    },
    {
      title: 'HTML/CSS',
      // path: '/html-css/html',
      collapsable: false,
      sidebarDepth: 3,
      children: [
        { title: 'html', path:'/html-css/html'},
        { title: 'css', path:'/html-css/maincss'},
        { title: 'css代码', path:'/html-css/cssCode'},
      ]
    },
    {
      title: 'JS',
      collapsable: false, 
      sidebarDepth: 3,
      children: [
        { title: '基础', path:'/js/base'},
        { title: '入门', path:'/js/rumen'},
        { title: '源码', path:'/js/middle'},
        { title: 'axios', path:'/js/axios'},
        { title: 'deepclone', path:'/js/deepclone'},
        { title: 'promise', path:'/js/promise'},
      ]
    },
  ]
}
function getframe(params) {
  return [
    {
      title: 'vue',
      collapsable: false,
      sidebarDepth: 3,
      children: [
        { title: '基础', path:'/vue/base'},
        { title: 'vuex', path:'/vue/vuex'},
        { title: 'observe', path:'/vue/observe'},
      ]
    },
    {
      title: 'react',
      collapsable: false,
      sidebarDepth: 3,
      children: [
        { title: 'react基础', path: '/react/base' },
        { title: 'react-hook', path: '/react/hook' },
        { title: 'Immutable', path: '/react/Immutable' },
      ]
    }
  ]
}