import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data/fbfData';

export default function T2BlogFeed({ onSelectPost }) {
  return (
    <section id="t2-blog" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Analysis & Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-slate-900">
              Community Commentary & Blog
            </h2>
            <p className="text-slate-600 text-sm max-w-xl font-light">
              Feminist perspectives, environmental racism in Canada, and cultural reflections.
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#7C3AED] transition-all cursor-pointer group shadow-2xs hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-[#7C3AED] uppercase tracking-wider">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#7C3AED]" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="font-quando font-normal text-lg text-slate-900 group-hover:text-[#7C3AED] transition-colors leading-snug">
                  {post.title}
                </h3>

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
    </section>
  );
}
