const url = "http://127.0.0.1"


export function createEvent(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/newevent/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return{
        code: code,
        msg: msg
    }
}

export function createProgram(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/newprogram/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return{
        code: code,
        msg: msg
    }
}

export function joinEvent(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/join/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return{
        code: code,
        msg: msg
    }
}

export function quitEvent(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/quit/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return{
        code: code,
        msg: msg
    }
}

export function finishEvent(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/finish/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return{
        code: code,
        msg: msg
    }
}

export function donate(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/donor/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return{
        code: code,
        msg: msg
    }
}

export function getInfo(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/getinfo/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    var data = {}
    httpRequest.send(para)
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
    return{
        code: code,
        msg: msg
    }
}

export function findList(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/search/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = 200
    let msg = ""
    var data = {}
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
            data = json.data
        }
    }
    return{
        code: code,
        msg: msg,
        data: data
    }
}

export function editStatus(data){
    if(window.XMLHttpRequest){
        var httpRequest = new XMLHttpRequest();
    }else{
        var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    httpRequest.open('POST', url + '/event/status/', true);
    httpRequest.setRequestHeader("Content-type","application/json;charset-UTF-8");
    httpRequest.setRequestHeader("token", getToken());
    var para = JSON.stringify(data)
    let code = "200"
    let msg = ""
    httpRequest.send(para)
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = JSON.parse(httpRequest.responseText);//获取到服务端返回的数据
            code = json.code
            msg = json.msg
        }
    }
    return{
        code: code,
        msg: msg
    }
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