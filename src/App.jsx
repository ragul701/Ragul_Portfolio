import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaReact, FaJs, FaNodeJs, FaCss3Alt, FaGitAlt, FaHouse, FaUser, FaCode, FaBriefcase, FaFolderOpen } from 'react-icons/fa6'
import './App.css'

const roles = ['Frontend Developer', 'React Developer', 'UI Engineer']
const links = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
const skills = [
  { n: 'React', v: 85 }, { n: 'JavaScript', v: 88 }, { n: 'HTML & CSS', v: 92 },
  { n: 'Node.js', v: 65 }, { n: 'Git & GitHub', v: 78 }, { n: 'MongoDB', v: 60 },
]
const projects = [
  { t: 'Project One', d: 'One line about what this project does and why it matters.', tag: 'Web', stack: ['React', 'Node'] },
  { t: 'Project Two', d: 'One line about what this project does and why it matters.', tag: 'UI', stack: ['CSS', 'Figma'] },
  { t: 'Project Three', d: 'One line about what this project does and why it matters.', tag: 'Web', stack: ['React', 'Mongo'] },
  { t: 'Project Four', d: 'One line about what this project does and why it matters.', tag: 'UI', stack: ['React', 'CSS'] },
]
const stats = [[10, '+', 'Projects built'], [1, '+', 'Years learning'], [15, '+', 'Technologies']]
const tech = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Git', 'Vite', 'CSS', 'Figma', 'REST APIs', 'GitHub']
const timeline = [
  { y: '2026', t: 'Freelance and portfolio projects', d: 'Building real apps with React and Node.' },
  { y: '2025', t: 'Your degree or course name', d: 'College or institute name and key subjects.' },
  { y: '2024', t: 'Started web development', d: 'HTML, CSS, JavaScript and my first projects.' },
]

// TODO: unga real links inga podunga
const socials = [
  { n: 'GitHub', i: FaGithub, c: '#24292f', href: 'https://github.com/YOUR_USERNAME' },
  { n: 'LinkedIn', i: FaLinkedinIn, c: '#0a66c2', href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { n: 'Instagram', i: FaInstagram, c: '#e1306c', href: 'https://instagram.com/YOUR_USERNAME' },
  { n: 'WhatsApp', i: FaWhatsapp, c: '#25d366', href: 'https://wa.me/91XXXXXXXXXX' },
  { n: 'Email', i: FaEnvelope, c: '#06b6d4', href: 'mailto:yourname@gmail.com' },
]

const orbit = [
  { i: FaReact, n: 'React', c: '#61dafb' }, { i: FaJs, n: 'JavaScript', c: '#f7df1e' }, { i: FaNodeJs, n: 'Node.js', c: '#7ac74f' },
  { i: FaCss3Alt, n: 'CSS', c: '#3aa0f5' }, { i: FaGitAlt, n: 'Git', c: '#f05032' },
]

const snippets = [
  { t: 'React', c: '#61dafb', s: 'const [user, setUser] = useState(null)' },
  { t: 'React', c: '#61dafb', s: 'useEffect(() => { loadData() }, [])' },
  { t: 'API', c: '#f59e0b', s: "fetch('/api/users').then(res => res.json())" },
  { t: 'Node', c: '#7ac74f', s: "app.get('/api/users', async (req, res) => {})" },
  { t: 'Node', c: '#7ac74f', s: "app.listen(5000, () => console.log('Server ready'))" },
  { t: 'MongoDB', c: '#00ed64', s: 'const users = await User.find({ active: true })' },
  { t: 'MongoDB', c: '#00ed64', s: 'mongoose.connect(process.env.MONGO_URI)' },
  { t: 'Auth', c: '#f472b6', s: "jwt.sign({ id: user._id }, SECRET, { expiresIn: '7d' })" },
  { t: 'Git', c: '#f05032', s: "git commit -m 'ship it'" },
  { t: 'Deploy', c: '#a78bfa', s: 'npm run build && vercel --prod' },
]
const KW = /^(const|let|await|async|new|return|true|false|null)$/
function Code({ src }) {
  const toks = src.match(/'[^']*'|\w+|\s+|./g)
  return (
    <code>
      {toks.map((t, i) => {
        const k = t[0] === "'" ? 's' : KW.test(t) ? 'k' : /^\d+$/.test(t) ? 'n' : /^\w+$/.test(t) ? (toks[i + 1] === '(' ? 'f' : 'v') : 'p'
        return <span key={i} className={k}>{t}</span>
      })}
    </code>
  )
}

const menu = [
  { id: 'home', i: FaHouse, c: '#6366f1' },
  { id: 'about', i: FaUser, c: '#06b6d4' },
  { id: 'skills', i: FaCode, c: '#f59e0b' },
  { id: 'experience', i: FaBriefcase, c: '#10b981' },
  { id: 'projects', i: FaFolderOpen, c: '#ec4899' },
  { id: 'contact', i: FaEnvelope, c: '#8b5cf6' },
]
const MAIL = 'M4 6h16v12H4zM4 7l8 6 8-6'
const SUN = 'M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'
const MOON = 'M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z'
const CASE = 'M4 8h16v11H4zM9 8V5h6v3M4 13h16'
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)

