<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Language::insert([
            [
                'name'    => 'Українська',
                'value'    => 'uk',
                'sort'    => 1,
                'active'    => 1,
            ],
            [
                'name'    => 'English',
                'value'    => 'en',
                'sort'    => 2,
                'active'    => 2,
            ],
            [
                'name'    => 'Русский',
                'value'    => 'ru',
                'sort'    => 3,
                'active'    => 3,
            ]
        ]);
    }
}
