$(document).ready(function(){

    $("#subsign").click(function(){
        var a= $("#first").val();
        var b= $("#second").val();
        var c= $("#third").val();
        var d= $("#fourth").val();
        var e= $("#fifth").val();
        console.log(a,b,c,d,e)
        var cond=true;
        if(a=="" || b=="" || c=="" || d=="" || e==""){
            cond=false;
            alert("Please Enter valid details");
        }

        if(d!=e){
            cond=false;
            alert("Password and confirm password doesnt match");
        }

        if(cond){
            $.ajax({
                url : "sign.php",
                type :"Post",
                data : { firstname :a, lastname:b,mail:c,pass:d},
            
                success : function(data){
                    alert(data)


                }
            })
        }






       
  })
 
  
    

})