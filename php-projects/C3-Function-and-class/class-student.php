<?php
    class Student {
        public $name;
        public $age;
        public $major;
        public function __construct($name,$age,$major) {
            $this->name = $name;
            $this->age = $age;
            $this->major = $major;
        }

        public function studentInfor(){
            echo $this->name . $this->age . $this->major;
        //    echo "Say";
        }

        public function about() {
            echo "This is about";
        }
    }

    $michael = new Student("Michael John", 27, "Computer Science");
    $michael->studentInfor();
  //  $michael->about();
  //  echo "Michael's major is " . $michael->$major;
?>