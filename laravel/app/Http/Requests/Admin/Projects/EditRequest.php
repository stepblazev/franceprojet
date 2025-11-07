<?php

namespace App\Http\Requests\Admin\Projects;

use App\Models\Language;
use Illuminate\Foundation\Http\FormRequest;

class EditRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $lang = Language::where('active', 1 )->pluck('value')->join(',');

        return [
            'id' => ['required', 'string', 'exists:projects,id'],
            'title' => ['array', 'required', 'required_array_keys:' . $lang],
            'text' => ['array', 'required', 'required_array_keys:' . $lang],
            'block_left' => ['array', 'required', 'required_array_keys:' . $lang],
            'block_right' => ['array', 'required', 'required_array_keys:' . $lang],
            'status' => ['required', 'integer', 'in:0,1'],
            'photo' => ['nullable', 'file', 'max:5120', 'mimes:jpeg,png'],
            'public_at' => ['required', 'date'],
            'youtube' => ['nullable', 'string', 'url', 'regex:/embed/m'],
        ];
    }
}
