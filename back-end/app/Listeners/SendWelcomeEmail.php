<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeEmail; // Import the WelcomeEmail Mailable

class SendWelcomeEmail implements ShouldQueue
{
    public function handle(UserRegistered $user)
    {
        // Send welcome email to the newly registered user
        Mail::to($user->user->email)->send(new WelcomeEmail($user->user));
    }
}
