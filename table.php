<!doctype html>
<html>
<body>
<table border = "2">

<?php

$name = $_POST['size'];
if (empty($name)){
    echo "You didn't put anything.";
    echo '
    <br>
    <img src = "pictures/Lazarus_Redd.jpg">
    ';
}else{
    $x = 1;
    $size = (int) $name;
    $elements = [];
    echo "<tr>";
    echo "<td></td>";
    for ($i = 1; $i <= $size; $i++){
        $elements[$i] = $i;
        echo "<td>$i</td>";
    }
    echo "</tr>";
    while ($x <= $size){
        echo "<tr>";
        echo "<td>".$elements[$x]."</td>";
        for ($i = 1; $i <= $size; $i++){
            echo "<td>".$elements[$x]*$elements[$i]."</td>";
        }
        echo "</tr>";
        $x++;
    }
}

?>
</table>
</body>
</html>