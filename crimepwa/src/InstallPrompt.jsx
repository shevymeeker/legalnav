import React, { useState, useEffect } from 'react';
import { Download, X, Share2, BookOpen } from 'lucide-react';

const STORAGE_KEY = 'legalnav-install-prompted';

function isIOS() {
  return /ipad|iphone|ipod/i.test(navigator.userAgent) && !window.MSStream;
}

function isInStandaloneMode() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    if (isInStandaloneMode() || localStorage.getItem(STORAGE_KEY)) return;

    if (isIOS()) {
      setIos(true);
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const t = setTimeout(() => setShow(true), 1200);
      // store handler cancel ref isn't needed — event fires once
      return () => clearTimeout(t);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  const install = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
    }
    dismiss();
  };

  if (!show) return null;

  return (
    <>
      <div className="install-backdrop" onClick={dismiss} />
      <div className="install-prompt" role="dialog" aria-modal="true" aria-label="Install app">
        <button className="install-close" onClick={dismiss} aria-label="Dismiss">
          <X size={14} />
        </button>

        <div className="install-header">
          <div className="install-icon">
            <BookOpen size={20} strokeWidth={1.5} />
          </div>
          <div>
            <div className="install-title">Add to Home Screen</div>
            <div className="install-sub">Wildman Legal Nav</div>
          </div>
        </div>

        <p className="install-body">
          Install for offline access — read the full guide without a connection,
          just like an app.
        </p>

        {ios ? (
          <div className="install-ios-steps">
            <div className="install-ios-step">
              <span className="install-ios-num">1</span>
              <span>Tap the <Share2 size={13} className="install-ios-icon" /> <strong>Share</strong> button in Safari</span>
            </div>
            <div className="install-ios-step">
              <span className="install-ios-num">2</span>
              <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
            </div>
            <div className="install-ios-step">
              <span className="install-ios-num">3</span>
              <span>Tap <strong>Add</strong> to confirm</span>
            </div>
            <button className="install-btn install-btn--secondary" onClick={dismiss}>
              Got it
            </button>
          </div>
        ) : (
          <div className="install-actions">
            <button className="install-btn install-btn--primary" onClick={install}>
              <Download size={14} />
              Install
            </button>
            <button className="install-btn install-btn--secondary" onClick={dismiss}>
              Maybe later
            </button>
          </div>
        )}
      </div>
    </>
  );
}
