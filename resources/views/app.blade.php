<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Preloaded Images -->
    <link rel="preload" href="/img/banner.png" as="image">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx", 'resources/css/app.css'])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-[#FCFCFC]">
    @inertia
</body>
<script>
    window.env = {
        GOOGLE_MAPS_API_KEY: '{{ env("GOOGLE_MAPS_API_KEY") }}',
    };
</script>

</html>