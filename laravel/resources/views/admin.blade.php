<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no "/>
    @vite(['resources/admin/app.scss'])
</head>
<body>
<div id="app"></div>
</body>
<user-data
    :system-lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    :system-time="{{ Carbon\Carbon::now() }}"
    :system-route="/{{ $route }}"
/>
@vite(['resources/admin/app.js'])
</html>
