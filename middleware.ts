import { type NextRequest, type NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function middleware(request: NextRequest): Promise<NextResponse> {
    return await updateSession(request)
}


export const config = {
  matcher: [
    '/((?!api|login|signup|error|password-reset|confirm.*|email|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}