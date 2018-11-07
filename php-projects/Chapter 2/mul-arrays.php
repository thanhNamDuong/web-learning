<?php
    $student = array(
        "Jill" => array(
            "age" => 20,
            "gender" => "female"
        ),
        "Amy" => array(
            "age" => 25,
            "gender" => "female",
            "favorite_color" => "green"
        ),
    );

    echo $student['Jill']['age'];
?>