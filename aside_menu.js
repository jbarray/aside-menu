//获取数据
var arrIcon=document.getElementsByClassName('row');
// var goToWeChat=document.getElementById('weChat-img');
// var goToPhone=document.getElementById('to-phone-img');
 var font=document.getElementsByClassName('hidden');

//goToTop相关操作
//到达某个位置,goToTop图标消失
window.onscroll=function(){
    var height = document.body.scrollTop||document.documentElement.scrollTop;
    if(height>=500){
        document.getElementById('goToTop').style.display='block';
        arrIcon[3].onclick=function(){
            document.getElementById('goToTop').style.display='none';
        };
    }
    else{
        document.getElementById('goToTop').style.display='none';
    }
};
// function check() {
//     var orderHeight = document.getElementById('order').offsetTop;
//     return (height > orderHeight);
// }
//鼠标放置在图标上,图标消失,出现文字
function change(){
    font[0].onmouseleave=function(){
        document.getElementById('weChat-img').style.display='none';
        arrIcon[0].style.display='block';
        font[0].style.display='none';
    };
    font[1].onmouseleave=function(){
        arrIcon[1].style.display='block';
        font[1].style.display='none';
    };
    font[2].onmouseleave=function(){
        document.getElementById('to-phone-img').style.display='none';
        arrIcon[2].style.display='block';
        font[2].style.display='none';
    };
    font[3].onmouseleave=function(){
        arrIcon[3].style.display='block';
        font[3].style.display='none';
    };
}
change();
changeBack();
function changeBack(){
    arrIcon[0].onmouseenter=function(){
        document.getElementById('weChat-img').style.display='block';
        this.style.display='none';
        font[0].style.display='block';
    };
    arrIcon[1].onmouseenter=function(){
        this.style.display='none';
        font[1].style.display='block';
    };
    arrIcon[2].onmouseenter=function(){
        document.getElementById('to-phone-img').style.display='block';
        this.style.display='none';
        font[2].style.display='block';
    };
    arrIcon[3].onmouseenter=function(){
        this.style.display='none';
        font[3].style.display='block';
    };
}