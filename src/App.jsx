import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaReact, FaJs, FaNodeJs, FaCss3Alt, FaGitAlt, FaHouse, FaUser, FaCode, FaFolderOpen, FaHtml5 } from 'react-icons/fa6'
import { SiVite, SiExpress, SiMongodb, SiPostman } from 'react-icons/si'
import './App.css'
import './extra.css'

const roles = ['Fullstack Developer', 'React Developer', ]
const links = ['home', 'about', 'skills', 'projects', 'contact']

function VSCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M17.5 2 22 4.2v15.6L17.5 22 8 13.3 3.8 16.5 2 15.6V8.4l1.8-.9L8 10.7zM17.5 6.5v11L11 12z" />
    </svg>
  )
}
function CursorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M12 2 21 7v10l-9 5-9-5V7z" />
      <path d="M12 12 21 7M12 12v10M12 12 3 7" stroke="#151824" strokeWidth="1.3" fill="none" />
    </svg>
  )
}

const skillGroups = [
  { g: 'Frontend', s: '#22d3ee', items: [
    { n: 'React', i: FaReact, c: '#61dafb' },
    { n: 'JavaScript', i: FaJs, c: '#f7df1e' },
    { n: 'HTML & CSS', i: FaHtml5, c: '#e34f26', i2: FaCss3Alt, c2: '#1572b6' },
    { n: 'Vite', i: SiVite, c: '#646cff' },
  ] },
  { g: 'Backend', s: '#22c55e', items: [
    { n: 'Node.js', i: FaNodeJs, c: '#5fa04e' },
    { n: 'Express', i: SiExpress, c: '#e5e7eb' },
    { n: 'MongoDB', i: SiMongodb, c: '#47a248' },
    { n: 'REST APIs', i: FaCode, c: '#22c55e' },
  ] },
  { g: 'Tools', s: '#f97316', items: [
    { n: 'Git & GitHub', i: FaGitAlt, c: '#f05032', i2: FaGithub, c2: '#e6edf3' },
    { n: 'VS Code', i: VSCodeIcon, c: '#007acc' },
    { n: 'Postman', i: SiPostman, c: '#ff6c37' },
    { n: 'Cursor', i: CursorIcon, c: '#e6edf3' },
  ] },
]

const about = {
  intro:
    "Hi, I'm Ragul, a fullstack developer who turns ideas into fast, clean web apps with React and Node.",
  sub:
    "I sweat the small details: spacing, motion, loading states, the things people feel but rarely notice. Right now I'm levelling up in JavaScript and system design, and building projects I can actually ship.",
  tags: ['Clean UI', 'Fullstack MERN', 'Fast and responsive', 'Always learning'],
  facts: [
    { label: 'Studying', value: 'Bsc Information Technology, GTN Arts and Science College' },
    { label: 'Building', value: 'MERN projects, portfolio sites, small tools' },
    { label: 'Learning now', value: 'JavaScript, system design, DSA' },
    { label: 'Looking for', value: 'Internships and Junior Fullstack roles' },
    { label: 'Based in', value: 'Dindigul,Tamilnadu, India' },
  ],
}

