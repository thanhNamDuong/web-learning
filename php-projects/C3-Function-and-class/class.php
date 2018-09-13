<?php
    class BaseEmployee {
        private $name;
        private $title;
        private $salary;
        function __contruct($name,$title,$salary) {
            $this->name = $name;
            $this->title = $title;
            $this->salary = $salary;
        }

        public function setName($name) {
            $this->name = $name;
        }

        public function getTitle() {
            return $this->title;
        }

        public function getSalary() {
            return $this->salary;
        }
    }

    class Employee extends BaseEmployee {
        public function calculateMonthPay()
        {
            return $this->getSalary / 12;
        }
    }

    $markus = new Employee("Markus Gray", "CEO", 100000);
    echo  "Monthly Pay is " . $markus->calculateMonthlyPay();
?>