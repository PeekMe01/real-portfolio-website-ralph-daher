<?php

$host = "sql7.freesqldatabase.com";
$user = "sql7628111"; 
$pwd = "f9mgGKMH63"; 
$dbName = "sql7628111"; 

$dsn = 'mysql:host=' . $host . ';dbname=' . $dbName;
$pdo = new PDO($dsn, $user, $pwd);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$sql = 'SELECT about_me_text FROM about_me WHERE about_me_id = 1;';
$stmt = $pdo->query($sql);

$result = $stmt->fetch();

$jsonData = json_encode($result);

header('Content-Type: application/json');
echo $jsonData;