const projects = [
  { c: '#6366f1', t: 'Project One', d: 'One line about what this project does and why it matters.', tag: 'Web', live: '', code: '', shots: [], status: 'In progress', stack: ['React', 'Node'] },
  { c: '#ec4899', t: 'Project Two', d: 'One line about what this project does and why it matters.', tag: 'UI', live: '', code: '', shots: [], status: 'In progress', stack: ['CSS', 'Figma'] },
  { c: '#06b6d4', t: 'Project Three', d: 'One line about what this project does and why it matters.', tag: 'Web', live: '', code: '', shots: [], status: 'In progress', stack: ['React', 'Mongo'] },
  { c: '#f59e0b', t: 'Project Four', d: 'One line about what this project does and why it matters.', tag: 'UI', live: '', code: '', shots: [], status: 'In progress', stack: ['React', 'CSS'] },
]
const stats = [[10, '+', 'Projects built'], [1, '+', 'Years learning'], [15, '+', 'Technologies']]
const tech = [
  ['React', '#61dafb'], ['JavaScript', '#f7df1e'], ['Node.js', '#7ac74f'], ['MongoDB', '#00ed64'], ['Git', '#f05032'],
  ['Vite', '#a855f7'], ['CSS', '#38bdf8'], ['Figma', '#f24e9a'], ['REST APIs', '#22c55e'], ['GitHub', '#a78bfa'],
]
// TODO: 
const socials = [
  { n: 'GitHub', i: FaGithub, c: '#24292f', href: 'https://github.com/ragul701' },
  { n: 'LinkedIn', i: FaLinkedinIn, c: '#0a66c2', href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { n: 'Instagram', i: FaInstagram, c: '#e1306c', href: 'https://instagram.com/_but_iam_casual_' },
  { n: 'WhatsApp', i: FaWhatsapp, c: '#25d366', href: 'https://wa.me/918807239224' },
  { n: 'Email', i: FaEnvelope, c: '#06b6d4', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=r96213306@gmail.com&su=Hello%20Ragul' },
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

const MOCKS = [
  <div className="mk mk-land">
    <div className="mk-nav"><b className="logo" /><i /><i /><i /><u /></div>
    <div className="mk-hero">
      <div className="mk-copy"><i className="h1" /><i className="h1 s" /><i className="p" /><i className="p s" /><div className="mk-btns"><u className="solid" /><u className="ghost" /></div></div>
      <div className="mk-art"><span /><span /><span /></div>
    </div>
  </div>,
  <div className="mk mk-dash">
    <div className="mk-side"><b /><i /><i /><i /><i /></div>
    <div className="mk-main">
      <div className="mk-stats">{[0, 1, 2].map((n) => <div key={n}><i className="s" /><b /></div>)}</div>
      <div className="mk-chart">{[40, 65, 50, 80, 58, 92, 70].map((h, n) => <span key={n} style={{ height: `${h}%` }} />)}</div>
    </div>
  </div>,
  <div className="mk mk-app">
    <div className="mk-phone">
      <div className="mk-top"><b /><i /></div>
      {[0, 1, 2, 3].map((n) => <div className="mk-row" key={n}><span /><div><i /><i className="s" /></div></div>)}
    </div>
    <div className="mk-phone alt">
      <div className="mk-top"><b /><i /></div>
      <div className="mk-card" /><i /><i className="s" /><div className="mk-cta" />
    </div>
  </div>,
]

function Shots({ shots, status, start = 0 }) {
  const list = shots && shots.length ? shots : [0, 1, 2]
  const [i, setI] = useState(start % list.length)
  const [hold, setHold] = useState(false)
  const x0 = useRef(null)
  const go = (d) => setI((v) => (v + d + list.length) % list.length)
  useEffect(() => {
    if (hold || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((v) => (v + 1) % list.length), 3200)
    return () => clearInterval(t)
  }, [hold, list.length])
  return (
    <div className="shot" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
      <div className="shot-bar">
        <i /><i /><i />
        <span>localhost:5173</span>
        <em className="pstat" data-live={status === 'Live'}>{status}</em>
      </div>
      <div className="shot-view"
        onPointerDown={(e) => { x0.current = e.clientX }}
        onPointerUp={(e) => {
          if (x0.current === null) return
          const d = e.clientX - x0.current
          x0.current = null
          if (Math.abs(d) > 40) go(d < 0 ? 1 : -1)
        }}>
        <button type="button" className="arr l" aria-label="Previous" onClick={() => go(-1)}>‹</button>
        <button type="button" className="arr r" aria-label="Next" onClick={() => go(1)}>›</button>
        <span className="cnt">{i + 1}/{list.length}</span>
        <div className="shot-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {list.map((sh, n) => (
            <div className="shot-slide" key={n}>
              {shots && shots.length
                ? <img src={sh} alt="" loading="lazy" draggable="false" />
                : <div className={`mock m${n % 3}`}>{MOCKS[n % 3]}</div>}
            </div>
          ))}
        </div>
      </div>
      <div className="shot-dots">
        {list.map((_, n) => (
          <button key={n} type="button" aria-label={`Slide ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />
        ))}
      </div>
    </div>
  )
}

function Tilt({ children, color }) {
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
  return <article className="card tilt" style={{ '--pc': color }} onMouseMove={move} onMouseLeave={leave}>{children}</article>
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
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState(false)
  const [copied, setCopied] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    const form = e.target
    const key = import.meta.env.VITE_W3F_KEY
    setSent(false); setErr(false)
    if (!key) return setErr(true)
    setBusy(true)
    const d = new FormData(form)
    d.append('access_key', key)
    d.append('subject', hire ? 'New project request from portfolio' : 'New message from portfolio')
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: d })
      const j = await r.json()
      if (j.success) { setSent(true); form.reset() } else setErr(true)
    } catch { setErr(true) }
    setBusy(false)
  }
  const copy = () => {
    navigator.clipboard?.writeText('r96213306@gmail.com')
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
        <Field label={hire ? 'Project budget' : 'Message'} name={hire ? 'budget' : 'message'} />
        <button className="btn full" type="submit" disabled={busy}><span>{busy ? 'Sending...' : hire ? 'Send request' : 'Send message'}</span></button>
        {sent && <p className="sent">Message sent. I'll reply soon.</p>}
        {err && <p className="sent" style={{ color: '#ef4444' }}>Couldn't send. Please email me directly.</p>}
      </form>
      <div className="switch-row">
        <span className="muted">{hire ? 'Just want to say hi?' : 'Have a project in mind?'}</span>
        <button type="button" className="round" aria-label="Switch form"
          onClick={() => { setSent(false); setErr(false); setHire(!hire) }}>{hire ? '←' : '+'}</button>
      </div>
      <button type="button" className="copy" onClick={copy}>{copied ? 'Copied to clipboard' : 'r96213306@gmail.com'}</button>
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
  const [photo, setPhoto] = useState(() => { try { return localStorage.getItem('photo') || '' } catch { return '' } })
  const fileRef = useRef(null)
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])
  const pick = (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    const r = new FileReader()
    r.onload = () => {
      setPhoto(r.result)
      try { localStorage.setItem('photo', r.result) } catch {}
    }
    r.readAsDataURL(f)
  }
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
            {photo ? <img src={photo} alt="" /> : <span className="mavatar">R</span>}
            <div><b>Ragul G</b><small>Frontend Developer</small></div>
          </div>
          {menu.map(({ id, i: I, c }, k) => (
            <a key={id} href={`#${id}`} style={{ '--k': k, '--c': c }} className={`mlink ${active === id ? 'on' : ''}`} onClick={() => setOpen(false)}>
              <span className="mi"><I /></span><span className="ml">{id}</span>
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
                {photo
                  ? <img src={photo} alt="Ragul G" />
                  : <button type="button" className="empty" onClick={() => fileRef.current?.click()}><FaUser /><span>Add your photo</span></button>}
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
          <div>{[...tech, ...tech].map(([n, c], k) => <span key={k} style={{ '--c': c }}><i />{n}</span>)}</div>
        </div>

        <section id="about" className="section">
          <h2 className="reveal">About</h2>
          <div className="about-card reveal">
            <div className="about-body">
              <div className="about-text">
                <p className="about-intro">{about.intro}</p>
                <p className="about-sub">{about.sub}</p>
                <div className="about-tags">
                  {about.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <dl className="about-facts">
                {about.facts.map((f) => (
                  <div className="about-row" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="reveal">Skills</h2>
          <div className="skills reveal">
            {skillGroups.map(({ g, s, items }) => (
              <div className="sk-group" key={g} style={{ '--s': s }}>
                <h3>{g}</h3>
                <ul>
                  {items.map(({ n, i: I, c, i2: I2, c2 }) => (
                    <li key={n} style={{ '--c': c }}>
                      {I2 ? (
                        <span className="sk-i sk-swap">
                          <span className="sw a" style={{ color: c }}><I /></span>
                          <span className="sw b" style={{ color: c2 }}><I2 /></span>
                        </span>
                      ) : (
                        <span className="sk-i"><I /></span>
                      )}
                      {n}
                    </li>
                  ))}
                </ul>
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
                <Tilt color={p.c}>
                  <Shots shots={p.shots} status={p.live ? 'Live' : p.status} start={k} />
                  <div className="phead"><h3>{p.t}</h3><span className="ptag">{p.tag}</span></div>
                  <p className="muted">{p.d}</p>
                  <div className="stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                  <div className="links">
                    {p.live ? <a href={p.live} target="_blank" rel="noreferrer">Live demo</a> : <span className="off" aria-disabled="true" title="Coming soon">Live demo</span>}
                    {p.code ? <a href={p.code} target="_blank" rel="noreferrer">Source code</a> : <span className="off" aria-disabled="true" title="Coming soon">Source code</span>}
                  </div>
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