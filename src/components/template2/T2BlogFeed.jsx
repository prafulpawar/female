import React, { useState } from 'react';
import { ArrowRight, Clock, BookOpen, Sparkles, User, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../../data/fbfData';

export default function T2BlogFeed({ onSelectPost }) {
  const [viewMode, setViewMode] = useState('spread'); // 'spread' | 'grid' | 'reader'
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Feminist Perspectives', 'Environmental Justice', 'Crashing through Ceilings'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const featuredPost = filteredPosts[0] || BLOG_POSTS[0];
  const supportingPosts = filteredPosts.slice(1);

  return (
    <section id="t2-blog" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-6 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Public Commentary & Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
              Community Commentary & Blog
            </h2>
            <p className="text-slate-600 text-sm max-w-xl font-light">
              Critical analysis of structural barriers, environmental equity, and Black youth agency.
            </p>
          </div>

          {/* Interactive Commentary View Switcher */}
          <div className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-full text-xs shadow-2xs shrink-0">
            <span className="text-[10px] font-mono font-bold uppercase px-2 text-slate-400">Commentary View:</span>
            <button
              onClick={() => setViewMode('spread')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${viewMode === 'spread' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
            >
              Editorial Spread
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
            >
              Masonry Cards
            </button>
            <button
              onClick={() => setViewMode('reader')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${viewMode === 'reader' ? 'bg-[#7C3AED] text-white' : 'text-slate-600 hover:text-[#7C3AED]'
                }`}
            >
              Reader Column
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat
                ? 'bg-purple-100 text-[#7C3AED] border border-purple-300'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VIEW 1: MAGAZINE EDITORIAL SPREAD */}
        {viewMode === 'spread' && (
          <div className="space-y-10 animate-fade-in text-left">

            {/* Featured Lead Essay */}
            <div
              onClick={() => onSelectPost(featuredPost)}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-[#7C3AED] transition-all p-8 sm:p-12 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-[#7C3AED] uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h3 className="font-quando text-2xl sm:text-4xl text-slate-900 group-hover:text-[#7C3AED] transition-colors leading-tight font-normal">
                  {featuredPost.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span className="font-semibold text-slate-800">By {featuredPost.author}</span>
                  <span className="text-[#7C3AED] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 rounded-2xl p-8 flex flex-col justify-between h-full min-h-[240px] border border-purple-100">
                <BookOpen className="w-8 h-8 text-[#7C3AED]" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-purple-900 font-semibold">Community Dispatch</p>
                  <p className="font-serif italic text-xs text-slate-700">"Centering Black feminist perspectives, climate justice, cultural critique, and stories of resistance."</p>
                </div>
              </div>
            </div>

            {/* Supporting Essays Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onSelectPost(post)}
                  className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between space-y-4 hover:border-[#7C3AED] transition-all cursor-pointer group shadow-xs hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-bold text-[#7C3AED] uppercase tracking-wider">{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#7C3AED]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h4 className="font-quando font-normal text-lg text-slate-900 group-hover:text-[#7C3AED] transition-colors leading-snug">
                      {post.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>By {post.author}</span>
                    <span className="text-[#7C3AED] font-bold group-hover:underline flex items-center gap-1">
                      Read Essay
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

        {/* VIEW 2: MASONRY CARDS GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in text-left">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="bg-white border border-slate-200 rounded-3xl p-7 flex flex-col justify-between space-y-5 hover:border-[#7C3AED] transition-all cursor-pointer group shadow-xs hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-3 py-0.5 rounded-full bg-purple-50 text-[#7C3AED] font-bold uppercase tracking-wider">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#7C3AED]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-quando font-normal text-xl text-slate-900 group-hover:text-[#7C3AED] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-4 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>By {post.author}</span>
                  <span className="text-[#7C3AED] font-bold group-hover:underline flex items-center gap-1">
                    Read Essay
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* VIEW 3: READER COLUMN */}
        {viewMode === 'reader' && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in text-left">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#7C3AED] transition-colors cursor-pointer space-y-2 group"
              >
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="font-bold text-[#7C3AED]">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="font-quando font-normal text-xl text-slate-900 group-hover:text-[#7C3AED] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
