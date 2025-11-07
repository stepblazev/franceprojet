<?php

namespace App\Http\Requests\Contact;


use App\Http\Requests\FormRequest;

class ContactFormFullRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'yourName' => ['required', 'nullable'],
            'yourEmail' => ['required', 'required'],
            'yourPhone' => ['required', 'nullable'],
            'budget' => ['required', 'nullable'],
            'aDate' => ['nullable'],
            'whatTypeOfService' => ['nullable'],
            'service' => ['nullable'],
            'password' => ['nullable'],
            'typeofRenovation' => ['nullable'],
            'surfaceAreaRenovated' => ['nullable'],
            'address' => ['nullable'],
            'aboutWork' => ['nullable'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
