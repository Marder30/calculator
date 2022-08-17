'use strict'
// switch (переменная) {
// 	case 'значение1':
// 		/*
//		здесь код, который выполнится в случае,
// 			если переменная имеет значение1
// 		
// 	break;
// 	case 'значение2':
// 		/*
// 			здесь код, который выполнится в случае,
// 			если переменная имеет значение2
// 		*/
// 	break;
// 	case 'значение3':
// 		/*
// 			здесь код, который выполнится в случае,
// 			если переменная имеет значение3
// 		*/
// 	break;
// 	default:
// 		/*
// 			здесь код, который выполнится в случае,
// 			если не совпала ни с одним значением
// 		*/
// 	break;
// }

// let lang = 'edfassssssssssssssssssssssssssssssssss';

// switch (lang ) {
//     case'ru':
// 	console.log('рус');
//     break;
//     case 'en':
        
//         console.log('анг');break;
//         case 'de':
//         console.log('нем');break
//         default:
//         console.log('язык не поддерживается');
//     }
var op ;
function calc(){
    var result;
    var num1 = Number(document.getElementById('num1').value);
    var  num2 = Number(document.getElementById('num2').value);
    switch(op){
        case '+':result=num1+num2;break;
        case '-':result=num1-num2;break;
        case '*':result=num1*num2;break;
        case '/':result=num1/num2;break;
    }
    document.getElementById('result').innerHTML=result
}

