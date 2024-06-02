//var hi;

//hi = "계명대 멋사";

//console.log(hi);

//hi = "변수는 변하는 값이다";
//console.log(hi);

//const h1 = "계명대 멋사 12기";
//console.log(h1);

//h1 = "const값 변경";
//console.log(h1);

//const a= 10;
//const b = 20;
//const c = 20;

//if(a>b) {
    //console.log("a가 더 크다");
//}
//else if(b === c) {
  //  console.log("b랑 c가 같다.")
//}
//else {
  //  console.log("b가 더 작다");
//}

//const num = 10;

//switch(num){
    //case 10:
        //console.log(num);

    //case 2:
        //console.log(num);
        //break;
    
    //default:
        //console.log("아무것도 해당 안됨");
//}

//var num = prompt("입력");

//if(num % 2 == 0){
  //  console.log("num은 짝수 입니다")
//}
//else{
  //  console.log("num은 홀수 입니다")
//}

//switch(num % 2) {
  //  case 0:
    //    console.log("짝수")
      //  break;
    //default:
      //  console.log("홀수");
        //break;
//}

//for(var i = 0; i < 5; i++) {
  //  console.log(i);
//}

//var i=0;

//while(i < 5) {
//    console.log("i = "+1);
//    i++;
//}

//function bok(hoho){
//    console.log(hoho + " 볶음밥");
//}

//bok("새우");
//bok("김치");
//bok("닭가슴살");

//const sum = (a, b) => {
//    console.log(a+b);
//    return a+b;
//}

//sum(1, 2);
//sum(5, 5);

//var a = 10;
//function test(hoho) {
//    var a = 1;
//    console.log(a);
//}

//test()
//console.log("전역변수 확인: "+a);

function test(hh){
  var c = prompt("입력");
  var i = 0;

  for(var i = 0; i < 11; i++) {
    console.log("%d * %d = "+ c*i, c, i);
  }

  while(i<11) {
    console.log("%d * %d = "+ c*i, c, i);
  }
}
test()

var a = prompt("앞쪽");
var b = prompt("뒤쪽");

const t = (a, b) => {
  console.log("%d * %d = "+ a*b, a, b);
}

t(a,b);
