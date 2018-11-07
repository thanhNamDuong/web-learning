<?php
    $sweaterPrice = 50;
    $precenOff = 0.25;

    function couponCode($price,$dicount) {
        return $price*$dicount;
    }

    echo "The sweater originally costs $" . $sweaterPrice . "with the discount you'll pay $" .($sweaterPrice - couponCode($sweaterPrice,$precenOff)) . "\n";
?>