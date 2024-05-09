<?php

return [
    'users' => [
        [
            'name' => 'Jilliane Vina',
            'email' => 'vina.jilliane23@gmail.com',
            'password' => 'JeromeOutreach2024',
            'roles' => ['Admin'],
            'permissions' => ['viewAnyRole']
        ],
        [
            'name' => 'Mark Tourigny',
            'email' => 'tourigny@telus.net',
            'password' => '4591Kram',
            'roles' => ['Admin'],
            'permissions' => ['viewAnyRole']
        ],
        [
            'name' => 'Jeph Vina',
            'email' => 'roy.jeph@gmail.com',
            'password' => 'JeromeOutreach2024',
            'roles' => ['Admin'],
            'permissions' => ['viewAnyRole']
        ],
        [
            'name' => 'Test Coach',
            'email' => 'test@test.com',
            'password' => 'BlueShield2018',
            'roles' => ['Coach'],
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
            'description' => 'High School athlete',
            'value' => 1
        ],
        [
            'coaching_level' => 'Intermediate',
            'rate' => 20.00,
            'travel' => 10.00,
            'description' => '1-2-3 year university athlete or comparable',
            'value' => 2
        ],
        [
            'coaching_level' => 'Senior',
            'rate' => 30.00,
            'travel' => 10.00,
            'description' => '4th year university athlete or higher including grads',
            'value' => 3
        ],
        [
            'coaching_level' => 'Elite',
            'rate' => 35.00,
            'travel' => 10.00,
            'description' => 'High level competition and/or coaching designation',
            'value' => 4
        ]
    ],
    'seasons' => [
        ['name' => 'Basketball - 2022'],
        ['name' => 'Basketball - 2023'],
        ['name' => 'Basketball - 2024'],
        ['name' => 'Cross Country - 2023'],
        ['name' => 'Soccer - 2022'],
        ['name' => 'Soccer - 2023'],
        ['name' => 'Track & Field - 2022'],
        ['name' => 'Track & Field - 2023'],
        ['name' => 'Track & Field - 2024'],
        ['name' => 'Ultimate - 2022'],
    ],
    'venues' => [
        ['name' => 'Admiral Seymour Elementary', 'province' => 'BC'],
        ['name' => 'Armstrong Elementary', 'province' => 'BC'],
        ['name' => 'Britannia Elementary', 'province' => 'BC'],
        ['name' => 'Britannia Secondary', 'province' => 'BC'],
        ['name' => 'Burnaby South Secondary', 'province' => 'BC'],
        ['name' => 'Cameron Elementary', 'province' => 'BC'],
        ['name' => 'Cedar Hills Elementary', 'province' => 'BC'],
        ['name' => 'Charles Tupper Secondary', 'province' => 'BC'],
        ['name' => 'Chattey-Burke Elementary', 'province' => 'BC'],
        ['name' => 'Crosstown Elementary', 'province' => 'BC'],
        ['name' => 'David Brankin Elementary', 'province' => 'BC'],
        ['name' => 'David Livingston Elementary', 'province' => 'BC'],
        ['name' => 'David Oppenheimer Elementary', 'province' => 'BC'],
        ['name' => 'David Thompson Secondary', 'province' => 'BC'],
        ['name' => 'Douglas Road Elementary', 'province' => 'BC'],
        ['name' => 'Ecole Inman Elementary', 'province' => 'BC'],
        ['name' => 'Ecole Marlborough Elementary', 'province' => 'BC'],
        ['name' => 'Edmonds Community Elementary', 'province' => 'BC'],
        ['name' => 'Fleming Elementary', 'province' => 'BC'],
        ['name' => 'Gladstone Secondary', 'province' => 'BC'],
        ['name' => 'Graham Bruce Elementary', 'province' => 'BC'],
        ['name' => 'Green Timbers Elementary', 'province' => 'BC'],
        ['name' => 'Guy Carleton Elementary', 'province' => 'BC'],
        ['name' => 'Hastings Elementary', 'province' => 'BC'],
        ['name' => 'Hjorth Road Elementary', 'province' => 'BC'],
        ['name' => 'Holly Elementary', 'province' => 'BC'],
        ['name' => 'James Ardiel Elementary', 'province' => 'BC'],
        ['name' => 'John Henderson Elementary', 'province' => 'BC'],
        ['name' => 'Killarney Secondary', 'province' => 'BC'],
        ['name' => 'Kinvig W.E. Elementary', 'province' => 'BC'],
        ['name' => 'Kirkbride Elementary', 'province' => 'BC'],
        ['name' => 'Lord Selkirk Elementary', 'province' => 'BC'],
        ['name' => 'MacCorkindale Elementary', 'province' => 'BC'],
        ['name' => 'Matthew AHP Elementary', 'province' => 'BC'],
        ['name' => 'Maywood Community Elementary', 'province' => 'BC'],
        ['name' => 'Morley Elementary', 'province' => 'BC'],
        ['name' => 'Musqueam Indian Reserve', 'province' => 'BC'],
        ['name' => 'Norquay Elementary', 'province' => 'BC'],
        ['name' => 'Old Yale Road Elementary', 'province' => 'BC'],
        ['name' => 'Prince Charles Elementary', 'province' => 'BC'],
        ['name' => 'Riverdale Elementary', 'province' => 'BC'],
        ['name' => 'Royal Heights Elementary', 'province' => 'BC'],
        ['name' => 'Second Street Elementary', 'province' => 'BC'],
        ['name' => 'Senator Reid Elementary', 'province' => 'BC'],
        ['name' => 'Sir William MacDonald', 'province' => 'BC'],
        ['name' => 'South Slope Elementary', 'province' => 'BC'],
        ['name' => 'Strathcona Community Centre', 'province' => 'BC'],
        ['name' => 'Strathcona Elementary', 'province' => 'BC'],
        ['name' => 'Stride Elementary', 'province' => 'BC'],
        ['name' => 'Swangard Stadium', 'province' => 'BC'],
        ['name' => 'Tecumseh Elementary', 'province' => 'BC'],
        ['name' => 'Templeton Secondary', 'province' => 'BC'],
        ['name' => 'Thompson Secondary', 'province' => 'BC'],
        ['name' => 'Thunderbird Elementary', 'province' => 'BC'],
        ['name' => 'Tillicum Annex Elementary', 'province' => 'BC'],
        ['name' => 'Twelfth Avenue Elementary', 'province' => 'BC'],
        ['name' => 'Tyee Elementary', 'province' => 'BC'],
        ['name' => 'Windermere Secondary', 'province' => 'BC'],
        ['name' => 'Windsor Elementary', 'province' => 'BC'],
        ['name' => 'Woodward K.B. Elementary', 'province' => 'BC'],
    ]
];
