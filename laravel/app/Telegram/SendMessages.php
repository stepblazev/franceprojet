<?php

namespace App\Telegram;

use App\Models\ConfigSystem;
use Illuminate\Support\Facades\Log;
use Telegram\Bot\Api;
use Telegram\Bot\Exceptions\TelegramSDKException;

class SendMessages
{
    public function send(
        string $text,
    ): void
    {
        $config = ConfigSystem::whereIn('key', [
            'token', 'channelId'
        ])->get();

        try {
            if($config->first(function ($item) {
                return $item->key == 'token';
            })->value) {

                $api = new Api($config->first(function ($item) {
                    return $item->key == 'token';
                })->value);

                $response = $api->sendMessage([
                    'chat_id' => $config->first(function ($item) {
                        return $item->key == 'channelId';
                    })->value,
                    'text' => $text,
                    'parse_mode' => 'HTML',
                    'disable_web_page_preview' => true
                ]);
            }
        } catch (TelegramSDKException $e) {
            Log::error('Send messages api telegram - ' . $e->getMessage());
        }
    }
}
