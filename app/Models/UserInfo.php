<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    protected $table = 'user_info';

    protected $casts = [
        'sport_options' => 'array'
    ];

    protected $fillable = [
        'user_id',
        'image_path',
        'first_name',
        'last_name',
        'address',
        'city',
        'province',
        'postal_code',
        'dob',
        'has_car',
        'university_bio_link',
        'biography',
        'one_line_bio',
        'school_name',
        'faculty',
        'program',
        'year_of_study',
        'cellphone_number',
        'emergency_contact_number',
        'sport_options'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
