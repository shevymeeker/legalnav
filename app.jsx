import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Shield, Gavel, Scale, Briefcase, FileSearch, 
  Handshake, FileText, SplitSquareHorizontal, Users, Clock, 
  RotateCcw, AlertTriangle, Network, Paperclip, Menu, X, 
  ChevronRight, ChevronLeft, Search, Loader2, Library
} from 'lucide-react';


import { SECTIONS } from './content.js';


export default function App() {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [markedLoaded, setMarkedLoaded] = useState(false);

  // Dynamically load the 'marked' CDN library to guarantee robust parsing 
  // without relying on complex internal React node translations.
  useEffect(() => {
    if (window.marked) {
      setMarkedLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    script.async = true;
    script.onload = () => setMarkedLoaded(true);
    document.body.appendChild(script);
  }, []);

  // Handle section changes safely
  const activeSectionIndex = SECTIONS.findIndex(s => s.id === activeTab);
  const activeSection = activeSectionIndex >= 0 ? SECTIONS[activeSectionIndex] : SECTIONS[0];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const scrollContainer = document.getElementById('main-scroll-area');
    if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (activeSectionIndex < SECTIONS.length - 1) {
      handleTabChange(SECTIONS[activeSectionIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (activeSectionIndex > 0) {
      handleTabChange(SECTIONS[activeSectionIndex - 1].id);
    }
  };

  // Convert raw markdown into robust HTML string
  const renderMarkdownContent = () => {
    if (!markedLoaded || !window.marked) {
      return ''; // Handled by loading spinner UI below
    }

    let rawText = activeSection?.content || '';


    // Strip "NA." / "1A." number+letter prefix from h2 headings (e.g. "## **1A. Title**")
    rawText = rawText.replace(/^(##\s+(?:\*\*)?\d+[A-Z]\.\s*)/gim, (_, prefix) => {
      return prefix.replace(/\d+[A-Z]\.\s*/i, '');
    });

    // Safely pre-process specific callouts to maintain beautiful styling
    // before the markdown parser converts them into paragraph blocks.
    rawText = rawText.replace(/\*\*Disclaimer.*?\*\*\s*(.*?)$/gim, '<div class="disclaimer"><strong>Disclaimer:</strong> $1</div>');

    // Parse using the external library which flawlessly handles tables/lists/etc.
    return window.marked.parse(rawText, { breaks: true, gfm: true });
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* ========================================================
        GLOBAL STYLES FOR THE 'MARKED' HTML OUTPUT 
        ========================================================
      */}
      <style>{`
        .markdown-body { font-size: 1.05rem; line-height: 1.75; color: #334155; }
        .markdown-body h1 { font-size: 2.25rem; font-weight: 800; color: #0f172a; margin: 2rem 0 1rem 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; letter-spacing: -0.025em; }
        .markdown-body h2 { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 2.5rem 0 1rem 0; }
        .markdown-body h3 { font-size: 1.25rem; font-weight: 600; color: #475569; margin: 2rem 0 0.75rem 0; }
        .markdown-body p { margin-bottom: 1.25rem; }
        .markdown-body ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #334155; }
        .markdown-body ul li { margin-bottom: 0.5rem; }
        .markdown-body ul li::marker { color: #3b82f6; }
        .markdown-body ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #334155; font-weight: 500; }
        .markdown-body ol li { margin-bottom: 0.5rem; }
        .markdown-body ol li > * { font-weight: 400; }
        .markdown-body strong { font-weight: 700; color: #0f172a; }
        .markdown-body em { font-style: italic; color: #475569; }
        .markdown-body hr { border: 0; border-top: 2px solid #e2e8f0; margin: 3rem 0; }
        .markdown-body table { width: 100%; border-collapse: collapse; margin: 2rem 0; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); font-size: 0.95rem; }
        .markdown-body thead { background-color: #f8fafc; border-bottom: 2px solid #e2e8f0; }
        .markdown-body th { padding: 1rem; font-weight: 700; text-align: left; color: #0f172a; }
        .markdown-body td { padding: 1rem; border-bottom: 1px solid #e2e8f0; color: #334155; background-color: #ffffff; }
        .markdown-body tr:last-child td { border-bottom: none; }
        
        .disclaimer { background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 1.25rem 1.5rem; margin: 2rem 0; font-size: 0.95rem; color: #b45309; border-radius: 0 0.5rem 0.5rem 0; }
        .gap-note { background-color: #fef2f2; border: 1px solid #fecaca; padding: 1rem 1.25rem; margin: 1.5rem 0; font-size: 0.95rem; color: #b91c1c; border-radius: 0.5rem; font-weight: 500; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
      `}</style>

      {/* MOBILE BACKDROP */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* SIDEBAR NAVIGATION */}
      <nav className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Court Navigation</h2>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Daviess County, KY</p>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Search / Filter */}
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Filter chapters..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 text-slate-200 text-sm rounded-md pl-9 pr-4 py-2 border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Modules List */}
        <div className="flex-1 overflow-y-auto px-3 pb-6 custom-scrollbar">
          <div className="space-y-1">
            {SECTIONS.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase())).map((section) => {
              const Icon = section.icon;
              const isActive = activeTab === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleTabChange(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group
                    ${isActive 
                      ? 'bg-blue-600/10 text-blue-400 shadow-inner' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }
                  `}
                >
                  <div className={`${isActive ? 'text-blue-500' : 'text-slate-500 group-hover:text-slate-400'}`}>
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className="truncate">{section.title}</span>
                  {isActive && (
                    <div className="ml-auto w-1 h-4 bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 font-medium">
          Exhaustive Working Notes<br/>
          Civic Education Resource
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full min-w-0 bg-slate-50">
        
        {/* Mobile Header Topbar */}
        <header className="lg:hidden flex items-center justify-between bg-white border-b border-slate-200 px-4 py-3 shadow-sm z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-slate-600 hover:text-slate-900 focus:outline-none p-1 bg-slate-100 rounded-md">
              <Menu size={24} />
            </button>
            <span className="font-bold text-slate-800 truncate">Criminal Court Navigation</span>
          </div>
        </header>

        {/* Scrollable Content Container */}
        <div id="main-scroll-area" className="flex-1 overflow-y-auto scroll-smooth">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-12 pb-24">
            
            {/* Breadcrumb / Section Header Indicator */}
            <div className="flex items-center text-sm font-medium text-blue-600 mb-6 px-2">
              <BookOpen size={16} className="mr-2" />
              <span>Daviess County Minicourse</span>
              <ChevronRight size={14} className="mx-2 text-slate-400" />
              <span className="text-slate-600">{activeSection.title}</span>
            </div>

            {/* Document Render Box */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ring-1 ring-slate-900/5 min-h-[500px]">
              <div className="p-6 sm:p-10 lg:p-12">
                {!markedLoaded ? (
                   <div className="flex flex-col items-center justify-center h-64 text-slate-400 gap-4">
                      <Loader2 className="animate-spin text-blue-500" size={32} />
                      <p>Loading document renderer...</p>
                   </div>
                ) : (
                  <div 
                    className="markdown-body" 
                    dangerouslySetInnerHTML={{ __html: renderMarkdownContent() }} 
                  />
                )}
              </div>
            </div>

            {/* Bottom Navigation Actions */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-200">
              {activeSectionIndex > 0 ? (
                <button 
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium shadow-sm hover:shadow"
                >
                  <ChevronLeft size={18} />
                  <span className="hidden sm:inline">Previous Chapter</span>
                  <span className="sm:hidden">Prev</span>
                </button>
              ) : <div />}

              {activeSectionIndex < SECTIONS.length - 1 ? (
                <button 
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow"
                >
                  <span className="hidden sm:inline">Next Chapter</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight size={18} />
                </button>
              ) : <div />}
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
