'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Invalid email or password. Please try again.')
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Doxa<span className="text-cyan-400">flow</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Insurance Claims Documentation Platform
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-white text-xl font-semibold mb-6">
            Sign in to your account
          </h2>

          {error && (
            <div className="bg-red-900 border border-red-700 rounded-lg px-4 py-3 mb-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="text-gray-400 text-sm block mb-2">Email address</label>
              <input
                type="email"
                placeholder="you@zeloric.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm block mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-3 transition mt-2 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              Having trouble signing in?{' '}
              <a href="mailto:support@zeloric.io" className="text-cyan-400 hover:underline">
                Contact IT support
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          © 2026 Zeloric Technologies. All rights reserved.
        </p>
      </div>
    </div>
  )
}