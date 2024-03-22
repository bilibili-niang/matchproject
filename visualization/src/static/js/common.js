const dio = {
    config: {
        token: ''
    },
    index: {
        // 所有页面进入时会判断是否登陆
        initLogin: function () {
            console.log('vertify login')
            dio.config.token = localStorage.getItem('token') || '';
            const curWwwPath = window.document.location.href;
            const pathname = window.document.location.pathname;
            //2、获得主机地址之后 的目录
            const pos = curWwwPath.indexOf(pathname);
            //3、获得主机地址
            const url = curWwwPath.substring(0, pos);
            if (JSON.stringify(dio.config.token).length < 3) {
                if (pathname != '/login') {
                    location.href = '/'
                } else {
                }
            }
        },
    },
    login: {
        initIsLogin() {
        }
    }
}

dio.index.initLogin();