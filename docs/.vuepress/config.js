module.exports = {
    title: "Hello JavaScript",
    description: "Just plating around",
    logo: "/assets/img/weishiren/jpg",
    base: "/",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: "https://github.com/fangshiming-hub",
        sidebarDepth: 2,
        themeConfig: {
            smoothScroll: true
        },
        lastUpdated: '最后更新于 ',
        // 顶部导航
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "框架",
                link: "/frame/"
            },

            {
                text: "算法",
                link: "/algorithm/"
            },
            {
                text: "前端",
                link: "/frontend/"
            },
            {
                text: "博客导航",
                link: "/blog/"
            },
        ],
        // 侧边导航
        sidebar:{
            "/frame/": [
                '/frame/',
                {
                    title: 'vue',
                    children: [
                        '/frame/vue/',
                        '/frame/vue/model',

                    ]
                },
                {
                    title: 'angular',
                    children: [
                        '/frame/angular/'
                    ]
                },
                {
                    title: 'react',
                    children: [
                        '/frame/react/'
                    ]
                }
            ],
            "/frontend/": [
                '/frontend/',
                {
                    title: 'js',
                    children: [
                        {
                            title: '正则在线测试',
                            path: '/frontend/js/reg'
                        }
                    ]
                },
                {
                    title: 'css',
                    children: [
                        {
                            title: '常见样式',
                            path: '/frontend/css/normal'
                        },
                        {
                            title: 'css问题',
                            path: '/frontend/css/problem'
                        }
                    ]
                },
                {
                    title: 'html',
                    children: [
                        '/frontend/html/'
                    ]
                }
            ],
            "/algorithm/": [],
            "/font/": ['test01/','test02/','test03/'],
            "/foo/": [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
            "/": ['']
        }

    }
}