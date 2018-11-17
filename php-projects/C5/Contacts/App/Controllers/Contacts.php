<?php
    namespace App\Controller;
    
    use App\Models\Contact as Name;

    class Contacts 
    {
        public function index()
        {
            $contact = new Contact();
            $contacts = $contact->getContacts();
        }
    }

?>