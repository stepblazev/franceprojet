<?php

return [
    'name' => 'Український військовий вісник',

    'header' => [
        'main' => 'Home',
        'news' => 'News',
        'users' => 'Team',
        'about' => 'About us',
        'form' => 'Form',
    ],

    'main' => [
        'page_message' => 'Ведуться технічні роботи',
        'to_command' => 'Join the team',
        'questionnaire' => 'Form',
        'text' => 'Leave your information and we will contact you to confirm it',
        'block_1' => 'Reporter\'s ID',
        'block_2' => 'Car pass',
        'block_3' => 'Reporter\'s ID',
        'block_4' => 'Reporter\'s ID',
        'common' => [
            'title' => 'Personal data',
            'last_name' => 'Last name',
            'first_name' => 'First name',
            'surname' => 'Surname',
            'phone' => 'Telephone',
            'car' => [
                'title' => 'I have a car',
                'status' => [
                    'yes' => 'Yes',
                    'no' => 'No'
                ],
                'model_car'=>'Car make and model',
                 'number_car'=>'State car number'
            ],
        ],
        'position' => [
            'title' => 'Position',
            'desired_position' => 'Preferred position',
            'term' => 'Duration'
        ],
        'home' => [
            'title' => 'Place of residence',
            'region' => 'Region',
            'city' => 'City',
            'steer' => 'Street',
            'house' => 'Buildind',
            'apartment' => 'Appartment',
        ],
        'delivery_addresses' => [
            'title' => 'Delivery addresses',
            'city' => 'City',
            'department' => 'Відділення нової пошти'
        ],
        'file' => [
            'title' => 'ID photo',
            'format' => 'Select a .jpg or .png file. The file size must not exceed 5 Mb',
            'save' => 'Save',
            'select' => 'Select a file',
        ],
        'form' => [
            'submit' => 'send',
            'personal' => 'I agree to <a href=":attribute" target="_blank">processing of personal data</a>'
        ],
        'term' => [
            '1 year',
            '2 years',
            '3 years',
            '4 years',
            '5 years',
        ],
        'success_text'=>'Your message has been sent'
    ],

    'breadcrumbs' => [
        'main' => 'Home',
        'news' => 'News',
        'employees' => 'Team',
    ],
    'news' => [
        'title' => 'News',
        'resource' => 'Information from the site',
        'declination' => [
            'news',
            'news',
            'news',
        ]
    ],
    'contacts_form'=>[
         'mail'=>'Mail',
         'tel'=>'Phone',
         'address'=>'Addresses'
    ]
];
