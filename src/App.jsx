import { useState } from 'react';

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

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

      {/* Header / Navbar */}
      <header className="header">
        <div className="nav-container">
          <a href="#" className="logo" id="nav-logo">
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
          루담 스튜디오(Ludam Studio)는 놀이와 배움의 경계를 감성적으로 허무는 캐주얼 게임 브랜드입니다. 
          우리는 직관적인 몰입감과 독창적인 따뜻함을 결합하여, 바쁜 현대인의 일상에 잔잔한 미소와 유쾌한 발견을 선물합니다.
        </p>
        <div className="hero-buttons">
          <a href="#game" className="btn btn-primary" id="btn-explore">
            대표작 만나보기
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="#contact" className="btn btn-secondary" id="btn-contact-hero">스튜디오와 대화하기</a>
        </div>
      </section>

      {/* Showcase / Primary Game Section */}
      <section className="section" id="game" style={{ borderTop: '1px solid #e2e8f0' }}>
        <div className="section-header">
          <span className="section-label">Our Masterpiece</span>
          <h2 className="section-title">The Magic of Hangul Pop</h2>
        </div>

        <div className="games-grid">
          {/* Flagship Game: 한글팝 */}
          <div className="game-card">
            <div className="game-info">
              <span className="game-badge">Flagship Game</span>
              <h3 className="game-title">한글팝 (Hangul Pop) 🎈</h3>
              <p className="game-desc">
                자음과 모음이 살아 움직이는 생동감 넘치는 언어 학습 여정! 
                한글팝은 쏘고, 터뜨리고, 조립하며 한글을 가장 본능적이고 신나게 익히는 에듀테인먼트 퍼즐 게임입니다. 
                터치할 때마다 쫀득하게 반응하는 3D 클레이 그래픽과 톡톡 튀는 사운드 효과가 귀와 눈을 사로잡습니다. 
                매치 게임부터 스피디한 액션 슈팅, 문장 빌더까지 다양하게 구성된 플레이 모드로 전 세계 누구든 한글의 유쾌한 매력에 푹 빠져들게 만듭니다.
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
              설명서 없이도 켜자마자 본능적으로 이해되는 스마트한 UX를 고집합니다. 
              복잡할 수 있는 학습 원리를 자연스러운 드래그와 매칭 룰로 재미있게 녹여내 배움의 문턱을 획기적으로 낮춥니다.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🧸</div>
            <h3 className="value-title">Claymorphic Heart</h3>
            <p className="value-desc">
              디지털 화면 너머로 따스한 위안을 전달하고 싶습니다. 만지고 싶을 정도로 폭신한 3D 클레이 스타일 그래픽과 편안한 감성의 컬러 조합으로 모든 플레이 순간에 감성적 힐링을 얹습니다.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌐</div>
            <h3 className="value-title">Borderless Joy</h3>
            <p className="value-desc">
              나이와 국경의 장벽 없이 전 세계 누구나 동일한 품질의 기쁨을 느낄 수 있게 만듭니다. 
              철저한 다국어 현지화와 유니버설 기획을 바탕으로, 글로벌 마켓의 소통과 배움의 통로가 되고자 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="contact-card">
          <h2 className="contact-title">Connect with<br />Ludam Studio</h2>
          <p className="contact-desc">
            비즈니스 제휴, 아이디어 협업 제안, 혹은 게임 이용 중 느꼈던 따뜻한 의견 공유까지! 
            루담 스튜디오의 문은 언제나 활짝 열려 있습니다. 우리와 함께 세상을 한 뼘 더 즐겁고 유쾌한 곳으로 만들어가요.
          </p>
          <a href="mailto:studio.ludam@gmail.com" className="email-btn" id="btn-email-mailto">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            studio.ludam@gmail.com 문의하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              LUDAM STUDIO<span></span>
            </a>
            <p className="footer-desc">
              루담 스튜디오(Ludam Studio)는 일상 속에 영감과 따뜻한 웃음을 채워 넣는 크리에이티브 퍼즐 및 캐주얼 모바일 게임을 디자인하는 독립 게임 스튜디오입니다.
            </p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <span className="footer-col-title">바로가기</span>
              <a href="#game" className="footer-link">Game</a>
              <a href="#values" className="footer-link">Values</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
            <div className="footer-links-col">
              <span className="footer-col-title">법적 고지</span>
              <a href="#" className="footer-link" onClick={(e) => openModal('privacy', e)} id="link-privacy">개인정보 처리방침</a>
              <a href="#" className="footer-link" onClick={(e) => openModal('terms', e)} id="link-terms">이용약관</a>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Ludam Studio. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Legal Modals (Ludam Studio Terms Template) */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {activeModal === 'privacy' ? '개인정보 처리방침' : '이용약관'}
              </h2>
              <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            </div>
            <div className="modal-body">
              {activeModal === 'privacy' ? (
                <>
                  <p><strong>시행일자: 2026년 5월 17일</strong></p>
                  <p>루담 스튜디오(Ludam Studio, 이하 '회사')는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다.</p>
                  
                  <h3>1. 수집하는 개인정보 항목</h3>
                  <p>회사는 모바일 앱 서비스를 제공하기 위해 필요한 최소한의 정보만을 수집하며, 이용자의 사전 동의 없이 민감한 개인정보를 수집하지 않습니다. 회사는 서비스 개선 및 분석을 위해 구글 Firebase, Unity Analytics 등 서드파티 분석 툴을 이용할 수 있으며, 이 과정에서 광고 식별자(ADID/IDFA) 등 비식별 행동 데이터가 자동으로 수집될 수 있습니다.</p>
                  
                  <h3>2. 개인정보의 수집 및 이용 목적</h3>
                  <p>수집된 비식별 데이터 및 통계 자료는 다음과 같은 목적으로 사용됩니다:</p>
                  <ul>
                    <li>신규 서비스 개발 및 성능 고도화</li>
                    <li>이용자 문의(고객지원) 접수 및 원활한 응대</li>
                    <li>접속 빈도 파악 및 서비스 이용에 대한 통계 분석</li>
                  </ul>
                  
                  <h3>3. 개인정보의 보유 및 파기</h3>
                  <p>회사는 원칙적으로 이용자의 목적이 달성된 후 수집된 정보를 지체 없이 파기합니다. 단, 관계 법령에 보존 의무가 규정되어 있는 경우 해당 기간 보관 후 파기합니다.</p>
                  
                  <h3>4. 개인정보 보호책임자 및 문의</h3>
                  <p>회사의 서비스를 이용하시며 발생하는 모든 개인정보 관련 문의는 아래 이메일로 연락해 주시면 신속하게 조치하겠습니다.</p>
                  <p>이메일: <a href="mailto:studio.ludam@gmail.com" style={{ color: '#7c3aed' }}>studio.ludam@gmail.com</a></p>
                </>
              ) : (
                <>
                  <p><strong>시행일자: 2026년 5월 17일</strong></p>
                  
                  <h3>제1조 (목적)</h3>
                  <p>본 약관은 루담 스튜디오(Ludam Studio, 이하 '회사')가 제공하는 모든 모바일 어플리케이션 및 관련 서비스(이하 '서비스')의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.</p>
                  
                  <h3>제2조 (약관의 효력 및 변경)</h3>
                  <p>회사는 합리적인 사유가 발생할 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다. 개정된 약관은 앱 내부 화면 또는 공식 웹사이트를 통해 공지함으로써 효력이 발생합니다.</p>
                  
                  <h3>제3조 (이용자의 의무)</h3>
                  <p>이용자는 서비스를 이용할 때 다음 각 호의 행위를 하여서는 안 됩니다:</p>
                  <ul>
                    <li>서비스 제공 과정에서 획득한 리소스를 회사의 동의 없이 상업적으로 복제, 배포하는 행위</li>
                    <li>비정상적인 방법으로 게임 데이터를 조작하거나 버그를 악용하는 행위</li>
                    <li>회사 및 타인의 지식재산권을 침해하는 행위</li>
                  </ul>
                  
                  <h3>제4조 (회사의 면책사항)</h3>
                  <p>회사는 천재지변, 전시, 기기 결함 등 합리적인 범위를 넘어서는 불가항력적 사유로 인해 서비스를 중단하거나 지연되는 것에 대해 책임을 지지 않습니다.</p>
                  
                  <h3>제5조 (준거법 및 관할)</h3>
                  <p>본 약관의 해석 및 회사와 이용자 간의 분쟁에 대해서는 대한민국 법률을 준거법으로 하며, 소송이 발생할 경우 민사소송법상의 관할 법원을 합의 관할로 합니다.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
