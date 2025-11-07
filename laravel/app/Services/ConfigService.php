<?php

namespace App\Services;

use App\Http\Requests\Admin\Settings\SaveRequest;
use App\Models\ConfigSystem;
use Illuminate\Support\Facades\Log;
use Telegram\Bot\Api;
use Telegram\Bot\Exceptions\TelegramSDKException;

class ConfigService
{
    public function setSaveConfig(
        string $key,
        string $value,
    ): void
    {
        ConfigSystem::updateOrCreate([
            'key' => $key
        ], [
            'value' => $value
        ]);

    }
}
