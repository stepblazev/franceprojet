<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormJobsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'last_name' => ['required', 'string'],
            'first_name' => ['required', 'string'],
            'surname' => ['nullable', 'string'],
            'phone' => ['required', 'string'],
            'email' => ['required', 'email'],
            'car' => ['required', 'integer'],
            'car_number' => ['nullable', 'string'],
            'car_brand' => ['nullable', 'string'],
            'speciality_id' => ['required', 'integer'],
            'term' => ['required', 'integer'],
            'region' => ['required', 'string'],
            'city' => ['required', 'string'],
            'steer' => ['nullable', 'string'],
            'house' => ['nullable', 'string'],
            'apartment' => ['nullable', 'string'],
            'delivery_addresses_city' => ['required', 'integer'],
            'delivery_addresses_department' => ['required', 'string'],
            'photo' => ['nullable', 'file', 'max:5120', 'mimes:jpeg,png'],
        ];
    }
}
