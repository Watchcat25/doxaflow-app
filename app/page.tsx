import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        
        {/* Logo */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Doxa<span className="text-cyan-400">flow</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Insurance Claims Documentation Platform
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-white text-xl font-semibold mb-6">
            Sign in to your account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm block mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@zeloric.io"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm block mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-semibold rounded-lg px-4 py-3 transition mt-2"
            >
              Sign in
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

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-8">
          © 2026 Zeloric Technologies. All rights reserved.
        </p>

      </div>
    </div>
  )
}