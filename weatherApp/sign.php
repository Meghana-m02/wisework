<?php

$con = mysqli_connect("localhost","root","","weather1") or die("Connection failed:");

$fname=$_POST["firstname"];
$lname=$_POST["lastname"];
$email=$_POST["mail"];
$passw=$_POST["pass"];


$query="INSERT into sign (firstname,lastname,passw,mail) values ('{$fname}','{$lname}','{$passw}','{$email}') ";
$query_run=mysqli_query($con,$query);

if($query_run){

    echo "INSERTED";

}
else{

    echo "something went wrong";
}


?>