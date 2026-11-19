import React, { useState } from 'react';
import { X, Calendar, Clock, Eye, Heart, User, Share2, Bookmark } from 'lucide-react';

export default function BlogPostModal({ post, onClose }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post?.likes || 0);

  if (!post) return null;

  const handleLike = () => {
    if (!liked) {
      setLikesCount(likesCount + 1);
      setLiked(true);
    } else {
      setLikesCount(likesCount - 1);
      setLiked(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white text-stone-900 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-stone-200">
        {/* Hero image */}
        <div className="relative h-60 sm:h-72 w-full bg-stone-950 overflow-hidden">
          <img 
            src={post.image || '/images/branded/hero-banner.jpg'} 
            alt={post.title}
            className="w-full h-full object-cover opacity-85"
            onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6">
            <span className="inline-block px-3 py-1 mb-2.5 text-xs font-bold tracking-wider uppercase rounded-full bg-amber-500 text-stone-950">
              {post.category}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Post meta & reading body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200 text-xs text-stone-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-semibold text-stone-900">
                <User className="w-4 h-4 text-amber-700" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-stone-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-stone-400" />
                {post.readTime}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-stone-400" />
                {post.views} views
              </span>
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-colors ${
                  liked 
                    ? 'bg-rose-100 text-rose-700 font-bold' 
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-rose-600 text-rose-600' : ''}`} />
                <span>{likesCount}</span>
              </button>
            </div>
          </div>

          {/* Excerpt quote */}
          <blockquote className="p-4 bg-stone-50 border-l-4 border-amber-600 rounded-r-xl text-stone-700 italic text-sm sm:text-base leading-relaxed">
            "{post.excerpt}"
          </blockquote>

          {/* Article Full Body Content */}
          <div className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-4">
            <p>{post.fullContent}</p>
            <p>
              At Future Black Female, our research and communications platforms exist to illuminate the systemic barriers faced by Black youth in Canada, from environmental inequalities and labor access to health equity and cultural sovereignty. Through storytelling and evidence-based analysis, we foster collective consciousness and drive real-world policy shifts.
            </p>
            <p>
              We invite readers, allies, and researchers across the African diaspora and partner communities to join our conversations, contribute insights, and support our ongoing projects.
            </p>
          </div>

          {/* Share & Actions */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Share Article:</span>
              <button 
                onClick={() => navigator.clipboard && navigator.clipboard.writeText(window.location.href)}
                className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs flex items-center gap-1.5 transition-colors"
                title="Copy Link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition-colors"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
