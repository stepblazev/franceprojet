<?php

namespace App\Libs;

class Str extends \Illuminate\Support\Str
{
    public static function space(string $text): array|string|null
    {
        return preg_replace("/\s+/", "", $text);
    }
    public static function declination(array $endings, $number): string
    {
        $cases = [2, 0, 1, 1, 1, 2];
        $n = $number;

        return sprintf($endings[($n % 100 > 4 && $n % 100 < 20) ? 2 : $cases[min($n % 10, 5)]], $n);
    }
}
