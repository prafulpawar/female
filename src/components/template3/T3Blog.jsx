import React, { useState } from 'react';
import { BLOG_POSTS } from '../../data/fbfData';
import { Clock, Eye, ArrowUpRight, Star, PenTool, BookOpen } from 'lucide-react';

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

      {/* 1. HERO (Full Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="max-w-2xl space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-[#FDF289] inline-block">
                COMMUNITY VOICES & CRITICAL ESSAYS
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal tracking-tight text-[#FDF289] leading-tight">
                From Our Blog & Journal
              </h2>
              <p className="text-white/85 text-sm sm:text-base font-light leading-relaxed">
                Centering Black feminist perspectives, climate justice, cultural critique, and stories of resistance.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-bold transition-all cursor-pointer ${selectedCategory === cat
                    ? 'bg-[#FDF289] text-slate-950 shadow-xs'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURED STORY SPREAD (Full Butter Yellow Background) */}
      {featuredPost && (
        <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              onClick={() => onSelectPost(featuredPost)}
              className="rounded-3xl bg-white border border-amber-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 text-left group"
            >
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full bg-stone-900 overflow-hidden relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                />
                <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-950 text-[#FDF289] shadow-xs">
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
          </div>
        </section>
      )}

      {/* 3. ARTICLES GRID (Full Warm Blush Rose Background) */}
      <section className="py-20 sm:py-24 bg-[#F7E8E8] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold block">
              DISPATCHES & REFLECTIONS
            </span>
            <h3 className="text-3xl sm:text-5xl font-quando font-normal text-[#34252A]">
              Latest Essays & Cultural Critique
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/75 font-light">
              Authored by Black feminist researchers, fellows, and guest community scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAD5D5] shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="h-52 bg-stone-900 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = '/images/branded/hero-banner.jpg'; }}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#873F50] shadow-xs">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-[#34252A]/50 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-quando font-normal text-xl text-[#34252A] group-hover:text-[#873F50] transition-colors leading-snug">
                      {post.title}
                    </h4>

                    <p className="text-xs text-[#34252A]/75 line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[#34252A]/70 font-medium">{post.author}</span>
                  <span className="font-bold text-[#873F50] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. READER REVIEWS & JOURNAL ENGAGEMENT (Full Warm Cream Background) */}
      <section className="py-20 sm:py-24 bg-[#FFF9F2] text-[#34252A] border-b border-[#EAD5D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#873F50] font-bold">
              READER REACTIONS
            </span>
            <h3 className="text-3xl sm:text-4xl font-quando font-normal text-[#34252A]">
              Feedback from the Community
            </h3>
            <p className="text-xs sm:text-sm text-[#34252A]/75 font-light">
              Scholars, educators, and youth on the impact of FBF critical essays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#34252A] shadow-md space-y-4 border border-[#EAD5D5]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#34252A]/85 italic leading-relaxed">
                "The essay on Crashing Through Ceilings was assigned as required reading in our gender studies seminar. Nuanced, intersectional, and unapologetically rooted in Black Canadian experience."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <strong className="text-[#873F50]">Dr. M. Adebayo</strong>
                <span className="text-slate-400 font-mono text-[11px]">York University Faculty</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#34252A] shadow-md space-y-4 border border-[#EAD5D5]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#34252A]/85 italic leading-relaxed">
                "Environmental racism often ignores Black girls in urban centres. FBF's monograph on climate justice and youth agency brought the conversation to where policy happens."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <strong className="text-[#873F50]">Kendra Scott</strong>
                <span className="text-slate-400 font-mono text-[11px]">Youth Environmental Delegate</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 text-[#34252A] shadow-md space-y-4 border border-[#EAD5D5]">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#34252A]/85 italic leading-relaxed">
                "Reading these articles feels like entering a sisterhood living room. Pure truth-telling, beautiful prose, and no artificial corporate platitudes."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <strong className="text-[#873F50]">Salima Warsame</strong>
                <span className="text-slate-400 font-mono text-[11px]">Community Organizer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL FOR SUBMISSIONS (Full Deep Wine Burgundy Background) */}
      <section className="py-20 sm:py-24 bg-[#873F50] text-[#FFF9F2] border-t border-[#6e3140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#FDF289] font-bold">
            WRITE FOR FUTURE BLACK FEMALE
          </span>
          <h3 className="font-quando text-3xl sm:text-5xl text-white font-normal">
            Pitch a Story or Feminist Monograph
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            We commission essays, book reviews, and cultural criticism from Black women and gender-diverse youth. All published writers are paid honorariums.
          </p>
          <div className="pt-2">
            <a
              href="mailto:editorial@futureblackfemale.com?subject=Pitch Submission - FBF Journal"
              className="px-8 py-3.5 rounded-full bg-[#FDF289] hover:bg-[#faee70] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              <PenTool className="w-4 h-4 text-slate-950" />
              <span>SUBMIT AN EDITORIAL PITCH</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
