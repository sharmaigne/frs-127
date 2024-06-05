import { type NextRequest, type NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest): Promise<NextResponse> {
    return await updateSession(request)
}

export const config = {
  matcher: [
    '/((?!api|login|callback|signup|confirm|error|password-reset|email|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}