import React, { useState, useCallback } from 'react';
import { marked } from 'marked';
import {
  BookOpen, Shield, Gavel, Scale, Briefcase, FileSearch,
  Handshake, FileText, SplitSquareHorizontal, Users, Clock,
  RotateCcw, AlertTriangle, Network, Paperclip, Menu, X,
  ChevronRight, ChevronLeft, Search, Library
} from 'lucide-react';


import { SECTIONS } from './content.js';


// Phase metadata — color keys match CSS class suffixes
const SECTION_META = {
  intro:      { phase: null,        num: null,  label: 'Introduction' },
  mod1:       { phase: 'arrest',    num: 'I',   label: 'The Arrest' },
  mod2:       { phase: 'appear',    num: 'II',  label: 'Initial Appearance' },
  mod3:       { phase: 'bail',      num: 'III', label: 'Bail Determination' },
  mod4:       { phase: 'counsel',   num: 'IV',  label: 'Legal Representation' },
  mod5:       { phase: 'discovery', num: 'V',   label: 'Discovery' },
  mod6:       { phase: 'pretrial',  num: 'VI',  label: 'Pretrial Proceedings' },
  mod7:       { phase: 'motion',    num: 'VII', label: 'Motion Practice' },
  mod8:       { phase: 'decision',  num: 'VIII',label: 'The Trial Decision' },
  mod9:       { phase: 'trial',     num: 'IX',  label: 'Trial Process' },
  mod10:      { phase: 'sentencing',num: 'X',   label: 'Sentencing' },
  mod11:      { phase: 'appeals',   num: 'XI',  label: 'Appeals' },
  mod12:      { phase: 'collateral',num: 'XII', label: 'Collateral Consequences' },
  mod13:      { phase: 'system',    num: 'XIII',label: 'System Overview' },
  appendices: { phase: 'appendix',  num: null,  label: 'Appendices' },
  resources:  { phase: 'resources', num: null,  label: 'Resource Library' },
};

// Configure marked once at module level — not inside render
marked.setOptions({ breaks: true, gfm: true });

function parseContent(raw) {
  let text = raw.replace(
    /\*\*Disclaimer.*?\*\*\s*(.*?)$/gim,
    '<div class="disclaimer"><strong>Disclaimer:</strong> $1</div>'
  );
  let html = marked.parse(text);
  html = html.replace(
    /<a href="([^"]*\.pdf[^"]*)"/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="pdf-link"'
  );
  return html;
}

const modSections = SECTIONS.filter(s => s.id.startsWith('mod'));

