var dn;
c1 = new Image(); c1.src = "apps/digital-clock/c1.gif";
c2 = new Image(); c2.src = "apps/digital-clock/c2.gif";
c3 = new Image(); c3.src = "apps/digital-clock/c3.gif";
c4 = new Image(); c4.src = "apps/digital-clock/c4.gif";
c5 = new Image(); c5.src = "apps/digital-clock/c5.gif";
c6 = new Image(); c6.src = "apps/digital-clock/c6.gif";
c7 = new Image(); c7.src = "apps/digital-clock/c7.gif";
c8 = new Image(); c8.src = "apps/digital-clock/c8.gif";
c9 = new Image(); c9.src = "apps/digital-clock/c9.gif";
c0 = new Image(); c0.src = "apps/digital-clock/c0.gif";
cb = new Image(); cb.src = "apps/digital-clock/cb.gif";
cam = new Image(); cam.src = "apps/digital-clock/cam.gif";
cpm = new Image(); cpm.src = "apps/digital-clock/cpm.gif";
function extract(h,m,s,type) {
if (!document.images) return;
if (h <= 9) {
document.images.a.src = cb.src;
document.images.b.src = eval("c"+h+".src");
}
else {
document.images.a.src = eval("c"+Math.floor(h/10)+".src");
document.images.b.src = eval("c"+(h%10)+".src");
}
if (m <= 9) {
document.images.d.src = c0.src;
document.images.e.src = eval("c"+m+".src");
}
else {
document.images.d.src = eval("c"+Math.floor(m/10)+".src");
document.images.e.src = eval("c"+(m%10)+".src");
}
if (s <= 9) {
document.g.src = c0.src;
document.images.h.src = eval("c"+s+".src");
}
else {
document.images.g.src = eval("c"+Math.floor(s/10)+".src");
document.images.h.src = eval("c"+(s%10)+".src");
}
if (dn == "AM") document.j.src = cam.src;
else document.images.j.src = cpm.src;
}
function show3() {
if (!document.images)
return;
var Digital = new Date();
var hours = Digital.getHours();
var minutes = Digital.getMinutes();
var seconds = Digital.getSeconds();
dn = "AM";
if ((hours >= 12) && (minutes >= 1) || (hours >= 13)) {
dn = "PM";
hours = hours-12;
}
if (hours == 0)
hours = 12;
extract(hours, minutes, seconds, dn);
setTimeout("show3()", 1000);
}