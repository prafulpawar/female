import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, PenTool, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS, ORG_DATA } from '../../data/fbfData';

export default function T1Blog({ onSelectPost }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Climate & Policy', 'Career Strategies', 'Youth Wellbeing'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const featuredPost = filteredPosts[0] || BLOG_POSTS[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div id="blog-page" className="bg-[#FAF8F5] text-[#1B2828] font-dm">

      {/* 1. HERO HEADER (Royal Electric Indigo Background) */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white border-b border-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left">
          <p className="text-xs uppercase tracking-wider text-[#FDF289] font-bold">
            Community Voices & Critical Essays
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-quando font-normal text-[#FDF289] max-w-4xl leading-tight">
            From Our Blog & Journal
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            Centering Black feminist perspectives, climate justice, cultural critique, and stories of resistance from girls and young women across Canada.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FDF289] text-slate-950 font-bold shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FEATURED HERO MONOGRAPH SPREAD (Full Butter Yellow Background) */}
      {featuredPost && (
        <section className="py-20 sm:py-24 bg-[#FDF289] text-slate-950 border-b border-amber-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              onClick={() => onSelectPost(featuredPost)}
              className="bg-white rounded-[2.5rem] border border-amber-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-900 relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 text-[#FDF289] text-xs font-bold uppercase tracking-wider">
                    Featured Lead Essay
                  </span>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-stone-500 font-semibold">
                      <span className="text-[#5B60E6] font-bold uppercase tracking-wider">{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#5B60E6]" />
                        <span>{featuredPost.readTime}</span>
                      </span>
                    </div>

                    <h2 className="font-quando font-normal text-2xl sm:text-3xl lg:text-4xl text-[#1B2828] group-hover:text-[#5B60E6] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                    <span className="text-xs text-stone-400 font-medium">{featuredPost.date}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5B60E6] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                      <span>Read Full Essay</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SUPPORTING ARTICLES GRID */}
      {remainingPosts.length > 0 && (
        <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8DFC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-left space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
                Recent Dispatches
              </span>
              <h3 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
                More Articles & Reflections
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {remainingPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onSelectPost(post)}
                  className="bg-white border-2 border-[#1B2828]/10 rounded-3xl overflow-hidden shadow-xs hover:border-[#D48B28] hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-56 overflow-hidden bg-stone-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                      />
                    </div>

                    <div className="p-6 sm:p-7 space-y-3">
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="font-bold text-[#B45309] uppercase tracking-wider">{post.category}</span>
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#D48B28]" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h4 className="font-quando font-normal text-xl text-[#1B2828] group-hover:text-[#D48B28] transition-colors leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-2">
                    <span className="text-xs text-stone-400 font-medium">{post.date}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D48B28] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 4. WRITE FOR FUTURE BLACK FEMALE */}
      <section className="py-20 sm:py-24 bg-[#5B60E6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FDF289] block">
                Community Writing Submissions
              </span>
              <h3 className="font-quando text-2xl sm:text-4xl text-white font-normal leading-tight">
                Your Words. Your Sovereign Voice.
              </h3>
              <p className="text-white/85 text-sm leading-relaxed font-light">
                We accept quarterly essay submissions, book reviews, poetry, and policy critique from Black girls and young women across Canada. Writers receive editorial mentorship and an honorarium upon publication.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`mailto:${ORG_DATA.contact.generalEmail}?subject=Blog%20Submission%20Inquiry`}
                className="px-8 py-4 rounded-full bg-[#FDF289] hover:bg-[#faeb60] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <PenTool className="w-4 h-4 text-slate-950" />
                <span>Submit Your Story</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
