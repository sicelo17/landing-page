
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
setTimeout(marg1, 8000);

function slid(){
    var s = document.querySelectorAll('.slid');
    var i;
    for (i=0; i<s; i++){
        s[i].style.transform='scale(.8)';
    }
}