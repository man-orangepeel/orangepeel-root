export default function Home() {
  const projects = [
    {
      tag: 'AI · Sovereign',
      title: 'OrangePeel_iAgent',
      desc: 'Personal AI agent freed from OpenClaw — full ownership of the code for greater transparency and control. Full security audit in one command. Free on GitHub. Designed to evolve toward local LLMs for true offline sovereignty.',
      link: 'iagent.orangepeel.fr',
      href: 'https://iagent.orangepeel.fr',
      features: [
        'Zero extra API cost — runs on your existing Anthropic subscription',
        'Email, calendar, voice, PDF — all on demand',
        'Proof of work: OrangePeel_Flow runs on iAgent daily',
        'Roadmap: local LLM support for true sovereignty',
      ],
    },
    {
      tag: 'Media · Telegram',
      title: 'OrangePeel_Flow',
      desc: 'Free French-language Telegram channel. Bitcoin only. 5\u20138 high-value signals per day.',
      link: 'Join the channel',
      href: 'https://t.me/OrangePeel_Flow',
      features: [
        'Adoption signals & educational fundamentals',
        'Community polls',
        'No ads, no altcoins, no short-term speculation',
        'Runs freely and daily on OrangePeel_iAgent',
      ],
    },
    {
      tag: 'Lifestyle · E-commerce',
      title: 'OrangePeel_Wear',
      desc: 'OrangePeel_Wear embodies the spirit of Bitcoin through premium, purpose-driven apparel. Provocative, Subtle, Cryptic — your style is yours.',
      link: 'wear.orangepeel.fr',
      href: 'https://wear.orangepeel.fr',
      features: [
        'Three collections: Warriors, Wizards, Cyphers',
        'Premium quality',
        'Bitcoin payments accepted',
        'No crypto noise. No altcoins. Pure Bitcoin conviction.',
      ],
    },
    {
      tag: 'Community · Nantes',
      title: 'MeetUp Bitcoin Nantes',
      desc: 'Free monthly meetup in France. Beginners, experts. Bitcoin, with and without the jargon.',
      link: 'meetup.orangepeel.fr',
      href: 'https://meetup.orangepeel.fr',
      features: [
        'Every 2nd Thursday · Le Startijenn · Île de Nantes · 19h',
        'Free entry — all levels welcome, no registration',
        'Conference or workshop (optional) + open discussion',
        'Local Bitcoin merchants, consultants & builders',
      ],
    },
  ]

  const connectLinks = [
    {
      icon: 'Li',
      name: 'LinkedIn',
      sub: 'manuelproquin',
      href: 'https://www.linkedin.com/in/manuelproquin/',
    },
    {
      icon: 'Gh',
      name: 'GitHub',
      sub: 'man-orangepeel',
      href: 'https://github.com/man-orangepeel',
    },
    {
      icon: 'Tg',
      name: 'MeetUp Bitcoin Nantes',
      sub: 'Telegram community · Nantes',
      href: 'https://t.me/meetupbitcoinnantes',
    },
    {
      icon: '⚙',
      name: 'OrangePeel_iAgent',
      sub: 'iagent.orangepeel.fr · Open source AI agent',
      href: 'https://iagent.orangepeel.fr',
    },
    {
      icon: 'Tg',
      name: 'OrangePeel_Flow',
      sub: 'Telegram channel · French · Bitcoin only',
      href: 'https://t.me/OrangePeel_Flow',
    },
    {
      icon: 'W',
      name: 'OrangePeel_Wear',
      sub: 'wear.orangepeel.fr',
      href: 'https://wear.orangepeel.fr',
    },
  ]

  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <div className="nav-mark">
          <img src="/logo.png" alt="OrangePeel" className="nav-logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#convictions">Convictions</a></li>
          <li><a href="#links">Links</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <p className="hero-sup">orangepeel.fr</p>
          <h1 className="hero-title">
            Life believer.<br />
            Product builder.<br />
            <em>Bitcoiner.</em>
          </h1>
          <div className="hero-bio">
            <p>
              I&apos;ve served the environment, then the human spirit.
              Bitcoin reoriented everything — not by changing me,
              but by giving me an <strong>incorruptible framework to act within</strong>.
            </p>
            <p>
              Product Owner in IT consulting, on mission for major accounts (BPCE, PwC, EDF)
              and currently for <strong>Bitcoin Villages</strong>.
              Alongside this, four side projects — all gathered here.
            </p>
            <ul className="hero-projects">
              <li><strong>OrangePeel_Flow</strong> — French Telegram channel · Bitcoin only</li>
              <li><strong>OrangePeel_Wear</strong> — Clothes for Ungovernable People</li>
              <li><strong>OrangePeel_iAgent</strong> — OpenClaw without OpenClaw · Free on GitHub.</li>
              <li><strong>MeetUp Bitcoin Nantes</strong> — Monthly meetup in France</li>
            </ul>
            <p>
              Bitcoin frees money. Bitcoin frees minds. Let&apos;s do our part.
            </p>
          </div>
          <div className="hero-actions">
            <a href="#work" className="btn-orange">See the work →</a>
            <a href="https://www.linkedin.com/in/manuelproquin/" target="_blank" rel="noopener noreferrer" className="btn-line">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="work" className="projects-section">
        <div className="inner">
          <p className="sec-sup">Work</p>
          <h2 className="sec-title">What I <em>build</em> (side projects)</h2>
          <p className="sec-sub">
            Four projects, one conviction. Each autonomous, each useful.
          </p>
          <div className="projects-grid">
            {projects.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pcard"
              >
                <div className="pcard-accent" />
                <span className="pcard-tag">{p.tag}</span>
                <h3 className="pcard-title">{p.title}</h3>
                <p className="pcard-desc">{p.desc}</p>
                {p.features && (
                  <ul className="pcard-features">
                    {p.features.map((f: string) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
                <span className="pcard-link">{p.link} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO / CONVICTIONS ── */}
      <section id="convictions" className="manifesto-section">
        <div className="inner">
          <p className="sec-sup">Convictions</p>
          <h2 className="sec-title">What I <em>stand for</em></h2>
          <div className="manifesto-body">
            <blockquote className="manifesto-quote">
              Orange Peel is an expression of a state of mind.
              Born from a deep conviction in Bitcoin&apos;s power to uplift and empower —
              a world where money no longer belongs to rulers, but to the people.
              Bitcoiners are not merely preserving wealth. They are building the future.
            </blockquote>
            <div className="manifesto-pillars">
              {[
                {
                  n: '01',
                  title: 'Integrity first',
                  desc: 'Bitcoin demands integrity — and rewards it by entrusting power, responsibility and freedom to those who choose to embody them.',
                },
                {
                  n: '02',
                  title: 'Signal over noise',
                  desc: 'No altcoins. No short-term speculation. No hype. Every project I build honors the vision of Satoshi and those who carried the flame.',
                },
                {
                  n: '03',
                  title: 'Open by default',
                  desc: 'Code is readable. Tools are free or accessible. Communities are open to all levels, no prerequisites.',
                },
              ].map((p) => (
                <div key={p.n} className="pillar">
                  <div className="pillar-n">{p.n}</div>
                  <div>
                    <div className="pillar-title">{p.title}</div>
                    <p className="pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LINKS ── */}
      <section id="links" className="links-section">
        <div className="inner">
          <p className="sec-sup">Links</p>
          <h2 className="sec-title">Find <em>me</em></h2>
          <div className="links-list">
            {connectLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="litem"
              >
                <div className="lleft">
                  <div className="licon">{l.icon}</div>
                  <div>
                    <div className="lname">{l.name}</div>
                    <div className="lsub">{l.sub}</div>
                  </div>
                </div>
                <span className="larrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <p className="footer-manifesto">Bitcoin frees money. Bitcoin frees minds.</p>
          <img src="/logo.png" alt="OrangePeel" className="footer-logo" />
          <p className="footer-copy">&copy; 2026 · Built on conviction. Paid in sats.</p>
        </div>
      </footer>
    </>
  )
}
