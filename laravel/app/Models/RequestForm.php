<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestForm extends Model
{
    use HasFactory;

    protected $fillable = [
        'requestType',
        'isStatus',
        'data',
        'files',
    ];

    protected $casts = [
        'files' => 'array',
        'data' => 'array',
    ];
}
