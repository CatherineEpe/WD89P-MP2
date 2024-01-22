<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RegisteredUserNotification extends Notification
{
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('You have been successfully registered.')
            ->line('Thank you for joining!')
            ->action('Visit our website', url('/'))
            ->line('Feel free to explore.');
    }
}