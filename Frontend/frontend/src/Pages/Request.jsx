

import { useState } from "react"
import {Link} from "react-router-dom"
import { CheckCircle, XCircle, MessageSquare } from "lucide-react"

export default function RequestsPage() {
  const [incomingRequests, setIncomingRequests] = useState([
    {
      id: 1,
      user: { name: "Tom Brown", avatar: "👨‍💼" },
      wantsToLearn: "Web Development",
      canTeach: "Basketball Coaching",
      level: "Advanced",
      message: "I'd love to learn web development from you! I can teach you basketball skills.",
      timestamp: "2 hours ago",
      status: "new",
    },
    {
      id: 2,
      user: { name: "Nina Patel", avatar: "👩‍🔬" },
      wantsToLearn: "Data Science",
      canTeach: "Classical Music",
      level: "Intermediate",
      message: "Interested in learning data science with Python. Happy to teach classical music!",
      timestamp: "5 hours ago",
      status: "new",
    },
    {
      id: 3,
      user: { name: "Marcus Lee", avatar: "👨‍🎨" },
      wantsToLearn: "Graphic Design",
      canTeach: "Photography",
      level: "Intermediate",
      message: "Let's exchange skills! I want to learn design, can teach photography.",
      timestamp: "1 day ago",
      status: "pending",
    },
  ])

  const [activeTab, setActiveTab] = useState("incoming")

  const handleAccept = (id) => {
    setIncomingRequests(incomingRequests.map((req) => (req.id === id ? { ...req, status: "accepted" } : req)))
  }

  const handleReject = (id) => {
    setIncomingRequests(incomingRequests.filter((req) => req.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E7EB]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#64748B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="text-[#0A0A0A] font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-[#d4af37]">SkillVerse</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/skill-swap" className="text-[#E5E7EB] hover:text-[#d4af37] transition">
              Skill Swap
            </Link>
            <Link to="/requests" className="text-[#d4af37] font-semibold">
              Requests
            </Link>
            <button className="bg-[#d4af37] text-[#0A0A0A] px-4 py-2 rounded-lg font-semibold hover:bg-[#e5c158] transition">
              Profile
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Skill Swap Requests</h1>
          <p className="text-[#64748B] text-lg">Manage your incoming and sent requests</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[#64748B]/20">
          <button
            onClick={() => setActiveTab("incoming")}
            className={`px-6 py-3 font-semibold transition border-b-2 ${
              activeTab === "incoming"
                ? "border-[#d4af37] text-[#d4af37]"
                : "border-transparent text-[#64748B] hover:text-[#E5E7EB]"
            }`}
          >
            Incoming ({incomingRequests.length})
          </button>
          <button
            onClick={() => setActiveTab("sent")}
            className={`px-6 py-3 font-semibold transition border-b-2 ${
              activeTab === "sent"
                ? "border-[#d4af37] text-[#d4af37]"
                : "border-transparent text-[#64748B] hover:text-[#E5E7EB]"
            }`}
          >
            Sent
          </button>
        </div>

        {/* Incoming Requests */}
        {activeTab === "incoming" && (
          <div className="space-y-4">
            {incomingRequests.length === 0 ? (
              <div className="text-center py-12 bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-lg">
                <p className="text-[#64748B]">No incoming requests at the moment</p>
              </div>
            ) : (
              incomingRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-lg p-6 hover:border-[#d4af37]/50 transition"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{req.user.avatar}</span>
                      <div>
                        <h3 className="text-xl font-bold text-[#E5E7EB]">{req.user.name}</h3>
                        <p className="text-sm text-[#64748B]">{req.timestamp}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        req.status === "new" ? "bg-blue-500/20 text-blue-300" : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {req.status === "new" ? "New" : "Pending"}
                    </span>
                  </div>

                  {/* Skill Exchange */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4 p-4 bg-[#0A0A0A] rounded-lg border border-[#64748B]/20">
                    <div>
                      <p className="text-sm text-[#64748B] mb-1">🎓 Wants to Learn</p>
                      <p className="font-semibold text-[#E5E7EB]">{req.wantsToLearn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#64748B] mb-1">📚 Can Teach</p>
                      <p className="font-semibold text-[#d4af37]">{req.canTeach}</p>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4 p-3 bg-[#0A0A0A] rounded border border-[#64748B]/20">
                    <p className="text-sm text-[#E5E7EB] italic">"{req.message}"</p>
                  </div>

                  {/* Level */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-full">
                      {req.level} Level
                    </span>
                  </div>

                  {/* Actions */}
                  {req.status === "new" && (
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAccept(req.id)}
                        className="flex-1 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Accept Request
                      </button>
                      <button
                        onClick={() => handleReject(req.id)}
                        className="flex-1 bg-red-600/20 text-red-300 font-semibold py-2 rounded-lg hover:bg-red-600/30 transition flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-5 h-5" />
                        Decline
                      </button>
                      <button className="px-6 py-2 bg-[#0A0A0A] border border-[#64748B]/30 rounded-lg text-[#E5E7EB] hover:border-[#64748B]/50 transition flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                  {req.status === "accepted" && (
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-sm font-semibold">
                      ✓ Request Accepted - You can now start your skill exchange!
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Sent Requests */}
        {activeTab === "sent" && (
          <div className="text-center py-12 bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-lg">
            <p className="text-[#64748B]">You haven't sent any requests yet</p>
            <Link
              to="/skill-swap"
              className="mt-4 inline-block bg-[#d4af37] text-[#0A0A0A] px-6 py-2 rounded-lg font-semibold hover:bg-[#e5c158] transition"
            >
              Browse Skill Listings
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
