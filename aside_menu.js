//获取数据
var arrIcon=document.getElementsByClassName('row');
// var goToWeChat=document.getElementById('weChat-img');
// var goToPhone=document.getElementById('to-phone-img');
// var top=document.getElementById('firstContent');

//鼠标放置在图标上,显示照片
function changePic(){
        //显示微信图片
        arrIcon[0].onmouseover=function(){
            document.getElementById('weChat-img').style.display='block';
        };
        //离开消失
        arrIcon[0].onmouseout=function(){
            document.getElementById('weChat-img').style.display='none';
        };
        //显示APP下载图片
        arrIcon[2].onmouseover=function (){
            document.getElementById('to-phone-img').style.display ='block';
        };
        //离开消失
        arrIcon[2].onmouseout=function(){
            document.getElementById('to-phone-img').style.display='none';
        };
}
changePic();

//