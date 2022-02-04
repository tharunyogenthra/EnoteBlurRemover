// code made by u/VirajPrateeek
(function() {
'use strict';
//remove class name starting with underscore
 for(let i=0; i<10; i++){
    document.querySelectorAll("[class^=_]")[0].className="";
}

document.getElementsByClassName('c-cta-section c-cta-section--with-border u-spacing u-align--center u-center-block')[0].style='display:none';
p = document.getElementsByClassName('c-cta-section c-cta-section--with-border u-spacing u-align--center u-center-block');
for(let i = 0; i<p.length; i++){
    p[i].style="display:none";
}
//another way
var p = document.getElementsByClassName('c-answer__body')
var c = p[0].children;
c[c.length-1].className=""; })();

