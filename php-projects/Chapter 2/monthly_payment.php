<?php
    $employees = array(
        array(	
            "name"	=> "John Doe",
            "title"	=>	"Programmer",
            "salary"	=>	60000,
            "title"	=>	"Manager",
            "salary"	=>	132000
        )
    );

    foreach ($employees as $employee) {
        echo $employee['name'] . "(" .$employee['title'] . ") annual salary is $" . $employee['salary'];
    }

?>