

import { Heart, MessageSquare, Send } from "lucide-react"

export default function SkillSwapCard({ listing, onRequestClick }) {
  return (
    <div className="bg-[#0A0A0A]/50 border border-[#64748B]/30 rounded-xl p-6 hover:border-[#d4af37]/50 hover:shadow-lg hover:shadow-[#d4af37]/10 transition duration-300 group">
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
          onClick={() => onRequestClick(listing)}
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
  )
}
