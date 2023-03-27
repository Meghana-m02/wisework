<?php

$con = mysqli_connect("localhost","root","","weather1") or die("Connection failed:");


$email=$_POST["mail"];
$passw=$_POST["pass"];


$query="SELECT firstname FROM sign where  mail='{$email}' AND passw='{$passw}'";
$query_run=mysqli_query($con,$query);




// $check ="SELECT * FROM cool WHERE usr_name='{$username}'";

if(mysqli_num_rows($query_run)==1){
    $userdata=mysqli_fetch_assoc($query_run);






    echo $userdata["firstname"];

}
else{

    echo 0;
}


?>