function Sidebar({ activeTab, searchQuery, onSearchChange, onTabChange, progressPct }) {
  return (
    <>
      <div className="sidebar-masthead">
        <div className="sidebar-seal">
          <div className="sidebar-seal-mark">
            <Scale size={17} strokeWidth={1.5} />
          </div>
          <div>
            <div className="sidebar-title">LegalNav</div>
            <div className="sidebar-jurisdiction">Daviess County · Kentucky</div>
          </div>
        </div>
        <div className="sidebar-progress">
          <div className="sidebar-progress-meta">
            <span className="sidebar-progress-label">Course Progress</span>
            <span className="sidebar-progress-pct">{progressPct}%</span>
          </div>
          <div className="sidebar-progress-rule">
            <div className="sidebar-progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-wrap">
          <Search size={13} className="sidebar-search-icon" />
          <input
            type="text"
            className="sidebar-search-input"
            placeholder="Search…"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-nav-section">Table of Contents</div>
        {SECTIONS
          .filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(section => {
            const Icon = section.icon;
            const isActive = activeTab === section.id;
            const meta = SECTION_META[section.id] || {};
            return (
              <button
                key={section.id}
                onClick={() => onTabChange(section.id)}
                className={`nav-item${isActive ? ' active' : ''}`}
              >
                <Icon size={13} className="nav-item-icon" strokeWidth={1.75} />
                <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {section.title}
                </span>
                {meta.num && <span className="nav-item-num">{meta.num}</span>}
              </button>
            );
          })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-footer-text">
          Civic Education Resource<br />
          Not legal advice — consult an attorney
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [animKey, setAnimKey] = useState(0);

  const activeSectionIndex = SECTIONS.findIndex(s => s.id === activeTab);
  const activeSection = activeSectionIndex >= 0 ? SECTIONS[activeSectionIndex] : SECTIONS[0];
  const activeMeta = SECTION_META[activeSection.id] || { phase: null, num: null, label: '' };

  const modIndex = modSections.findIndex(s => s.id === activeTab);
  const progressPct = activeTab === 'intro' ? 0
    : (activeTab === 'appendices' || activeTab === 'resources') ? 100
    : modIndex >= 0 ? Math.round(((modIndex + 1) / modSections.length) * 100)
    : 0;

  const handleTabChange = useCallback((id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    setAnimKey(k => k + 1);
    const el = document.getElementById('main-scroll-area');
    if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNext = () => {
    if (activeSectionIndex < SECTIONS.length - 1) handleTabChange(SECTIONS[activeSectionIndex + 1].id);
  };
  const handlePrev = () => {
    if (activeSectionIndex > 0) handleTabChange(SECTIONS[activeSectionIndex - 1].id);
  };

  const contentHtml = parseContent(activeSection?.content || '');
  const phaseClass = activeMeta.phase ? `page-header--${activeMeta.phase}` : '';

  return (
    <div className="app-shell">

      {/* Desktop sidebar */}
      <div className="sidebar">
        <Sidebar
          activeTab={activeTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onTabChange={handleTabChange}
          progressPct={progressPct}
        />
      </div>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div className="mobile-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile drawer */}
      <div className={`mobile-drawer${isMobileMenuOpen ? ' open' : ''}`}>
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 10 }}>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close">
            <X size={16} />
          </button>
        </div>
        <Sidebar
          activeTab={activeTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onTabChange={handleTabChange}
          progressPct={progressPct}
        />
      </div>

      {/* Main */}
      <div className="main-area">

        {/* Mobile topbar */}
        <div className="mobile-topbar">
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} aria-label="Menu">
            <Menu size={17} />
          </button>
          <div className="mobile-topbar-left">
            <span className="mobile-topbar-title">LegalNav</span>
          </div>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'rgba(240,232,208,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
            {activeSectionIndex + 1}&thinsp;/&thinsp;{SECTIONS.length}
          </span>
        </div>

        <div id="main-scroll-area" className="content-scroll">
          <div className="content-inner animate-in" key={animKey}>

            {/* Editorial page header */}
            <div className={`page-header ${phaseClass}`}>
              <div className="page-header-kicker">
                {activeMeta.num
                  ? activeMeta.title
                  : 'Daviess County Criminal Court Navigation'}
              </div>
              <h1 className="page-header-title">{activeSection.title}</h1>
              <div className="page-header-meta">
                <span className="page-header-tag">
                  <BookOpen size={11} />
                  Daviess County, KY
                </span>
                <span className="page-header-tag">
                  {activeSectionIndex + 1} of {SECTIONS.length}
                </span>
                <span className="page-header-tag">Civic Education</span>
              </div>
            </div>

            {/* Content */}
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Page turn navigation */}
            <div className="page-nav">
              {activeSectionIndex > 0 ? (
                <button className="page-nav-btn page-nav-btn--prev" onClick={handlePrev}>
                  <ChevronLeft size={15} className="page-nav-arrow" />
                  <div className="page-nav-label">
                    <span className="page-nav-hint">← Previous</span>
                    <span className="page-nav-name">{SECTIONS[activeSectionIndex - 1].title}</span>
                  </div>
                </button>
              ) : <div />}

              {activeSectionIndex < SECTIONS.length - 1 ? (
                <button className="page-nav-btn page-nav-btn--next" onClick={handleNext}>
                  <ChevronRight size={15} className="page-nav-arrow" />
                  <div className="page-nav-label">
                    <span className="page-nav-hint">Next →</span>
                    <span className="page-nav-name">{SECTIONS[activeSectionIndex + 1].title}</span>
                  </div>
                </button>
              ) : <div />}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
