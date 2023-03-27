$(document).ready(function(){

    $("#sublogin").click(function(){
        var a= $("#form1Example1").val();
        var b= $("#form1Example2").val();
      
        console.log(a,b)
        var cond=true;
        if(a=="" || b=="" ){
            cond=false;
            alert("Please Enter valid details");
        }

       

        if(cond){
            $.ajax({
                url : "log.php",
                type :"Post",
                data : { mail :a,pass:b},
            
                success : function(data){
                    
                    if(data==0){
                        alert("Login UnSuccessful")
                        
                    }
                    else{
                        alert("Login Successful")
                        window.location.href=`b.html?user=${data}`
                    }


                }
            })
        }






       
  })
 
  
    

})