'use strict';
const path = require('path');
const rootdir = path.join(__dirname, '..');

let config = {
    protocol: 'http',
    host: 'demo.heclouds.com',
    basePath: '/baasapi',
    className: 'APIClient',
    caName: 'baas-chinamobile.pem', // ca证书名
    doc: path.join(rootdir, 'config/swagger-baas-sdk.json'), // Swagger document
    dist: path.join(rootdir, 'dist/') // 默认输出路径
};

module.exports = Object.assign(config, {
    ca: {// ca证书配置
        src: path.join(rootdir, 'config', config.caName),
        dest: path.join(config.dist, config.caName) // ca证书输出路径
    },
    mustache: {// mustache变量
        ca: `./${config.caName}`,
        indexjs: {// indexjs.mustache变量
            className: config.className,
            requirePath: `./dist/${config.className}.js`,
            dest: path.join(config.dist, '../index.js') // index.js输出路径
        }
    }
});
