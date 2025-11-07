<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => 'admin',
            'email' => 'admin@zbara.dev',
            'password' => Hash::make('Admin_12345')
        ];
    }
}
