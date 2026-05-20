import { useState, useEffect } from 'react';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [activeModal, setActiveModal] = useState(null); // 'terms' | null

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (path === '/privacy') {
      document.title = "Privacy Policy — Ludam Studio";
    } else {
      document.title = "Ludam Studio — Shaping Delightful Discoveries";
    }
  }, [path]);

  const navigateTo = (newPath, e) => {
    if (e) e.preventDefault();
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openModal = (type, e) => {
    e.preventDefault();
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="app-container">
      {/* Background Glowing Orbs (Soft pastel gradients for bright mode) */}
      <div className="glow-orb-container">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {path === '/privacy' ? (
        <>
          {/* Header / Navbar */}
          <header className="header">
            <div className="nav-container">
              <a href="/" className="logo" onClick={(e) => navigateTo('/', e)} id="nav-logo">
                LUDAM STUDIO<span></span>
              </a>
              <ul className="nav-links">
                <li><a href="/" className="nav-link" onClick={(e) => navigateTo('/', e)} id="nav-home">Home</a></li>
              </ul>
            </div>
          </header>

          {/* Privacy Policy Page Content */}
          <section className="section privacy-page" style={{ paddingTop: '8rem', maxWidth: '800px' }}>
            <div className="contact-card" style={{ textAlign: 'left', padding: '4rem 3rem' }}>
              <h1 className="contact-title" style={{ fontSize: '2.8rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Privacy Policy
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}><strong>Effective Date: May 20, 2026</strong></p>
              
              <div className="privacy-content" style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
                <p>Ludam Studio ("we", "our", or "us") is highly committed to protecting the privacy of our players and users. This Privacy Policy explains how we handle information in connection with our mobile applications and related services.</p>
                
                <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>1. Information We Collect</h3>
                <p>We believe in data minimization. We only collect the minimal information necessary to run and improve our games. For analytics and performance optimization, we may integrate trusted third-party services (such as Google Firebase or Unity Analytics) which automatically collect non-personally identifiable technical details, such as device advertising identifiers (ADID/IDFA), device type, and basic in-game progression telemetry.</p>
                
                <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>2. How We Use Information</h3>
                <p>The technical data and aggregated statistics we collect are utilized solely to:</p>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li>Develop new game mechanics and enhance overall stability.</li>
                  <li>Respond to user support inquiries and provide assistance.</li>
                  <li>Analyze usage patterns and optimize user retention.</li>
                </ul>
                
                <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>3. Data Retention and Deletion</h3>
                <p>We retain non-identifiable technical data only for as long as necessary to fulfill the operational analytical purposes outlined above, after which it is deleted or permanently anonymized in accordance with applicable laws.</p>
                
                <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>4. Contact & Support</h3>
                <p>If you have any questions or concerns regarding our privacy practices, please contact our data compliance officer at:</p>
                <p style={{ marginBottom: '2.5rem' }}>Email: <a href="mailto:contact@ludamstudio.com" style={{ color: '#7c3aed', fontWeight: '600', textDecoration: 'none' }}>contact@ludamstudio.com</a></p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <a href="/" className="btn btn-primary" onClick={(e) => navigateTo('/', e)} id="btn-back-home" style={{ padding: '0.8rem 2rem', borderRadius: '12px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  Back to Home
                </a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Header / Navbar */}
          <header className="header">
            <div className="nav-container">
              <a href="#" className="logo" id="nav-logo" onClick={(e) => navigateTo('/', e)}>
                LUDAM STUDIO<span></span>
              </a>
              <ul className="nav-links">
                <li><a href="#game" className="nav-link" id="nav-game">Game</a></li>
                <li><a href="#values" className="nav-link" id="nav-values">Values</a></li>
                <li><a href="#contact" className="nav-link" id="nav-contact">Contact</a></li>
              </ul>
            </div>
          </header>

          {/* Hero Section */}
          <section className="hero">
            <span className="hero-tag">Play, Learn, and Discover</span>
            <h1 className="hero-title">
              Shaping Delightful<br />
              <span>Discoveries</span>
            </h1>
            <p className="hero-subtitle">
              Ludam Studio is an independent game brand dedicated to blurring the line between play and learning. 
              We combine intuitive mechanics, warm tactile aesthetics, and cozy storytelling to bring simple joy and clever discoveries to players worldwide.
            </p>
            <div className="hero-buttons">
              <a href="#game" className="btn btn-primary" id="btn-explore">
                Explore Our Game
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#contact" className="btn btn-secondary" id="btn-contact-hero">Talk to Us</a>
            </div>
          </section>

          {/* Showcase / Primary Game Section */}
          <section className="section" id="game" style={{ borderTop: '1px solid #e2e8f0' }}>
            <div className="section-header">
              <span className="section-label">Our Flagship Title</span>
              <h2 className="section-title">The Magic of Hangul Pop</h2>
            </div>

            <div className="games-grid">
              {/* Flagship Game: 한글팝 */}
              <div className="game-card">
                <div className="game-info">
                  <span className="game-badge">Flagship Game</span>
                  <h3 className="game-title">Hangul Pop 🎈</h3>
                  <p className="game-desc">
                    Embark on a vibrant language-learning adventure where Korean letters come to life! 
                    Hangul Pop is an engaging edutainment puzzle game designed to help you master Hangul consonants and vowels through intuitive shooting, matching, and word-making gameplay. 
                    Featuring tactile 3D claymorphic graphics and delightful pop sound effects, it turns learning into pure, addictive fun. 
                    With diverse modes ranging from match puzzles to speed shooting, players of all ages around the globe can fall in love with Hangul in just seconds.
                  </p>
                  <div className="store-badges">
                    <a href="https://play.google.com" className="store-btn" target="_blank" rel="noopener noreferrer" id="btn-playstore-hangul">
                      <svg viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.1-60.1 118.1 26.8c12.1 6.1 20 18.2 20 32.4 0 14.1-7.9 26.2-20 32.4c0-.1-.1-.1-.1-.1-.1 0-.1 0 0 0zm-86.7 52.1L104.6 499l220.7-126.7 60.2-60.2-5.2-14.4z"/></svg>
                      Google Play
                    </a>
                    <a href="https://apps.apple.com" className="store-btn" target="_blank" rel="noopener noreferrer" id="btn-appstore-hangul">
                      <svg viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48-20.7-77.5-20.7-38.3 0-76.1 21.7-95.7 56-40.4 70.3-10.4 174.4 28.3 229.4 19 27.2 41.7 57.5 71 56.4 28.3-1.1 38.9-18.3 71.1-18.3 32.1 0 42.1 18.3 71.6 17.8 30.2-.5 50.3-27.7 69-54.7 21.7-31.7 30.5-62.6 31-64.2-1-1.3-59.5-22.8-59.8-91.7zM296.2 98.5c25-30.5 41.8-72.9 37.2-115.1-36.2 1.5-80.1 24.1-106.1 54.6-22.4 26-42.1 69-36.9 110.1 40.2 3.1 80.9-19.1 105.8-49.6z"/></svg>
                      App Store
                    </a>
                  </div>
                </div>
                <div className="game-visual">
                  <div className="visual-clay"></div>
                  <div className="visual-clay-sub"></div>
                  <div className="visual-title-overlay">Hangul Pop 🎈</div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="section" id="values" style={{ borderTop: '1px solid #e2e8f0' }}>
            <div className="section-header">
              <span className="section-label">Core Philosophy</span>
              <h2 className="section-title">Values We Cherish</h2>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🧠</div>
                <h3 className="value-title">Intuitively Smart</h3>
                <p className="value-desc">
                  We design frictionless UX that is immediately understood without instructions. 
                  By embedding educational concepts into natural dragging and matching mechanics, we eliminate the stress of learning and focus entirely on playful intelligence.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🧸</div>
                <h3 className="value-title">Claymorphic Heart</h3>
                <p className="value-desc">
                  We strive to deliver warm comfort through digital screens. 
                  Our cozy, tactile 3D clay-style visuals and soothing pastel color combinations wrap every gaming moment in emotional warmth and cozy delight.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌐</div>
                <h3 className="value-title">Borderless Joy</h3>
                <p className="value-desc">
                  We build global casual content that connects people regardless of age or nationality. 
                  Through dedicated multi-language localization and universal design, we aim to be a delightful bridge for global communication and learning.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section contact-section" id="contact">
            <div className="contact-card">
              <h2 className="contact-title">Connect with<br />Ludam Studio</h2>
              <p className="contact-desc">
                Whether you have an exciting business proposal, a collaboration idea, or simply want to share your thoughts on our games, our door is always wide open. 
                Let's make the world a little more delightful together!
              </p>
              <a href="mailto:contact@ludamstudio.com" className="email-btn" id="btn-email-mailto">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                contact@ludamstudio.com
              </a>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#" className="footer-logo" onClick={(e) => navigateTo('/', e)}>
              LUDAM STUDIO<span></span>
            </a>
            <p className="footer-desc">
              Ludam Studio is an independent creative game studio designing cozy, inspiring casual puzzle mobile games that fill daily life with warm smiles and playful discoveries.
            </p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#game" className="footer-link">Game</a>
              <a href="#values" className="footer-link">Values</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <div className="footer-links-col">
              <span className="footer-col-title">Legal</span>
              <a href="/privacy" className="footer-link" onClick={(e) => navigateTo('/privacy', e)} id="link-privacy">Privacy Policy</a>
              <a href="#" className="footer-link" onClick={(e) => openModal('terms', e)} id="link-terms">Terms of Service</a>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Ludam Studio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Legal Modals (Terms of Service) */}
      {activeModal === 'terms' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Terms of Service</h2>
              <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p><strong>Effective Date: May 17, 2026</strong></p>
              
              <h3>Article 1 (Purpose)</h3>
              <p>These Terms of Service govern the conditions, rules, and procedures for using all mobile applications, games, and related services (collectively, the "Services") provided by Ludam Studio ("Company") to players worldwide.</p>
              
              <h3>Article 2 (Effect and Modification)</h3>
              <p>The Company reserves the right to modify these Terms at any time under reasonable circumstances and in compliance with global user-protection standards. Modified terms become effective upon being published within the Services or on our official website.</p>
              
              <h3>Article 3 (User Obligations)</h3>
              <p>Users must not engage in any of the following unauthorized activities while using our Services:</p>
              <ul>
                <li>Replicating, decompiling, or commercially redistributing game assets or resources without prior written consent.</li>
                <li>Manipulating game databases, exploiting software vulnerabilities (bugs), or engaging in unfair play.</li>
                <li>Infringing upon the copyrights or intellectual property rights of the Company or others.</li>
              </ul>
              
              <h3>Article 4 (Limitation of Liability)</h3>
              <p>The Company is exempt from liability for service interruptions, data losses, or performance issues caused by force majeure events, including but not limited to natural disasters, war, government restrictions, network outages, or device-side compatibility faults beyond our reasonable control.</p>
              
              <h3>Article 5 (Governing Law)</h3>
              <p>These Terms shall be governed by, construed, and enforced in accordance with applicable international laws. Any disputes arising between the Company and the user shall be settled under the jurisdiction of the competent court corresponding to the Company's registered headquarters.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

