<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\ContactFormFullRequest;
use App\Http\Requests\Contact\ContactFormFullTwoRequest;
use App\Http\Requests\Contact\ContactFormRequest;
use App\Http\Resources\ArticleResource;
use App\Libs\Str;
use App\Models\Article;
use App\Models\RequestForm;
use App\Telegram\SendMessages;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class ContactController extends Controller
{

    const FULL_FORM = [
        'companyName' => 'Company name',
        'companyRegistrationNumber' => 'Company Registration Number',
        'numberOfUsers' => 'Number Of Users',
        'city' => 'City',
        'country' => 'Country',
        'street' => 'Street',
        'businessWebsite' => 'Business Website',
        'yourName' => 'Your Name',
        'yourEmail' => 'Your Email',
        'yourPhoneNumber' => 'Your Phone Number',
        'shortDescription' => 'Short description of their business',
    ];

    public function contact(
        ContactFormRequest $request,
        SendMessages $sendMessages
    )
    {
        RequestForm::create([
            'isStatus' => 0,
            'requestType' => 1,
            'data' => [
                'yourEmail' => $request->input('yourEmail'),
                'yourName' => $request->input('yourName'),
                'yourSociety' => $request->input('yourSociety'),
                'yourPhone' => $request->input('yourPhone'),
            ]
        ]);

//        $sendMessages->send(
//            sprintf("Contact Form \n\nEmail: %s\n\nMessage: %s", $request->input('email'), $request->input('message')),
//        );
        return response()->json([
            'status' => 1,
        ]);
    }

    public function fullForm(
        ContactFormFullRequest $request,
        SendMessages $sendMessages
    )
    {
        RequestForm::create([
            'isStatus' => 0,
            'requestType' => 2,
            'data' => $request->validated()
        ]);

        return response()->json([
            'status' => 1,
        ]);
    }


    public function fullFormTwo(
        ContactFormFullTwoRequest $request,
        SendMessages $sendMessages
    )
    {
        RequestForm::create([
            'isStatus' => 0,
            'requestType' => 3,
            'data' => $request->validated()
        ]);

        return response()->json([
            'status' => 1,
        ]);
    }






    public function fullFormOld(
        ContactFormFullRequest $request,
        SendMessages $sendMessages
    )
    {
        $files = [];

        if($request->file('files') !== null && count($request->file('files'))){
            foreach ($request->file('files') as $file) {
                $fileName = Str::random() . '.' . $file->getClientOriginalExtension();

                $files[] = $fileName;

                Storage::disk('files')
                    ->putFileAs('/', $file, $fileName);
            }
        }
        RequestForm::create([
            'isStatus' => 0,
            'requestType' => 2,
            'yourEmail' => $request->input('yourEmail'),
            'yourPhone' => $request->input('yourPhone'),
            'yourName' => $request->input('yourName'),
            'budget' => $request->input('budget'),
            'aDate' => $request->input('aDate'),
            'whatTypeOfService' => $request->input('whatTypeOfService'),
            'category' => $request->input('category'),
            'service' => $request->input('service'),
            'address' => $request->input('address'),
            'info' => $request->input('info'),
            'rooms' => $request->input('rooms'),
            'password' => Hash::make($request->input('password')),
            'files' => $files
        ]);

//        $message = "Full Form \n\n";
//
//        foreach ($request->validated() as $key => $value) {
//            $message .= sprintf("%s: %s\n", self::FULL_FORM[$key] ?? $key, $value);
//        }
//
//        $sendMessages->send($message);

        return response()->json([
            'status' => 1,
        ]);
    }

}
