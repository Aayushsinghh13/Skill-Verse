import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import './LoginForm.css';

export default function LoginForm({ onSwitchToSignup }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert(`Login attempt with ${email}`)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary">Skill <span className="text-[#d4af37]">Verse</span></h1>
        <p className="text-secondary text-sm">Welcome back to your learning journey</p>
      </div>

      {/* Form Card */}
      <div
        className={`bg-card border border-[#d4af37] rounded-lg p-8 shadow-lg transition-all duration-500 ${isSelected ? "card-selected border-glow" : "card-glow"}`}
        onMouseEnter={() => setIsSelected(true)}
        onMouseLeave={() => setIsSelected(false)}
      >


        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-secondary" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-secondary" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-background border border-border rounded-lg text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-secondary hover:text-primary transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded bg-background border border-border accent-primary" />
              <span className="text-secondary">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-accent transition">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#d4af37] text-black font-bold px-42 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="flex-1 border-t border-border"></div>
          <span className="mx-3 text-sm text-secondary bg-card px-2 z-10">Or continue with</span>
          <div className="flex-1 border-t border-border"></div>
        </div>


        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="flex items-center justify-center space-x-2 bg-background border border-border rounded-lg py-2 transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37]">
            <span className="text-lg">🔵</span>
            <span className="text-sm font-semibold text-foreground group-hover:text-black">Google</span>
          </button>

          <button className="flex items-center justify-center space-x-2 bg-background border border-border rounded-lg py-2 transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37]">
            <span className="text-lg">🐙</span>
            <span className="text-sm font-semibold text-foreground group-hover:text-black">GitHub</span>
          </button>
</div>

      </div>

      {/* Switch to Signup */}
      <p className="text-center text-secondary text-sm">
        Don't have an account?{" "}
        <button onClick={onSwitchToSignup} className="text-primary font-semibold hover:text-accent transition">
          Sign up
        </button>
      </p>
    </div>
  )
}