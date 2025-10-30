import {Link} from "react-router-dom"
import SignupForm from "../Components/SignupForm"

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E7EB] flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-[#64748B]/20 bg-[#0A0A0A]/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="text-[#0A0A0A] font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-[#d4af37]">SkillVerse</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[#64748B]">Already have an account?</span>
            <Link
              to="/login"
              className="border-2 border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#0A0A0A] transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <SignupForm onSwitchToLogin={() => (window.location.href = "/login")} />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#64748B]/20 bg-[#0A0A0A]/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#64748B] text-sm">
          <p>&copy; 2025 SkillVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}