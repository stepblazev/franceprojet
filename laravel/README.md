# Laravel App

### Settings Laravel

```
Composer v2 +

PHP 8.1 +

MySQL or MariaDB 

Nginx or Apache

```

### Install Project

1. Copy .env.example to .env
```sh
cp .env.example .env
```
2. Install project
```sh
composer install
```
3. Generate key
```sh
php artisan key:generate
```
4. Migrate migrate
```sh
php artisan migrate --seed
```
5. Generate key jwt
```sh
php artisan jwt:secret
```
6. Config cache clear
```sh
php artisan config:cache
```

### Command List
```
php artisan config:cache  -> Clear config

php artisan s2v:admin-created  -> Admin created
```


# Front Information

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