function Count({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min((t - t0) / 1400, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <strong ref={ref}>{n}{suffix}</strong>
}

function Loader() {
  const [n, setN] = useState(0)
  const [out, setOut] = useState(false)
  const [gone, setGone] = useState(false)
  useEffect(() => {
    if (out) { const t = setTimeout(() => setGone(true), 900); return () => clearTimeout(t) }
    const t = setTimeout(() => (n >= 100 ? setOut(true) : setN(n + 4)), n >= 100 ? 300 : 28)
    return () => clearTimeout(t)
  }, [n, out])
  if (gone) return null
  return (
    <div className={`loader ${out ? 'out' : ''}`}>
      <span>{n}</span>
      <div className="lbar"><i style={{ width: `${n}%` }} /></div>
    </div>
  )
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Typer() {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const full = roles[i]
    const hold = !del && txt === full
    const t = setTimeout(() => {
      if (hold) return setDel(true)
      if (del && txt === '') { setDel(false); return setI((i + 1) % roles.length) }
      setTxt(del ? txt.slice(0, -1) : full.slice(0, txt.length + 1))
    }, hold ? 1500 : del ? 35 : 75)
    return () => clearTimeout(t)
  }, [txt, del, i])
  return <p className="typer">{txt}<b className="caret" /></p>
}

function Tilt({ children }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    const s = e.currentTarget.style
    s.setProperty('--ry', `${(x - 0.5) * 8}deg`)
    s.setProperty('--rx', `${(0.5 - y) * 8}deg`)
    s.setProperty('--mx', `${x * 100}%`)
    s.setProperty('--my', `${y * 100}%`)
  }
  const leave = (e) => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }
  return <article className="card tilt" onMouseMove={move} onMouseLeave={leave}>{children}</article>
}

function Field({ label, type = 'text', name }) {
  return (
    <div className="field">
      <input type={type} name={name} placeholder=" " required />
      <label>{label}</label>
    </div>
  )
}

