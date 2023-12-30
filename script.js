// function snse(){
//     var sting1
//     var letter
// do{
//     sting1 = prompt ('enter your word')
 
//                     if(sting1===null||letter===null)
//                 {
//                     return
//                 }
//                 var cond22 =/^[A-Za-z\s]+$/.test(sting1)
//                                 var cons =true
//                                 if(cond22 == false||!sting1.replace(/\s/g, '').length){
//                                     alert('enter valid word')
//                                     cons = false
//                                 }
                                
//         }
// while(cons ==false)
// do{
//     var coss=true
//     letter = prompt ('enter one letter')
//     if(letter===null)
//                 {
//                     return
//                 }
//                 var cond33 =/^[A-Za-z]{1}$/.test(letter)
//                 if(cond33 == false ||!letter.replace(/\s/g, '').length){
//                     alert('enter valid charachter, number must be 1 not more or less and not zero')
//                     coss = false
//             }
// }
// while(coss==false)
// var ask = confirm('do you want it to be case senstive?')
// if(ask){
//     var reg = new RegExp(letter,'g')
//     var result1 =(sting1.match(reg)||[]).length
//     alert('number of occurrences with case sens = ' + result1)
// }
// else {
//     var reg2 = new RegExp(letter,'gi')
//     var result2 = (sting1.match(reg2)||[]).length
//     alert('number of occurrences without case sens = ' + result2)
// }
// }
// snse()





//2



// function plain(){

//     do{
//         var tagroba =prompt ('enter your word')
//                     if(tagroba===null)
//                 {
//                     return
//                 }
//         var cond =/^[A-Za-z]+$/.test(tagroba)
//         if(cond == false){
//             alert('enter valid words')
//         }
//     }while (cond == false || tagroba==[])

// var x =confirm('do you want it to be case senstive?')
// if (x){
//     var y =tagroba.length -1
//     for(var i = 0;i<tagroba.length;i++){
       
//         // console.log(tagroba.charAt(i) )
//         // console.log(tagroba.charAt(y))
//          if(tagroba.charAt(i) != tagroba.charAt(y)){
//             var r =0
//             break 
            
//         }
//         y--
//             }
//             if(r == 0){
//                 alert('what you entered not plaindrome ')
//             }
//             else{
//                 alert('you entered plaindrome') 
//             }
    
// }
// else{
//     var y =tagroba.length -1
//     for(var i = 0;i<tagroba.length;i++){
       
//         // console.log(tagroba.charAt(i) )
//         // console.log(tagroba.charAt(y))
//          if((tagroba.charAt(i)).toLocaleLowerCase() != (tagroba.charAt(y)).toLocaleLowerCase()){
//             var r =0
//             break 
            
//         }
//         y--
//             }
//             if(r == 0){
//                 alert('what you entered not plaindrome ')
//             }
//             else{
//                 alert('you entered plaindrome') 
//             }
           
// }
// }
// plain()



//3

// function longg(){
// do{
//             var srtingss =prompt ('enter your words')
//             if(srtingss===null)
//                 {
//                     return
//                 }
//             var cond2 =/^[A-Za-z\s]+$/.test(srtingss)
//             var cons =true
//             if(cond2 == false||!srtingss.replace(/\s/g, '').length){
//                         alert('enter valid words')
//                         cons = false
//                     }
//         }while (cons == false)
//         var strl = srtingss.split(' ')
//         var lon =0
//         var lon2
//         for(var i =0 ;i<strl.length;i++){
//             if(strl[i].length>lon){
//                 lon=strl[i].length
//                 lon2=strl[i]
//             }
//         }
//         alert('longest word is : ' + lon2)
//     }
//     longg()

//4
function docs(){
    var namee
    var phone
    var phonenum
    var emal
            do{
                 namee =prompt ('enter your name, after entering all data check console')
            if(namee===null)
                {
                    return
                }
                var cond22 =/^[A-Za-z\s]+$/.test(namee)
                var cons =true
                if(cond22 == false||!namee.replace(/\s/g, '').length){
                    alert('enter valid name')
                    cons = false
                }
            }while (cons == false )
            do{
                cons = true
                 phone =prompt ('enter your number')
            if(phone===null)
                {
                    return
                }
                var cond23 =/^[0-9]{8}$/.test(phone)
                if(cond23 == false ||!phone.replace(/\s/g, '').length){
                    alert('enter valid number, number must be 8 numbers not more or less')
                    cons = false
                }
            }while (cons == false)
            do{
                cons = true
                 phonenum =prompt ('enter your phone number')
            if(phonenum===null)
                {
                    return
                }
                var cond24 =/^(010|011|012)[0-9]{8}$/.test(phonenum)
                if(cond24 == false||!phonenum.replace(/\s/g, '').length){
                    alert('enter valid phone number begin with either(010,011,012) and number must be 11 numbers not more or less')
                    cons=false
                }

            }while (cons == false)
            do{
                var cons = true
                
                 emal =prompt ('enter your email')
                if(emal===null)
                {
                    return
                }
                var cond25 =/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emal)
                if(cond25 == false||!emal.replace(/\s/g, '').length){
                    alert('enter valid email ')
                    cons=false
                }

            }while (cons == false)
            do{
            var xo=prompt('type the color you want from these red, green, blue')
            var xl =false
            var xe =xo.toLowerCase()
            if(xo===null){
                return
            }
            else if(xe=='red'||xe=='green'||xe=='blue'){
                    xl=true
            }
           }
            while(xl==false)
            console.log('%c welcome dear guest '+'%c'+namee,'color :' +xe,'color:black')
            console.log('%c your telephone number is  '+'%c'+phone,'color :' +xe,'color:black')
            console.log('%c your mobile number is  '+'%c'+phonenum ,'color :' +xe,'color:black')
            console.log('%c your email address is  '+'%c'+emal ,'color :' +xe,'color:black')
        }
        docs()

