import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Перенаправление с основного маршрута на маршрут с дефолтным языком
    if (pathname === '/') {
        return NextResponse.redirect(`/fr`);
    }

    return NextResponse.next();
}
