<?php

namespace App\Http\Requests\Contact;


use App\Http\Requests\FormRequest;

class ContactFormRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'yourEmail' => ['required'],
            'yourSociety' => ['nullable'],
            'yourName' => ['nullable'],
            'yourPhone' => ['nullable'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
