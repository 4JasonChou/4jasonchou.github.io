/* Func - Setting Cookie */
function SetCookie(cookieName,cookieValue,nDays) {
    var expires = new Date();
    expires.setTime(expires.getTime() + 86400000);//有效時間保存 1 天 1*24*60*60*1000
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expires.toGMTString()
}

/* Unit Func - Get Cookie */
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;
}

function getCheckBoxValue(ele)
{
    var selected=[];
    for (var i=0; i<ele.length; i++) 
    {
        if (ele[i].checked) 
        {
            selected.push(ele[i].value);
        }
    }
   return selected.join();
}