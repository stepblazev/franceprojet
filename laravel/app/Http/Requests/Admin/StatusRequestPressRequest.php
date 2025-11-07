<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StatusRequestPressRequest extends FormRequest
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
            'id' => ['required', 'string', 'exists:request_forms,id'],
            'status' => ['required', 'string', 'in:0,1'],
        ];
    }
}
