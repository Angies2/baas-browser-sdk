# 轻应用Baas API SDK

* [如何使用](#user-content-如何使用)
* [JS API文档](https://github.com/hong-boy/baas-browser-sdk/tree/master/docs/index.html)
* [REST API接口文档](http://demo.heclouds.com/baasapi/swagger-ui.html)

## 如何使用
### 安装
```
<script src="https://github.com/hong-boy/baas-browser-sdk/tree/master/dist/APIClient.browser.js"></script>
```
### Usage
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <script src="dist/APIClient.browser.js"></script>
</head>
<body>
SDK BROWSER
</body>
<script type="text/javascript">
    var client = new APIClient({
        accessId: '1',
        accessKey: '2',
        domain:'http://demo.heclouds.com/baasapi', // 注意前端浏览器跨域！！！
        debug: true,
    });
    var user = {
        loginName: 'root',
        password: 'abcd1234',
        appToken: 'f8effd1a-17e3-4ed9-a893-1c002e8c78d2'
    };
    var promise = client.loginUsingPOST(user);
    promise.then(function (ret) {
        console.log(ret)
    }).catch(function (err) {
        console.error(err);
    })
</script>
</html>

```
