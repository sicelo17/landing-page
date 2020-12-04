// function for the background change
function marg1(){
    var slider = document.querySelector('#slider');
    slider.style.marginLeft='-100%';
    function marg2(){
        var slider = document.querySelector('#slider');
        slider.style.marginLeft='-200%';
        function marg0(){
            var slider = document.querySelector('#slider');
            slider.style.marginLeft='0';
            setTimeout(marg1, 8000);
        }
        setTimeout(marg0, 10);
    }
    setTimeout(marg2, 8000);
}
setInterval(slid, 6500);
setTimeout(marg1, 8000);
setInterval(line, 7000);
setInterval(slid2, 8300);
setInterval(line2, 8700);

function slid(){
    var s = document.querySelectorAll('.slid');
    var i;
    for (i=0; i<s; i++){
        s[i].style.transform='scale(.8)';
    }
}
function slid2(){
    var s = document.querySelectorAll('.slid');
    var i;
    for (i=0; i<s; i++){
        s[i].style.transform='scale(1)';
    }
}
// animating the lines
function line(){
    var l = document.querySelectorAll('.line');
    var i;
    for (i=0; i<l.length; i++){
        l[i].style.transform = 'scale(0)';
    }
}

function line2(){
    var l = document.querySelectorAll('.line');
    var i;
    for (i=0; i<l.length; i++){
        l[i].style.transform = 'scale(1)';
    }
}