<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureCoachRegistrationStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        $userRegistered = $request->user()->registered;

        // Check if coach should be registered or not based on $status
        if (($status === 'registered' && !$userRegistered) ||
            ($status === 'not_registered' && $userRegistered)) {
            return redirect('/registry');
        }

        return $next($request);
    }
}
