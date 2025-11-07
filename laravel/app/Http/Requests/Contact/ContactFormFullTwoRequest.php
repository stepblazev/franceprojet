<?php

namespace App\Http\Requests\Contact;


use App\Http\Requests\FormRequest;

class ContactFormFullTwoRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'surname' => ['nullable'],
            'firstName' => ['nullable'],
            'aboutExpirience' => ['nullable'],
            'address' => ['nullable'],
            'nSIRET' => ['nullable'],
            'website' => ['nullable'],
            'phone' => ['nullable'],
            'email' => ['nullable'],
            'companyName' => ['nullable'],
            'generalSkillsCheckbox' => ['nullable'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
