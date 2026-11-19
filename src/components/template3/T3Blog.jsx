import React, { useState } from 'react';
import { BLOG_POSTS } from '../../data/fbfData';
import { Clock, Eye, Heart, ArrowUpRight, Sparkles, PenTool, BookOpen } from 'lucide-react';

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

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div id="t3-blog" className="text-[#34252A] font-sans">
      
      {/* 1. EDITORIAL HEADER & FEATURED STORY (Full Warm Cream Background) */}
      <section className="py-20 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7E8E8] text-[#873F50] text-xs font-mono font-bold uppercase tracking-widest border border-[#D68D82]/30 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D68D82]" />
                <span>COMMUNITY VOICES & CRITICAL ESSAYS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-quando font-normal tracking-tight text-[#34252A] leading-tight">
                From Our Blog & Journal
              </h2>
              <p className="text-[#34252A]/80 text-sm sm:text-base mt-2 font-light leading-relaxed">
                Centering Black feminist perspectives, climate justice, cultural critique, and stories of resistance.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-full border border-[#EAD5D5] text-xs shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
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

          {/* Featured Hero Article Spread */}
          {featuredPost && (
            <div 
              onClick={() => onSelectPost(featuredPost)}
              className="rounded-3xl bg-white border border-[#EAD5D5] overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 text-left group"
            >
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full bg-stone-900 overflow-hidden relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                />
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-[#873F50] shadow-xs">
                  FEATURED EDITORIAL
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#873F50] font-mono font-bold uppercase">
                    <span>{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h3 className="font-quando font-normal text-2xl sm:text-3xl text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>

                  <p className="text-sm text-[#34252A]/80 leading-relaxed font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EAD5D5] flex items-center justify-between text-xs text-[#34252A]/70">
                  <span className="font-semibold text-[#873F50]">{featuredPost.author}</span>
                  <span className="font-bold text-[#873F50] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Monograph</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 2. ARTICLES GRID (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-28 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#873F50]">
              COMMUNITY VOICES & ESSAYS
            </span>
            <h3 className="text-2xl sm:text-4xl font-quando font-normal text-[#34252A]">
              Latest Dispatches & Reflections
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAD5D5] shadow-xs hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="relative h-52 w-full bg-stone-900 overflow-hidden">
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

                    <h4 className="text-lg font-quando font-normal text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                      {post.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#34252A]/70 line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-[#34252A]/60">
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

      {/* 3. SUBMISSIONS & WRITING CIRCLES (Full Royal Purple Background) */}
      <section className="py-20 sm:py-24 bg-[#5B3396] text-white border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-[#FDF289] text-xs font-mono font-bold uppercase tracking-widest border border-white/20">
                WRITE FOR FUTURE BLACK FEMALE
              </span>
              <h2 className="font-quando text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FDF289] leading-tight">
                Your Words. Your Sovereign Voice.
              </h2>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
                We accept quarterly essay submissions, book reviews, poetry, and policy critique from Black girls and young women across Canada. Writers receive editorial mentorship and an honorarium upon publication.
              </p>
              <div className="pt-2">
                <a
                  href="https://futureblackfemale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
                >
                  <PenTool className="w-4 h-4 text-slate-950" />
                  <span>Submit Pitch / Article</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/25 aspect-[4/3] bg-stone-900 group">
                <img
                  src="/images/downloaded/programs_75.jpg"
                  alt="Melanin & Manuscripts writing circle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
