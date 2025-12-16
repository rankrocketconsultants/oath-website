import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase()

    if (!supabase) {
      return NextResponse.json(
        { error: 'Service unavailable' },
        { status: 503 }
      )
    }

    const { firstName, email, phone } = await request.json()

    if (!firstName || firstName.trim().length === 0) {
      return NextResponse.json(
        { error: 'First name is required' },
        { status: 400 }
      )
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{
        first_name: firstName.trim(),
        email: email.toLowerCase().trim(),
        phone: phone?.trim() || null,
      }])

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        )
      }
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
