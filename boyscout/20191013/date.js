var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var now = new Date();
var myDate = new Date("10/10/2019");
console.log(now);
console.log(days[myDate.getDay()]);
console.log(myDate.getTime());
var diff = now - myDate;
console.log("Days difference "+ Math.floor((diff / (1000 * 60 * 60 * 24))));
myDate.setFullYear(2008);
console.log(days[myDate.getDay()]);