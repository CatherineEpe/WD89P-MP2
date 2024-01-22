<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Show all users
     * SELECT * FROM USERS
     * @return Users
     */
   public function index()
   {
        return response()->json(["data" => User::all()]);
   }

   public function store(Request $request)
   {
        $user = new User();
        $user->lrn = $request->lrn;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = $request->password;
   }
}
