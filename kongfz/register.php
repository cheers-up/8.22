<?php

header('content-type:text/html;charset="utf-8"');

$responseData = array("code" =>0,"msg" =>"");


  // var_dump($_POST);
  //将数据取出，再将数据填入到数据库里
$username = $_POST['username'];
  $password = $_POST['password'];
  $respassword = $_POST['respassword'];
  $createtime = $_POST['createtime'];
  
if(!$username){
    $responseData['code']=1;
    $responseData['msg']="用户名不能为空";
    echo json_encode($responseData);
    exit;
}
if(!$password){
    $responseData['code']=2;
    $responseData['msg']="密码不能为空";
    echo json_encode($responseData);
    exit;
}
if($password != $respassword){
    $responseData['code']=3;
    $responseData['msg']="两次密码输入不一致";
    echo json_encode($responseData);
    exit;
}

$link = mysqli_connect("127.0.0.1","root","root");

if(!$link){
    $responseData['code']=6;
    $responseData['msg']="服务器忙";
    echo json_encode($responseData);
    exit;
}

mysqli_set_charset($link,"utf8");

mysqli_select_db($link,"qd2003");

$sql1 = "SELECT * FROM user WHERE username='{$username}'";

$res = mysqli_query($link,$sql1);

$row = mysqli_fetch_assoc($res);

if($row){
    $responseData['code'] = 4;
    $responseData['msg'] = "用户名已存在";
    echo json_encode($responseData);
    exit;
  }

  $str = md5(md5($password).'qianfeng');

$sql2 = "INSERT INTO user VALUES('','{$username}','{$str}','{$respassword}','{$createtime}')";

$res = mysqli_query($link,$sql2);


if($res){
    $responseData["msg"] = "注册成功";
    echo json_encode($responseData);
  }else{
    $responseData['code'] = 5;
    $responseData['msg'] = "注册失败";
    echo json_encode($responseData);
    exit;
  }

mysqli_close($link);






?>