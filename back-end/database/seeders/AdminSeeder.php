<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    public function run()
    {
        // Create an admin account
        \App\Models\User::create([
            'lrn' => '303662303662', 
            'email' => 'simplycathstudio@gmail.com', 
            'username' => '303662vnhs', 
            'password' => \Illuminate\Support\Facades\Hash::make('vnhsadmin303662'), 
            'role' => 'admin',
        ]);
    }
    
}
