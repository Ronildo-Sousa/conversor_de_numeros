$(function () { 
     
    $(".select2").on("click",function(){
        $(".result").fadeOut();
    });

    $(".select1").on("click",function () {
        var select1 = $(this).val();
        $(".result").fadeOut();
        if((select1==="binario")){           
            $(".info").text("Utilize apenas 0 e 1 !").fadeIn();
        }  
        else{
            $(".info").fadeOut(200);
        }
    });
    $("#sub").on("click" ,function (e) {
        e.preventDefault();
        var numero = ($(".num").val());
        var select1 = $(".select1").val();
        var select2 = $(".select2").val();
        if(numero.length != 0){
            var num = $(".num");
            if(select1==="binario" && select2==="decimal"){
                var result = para_decimal(num,select1);
                if(result === true){
                    $(".info").css("display","none");
                    $(".error").text("Erro ao converter").css("display","block").fadeOut(4000);
                    $(".info").fadeIn(4500);
                }
                else{
                    $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>10</sub>"+"</p>").css({
                        "display": "block",
                        "word-wrap": "break-word"
                    });
                }
            }
            else if(select1==="decimal" && select2==="binario"){
                var result = decimal_para(num,select2);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>2</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="decimal" && select2==="hexadecimal"){
                var result = decimal_para(num,select2);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>16</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="decimal" && select2==="octal"){
                var result = decimal_para(num,select2);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>8</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="octal" && select2==="binario"){
                var result =  octal_binario(num);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>2</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="octal" && select2==="decimal"){
                var result =  para_decimal(num,select1);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>10</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="hexadecimal" && select2==="decimal"){              
                var result =  para_decimal(num,select1);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>10</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="hexadecimal" && select2==="binario"){
                var result = hexa_binario(num);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>2</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="binario" && select2==="octal"){
                var result = bin_octal(num);
                if(result === true){
                    $(".info").css("display","none");
                    $(".error").text("Erro ao converter").css("display","block").fadeOut(4000);
                    $(".info").fadeIn(4500);
                }
                else{
                    $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>8</sub>"+"</p>").css({
                        "display": "block",
                        "word-wrap": "break-word"
                    });
                }
            }
            else if(select1==="hexadecimal" && select2==="octal"){
                var result = hexa_octal(num);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>8</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="octal" && select2==="hexadecimal"){
                var result = octal_hexa(num);
                $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>16</sub>"+"</p>").css({
                    "display": "block",
                    "word-wrap": "break-word"
                });
            }
            else if(select1==="binario" && select2==="hexadecimal"){
                 var result = bin_hexa(num);
                if(result === true){
                    $(".info").css("display","none");
                    $(".error").text("Erro ao converter").css("display","block").fadeOut(4000);
                    $(".info").fadeIn(4500);
                }
                else{
                    $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>16</sub>"+"</p>").css({
                        "display": "block",
                        "word-wrap": "break-word"
                    });
                }
            }       
            else{
                $(".info").css("display","none");
                $(".error").text("Erro ao converter !").css("display","block").fadeOut(4000);
                if(select1==="binario"){
                    $(".info").fadeIn(4000);
                }
            }
        }
        else{  
            $(".info").css("display","none");          
            $(".error").text("Insira um número !").css("display","block").fadeOut(4000);  
            if(select1==="binario"){
                $(".info").fadeIn(4000);
            }       
        }
     });

     function para_decimal (num,conversao) {
        var numeros = num.val().toUpperCase();
        var n = numeros.length;
        var elevado = 0; 
        var erro = false;
        if(conversao==="hexadecimal"){
            elevado = 16;
        }
        if(conversao==="binario"){
            elevado = 2;
            for(var i=0;i<n;i++){
                if((numeros[i] !== "1") && (numeros[i] !== "0")){
                    erro = true;
                }
            }
        }
        if(conversao==="octal"){
            elevado = 8;
        }
        
        if(erro == false){
            var res =0;
            var j = n-1;
            if(num.val()===0 || num.val()===1){
                return num;
            }
            else{              
                    for(var i = 0; i <n; i++){                           
                            var num = numeros[i];
                            if(conversao==="hexadecimal"){
                                if(num==="A"){
                                    num = 10;
                                }
                                if(num==="B"){
                                    num = 11;
                                }
                                if(num==="C"){
                                    num = 12;
                                }
                                if(num==="D"){
                                    num = 13;
                                }
                                if(num==="E"){
                                    num = 14;
                                }
                                if(num==="F"){
                                    num = 15;
                                }
                            }
                                var mult = parseInt(Math.pow(elevado,j)); 
                                j = j-1;               
                                res += num * mult;                                         
                    }
                    return res;              
            }  
        }
        else{
            return erro;
        }
    }

     
    function octal_hexa(num){
        var numero = $("<input type='text' value='"+num.val()+"'>");
        numero.val(octal_binario(numero));
        var result = bin_hexa(numero);
        return result;
    }

    function bin_hexa(num){
        var numeros = num.val();
        var n = numeros.length;
        var erro = false;
        for(var i=0;i<n;i++){
            if((numeros[i] !== "1") && (numeros[i] !== "0")){       
                erro = true;
                break;
            }          
        }
        if(erro == false){
            var aux = [];
            var aux2 ="";
            var cont = 0;
            for(var i=n-1;i>=0;i--){
                if(cont < 4){
                    cont++;
                    aux2 = numeros[i]+aux2;                           
                }
                else{
                    cont = 1;
                    aux.push(aux2);
                    aux2 = numeros[i];              
                }
            }      
            aux.push(aux2);
            var pos = aux.length;
            var tam = aux[pos-1].length; 
            if(tam <4){
                var t = tam;
                while(t < 4){               
                    aux[pos -1] = "0"+aux[pos -1];
                    t++;              
                }
            }
            
            for(var i=0;i<n;i++){
                if(aux[i]==="0000"){
                    aux[i] = "0";
                }
                if(aux[i]==="0001"){
                    aux[i] = "1";
                }
                if(aux[i]==="0010"){
                    aux[i] = "2";
                }
                if(aux[i]==="0011"){
                    aux[i] = "3";
                }
                if(aux[i]==="0100"){
                    aux[i] = "4";
                }
                if(aux[i]==="0101"){
                    aux[i] = "5";
                }
                if(aux[i]==="0110"){
                    aux[i] = "6";
                }
                if(aux[i]==="0111"){
                    aux[i] = "7";
                }
                if(aux[i]==="1000"){
                    aux[i] = "8";
                }
                if(aux[i]==="1001"){
                    aux[i] = "9";
                }
                if(aux[i]==="1010"){
                    aux[i] = "A";
                }
                if(aux[i]==="1011"){
                    aux[i] = "B";
                }
                if(aux[i]==="1100"){
                    aux[i] = "C";
                }
                if(aux[i]==="1101"){
                    aux[i] = "D";
                }
                if(aux[i]==="1110"){
                    aux[i] = "E";
                }
                if(aux[i]==="1111"){
                    aux[i] = "F";
                }
            }
            
            var result = "";
            for(var i = pos-1; i>=0; i--){
                result += aux[i];
            }
            return result;
        }
        else{
            return erro;
        }
    }

     function decimal_para(num,conversao){
         var divisao = 0;
        if(conversao==="hexadecimal"){
            divisao = 16;
        }
        if(conversao==="binario"){
            divisao = 2;
        }
        if(conversao==="octal"){
            divisao = 8;
        }
        var numero = parseInt(num.val());
        var res =[];
        if(numero===0){
            return numero;
        }
        else{
            while(numero >= 1){
                res.push(numero);
                numero = parseInt(numero / divisao);
            }
            var n = res.length;
            var r = [];
            var result ="";
            for(var i=0;i<n;i++){          
                    r.push(res[i] % divisao); 
            }
            for(var i=n-1;i>=0;i--){
                    if(conversao==="hexadecimal"){
                        if(r[i]===10){
                            r[i]="A";
                        }
                        if(r[i]===11){
                            r[i]="B";
                        }
                        if(r[i]===12){
                            r[i]="C";
                        }
                        if(r[i]===13){
                            r[i]="D";
                        }
                        if(r[i]===14){
                            r[i]="E";
                        }
                        if(r[i]===15){
                            r[i]="F";
                        }
                    }
                    result += r[i];
            }
            return result;
        }
    }

    function hexa_octal(num){
        var numero = $("<input type='text' value='"+num.val()+"'>");   
        numero.val(hexa_binario(numero));
        numero.val(bin_octal(numero));   
        var result = numero.val();
        if(result.length > 1 && result[0]==="0"){
           result =  result.substr(1,result.length - 1);
        }
        return result;
    }

    function octal_binario(num){
        var numeros = num.val();     
        var n = numeros.length;
        var aux = [];
        for(var i=0;i<n;i++){
            if(numeros[i]==="0"){
                aux[i] = "000";              
            }
            if(numeros[i]==="1"){
                aux[i]= "001";
            }
            if(numeros[i]==="2"){
                aux[i]= "010";
            }
            if(numeros[i]==="3"){
                aux[i]= "011";
            }
            if(numeros[i]==="4"){
                aux[i]= "100";
            }
            if(numeros[i]==="5"){
                aux[i]= "101";
            }
            if(numeros[i]==="6"){
                aux[i]= "110";
            }
            if(numeros[i]==="7"){
                aux[i]= "111";
            }
        }
        var result = "";
        for(var i=0;i<n;i++){
            result += aux[i];
        }  
        return result;  
    }

    function hexa_binario(num){
        var numeros = num.val().toUpperCase();
        var n = numeros.length;
        var aux = [];

        for(var i=0;i<n;i++){
            if(numeros[i]==="0"){
                aux[i] = "0000";              
            }
            if(numeros[i]==="1"){
                aux[i]= "0001";
            }
            if(numeros[i]==="2"){
                aux[i]= "0010";
            }
            if(numeros[i]==="3"){
                aux[i]= "0011";
            }
            if(numeros[i]==="4"){
                aux[i]= "0100";
            }
            if(numeros[i]==="5"){
                aux[i]= "0101";
            }
            if(numeros[i]==="6"){
                aux[i]= "0110";
            }
            if(numeros[i]==="7"){
                aux[i]= "0111";
            }
            if(numeros[i]==="8"){
                aux[i]= "1000";
            }
            if(numeros[i]==="9"){
                aux[i]= "1001";
            }
            if(numeros[i]==="A"){
                aux[i]= "1010";
            }
            if(numeros[i]==="B"){
                aux[i]= "1011";
            }
            if(numeros[i]==="C"){
                aux[i]= "1100";
            }
            if(numeros[i]==="D"){
                aux[i]= "1101";
            }
            if(numeros[i]==="E"){
                aux[i]= "1110";
            }
            if(numeros[i]==="F"){
                aux[i]= "1111";
            }
        }
        var result = "";
        for(var i=0;i<n;i++){
            result += aux[i];
        }
        return result;
    }

    function bin_octal(num){
        var numeros = num.val();
        var n = numeros.length;
        var erro = false;
        for(var i=0;i<n;i++){
            if((numeros[i] !== "1") && (numeros[i] !== "0")){       
                erro = true;
                break;
            }          
        }
        if(erro == false){
            var aux = [];
            var aux2 ="";
            var cont = 0;
            for(var i=n-1;i>=0;i--){
                if(cont < 3){
                    cont++;
                    aux2 = numeros[i]+aux2;                           
                }
                else{
                    cont = 1;
                    aux.push(aux2);
                    aux2 = numeros[i];              
                }
            }      
            aux.push(aux2);
            var pos = aux.length;
            var tam = aux[pos-1].length;
            if(tam <3){
                var t = tam;
                while(t < 3){
                    aux[pos -1] = "0"+aux[pos -1];
                    t++;
                }
            }
            
            for(var i=0;i<n;i++){
                if(aux[i]==="000"){
                    aux[i] = "0";
                }
                if(aux[i]==="001"){
                    aux[i] = "1";
                }
                if(aux[i]==="010"){
                    aux[i] = "2";
                }
                if(aux[i]==="011"){
                    aux[i] = "3";
                }
                if(aux[i]==="100"){
                    aux[i] = "4";
                }
                if(aux[i]==="101"){
                    aux[i] = "5";
                }
                if(aux[i]==="110"){
                    aux[i] = "6";
                }
                if(aux[i]==="111"){
                    aux[i] = "7";
                }
            }
            var result = "";
            for(var i = pos-1; i>=0; i--){
                result += aux[i];
            }
            return result;
        }
        else{
            return erro;
        }
    }
});
