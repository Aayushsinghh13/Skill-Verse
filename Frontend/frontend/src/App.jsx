import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArrowRight, Users, Zap, Shield, TrendingUp, Star } from "lucide-react"
import {Link} from "react-router-dom";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
// import Link from "next/link"

function App() {

  return (
    <>
     {/* <h1 className='text-4xl text-amber-500'>Skill Verse</h1> */}
     
 
{/* 


      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#64748B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="text-[#0A0A0A] font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-[#d4af37]">SkillVerse</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#E5E7EB] hover:text-[#d4af37] transition">
              Features
            </a>
            <a href="#how-it-works" className="text-[#E5E7EB] hover:text-[#d4af37] transition">
              How It Works
            </a>
            <a href="#community" className="text-[#E5E7EB] hover:text-[#d4af37] transition">
              Community
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[#E5E7EB] hover:text-[#d4af37] transition">
              Login
            </Link>
            <Link
              to="/"
              className="bg-[#d4af37] text-[#0A0A0A] px-6 py-2 rounded-lg font-semibold hover:bg-[#e5c158] transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      Hero Section
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Swap Skills,
              <span className="text-[#d4af37]"> Build Community</span>
            </h1>
            <p className="text-xl text-[#64748B] mb-8 text-balance">
              Connect with talented individuals worldwide. Exchange skills, learn new abilities, and grow together in a
              thriving community of learners and experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="bg-[#d4af37] text-[#0A0A0A] px-8 py-3 rounded-lg font-semibold hover:bg-[#e5c158] transition flex items-center justify-center gap-2 group"
              >
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <button className="border-2 border-[#64748B] text-[#E5E7EB] px-8 py-3 rounded-lg font-semibold hover:border-[#d4af37] hover:text-[#d4af37] transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-transparent rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-[#64748B]/20 to-[#0A0A0A] border border-[#64748B]/30 rounded-2xl p-8 backdrop-blur">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-[#0A0A0A]/50 rounded-lg border border-[#64748B]/20 hover:border-[#d4af37]/50 transition"
                  >
                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#E5E7EB]">Skill {i}</p>
                      <p className="text-sm text-[#64748B]">Expert level</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      Features Section
      <section id="features" className="bg-[#0A0A0A]/50 border-y border-[#64748B]/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-[#d4af37]">SkillVerse</span>
            </h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Everything you need to connect, learn, and grow with a global community of skill enthusiasts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Global Community",
                description: "Connect with thousands of skilled individuals from around the world",
              },
              {
                icon: Zap,
                title: "Instant Matching",
                description: "Find the perfect skill swap match based on your interests and expertise",
              },
              {
                icon: Shield,
                title: "Secure & Verified",
                description: "All users are verified to ensure a safe and trustworthy environment",
              },
              {
                icon: TrendingUp,
                title: "Track Progress",
                description: "Monitor your learning journey and celebrate your achievements",
              },
              {
                icon: Star,
                title: "Expert Ratings",
                description: "Build your reputation through verified reviews and ratings",
              },
              {
                icon: ArrowRight,
                title: "Easy Integration",
                description: "Seamlessly integrate with your calendar and communication tools",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-[#0A0A0A] border border-[#64748B]/30 rounded-xl hover:border-[#d4af37]/50 hover:shadow-lg hover:shadow-[#d4af37]/10 transition duration-300"
              >
                <feature.icon className="w-12 h-12 text-[#d4af37] mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-2 text-[#E5E7EB]">{feature.title}</h3>
                <p className="text-[#64748B]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      How It Works
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-[#d4af37]">Works</span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">Get started in just a few simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Create Profile", desc: "Sign up and showcase your skills" },
            { step: "2", title: "Browse Skills", desc: "Explore skills offered by others" },
            { step: "3", title: "Connect", desc: "Match with compatible learners" },
            { step: "4", title: "Learn & Grow", desc: "Start your skill exchange journey" },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#d4af37] text-[#0A0A0A] rounded-full flex items-center justify-center font-bold text-2xl mb-4 shadow-lg shadow-[#d4af37]/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#E5E7EB] mb-2 text-center">{item.title}</h3>
                <p className="text-[#64748B] text-center text-sm">{item.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      Community Stats
      <section
        id="community"
        className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border-y border-[#64748B]/20 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "10K+", label: "Skills Shared" },
              { number: "100K+", label: "Successful Swaps" },
              { number: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-[#d4af37] mb-2">{stat.number}</p>
                <p className="text-[#64748B]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      CTA Section
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#d4af37]/20 to-[#64748B]/10 border border-[#d4af37]/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#E5E7EB]">
            Ready to Start Your <span className="text-[#d4af37]">Skill Journey</span>?
          </h2>
          <p className="text-xl text-[#64748B] mb-8 max-w-2xl mx-auto">
            Join thousands of learners and experts building meaningful connections through skill exchange.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#d4af37] text-[#0A0A0A] px-8 py-4 rounded-lg font-semibold hover:bg-[#e5c158] transition"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      Footer
      <footer className="border-t border-[#64748B]/20 bg-[#0A0A0A]/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center">
                  <span className="text-[#0A0A0A] font-bold">S</span>
                </div>
                <span className="font-bold text-[#d4af37]">SkillVerse</span>
              </div>
              <p className="text-[#64748B] text-sm">Connecting skills, building communities.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#E5E7EB] mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#E5E7EB] mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#E5E7EB] mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4af37] transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#64748B]/20 pt-8 text-center text-[#64748B] text-sm">
            <p>&copy; 2025 SkillVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
   */}
   {/* <Login/> */}
   <Signup/>

    </>
  )
}

export default App
