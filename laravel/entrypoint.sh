# ждём базу
while ! nc -z db 3306; do
  echo "Waiting for MySQL..."
  sleep 2
done

# laravel таски
php artisan storage:link
php artisan migrate --force
php artisan db:seed --force

php-fpm
