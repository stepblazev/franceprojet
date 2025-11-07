<?php

namespace App\Http\Requests\Admin\Settings;

use App\Models\Language;
use Illuminate\Foundation\Http\FormRequest;

class SaveRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array[]
     */
    public function rules(): array
    {
        return [
            'lang' => ['required', 'integer'],
            'token' => ['required', 'string'],
            'channelId' => ['required', 'string'],
        ];
    }
}
