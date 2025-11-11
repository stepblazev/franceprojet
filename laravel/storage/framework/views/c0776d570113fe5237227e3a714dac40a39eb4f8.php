<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="UTF-8">
    <title>Admin</title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no "/>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/admin/app.scss']); ?>
</head>
<body>
<div id="app"></div>
</body>
<user-data
    :system-lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>"
    :system-time="<?php echo e(Carbon\Carbon::now()); ?>"
    :system-route="/<?php echo e($route); ?>"
/>
<?php echo app('Illuminate\Foundation\Vite')(['resources/admin/app.js']); ?>
</html>
<?php /**PATH /home/franceprojet/web/franceprojet.com/public_html/back/resources/views/admin.blade.php ENDPATH**/ ?>