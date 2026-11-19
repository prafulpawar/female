import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data/fbfData';

export default function T1Blog({ onSelectPost }) {
  return (
    <section id="blog" className="py-16 lg:py-20 bg-[#FAF8F5] text-[#1B2828] border-b border-[#E8DFC8] font-dm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#E8DFC8] pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D48B28]">
              Dispatches & Essays
            </span>
            <h2 className="text-3xl sm:text-4xl font-quando font-normal text-[#1B2828]">
              Community Blog
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              Feminist perspectives, environmental justice commentary, and reflections on crashing through systemic ceilings.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-white border-2 border-[#1B2828]/10 rounded-xl overflow-hidden shadow-xs hover:border-[#D48B28] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.src = '/images/branded/programs-banner.jpg'; }}
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-bold text-[#D48B28]">{post.category}</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#D48B28]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-quando font-normal text-lg text-[#1B2828] group-hover:text-[#D48B28] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-2">
                <span className="text-xs text-stone-400 font-medium">{post.date}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D48B28] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
