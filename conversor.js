$(function () { 
    $("#sub").on("click",function (e) {
        e.preventDefault();
        var num = $(".num");
        var select1 = $(".select1").val();
        var select2 = $(".select2").val();

        if(select1==="binario" && select2==="decimal"){
            var result = binario_decimal(num);
            $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>10</sub>"+"</p>").css("display","block");          
        }
        else if(select1==="decimal" && select2==="binario"){
            var result = decimal_para(num,select2);
            $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>2</sub>"+"</p>").css("display","block");
        }else if(select1==="decimal" && select2==="hexadecimal"){
            var result = decimal_para(num,select2);
            $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>16</sub>"+"</p>").css("display","block");
        }else if(select1==="decimal" && select2==="octal"){
            var result = decimal_para(num,select2);
            $(".result").html("<p>"+result+"<sub style='font-size:10pt;'>8</sub>"+"</p>").css("display","block");
        }     
     });

     
     function binario_decimal (num) { 
         var numeros = num.val();
         var n = numeros.length;
         var res =0;
         var j = n-1;
         if(num.val()===0 || num.val()===1){
            return num;
         }
         else{
            for(var i = 0; i <n; i++){                           
                    var num = parseInt(numeros[i]);
                    var mult = parseInt(Math.pow(2,j)); 
                    j = j-1;               
                    res += num * mult;                                         
            }
            return res;
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
});
