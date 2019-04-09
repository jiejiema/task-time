module.exports = {
    devServer: {
        // historyApiFallback: true,
        // hot: true,
        // inline: true,
        // progress: true,
        // port: 3000,
        // host: '10.0.0.9',

        // 设置代理
        proxy: {
            "/users": {
                target: "http://localhost:3000/", // 访问数据的计算机域名
                ws: true, // 是否启用websockets
                changOrigin: true, //开启代理
                secure: false
            }
        }
    }
};