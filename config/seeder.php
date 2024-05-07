<?php

return [
    'users' => [
        [
            'name' => 'Jilliane Vina',
            'email' => 'vina.jilliane23@gmail.com',
            'password' => 'JeromeOutreach2024',
            'roles' => ['admin'],
            'permissions' => []
        ],
        [
            'name' => 'Mark Tourigny',
            'email' => 'tourigny@telus.net',
            'password' => '4591Kram',
            'roles' => ['admin'],
            'permissions' => []
        ],
        [
            'name' => 'Jeph Vina',
            'email' => 'roy.jeph@gmail.com',
            'password' => 'JeromeOutreach2024',
            'roles' => ['admin'],
            'permissions' => []
        ],
        [
            'name' => 'Test Coach',
            'email' => 'test@test.com',
            'password' => 'BlueShield2018',
            'roles' => ['coach'],
            'permissions' => []
        ]
    ],
    'roles' => [
        ['name' => 'Admin'],
        ['name' => 'Coach']
    ],
    'sports' => [
        ['name' => 'Sprints'],
        ['name' => 'Throws'],
        ['name' => 'Long Jump'],
        ['name' => 'High Jump'],
        ['name' => 'Cross Country'],
        ['name' => 'Basketball'],
        ['name' => 'Soccer'],
        ['name' => 'Ultimate Frisbee']
    ],
    'coaching_level' => [
        [
            'coaching_level' => 'Junior',
            'rate' => 20.00,
            'travel' => 10.00,
            'description' => 'High School athlete'
        ],
        [
            'coaching_level' => 'Intermediate',
            'rate' => 20.00,
            'travel' => 10.00,
            'description' => '1-2-3 year university athlete or comparable'
        ],
        [
            'coaching_level' => 'Senior',
            'rate' => 30.00,
            'travel' => 10.00,
            'description' => '4th year university athlete or higher including grads'
        ],
        [
            'coaching_level' => 'Elite',
            'rate' => 35.00,
            'travel' => 10.00,
            'description' => 'High level competition and/or coaching designation'
        ]
    ]
];
