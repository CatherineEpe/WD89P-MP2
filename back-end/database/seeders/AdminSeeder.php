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
            'lrn' => '303662303662', // Replace with the appropriate LRN for the admin
            'email' => 'simplycathstudio@gmail.com', // Replace with the admin's email
            'username' => '303662vnhs', // Replace with the admin's username
            'password' => \Illuminate\Support\Facades\Hash::make('vnhsadmin303662'), // Replace with the admin's password
            'role' => 'admin',
        ]);
    }
    
}
