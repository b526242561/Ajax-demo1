window.onload = function(){
    var request;
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();//IE7+,Firefox,Chrome,Opera,Safari...
    }else{
        request = new ActiveXObject("Microsoft.XMLHttp");//IE6,IE5
    }

    input_submit.onclick = function(){
        var input_name = document.getElementById("input_name").value;
        var input_email = document.getElementById("input_email").value;
        var input_message = document.getElementById("input_message").value;
        var input_submit = document.getElementById("input_submit");
        var email_format = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;

        if(!email_format.test(input_email) || input_name.length>32){
            alert("姓名或邮件输入格式不对")
        }else{
            alert("你已经提交成功");
            ///*get请求*/
            request.open("POST","../message/index.php?user="+input_name+input_email+input_message,true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            request.onreadystatechange = function(){
                var request = new XMLHttpRequest();
                if(request.readyState ===4){
                    if(request.status ===200){
                        var text = XMLHttpReq.responseText;
                        console.log(text);
                    }else{
                        alert("发生错误："+request.status)
                    }
                }
            };

            ///*get请求*/
            //request.open("GET","../message/index.php?user="+input_name+input_email+input_message,true);
            //request.send();
            //request.onreadystatechange = function(){
            //var request = new XMLHttpRequest();
            //    if(request.readyState ===4){
            //        if(request.status ===200){
            //            var text = XMLHttpReq.responseText;
            //            console.log(text);
            //        }else{
            //            alert("发生错误："+request.status)
            //        }
            //    }
            //};
        }
    };
};
