#!/bin/sh
php artisan storage:link
php artisan migrate --force
apache2-foreground