function Contact() {
  const [hire, setHire] = useState(false)
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true); e.target.reset() }
  const copy = () => {
    navigator.clipboard?.writeText('yourname@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <div className="contact-wrap">
      <form key={String(hire)} className="card flip" onSubmit={submit}>
        <div className="badge"><Icon d={hire ? CASE : MAIL} /></div>
        <h3>{hire ? 'Start a project' : 'Get in touch'}</h3>
        <p className="muted">{hire ? 'Tell me what you need built' : 'I usually reply within a day'}</p>
        <Field label="Your name" name="name" />
        <Field label="Email address" type="email" name="email" />
        <Field label={hire ? 'Project budget' : 'Message'} name="extra" />
        <button className="btn full" type="submit"><span>{hire ? 'Send request' : 'Send message'}</span></button>
        {sent && <p className="sent">Message sent. I'll reply soon.</p>}
      </form>
      <div className="switch-row">
        <span className="muted">{hire ? 'Just want to say hi?' : 'Have a project in mind?'}</span>
        <button type="button" className="round" aria-label="Switch form"
          onClick={() => { setSent(false); setHire(!hire) }}>{hire ? '←' : '+'}</button>
      </div>
      <button type="button" className="copy" onClick={copy}>{copied ? 'Copied to clipboard' : 'yourname@gmail.com'}</button>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState('light')
  const [active, setActive] = useState('home')
  const [tab, setTab] = useState('All')
  const [open, setOpen] = useState(false)
  const [top, setTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hide, setHide] = useState(false)
  const navRef = useRef(null)
  const [photo, setPhoto] = useState('/profile.png')
  const fileRef = useRef(null)
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])
  const pick = (e) => { const f = e.target.files?.[0]; if (f) setPhoto(URL.createObjectURL(f)) }
  const aim = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--tx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    e.currentTarget.style.setProperty('--ty', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
  }
  const rest = (e) => { e.currentTarget.style.setProperty('--tx', 0); e.currentTarget.style.setProperty('--ty', 0) }
  const flip = (e, to) => {
    const next = to || (theme === 'light' ? 'dark' : 'light')
    if (next === theme) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2, y = r.top + r.height / 2
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const apply = () => { document.documentElement.dataset.theme = next; setTheme(next) }
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return apply()
    document.startViewTransition(apply).ready.then(() =>
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.4, 0, .2, 1)', pseudoElement: '::view-transition-new(root)' }
      )
    )
  }
  useReveal()

  useEffect(() => {
    const move = (e) => {
      const st = document.documentElement.style
      st.setProperty('--sx', `${e.clientX}px`)
      st.setProperty('--sy', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    document.querySelectorAll('.btn:not(.full)').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect()
        el.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.2}px ${(e.clientY - r.top - r.height / 2) * 0.3}px`
      })
      el.addEventListener('pointerleave', () => { el.style.translate = '' })
    })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  useEffect(() => {
    const n = navRef.current
    const place = () => {
      const a = n.querySelector('a.on')
      n.style.setProperty('--io', a ? 1 : 0)
      if (a) {
        n.style.setProperty('--ix', `${a.offsetLeft}px`)
        n.style.setProperty('--iw', `${a.offsetWidth}px`)
      }
    }
    place()
    window.addEventListener('resize', place)
    document.fonts?.ready.then(place)
    return () => window.removeEventListener('resize', place)
  }, [active])

  useEffect(() => {
    const h = document.documentElement
    let last = 0
    const onScroll = () => {
      h.style.setProperty('--p', `${(h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100}%`)
      const y = h.scrollTop
      setTop(y > 600)
      setScrolled(y > 30)
      if (Math.abs(y - last) > 6) { setHide(y > last && y > 300); last = y }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((id) => io.observe(document.getElementById(id)))
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const shown = projects.filter((p) => tab === 'All' || p.tag === tab)

  return (
    <>
      <Loader />
      <div className="spot" />
      <div className="progress" />
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <header className={`nav ${scrolled ? 'scrolled' : ''} ${hide && !open ? 'hide' : ''}`}>
        <div className="tick" aria-hidden="true">
          <div className="tick-mask">
            <div className="tick-track">
              {[...snippets, ...snippets].map(({ t, c, s }, k) => (
                <span className="snip" key={k}><b style={{ '--c': c }}>{t}</b><Code src={s} /></span>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-right">
          <button className="theme" aria-label="Toggle theme" onClick={flip}>
            <span className="sun"><Icon d={SUN} /></span>
            <span className="moon"><Icon d={MOON} /></span>
          </button>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
        </div>

        <nav ref={navRef} className={open ? 'open' : ''}>
          <div className="mprofile">
            <img src={photo} alt="" />
            <div><b>Ragul G</b><small>Frontend Developer</small></div>
          </div>
          {menu.map(({ id, i: I, c }, k) => (
            <a key={id} href={`#${id}`} style={{ '--k': k, '--c': c }} className={`mlink ${active === id ? 'on' : ''}`} onClick={() => setOpen(false)}>
              <span className="mi"><I /></span><span className="ml">{id}</span><em>0{k + 1}</em>
            </a>
          ))}
          <div className="mfoot">
            {socials.map(({ n, i: I, c, href }) => (
              <a key={n} className="ms" href={href} target="_blank" rel="noreferrer" aria-label={n} style={{ '--c': c }}><I /></a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <span className="status"><b />Open to work</span>
            <h1 aria-label="Ragul G">
              {'Ragul G'.split('').map((c, k) => (
                <span key={k} style={{ '--d': `${k * 60}ms` }}>{c === ' ' ? '\u00A0' : c}</span>
              ))}
            </h1>
            <Typer />
            <p className="lead">I build fast, clean web interfaces with React, and care about the small details that make them feel good to use.</p>
            <div className="hero-actions">
              <a href="#projects" className="btn"><span>View projects</span></a>
              <a href="#contact" className="btn ghost"><span>Contact me</span></a>
            </div>
            <div className="stats">
              {stats.map(([a, sfx, b]) => (
                <div key={b}><Count to={a} suffix={sfx} /><span>{b}</span></div>
              ))}
            </div>
          </div>

          <div className="profile">
            <div className="stage" onPointerMove={aim} onPointerLeave={rest}>
              <div className="orbit" aria-hidden="true">
                {orbit.map(({ i: I, c }, k) => (
                  <div className="orb" key={k} style={{ '--a': `${k * 72}deg`, '--k': k, '--c': c }}><span><I /></span></div>
                ))}
              </div>
              <div className="avatar">
                <img src={photo} alt="Ragul G" />
                <button type="button" className="plus" aria-label="Change photo" onClick={() => fileRef.current?.click()}><span /></button>
                <input ref={fileRef} type="file" accept="image/*" hidden onChange={pick} />
              </div>
            </div>
            <div className="social-row">
              {socials.map(({ n, i: I, c, href }, k) => (
                <a key={n} className="social" href={href} target="_blank" rel="noreferrer" aria-label={n} style={{ '--c': c, '--k': k }}>
                  <I />
                  <em>{n}</em>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>{[...tech, ...tech].map((t, k) => <span key={k}>{t}</span>)}</div>
        </div>

        <section id="about" className="section">
          <h2 className="reveal">About</h2>
          <div className="card wide reveal">
            <p>
              Write 2 or 3 lines about yourself here: where you study or work,
              what you like to build, and what you are learning now.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="reveal">Skills</h2>
          <div className="card reveal bars">
            {skills.map((s) => (
              <div key={s.n} className="skill">
                <div className="skill-top"><span>{s.n}</span><span className="muted">{s.v}%</span></div>
                <div className="bar"><i style={{ '--w': `${s.v}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="reveal">Experience</h2>
          <div className="timeline reveal">
            {timeline.map((x) => (
              <div className="tl" key={x.y}>
                <span className="tl-dot" />
                <small>{x.y}</small>
                <h3>{x.t}</h3>
                <p className="muted">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="reveal">Projects</h2>
          <div className="tabs reveal">
            {['All', 'Web', 'UI'].map((t) => (
              <button key={t} className={`tab ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>{t}</button>
            ))}
          </div>
          <div className="grid" key={tab}>
            {shown.map((p, k) => (
              <div className="pop" style={{ '--i': k }} key={p.t}>
                <Tilt>
                  <div className="thumb"><i /><i /><i /></div>
                  <h3>{p.t}</h3>
                  <p className="muted">{p.d}</p>
                  <div className="stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                  <div className="links"><a href="#">Live demo</a><a href="#">Source code</a></div>
                </Tilt>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="reveal">Contact</h2>
          <div className="reveal"><Contact /></div>
        </section>
      </main>

      <a href="#home" className={`totop round ${top ? 'show' : ''}`} aria-label="Back to top">↑</a>

      <footer className="footer muted">© 2026 Ragul G. Built with React.</footer>
    </>
  )
}