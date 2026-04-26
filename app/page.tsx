'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError('Invalid email address or password. Please verify your credentials and try again. Contact IT support if the issue persists.')
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Sans+Condensed:wght@600;700&display=swap');`}</style>

      {/* SYSTEM BAR */}
      <div className="bg-[#0a1628] h-10 flex items-center justify-between px-8 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white text-sm font-bold" style={{ fontFamily: "'IBM Plex Sans Condensed', sans-serif" }}>
            <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="white"><path d="M0 0h4v4H0V0zm6 0h5v4H6V0zM0 6h4v5H0V6zm6 0h5v5H6V6z"/></svg>
            </div>
            Doxaflow
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <span className="text-xs text-white/40">Claims Documentation Platform · Production</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-white/35">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            All systems operational
          </div>
          <div className="w-px h-3 bg-white/10"></div>
          <a href="#" className="text-xs text-white/35 hover:text-white/60">System Status</a>
          <a href="#" className="text-xs text-white/35 hover:text-white/60">Help Desk</a>
          <a href="mailto:support@zeloric.io" className="text-xs text-white/35 hover:text-white/60">IT Support</a>
        </div>
      </div>

      {/* MAIN 3-COLUMN GRID */}
      <div className="flex-1 grid items-center py-10 px-6" style={{ gridTemplateColumns: '1fr 420px 1fr' }}>

        {/* LEFT BRAND PANEL */}
        <div className="flex flex-col justify-center max-w-sm ml-auto pr-8">
          <div className="flex items-center gap-2.5 mb-6" style={{ fontFamily: "'IBM Plex Sans Condensed', sans-serif", fontSize: '26px', fontWeight: 700, color: '#0a1628' }}>
            <div className="w-9 h-9 bg-[#0a1628] rounded-md flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="white"><path d="M1 1h6v6H1V1zm9 0h7v6H10V1zM1 10h6v7H1v-7zm9 0h7v7H10v-7z"/></svg>
            </div>
            Doxa<span className="text-blue-600">flow</span>
          </div>
          <div className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-10">Revenue Cycle Management</div>

          <div className="flex flex-col gap-5">
            {[
              { title: 'Real-Time Eligibility', desc: 'Verify coverage against 900+ payers before submission', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'EDI Clearinghouse Integration', desc: 'Direct 837 submission to Waystar, Change Healthcare & Availity', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'HIPAA-Grade Security', desc: 'SOC 2 Type II certified with full audit trail on every action', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
            ].map(f => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white border border-slate-200 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={f.icon}/></svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800 mb-0.5">{f.title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap mt-10">
            {['HIPAA', 'SOC 2', 'HL7 FHIR', 'ONC', 'ISO 27001'].map(b => (
              <span key={b} className="text-[10px] border border-slate-200 text-slate-400 px-2.5 py-1 rounded-sm font-semibold tracking-wide bg-white">{b}</span>
            ))}
          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="bg-white border border-slate-200 rounded shadow-lg">
          <div className="px-8 pt-7 pb-6 border-b border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">Secure Access Portal</span>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                TLS 1.3 Encrypted
              </div>
            </div>
            <div className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'IBM Plex Sans Condensed', sans-serif" }}>Sign in to Doxaflow</div>
            <div className="text-xs text-slate-500 font-light">Use your organization credentials to continue</div>
          </div>

          <div className="px-8 py-7">
            <button type="button" className="w-full h-10 bg-white border border-slate-200 rounded-sm flex items-center justify-center gap-2 text-sm text-slate-700 font-medium hover:bg-slate-50 transition-colors mb-5">
              <div className="w-4 h-4 bg-[#0a1628] rounded-sm flex items-center justify-center">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="white"><path d="M0 0h3.5v3.5H0V0zm4.5 0H9v3.5H4.5V0zM0 4.5h3.5V9H0V4.5zm4.5 0H9V9H4.5V4.5z"/></svg>
              </div>
              Continue with SSO / Active Directory
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-slate-100"></div>
              <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">or sign in with credentials</span>
              <div className="flex-1 h-px bg-slate-100"></div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 rounded-sm px-3 py-2.5 mb-5">
                <p className="text-xs text-red-700 leading-relaxed">{error}</p>
              </div>
            )}

            <div className="flex items-start gap-2.5 bg-green-50 border border-green-100 rounded-sm px-3 py-2.5 mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <p className="text-[11px] text-green-700 leading-relaxed">Multi-factor authentication is required. You will be prompted after sign-in.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@organization.com"
                    required
                    className="w-full h-10 bg-slate-50 border border-slate-200 rounded-sm px-3 pr-10 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Use your organization email (e.g. name@zeloric.io)</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700">Password</label>
                  <a href="#" className="text-[11px] text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full h-10 bg-slate-50 border border-slate-200 rounded-sm px-3 pr-10 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 bg-transparent border-none cursor-pointer p-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <><div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>Signing in...</>
                ) : (
                  <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/></svg>Sign In to Doxaflow</>
                )}
              </button>
            </form>
          </div>

          <div className="px-8 py-3.5 border-t border-slate-100 bg-slate-50 rounded-b flex items-center justify-between">
            <span className="text-[11px] text-slate-400">© 2026 Doxaflow Inc.</span>
            <div className="flex gap-4">
              {['Privacy Policy', 'Terms of Use', 'IT Support'].map(l => (
                <a key={l} href="#" className="text-[11px] text-slate-400 hover:text-blue-600">{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT NOTICES PANEL */}
        <div className="flex flex-col gap-3 max-w-xs pl-8">
          <div className="bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded p-4">
            <div className="text-[10px] font-semibold tracking-widest text-blue-600 uppercase mb-1.5">System Notice</div>
            <p className="text-xs text-slate-500 leading-relaxed">Scheduled maintenance: Sunday Apr 27, 2:00–4:00 AM CT. Claims processing will be temporarily unavailable.</p>
          </div>
          <div className="bg-white border border-slate-200 border-l-4 border-l-amber-400 rounded p-4">
            <div className="text-[10px] font-semibold tracking-widest text-amber-700 uppercase mb-1.5">Security Advisory</div>
            <p className="text-xs text-slate-500 leading-relaxed">Do not share your credentials. Doxaflow staff will never ask for your password via email or phone.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded p-4">
            <div className="text-xs font-semibold text-slate-700 mb-3">Need help signing in?</div>
            {['Reset my password', 'Unlock my account', 'Contact IT Support', 'Request access'].map(item => (
              <div key={item} className="flex items-center gap-2 py-1.5 border-b border-slate-100 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                <a href="#" className="text-xs text-blue-600 hover:underline">{item}</a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* PAGE FOOTER */}
      <div className="bg-[#0a1628] h-12 flex items-center justify-center gap-6 flex-shrink-0">
        {['Privacy Policy', 'Terms of Service', 'HIPAA Notice', 'Accessibility', 'System Status', 'IT Support · support@zeloric.io'].map((l, i, arr) => (
          <span key={l} className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-white/30 hover:text-white/60">{l}</a>
            {i < arr.length - 1 && <span className="w-px h-3 bg-white/10 inline-block"></span>}
          </span>
        ))}
      </div>
    </div>
  )
}