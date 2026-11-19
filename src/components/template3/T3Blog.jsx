import React, { useState } from 'react';
import { BLOG_POSTS } from '../../data/fbfData';
import { Clock, Eye, Heart, ArrowUpRight, Sparkles } from 'lucide-react';

export default function T3Blog({ onSelectPost }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Feminist Perspectives',
    'Crashing through Ceilings',
    'Environmental Justice'
  ];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="t3-blog" className="py-20 bg-[#FFF9F2] text-[#34252A] font-sans border-b border-[#F7E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-bold uppercase tracking-widest border border-[#D68D82]/30 mb-2">
              <Sparkles className="w-3 h-3 text-[#D68D82]" />
              <span>COMMUNITY VOICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-quando font-normal tracking-tight text-[#34252A] leading-tight">
              From Our Blog
            </h2>
            <p className="text-[#34252A]/80 text-sm sm:text-base mt-2 font-light leading-relaxed">
              Centering Black feminist perspectives, climate justice, cultural critique, and stories of resistance.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-[#F7E8E8]/70 p-1.5 rounded-full border border-[#EAD5D5] text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#873F50] text-white shadow-xs'
                    : 'text-[#34252A]/70 hover:text-[#873F50]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-white rounded-3xl overflow-hidden border border-[#F7E8E8] shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full bg-stone-900 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#873F50] shadow-xs">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#34252A]/60">
                    <span className="font-semibold text-[#873F50]">{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#34252A]/70 line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F7E8E8] flex items-center justify-between text-xs text-[#34252A]/60">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#34252A]/40" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1 text-rose-500 font-medium">
                    <Heart className="w-3.5 h-3.5 fill-rose-500" />
                    {post.likes}
                  </span>
                </div>

                <span className="font-bold text-[#873F50] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
