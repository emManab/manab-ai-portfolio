"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string; number: string; type: string; title: string; summary: string;
  stack: string[]; problem: string; did: string; result: string; next: string;
};

const projects: Project[] = [
  {
    id:"libtrack", number:"01", type:"Product", title:"LibTrack",
    summary:"A library seat-booking experience designed around one simple question: is a seat available right now?",
    stack:["Flutter","Firebase","Product UX"],
    problem:"Students need a quick way to understand seat availability before spending time walking to the library.",
    did:"I designed and built the mobile flow in Flutter, with Firebase as the planned backend layer for live availability and reservation state.",
    result:"A clear product loop: view availability → choose a seat → reserve it. The concept gave me a concrete place to think about real-time state and user friction.",
    next:"Take the flow through a real end-to-end booking test and document what changes after user feedback."
  },
  {
    id:"swapino", number:"02", type:"Community", title:"Swapino",
    summary:"A skill-swapping concept that turns 'I can teach this' into something people can discover and exchange.",
    stack:["Flutter","Firebase","Community UX"],
    problem:"People can have useful skills without an easy way to find someone who wants to exchange knowledge.",
    did:"I explored profiles, skills and discovery as a lightweight Flutter + Firebase product flow rather than starting with a large social network.",
    result:"A focused direction for peer-to-peer skill exchange, with the matching problem kept small enough to test.",
    next:"Run a small user test around skill discovery and matching, then simplify the flow based on where people hesitate."
  },
  {
    id:"vishrya", number:"03", type:"AI", title:"Vishrya",
    summary:"An AI assistant project exploring practical chat, local context and an LLM API instead of a static mockup.",
    stack:["Flutter","Local Storage","LLM API"],
    problem:"A chat UI is easy to imitate; a useful assistant needs context, persistence and sensible failure states.",
    did:"I built the assistant experience in Flutter with local storage and an LLM API, using AI during development for scaffolding, debugging and implementation ideas.",
    result:"A working direction for an assistant that can retain useful local context instead of behaving like a blank chat box.",
    next:"Harden API/error states, reduce unnecessary calls and create a small evaluation set for response quality."
  }
];

const beats = [
  ["Problem","My projects were scattered across separate builds and ideas."],
  ["What I did","I turned the strongest pieces into short case studies using the same three-beat structure."],
  ["What came of it","A portfolio that can accept the next real project without another portfolio rebuild."]
];

const phrases = [
  "turn ideas into ready products.",
  "make rough ideas feel real.",
  "build, test, learn, repeat.",
  "ship useful things with AI."
];

