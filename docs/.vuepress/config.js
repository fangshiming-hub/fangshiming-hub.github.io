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
        lastUpdated: 'Lase Updated',
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
                text: "javaScript",
                link: "/javaScript/"
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
            "/javaScript/": [
                '/javaScript/',
                {
                    title: '正则表达式',
                    path: '/javaScript/reg'
                },
                {
                    title: 'javaScript',
                    children: [
                        '/javaScript/test02/'
                    ]
                },
                {
                    title: 'javaScript',
                    children: [
                        '/javaScript/test03/'
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