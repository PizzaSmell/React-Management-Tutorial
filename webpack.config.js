const path = require('path'); // Node.js의 path 모듈을 불러옵니다.

module.exports = {
    resolve: {
        fallback: {
            "process": require.resolve("process/browser") // 브라우저 환경에서 process 모듈을 사용할 수 있도록 설정합니다.
        }
    },
    entry: './src/index.js', // 애플리케이션의 진입점(entry point) 파일을 설정합니다.
    output: {
        path: path.resolve(__dirname, 'dist'), // 번들 파일의 출력 경로를 설정합니다.
        filename: 'bundle.js', // 번들 파일의 이름을 설정합니다.
    },
    module: {
        rules: [
            {
                test: /\.js$/, // .js 확장자를 가진 파일에 대해
                exclude: /node_modules/, // node_modules 디렉토리는 제외합니다.
                use: {
                    loader: 'babel-loader', // Babel 로더를 사용하여 ES6+ 코드를 ES5로 변환합니다.
                },
            },
        ],
    },
};
