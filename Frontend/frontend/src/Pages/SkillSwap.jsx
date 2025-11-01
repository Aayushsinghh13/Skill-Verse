

import { useState } from "react"
import {Link} from "react-router-dom"
import { Search, Heart, MessageSquare, Send } from "lucide-react"

export default function SkillSwapPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedRequest, setSelectedRequest] = useState(null)
  const [showRequestModal, setShowRequestModal] = useState(false)
  const [requestMessage, setRequestMessage] = useState("")
  const [myRequests, setMyRequests] = useState([
    {
      id: 1,
      user: { name: "Alex Johnson", avatar: "👨" },
      wants: "Guitar",
      teaches: "Web Development",
      level: "Intermediate",
      status: "pending",
      date: "2 days ago",
    },
    {
      id: 2,
      user: { name: "Sarah Chen", avatar: "👩" },
      wants: "Photography",
      teaches: "Data Science",
      level: "Advanced",
      status: "accepted",
      date: "5 days ago",
    },
  ])

  // Mock skill listings
  const skillListings = [
    {
      id: 1,
      user: { name: "Emily Rodriguez", avatar: "👩‍🦰" },
      wants: "JavaScript",
      teaches: "Spanish",
      level: "Intermediate",
      rating: 4.8,
      reviews: 24,
      category: "language",
      bio: "Native Spanish speaker, passionate about teaching",
    },
    {
      id: 2,
      user: { name: "James Wilson", avatar: "👨" },
      wants: "Piano",
      teaches: "Graphic Design",
      level: "Advanced",
      rating: 4.9,
      reviews: 45,
      category: "design",
      bio: "Professional designer with 10 years experience",
    },
    {
      id: 3,
      user: { name: "Lisa Park", avatar: "👩‍🦱" },
      wants: "Cooking",
      teaches: "Digital Marketing",
      level: "Intermediate",
      rating: 4.7,
      reviews: 18,
      category: "marketing",
      bio: "Marketing expert helping entrepreneurs grow",
    },
    {
      id: 4,
      user: { name: "Michael Chen", avatar: "👨‍🦲" },
      wants: "Fitness Training",
      teaches: "Python Programming",
      level: "Advanced",
      rating: 4.9,
      reviews: 52,
      category: "tech",
      bio: "Full-stack developer, love mentoring",
    },
    {
      id: 5,
      user: { name: "Sophie Adams", avatar: "👩" },
      wants: "Public Speaking",
      teaches: "Photography",
      level: "Intermediate",
      rating: 4.6,
      reviews: 31,
      category: "creative",
      bio: "Professional photographer and mentor",
    },
    {
      id: 6,
      user: { name: "David Kumar", avatar: "👨‍🦱" },
      wants: "Drawing",
      teaches: "Machine Learning",
      level: "Expert",
      rating: 5.0,
      reviews: 67,
      category: "tech",
      bio: "AI researcher and passionate educator",
    },
  ]

  const filteredListings = skillListings.filter((listing) => {
    const matchesSearch =
      listing.wants.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.teaches.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "all" || listing.category === selectedFilter
    return matchesSearch && matchesFilter
  })

  const handleSendRequest = (listing) => {
    if (requestMessage.trim()) {
      console.log("Request sent:", { listing, message: requestMessage })
      setMyRequests([
        ...myRequests,
        {
          id: myRequests.length + 1,
          user: listing.user,
          wants: listing.wants,
          teaches: listing.teaches,
          level: listing.level,
          status: "pending",
          date: "Just now",
        },
      ])
      setShowRequestModal(false)
      setRequestMessage("")
      setSelectedRequest(null)
      alert("Request sent successfully!")
    }
  }

  const handleAcceptRequest = (id) => {
    setMyRequests(myRequests.map((req) => (req.id === id ? { ...req, status: "accepted" } : req)))
  }

  const handleRejectRequest = (id) => {
    setMyRequests(myRequests.filter((req) => req.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E7EB]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#64748B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="text-[#0A0A0A] font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-[#d4af37]">SkillVerse</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[#E5E7EB] hover:text-[#d4af37] transition">
              Home
            </Link>
            <Link to="/" className="text-[#d4af37] font-semibold">
              Skill Swap
            </Link>
            <button className="bg-[#d4af37] text-[#0A0A0A] px-4 py-2 rounded-lg font-semibold hover:bg-[#e5c158] transition">
              Profile
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Skill Match</h1>
          <p className="text-[#64748B] text-lg">
            Browse skill listings, send requests, and start learning from experts today
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - My Requests */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-[#d4af37]">My Requests</h2>
                <div className="space-y-3">
                  {myRequests.length === 0 ? (
                    <p className="text-[#64748B] text-sm">No requests yet</p>
                  ) : (
                    myRequests.map((req) => (
                      <div
                        key={req.id}
                        className="p-3 bg-[#0A0A0A] border border-[#64748B]/20 rounded-lg hover:border-[#d4af37]/50 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{req.user.avatar}</span>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-[#E5E7EB]">{req.user.name}</p>
                            <p className="text-xs text-[#64748B]">{req.date}</p>
                          </div>
                        </div>
                        <div className="text-xs space-y-1 mb-2">
                          <p className="text-[#64748B]">
                            <span className="text-[#d4af37]">Wants:</span> {req.wants}
                          </p>
                          <p className="text-[#64748B]">
                            <span className="text-[#d4af37]">Teaches:</span> {req.teaches}
                          </p>
                        </div>
                        {req.status === "pending" && (
                          <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">Pending</span>
                        )}
                        {req.status === "accepted" && (
                          <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Accepted</span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-lg p-6">
                <h3 className="font-bold text-[#d4af37] mb-4">Statistics</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Pending</span>
                    <span className="text-[#d4af37] font-bold">
                      {myRequests.filter((r) => r.status === "pending").length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Accepted</span>
                    <span className="text-green-400 font-bold">
                      {myRequests.filter((r) => r.status === "accepted").length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Total</span>
                    <span className="text-[#E5E7EB] font-bold">{myRequests.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Listings */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search & Filter */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-3 w-5 h-5 text-[#64748B]" />
                <input
                  type="text"
                  placeholder="Search by skill, name, or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-lg text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {["all", "language", "tech", "creative", "marketing", "design"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                      selectedFilter === filter
                        ? "bg-[#d4af37] text-[#0A0A0A]"
                        : "bg-[#0A0A0A]/50 border border-[#64748B]/30 text-[#E5E7EB] hover:border-[#d4af37]/50"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Listings Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredListings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-xl p-6 hover:border-[#d4af37]/50 hover:shadow-lg hover:shadow-[#d4af37]/10 transition duration-300 group"
                >
                  {/* User Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{listing.user.avatar}</span>
                      <div>
                        <p className="font-bold text-[#E5E7EB]">{listing.user.name}</p>
                        <div className="flex items-center gap-1">
                          <span className="text-[#d4af37]">★</span>
                          <span className="text-sm text-[#64748B]">
                            {listing.rating} ({listing.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <Heart className="w-6 h-6 text-[#64748B] group-hover:text-red-500 cursor-pointer transition" />
                  </div>

                  {/* Skill Exchange */}
                  <div className="bg-[#0A0A0A] border border-[#64748B]/20 rounded-lg p-4 mb-4 space-y-3">
                    <div>
                      <p className="text-xs text-[#64748B] mb-1">🎓 Wants to Learn</p>
                      <p className="text-lg font-semibold text-[#E5E7EB]">{listing.wants}</p>
                    </div>
                    <div className="border-t border-[#64748B]/20 pt-3">
                      <p className="text-xs text-[#64748B] mb-1">📚 Can Teach</p>
                      <p className="text-lg font-semibold text-[#d4af37]">{listing.teaches}</p>
                    </div>
                  </div>

                  {/* Level & Bio */}
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-semibold rounded-full mb-2">
                      {listing.level}
                    </div>
                    <p className="text-sm text-[#64748B]">{listing.bio}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedRequest(listing)
                        setShowRequestModal(true)
                      }}
                      className="flex-1 bg-[#d4af37] text-[#0A0A0A] font-semibold py-2 rounded-lg hover:bg-[#e5c158] transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Request
                    </button>
                    <button className="px-4 py-2 bg-[#0A0A0A] border border-[#64748B]/30 rounded-lg text-[#E5E7EB] hover:border-[#64748B]/50 transition">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#64748B] text-lg">No listings found. Try adjusting your search!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Request Modal */}
      {showRequestModal && selectedRequest && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0A0A0A] border border-[#64748B]/30 rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#E5E7EB]">Send Skill Swap Request</h2>

            {/* User Info */}
            <div className="bg-[#0A0A0A]/50 rounded-lg p-4 mb-6 border border-[#64748B]/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{selectedRequest.user.avatar}</span>
                <div>
                  <p className="font-bold text-[#E5E7EB]">{selectedRequest.user.name}</p>
                  <p className="text-sm text-[#64748B]">Wants: {selectedRequest.wants}</p>
                  <p className="text-sm text-[#d4af37]">Teaches: {selectedRequest.teaches}</p>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#E5E7EB] mb-2">Your Message</label>
              <textarea
                value={requestMessage}
                onChange={(e) => setRequestMessage(e.target.value)}
                placeholder="Hi! I'm interested in learning {{ skill }}. I can teach you {{ skill }} in exchange..."
                className="w-full p-3 bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-lg text-[#E5E7EB] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition resize-none h-24"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowRequestModal(false)}
                className="flex-1 bg-[#0A0A0A] border border-[#64748B]/30 text-[#E5E7EB] font-semibold py-2 rounded-lg hover:border-[#64748B]/50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSendRequest(selectedRequest)}
                className="flex-1 bg-[#d4af37] text-[#0A0A0A] font-semibold py-2 rounded-lg hover:bg-[#e5c158] transition"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
