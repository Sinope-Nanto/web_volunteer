const url = "http://127.0.0.1:8000"
ELEMENT.locale(ELEMENT.lang.en)

export function register(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    var para = JSON.stringify(data)
    let code = 'doing'
    let userId = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            userId = json.data.id
            console.log(userId)
            code = 200
        }
        else if(httpRequest.readyState == 4){
            code = "failed"
        }
    }
    httpRequest.open('POST', url + '/user/register/',true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", "register");

    httpRequest.send(para)

    if (code == 200){
        return{
            code: code,
            data:{
                userId: userId
            }
        }
    }
    else if(code == "failed"){
        return{
            code: code
        }
    }
}

export function login(data){
    setToken("123456")
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/login/", false);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = 200
    let _data = {}
    let msg = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        alert(3);
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            console.log(httpRequest.responseText)
            alert(1);
            code = json.code
            _data = json.data
            if (code == 200){
                setToken(_data.token)
            }
            else{
                code = json.code
                msg = json.msg
            }
        }
        alert(2);
    }
    return {
        code: code,
        msg: msg,
        data: _data
    }
}

export function editRole(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/permission/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = 200

    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = 200
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code
    }
}

export function editStatus(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/status/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = 200
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code
    }
}

export function editPassword(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/changepassword/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = 200
    let msg = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return {
        code: code,
        msg: msg
    }
}

export function editName(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/changeinformation/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = 200
    let msg = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
        else{
            code = "failed"
        }
    }
    return {
        code: code
    }
}

export function findUser(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/search/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = 200
    var data = {}
    let msg = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            if (code == 200){
                data = json.data
            }
            else{
                msg = json.msg
            }
        }
        else{
            code = "failed"
        }
    }
    if (code == 200){
        return {
            code: code,
            data: data,
            msg: msg
        }
    }
    else{
        return{
            code: code,
            msg: msg
        }
    }
}

export function getUserInfo(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + "/user/getuser/",true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    httpRequest.send(para)
    let code = 200
    var data = {
    }
    let msg = ""
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
            if (code == 200){
                data = json.data
            }
        }
    }
    return {
        code: code,
        data: data,
        msg: msg
    }
}

function setToken(token){
    var d = new Date();
    d.setTime(d.getTime()+(1800));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "token" + "=" + token + "; " + expires;
}

function getToken() {
    var name = "token=";
    var ca = document.cookie.split(';');
    for(var i = 0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length, c.length);
    }
    return "";
}
