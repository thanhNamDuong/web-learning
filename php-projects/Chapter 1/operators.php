<?php
    $name = " John Doe";
    $age = 25;
    $hourlyRate = 10.5;
    $hours = 40;
    $weeks = 52;
    $weeklyPay = $hourlyRate * $hours;
    $salary = $weeks * $weeklyPay;
    echo $name . " will make $" . $salary . " this years.\n";

?>