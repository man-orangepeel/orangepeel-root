export default function Home() {
  const projects = [
    {
      tag: 'Lifestyle · E-commerce',
      icon: 'W',
      title: 'Orange Peel Wear',
      desc: 'Bitcoin-only clothing. Warriors, Wizards, Cyphers — three postures, one conviction. Wearing your values is a political act. No crypto noise, no speculation. Pure signal.',
      link: 'wear.orangepeel.fr',
      href: 'https://wear.orangepeel.fr',
    },
    {
      tag: 'Media · Telegram',
      icon: 'F',
      title: 'OrangePeel Flow',
      desc: 'Free French-language Telegram channel. Several times a week: adoption signals, educational fundamentals, a weekly community poll. No altcoins, no ads. High-value signal only.',
      link: 'Join the channel',
      href: 'https://t.me/OrangePeel_Flow',
    },
    {
      tag: 'Community · Nantes',
      icon: 'M',
      title: 'MeetUp Bitcoin Nantes',
      desc: 'Free monthly meetup. Every 2nd Thursday, Le Startijenn. Beginners, experts, merchants — no registration, no prerequisites. Bitcoin, without the jargon.',
      link: 'meetup.orangepeel.fr',
      href: 'https://meetup.orangepeel.fr',
    },
  ]

  const iagentFeatures = [
    {
      title: 'Zero extra API cost',
      desc: 'Runs on your existing Claude subscription. No per-token billing on top.',
    },
    {
      title: '100% open source · Python',
      desc: 'Every line is readable. Full security audit in one command. 35 checks, whitelisted bash only.',
    },
    {
      title: 'Anthropic only',
      desc: 'Your data goes through Anthropic — and nowhere else. No third-party servers.',
    },
    {
      title: 'Email, calendar, voice, PDF',
      desc: 'Gmail, Google Calendar, Telegram voice messages, document analysis — all on demand.',
    },
    {
      title: 'Proof of work: OrangePeel Flow',
      desc: 'The Telegram channel runs on iAgent. Scraping, filtering, publishing — automated daily.',
    },
    {
      title: 'Deploy in minutes',
      desc: 'The runbook guides Claude Code step by step. No technical background required.',
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
      name: 'OrangePeel Flow',
      sub: 'Telegram channel · French · Bitcoin only',
      href: 'https://t.me/OrangePeel_Flow',
    },
    {
      icon: 'Tg',
      name: 'MeetUp Bitcoin Nantes',
      sub: 'Telegram community · Nantes',
      href: 'https://t.me/meetupbitcoinnantes',
    },
    {
      icon: 'W',
      name: 'Orange Peel Wear',
      sub: 'wear.orangepeel.fr',
      href: 'https://wear.orangepeel.fr',
    },
    {
      icon: '⚙',
      name: 'iAgent',
      sub: 'iagent.orangepeel.fr · Open source AI agent',
      href: 'https://iagent.orangepeel.fr',
    },
  ]

  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <div className="nav-mark">
          <div className="nav-dot" />
          <span className="nav-name">orangepeel.fr</span>
        </div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#iagent">iAgent</a></li>
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
            Engineer.<br />
            Product<br />
            builder.<br />
            <em>Bitcoiner.</em>
          </h1>
          <div className="hero-bio">
            <p>
              I&apos;ve served a family, the environment, the human spirit.
              Bitcoin reoriented everything — not by changing me,
              but by giving me an <strong>incorruptible framework to act within</strong>.
            </p>
            <p>
              I build things that last: meaningful clothing, sovereign tools,
              communities rooted in the real world.
              General Manager at <strong>BTC Villages</strong>, deploying autonomous villages
              in Latin America. In Nantes, I run the monthly Bitcoin meetup.
            </p>
            <p>
              Bitcoin frees money. Bitcoin frees minds. We do our part.
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
          <h2 className="sec-title">What I <em>build</em></h2>
          <p className="sec-sub">
            Three expressions of one conviction. Each autonomous, each useful, each Bitcoin-only.
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
                <div className="pcard-icon">{p.icon}</div>
                <h3 className="pcard-title">{p.title}</h3>
                <p className="pcard-desc">{p.desc}</p>
                <span className="pcard-link">{p.link} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── IAGENT ── */}
      <section id="iagent" className="iagent-section">
        <div className="inner">
          <p className="sec-sup">Open Source</p>
          <h2 className="sec-title"><em>iAgent</em> — The sovereign agent</h2>
          <p className="sec-sub">
            A personal AI agent, open source, zero extra API cost.
            Anthropic only. No opaque intermediaries.
          </p>
          <div className="iagent-layout">
            <div className="iagent-rows">
              {iagentFeatures.map((f) => (
                <div key={f.title} className="iagent-row">
                  <div className="iagent-bullet" />
                  <div>
                    <div className="iagent-row-title">{f.title}</div>
                    <div className="iagent-row-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="iagent-panel">
              <p className="iagent-panel-label">Deploy iAgent</p>
              <h3>OpenClaw had the idea.<br />iAgent is the sovereign evolution.</h3>
              <p>
                The runbook is free. Claude Code handles the setup step by step.
                You validate the key decisions. That&apos;s it.
                All you need: a Mac and a Claude subscription.
              </p>
              <div className="iagent-btns">
                <a href="https://iagent.orangepeel.fr" target="_blank" rel="noopener noreferrer" className="btn-orange">
                  Get the runbook →
                </a>
                <a href="https://github.com/man-orangepeel/iagent" target="_blank" rel="noopener noreferrer" className="btn-line">
                  GitHub ↗
                </a>
              </div>
            </div>
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
              At Orange Peel, everything is an expression of a state of mind.
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
          <div className="footer-brand">
            <div className="footer-dot" />
            <span className="footer-name">orangepeel.fr</span>
          </div>
          <span className="footer-line">Bitcoin frees money. Bitcoin frees minds.</span>
          <span className="footer-line">© 2026 · Built on conviction. Paid in sats.</span>
        </div>
      </footer>
    </>
  )
}
