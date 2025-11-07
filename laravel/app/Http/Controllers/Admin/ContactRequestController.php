<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StatusRequestPressRequest;
use App\Models\RequestForm;

class ContactRequestController extends Controller
{
    public function getFullForm(){
        $items = collect();

        $pressRequest = RequestForm::query()
            ->where('requestType', 2)
            ->orderBy('id', 'desc')
            ->paginate(20);

        foreach ($pressRequest as $item){
            $items->add([
                'id' => $item->id,
                'data' => $item->data,
                'isStatus' => $item->isStatus,
                'created_at' => $item->created_at,
            ]);
        }

        return response()->json([
            'status' => 1,
            'items' => $items,
            'pagination' => [
                'total' => $pressRequest->total()
            ]
        ]);
    }

    public function getFullFormTwo(){
        $items = collect();

        $pressRequest = RequestForm::query()
            ->where('requestType', 3)
            ->orderBy('id', 'desc')
            ->paginate(20);

        foreach ($pressRequest as $item){
            $items->add([
                'id' => $item->id,
                'data' => $item->data,
                'isStatus' => $item->isStatus,
                'created_at' => $item->created_at,
            ]);
        }

        return response()->json([
            'status' => 1,
            'items' => $items,
            'pagination' => [
                'total' => $pressRequest->total()
            ]
        ]);
    }
    public function getContact(){
        $items = collect();

        $pressRequest = RequestForm::query()
            ->where('requestType', 1)
            ->orderBy('id', 'desc')
            ->paginate(20);

        foreach ($pressRequest as $item){
            if(count( $item->data) !== 4){
                continue;
            }

            $items->add([
                'id' => $item->id,
                'data' => [
                    'yourEmail' => $item->data['yourEmail'],
                    'yourName' => $item->data['yourName'],
                    'yourSociety' => $item->data['yourSociety'],
                    'yourPhone' => $item->data['yourPhone'],
                ],
                'isStatus' => $item->isStatus,
                'created_at' => $item->created_at,
            ]);
        }

        return response()->json([
            'status' => 1,
            'items' => $items,
            'pagination' => [
                'total' => $pressRequest->total()
            ]
        ]);
    }

    public function setStatus(
        StatusRequestPressRequest $request
    ){
        RequestForm::where('id', $request->get('id'))
            ->update([
                'isStatus' => $request->get('status')
            ]);
    }
}