export default function Home() {
  const [active, setActive] = useState("libtrack");
  const [open, setOpen] = useState<Project | null>(null);
  const [phrase, setPhrase] = useState(phrases[0]);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  const project = projects.find(p => p.id === active)!;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = phrase;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 48);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 28);
    } else {
      setDeleting(false);
      setPhrase(phrases[(phrases.indexOf(current) + 1) % phrases.length]);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, phrase]);

  return (
    <>
      <div className="topline" />
      <header className="nav">
        <a className="logo" href="#">MANAB<span>.</span></a>
        <nav><a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a><a href="#next">Next</a></nav>
        <a className="mini" href="#contact">Let&apos;s talk ↗</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="live-dot" /> AVAILABLE TO BUILD</div>
            <p className="eyebrow">AI FLUENCY · CAPSTONE 2026</p>
            <h1>I build useful things with <em>AI.</em></h1>
            <div className="type-line"><span>I </span><strong>{typed}</strong><i aria-hidden="true" /></div>
            <p className="lede">I&apos;m Manab — a computer science student who turns ideas into working products. I use AI to move faster, but the idea, decisions and final build are mine.</p>
            <div className="hero-actions"><a className="button dark" href="#work">See what I&apos;ve built ↓</a><a className="text-link" href="https://github.com/emManab" target="_blank" rel="noreferrer">GitHub ↗</a></div>
            <div className="proof-row"><span>03 selected builds</span><span>•</span><span>Flutter · Firebase · AI</span><span>•</span><span>Idea → build → reality</span></div>
          </div>

          <div className="hero-panel">
            <div className="panel-glow" />
            <div className="panel-top"><span>THE BUILD LOOP</span><span className="dot" /></div>
            <div className="panel-title">Think it.<br/><strong>Make it.</strong><br/>Test it.</div>
            <div className="signal"><span>01</span><div><b>IDEA</b><small>Find the useful problem.</small></div></div>
            <div className="signal"><span>02</span><div><b>BUILD</b><small>Make the smallest real version.</small></div></div>
            <div className="signal"><span>03</span><div><b>PROVE</b><small>Test it, learn from it, improve it.</small></div></div>
          </div>
        </section>

        <section className="ticker" aria-label="skills">
          <div className="ticker-track">
            <span>PRODUCT THINKING</span><b>✦</b><span>FLUTTER</span><b>✦</b><span>FIREBASE</span><b>✦</b><span>AI-ASSISTED DEVELOPMENT</span><b>✦</b><span>PROTOTYPING</span><b>✦</b><span>PRODUCT UX</span><b>✦</b>
            <span>PRODUCT THINKING</span><b>✦</b><span>FLUTTER</span><b>✦</b><span>FIREBASE</span><b>✦</b><span>AI-ASSISTED DEVELOPMENT</span><b>✦</b><span>PROTOTYPING</span><b>✦</b><span>PRODUCT UX</span><b>✦</b>
          </div>
        </section>

        <section className="signal-strip">
          <div><span>01</span><b>BUILD</b><p>Turn an idea into something you can actually click.</p></div>
          <div><span>02</span><b>CONNECT</b><p>Flutter + Firebase + APIs where they make sense.</p></div>
          <div><span>03</span><b>ITERATE</b><p>Ship a version, learn from it, then make the next one sharper.</p></div>
        </section>

        <section className="now-band">
          <div className="now-label"><span className="live-dot" /> CURRENTLY</div>
          <div className="now-copy"><strong>Building at the intersection of</strong> <em>AI × product × mobile.</em></div>
          <div className="now-tags"><span>Flutter</span><span>Firebase</span><span>AI APIs</span><span>UX</span></div>
        </section>

        <section className="build-radar">
          <div className="radar-head">
            <p className="eyebrow">BUILD RADAR / LIVE</p>
            <span className="radar-signal"><i /> SYSTEM ONLINE</span>
          </div>
          <div className="radar-grid">
            <article><span>01</span><h3>Make ideas tangible.</h3><p>Start with something people can see, tap and react to.</p><div className="radar-line"><i /></div></article>
            <article><span>02</span><h3>Keep AI useful.</h3><p>Use AI where it creates leverage, not noise.</p><div className="radar-line"><i /></div></article>
            <article><span>03</span><h3>Ship the lesson.</h3><p>Every build should leave the next build a little smarter.</p><div className="radar-line"><i /></div></article>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head"><div><p className="eyebrow">SELECTED WORK / 01</p><h2>Ideas that became things.</h2></div><p>I don&apos;t want a portfolio that only says what I know. I want it to show what I can make. Each case starts with a reason to exist.</p></div>
          <div className="project-grid">
            {projects.map(p => <article key={p.id} className={"project "+(active===p.id?"selected":"")} onClick={()=>setActive(p.id)}>
              <div className="project-number">{p.number}</div><span className="type">{p.type}</span><h3>{p.title}</h3><p>{p.summary}</p>
              <div className="stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
              <button onClick={(e)=>{e.stopPropagation();setOpen(p)}}>Read case <span>↗</span></button>
            </article>)}
          </div>
        </section>

        <section className="demo-section">
          <div className="section-head"><div><p className="eyebrow">INTERACTIVE CASE / 02</p><h2>Don&apos;t just scroll. Explore.</h2></div><p>Switch between projects and see the problem, the build, the result and the next move. The portfolio itself is a small working demo.</p></div>
          <div className="explorer">
            <div className="tabs">{projects.map(p=><button key={p.id} className={active===p.id?"active":""} onClick={()=>setActive(p.id)}>{p.title}</button>)}</div>
            <div className="explorer-body">
              <div><span className="type">{project.type}</span><h3>{project.title}</h3><p>{project.summary}</p></div>
              <div className="case-grid">
                <div><b>01 / Problem</b><p>{project.problem}</p></div>
                <div><b>02 / What I did</b><p>{project.did}</p></div>
                <div><b>03 / What came of it</b><p>{project.result}</p></div>
                <div><b>Next</b><p>{project.next}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-statement">
            <p className="eyebrow">THE IDEA / 03</p>
            <h2>Give me an idea. I&apos;ll figure out how to make it real.</h2>
            <p className="body">I like the space between an idea and a finished product: figuring out what matters, choosing a practical stack, building the first version and learning from what breaks.</p>
            <div className="idea-prompt">
              <div className="prompt-top"><span><i /> IDEA LAB</span><span>001</span></div>
              <p>What if your idea could be <strong>clickable by tonight?</strong></p>
              <div className="prompt-cursor">→ define → build → test → ship<span>_</span></div>
            </div>
          </div>
          <div className="principles">
            <div className="principle"><span>01</span><h3>Useful over flashy.</h3><p>Start with the user problem, not the feature list.</p></div>
            <div className="principle"><span>02</span><h3>AI as leverage.</h3><p>Use AI for speed, exploration and debugging — keep the decisions human.</p></div>
            <div className="principle"><span>03</span><h3>Build before perfect.</h3><p>Make a real version early enough that reality can disagree with the idea.</p></div>
            <div className="principle"><span>04</span><h3>Document the lesson.</h3><p>Every useful build should make the next build easier.</p></div>
          </div>
        </section>

        <section className="idea-marquee" aria-label="build philosophy">
          <div className="idea-marquee-track">
            <span>IDEA</span><b>✦</b><span>PROTOTYPE</span><b>✦</b><span>BUILD</span><b>✦</b><span>BREAK IT</span><b>✦</b><span>FIX IT</span><b>✦</b><span>SHIP IT</span><b>✦</b>
            <span>IDEA</span><b>✦</b><span>PROTOTYPE</span><b>✦</b><span>BUILD</span><b>✦</b><span>BREAK IT</span><b>✦</b><span>FIX IT</span><b>✦</b><span>SHIP IT</span><b>✦</b>
          </div>
        </section>

        <section id="story" className="section story">
          <div><p className="eyebrow">THE HONEST STORY / 04</p><h2>AI made the first draft faster. It didn&apos;t make the decisions for me.</h2><p className="body">I used AI as a pair programmer and writing partner — for scaffolding UI, explaining errors, exploring implementation paths and tightening copy. The useful part was speed. The important part was deciding what was true, what needed testing and what was worth shipping.</p></div>
          <div className="story-card"><span>THE PART I HAD TO OWN</span><h3>Generated code can look finished before it is trustworthy.</h3><p>I still had to test interactions, check assumptions, simplify features and make sure the portfolio didn&apos;t claim more than the projects actually prove.</p><div className="beats">{beats.map(([a,b])=><div className="beat" key={a}><b>{a}</b><span>{b}</span></div>)}</div></div>
        </section>

        <section id="process" className="section process">
          <div className="section-head"><div><p className="eyebrow">HOW I WORK / 05</p><h2>From rough thought to ready build.</h2></div><p>The rules are simple enough to remember and strict enough to keep a project moving.</p></div>
          <div className="process-grid"><div><span>01</span><h3>Frame</h3><p>Write the problem before opening the editor.</p></div><div><span>02</span><h3>Build</h3><p>Use the smallest practical stack and get something real on screen.</p></div><div><span>03</span><h3>Test</h3><p>Run the interaction, find the weak assumption, fix it.</p></div><div><span>04</span><h3>Document</h3><p>Capture what changed so the next case is easier to ship.</p></div></div>
        </section>

        <section className="manifesto">
          <div className="manifesto-mark">01 — 04</div>
          <p className="eyebrow">MY BUILD RULES</p>
          <h2>Idea first.<br/><em>Noise last.</em></h2>
          <div className="rule-row"><span>01</span><b>Start with why.</b><p>If I can&apos;t explain the problem in one sentence, I&apos;m not ready to build.</p></div>
          <div className="rule-row"><span>02</span><b>Make it tangible.</b><p>A working rough version teaches more than a perfect plan sitting in a document.</p></div>
          <div className="rule-row"><span>03</span><b>Keep the stack honest.</b><p>Technology should solve the problem, not become the project.</p></div>
          <div className="rule-row"><span>04</span><b>Ship the lesson.</b><p>The output is the product — and the learning that makes the next one better.</p></div>
        </section>

        <section className="skills-wall">
          <div className="skills-heading"><p className="eyebrow">THE TOOLKIT / 06</p><h2>Things I like<br/><em>making with.</em></h2></div>
          <div className="skills-list">
            <div><span>01</span><b>Flutter</b><small>Mobile products</small></div>
            <div><span>02</span><b>Firebase</b><small>Backend + data</small></div>
            <div><span>03</span><b>AI / LLMs</b><small>Useful intelligence</small></div>
            <div><span>04</span><b>Product UX</b><small>Flows that make sense</small></div>
            <div><span>05</span><b>Prototyping</b><small>Idea → interaction</small></div>
            <div><span>06</span><b>AI-assisted dev</b><small>Faster iteration</small></div>
          </div>
        </section>

        <section id="next" className="section next">
          <div className="next-main"><p className="eyebrow">WHAT&apos;S NEXT / 07</p><h2>The next idea already has a place.</h2><p>When LibTrack moves from concept toward a real end-to-end booking flow, I&apos;ll add it here using the same three beats: problem → what I did → what came of it.</p><a className="button dark" href="#work">See the case structure ↑</a></div>
          <div className="reminder"><span className="calendar">NEXT BUILD</span><h3>Make the next thing real.</h3><p>A portfolio should change because the work changes — not because the homepage gets redesigned again.</p><div className="reminder-line"><span>✓</span> Problem is clear</div><div className="reminder-line"><span>✓</span> Work is named</div><div className="reminder-line"><span>✓</span> Result is documented</div></div>
        </section>

        <section id="contact" className="contact"><div className="contact-orbit" /><p className="eyebrow">LET&apos;S BUILD / 08</p><h2>Have an idea that should become a real thing?</h2><p>I&apos;m interested in product engineering, AI-assisted development and practical software.</p><div><a className="button light" href="https://github.com/emManab" target="_blank" rel="noreferrer">Connect on GitHub ↗</a><a className="button outline" href="https://github.com/emManab" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
      </main>

      <footer><span>© 2026 Manab Barman</span><span>AI Fluency Capstone · Built with Next.js</span><a href="#">&uarr; Back to top</a></footer>

      {open && <div className="modal-backdrop" onClick={()=>setOpen(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setOpen(null)}>×</button><span className="type">{open.type}</span><h2>{open.title}</h2><p>{open.summary}</p><div className="modal-beats"><div><b>Problem</b><p>{open.problem}</p></div><div><b>What I did</b><p>{open.did}</p></div><div><b>What came of it</b><p>{open.result}</p></div><div><b>What I&apos;d do next</b><p>{open.next}</p></div></div></div></div>}
    </>
  );
}