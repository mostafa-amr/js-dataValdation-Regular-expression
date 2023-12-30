
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

