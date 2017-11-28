//获取数据
var arrIcon=document.getElementsByClassName('row');
// var goToWeChat=document.getElementById('weChat-img');
// var goToPhone=document.getElementById('to-phone-img');
 var font=document.getElementsByClassName('hidden');

//goToTop相关操作
//到达某个位置,goToTop图标消失
function toTop(){
    if(check){
        document.getElementById('goToTop').style.display='none';

    }
    else{
        arrIcon[3].onclick=function(){
            document.getElementById('goToTop').style.display='none';
        }
    }
}
function check() {
    setInterval(function () {
        var height = document.body.scrollTop;
        var orderHeight = document.getElementById('order').offsetTop;
        return (height < orderHeight);
    }, 20)
}
toTop();
//鼠标放置在图标上,图标消失,出现文字
function change(){
    font[0].onmouseout=function(){
        document.getElementById('weChat-img').style.display='none';
        arrIcon[0].style.display='block';
        font[0].style.display='none';
    };
    font[1].onmouseout=function(){
        arrIcon[1].style.display='block';
        font[1].style.display='none';
    };
    font[2].onmouseout=function(){
        document.getElementById('to-phone-img').style.display='none';
        arrIcon[2].style.display='block';
        font[2].style.display='none';
    };
    font[3].onmouseout=function(){
        arrIcon[3].style.display='block';
        font[3].style.display='none';
    };
}
change();
changeBack();
function changeBack(){
    arrIcon[0].onmouseover=function(){
        document.getElementById('weChat-img').style.display='block';
        this.style.display='none';
        font[0].style.display='block';
    };
    arrIcon[1].onmouseover=function(){
        this.style.display='none';
        font[1].style.display='block';
    };
    arrIcon[2].onmouseover=function(){
        document.getElementById('to-phone-img').style.display='block';
        this.style.display='none';
        font[2].style.display='block';
    };
    arrIcon[3].onmouseover=function(){
        this.style.display='none';
        font[3].style.display='block';
    };
}