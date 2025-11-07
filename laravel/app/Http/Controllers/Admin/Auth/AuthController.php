<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin', ['except' => [
            'login',
            'session',
            'logout'
        ]]);
    }

    /**
     * @return JsonResponse
     */
    public function session(){

        if(auth('api')->user()) {
            return response()->json([
                'session' => true
            ]);
        }

        return response()->json(['session' => false]);
    }

    /**
     * @return JsonResponse
     */
    public function login(Request $request)
    {

        if (! $token = auth()->attempt([
            'email' => $request->get('email'),
            'password' => $request->get('password'),
        ])) {
            return response()->json(
                [
                    'status' => 0,
                    'messages' => 'Invalid email or password.'
                ], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * @return JsonResponse
     */
    public function profile()
    {
        return response()->json(auth()->user());
    }

    /**
     * @return JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['status' => 1, 'message' =>  trans('auth.logout')]);
    }

    /**
     * @return JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * @param $token
     * @return JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 3600,
        ]);
    }
}
