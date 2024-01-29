<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SubmissionCheckMiddleware
{
    public function handle($request, Closure $next)
    {
        // Check if the submission status flag is set in the session
        if (auth()->check() && session('data_submitted')) {
            return redirect()->route('admin_message'); // Redirect to admin_message page
        }

        return $next($request);
    }
}
