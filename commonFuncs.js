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

function getWhichCheckBoxValueIsNull(eleList)
{   
    for (var i=0; i<eleList.length; i++) 
    {   
        if( eleList[i] == "" )
            return "第" + (i+1) + "題尚未填寫喔！謝謝！";
    }
    return "";
}

/* 鎖定右鍵功能 */ 

function iEsc(){ return false; }
function iRec(){ return true; }
 
function DisableKeys() {
　if(event.ctrlKey || event.shiftKey || event.altKey) {
　　window.event.returnValue=false;
　　iEsc();
　}
}
 
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
 
if (typeof document.onselectstart !="undefined"){
　document.onselectstart=iEsc;
}else{
　document.onmousedown=iEsc;
　document.onmouseup=iRec;
}
 
function DisableRightClick(qsyzDOTnet){
if (window.Event){
　if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3){
　　iEsc();
　}else{
　　if (event.button == 2 || event.button == 3){
　　　event.cancelBubble = true
　　　event.returnValue = false;
　　　iEsc();
　　}
　}
}
}

