"use client";

import { useState } from "react";

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

export default function Home() {
  const [active, setActive] = useState("libtrack");
  const [open, setOpen] = useState<Project | null>(null);
  const project = projects.find(p => p.id === active)!;

  return (
    <>
      <div className="topline" />
      <header className="nav">
        <a className="logo" href="#">MANAB<span>.</span></a>
        <nav><a href="#work">Work</a><a href="#story">Story</a><a href="#process">Process</a><a href="#next">Next</a></nav>
        <a className="mini" href="#contact">Let&apos;s talk ↗</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI FLUENCY · CAPSTONE 2026</p>
            <h1>I build useful things with <em>AI.</em></h1>
            <p className="lede">I&apos;m Manab — a computer science student who likes turning ideas into working products. This is the honest version: what I built, why I built it, and what I learned while using AI along the way.</p>
            <div className="hero-actions"><a className="button dark" href="#work">Explore my work ↓</a><a className="text-link" href="https://github.com/emManab" target="_blank">GitHub ↗</a></div>
            <div className="proof-row"><span>03 selected builds</span><span>•</span><span>Flutter · Firebase · AI</span><span>•</span><span>Build → test → learn</span></div>
          </div>
          <div className="hero-panel">
            <div className="panel-top"><span>NOW / BUILDING</span><span className="dot" /></div>
            <div className="panel-title">From idea<br/>to <strong>shipped.</strong></div>
            <div className="signal"><span>01</span><div><b>Build</b><small>Make the smallest useful version.</small></div></div>
            <div className="signal"><span>02</span><div><b>Learn</b><small>Notice what actually works.</small></div></div>
            <div className="signal"><span>03</span><div><b>Repeat</b><small>Turn the next lesson into the next case.</small></div></div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects with a reason to exist.</h2></div><p>Not a list of technologies. Each case starts with a problem, shows what I did, and ends with what changed.</p></div>
          <div className="project-grid">
            {projects.map(p => <article key={p.id} className={"project "+(active===p.id?"selected":"")} onClick={()=>setActive(p.id)}>
              <div className="project-number">{p.number}</div><span className="type">{p.type}</span><h3>{p.title}</h3><p>{p.summary}</p>
              <div className="stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
              <button onClick={(e)=>{e.stopPropagation();setOpen(p)}}>Read case <span>↗</span></button>
            </article>)}
          </div>
        </section>

        <section className="demo-section">
          <div className="section-head"><div><p className="eyebrow">WORKING DEMO</p><h2>Explore a case.</h2></div><p>This is the live interaction in the portfolio: switch projects and the case changes instantly.</p></div>
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

        <section id="story" className="section story">
          <div><p className="eyebrow">THE HONEST STORY</p><h2>AI made the first draft faster. It didn&apos;t make the decisions for me.</h2><p className="body">I used AI as a pair programmer and writing partner — for scaffolding UI, explaining errors, exploring implementation paths and tightening copy. The useful part was speed. The important part was still deciding what was true, what needed testing, and what was worth shipping.</p></div>
          <div className="story-card"><span>THE PART I HAD TO OWN</span><h3>Generated code can look finished before it is trustworthy.</h3><p>I still had to test interactions, check assumptions, simplify features and make sure the portfolio didn&apos;t claim more than the projects actually prove.</p><div className="beats">{beats.map(([a,b])=><div className="beat" key={a}><b>{a}</b><span>{b}</span></div>)}</div></div>
        </section>

        <section id="process" className="section process">
          <div className="section-head"><div><p className="eyebrow">HOW I WORK</p><h2>A small loop I can repeat.</h2></div></div>
          <div className="process-grid"><div><span>01</span><h3>Frame</h3><p>Write the problem before opening the editor.</p></div><div><span>02</span><h3>Build</h3><p>Use AI to remove repetitive work, not to skip thinking.</p></div><div><span>03</span><h3>Test</h3><p>Run the interaction, find the weak assumption, fix it.</p></div><div><span>04</span><h3>Document</h3><p>Keep the three beats so the next case is cheap to add.</p></div></div>
        </section>

        <section id="next" className="section next">
          <div className="next-main"><p className="eyebrow">WHAT&apos;S NEXT</p><h2>The next case is already named.</h2><p>When LibTrack moves from concept toward a real end-to-end booking flow, I&apos;ll add it here using the same three beats: problem → what I did → what came of it.</p><a className="button dark" href="#work">See the case structure ↑</a></div>
          <div className="reminder"><span className="calendar">FRI · 7:00 PM</span><h3>Add the next shipped case.</h3><p>A recurring reminder keeps the portfolio connected to actual work instead of becoming a once-a-year redesign project.</p><div className="reminder-line"><span>✓</span> Problem is clear</div><div className="reminder-line"><span>✓</span> Work is named</div><div className="reminder-line"><span>✓</span> Result is documented</div></div>
        </section>

        <section id="contact" className="contact"><p className="eyebrow">LET&apos;S BUILD</p><h2>Have a problem worth turning into a product?</h2><p>I&apos;m interested in product engineering, AI-assisted development and practical software.</p><div><a className="button light" href="https://github.com/emManab" target="_blank">Connect on GitHub ↗</a><a className="button outline" href="https://github.com/emManab" target="_blank">GitHub ↗</a></div></section>
      </main>

      <footer><span>© 2026 Manab Barman</span><span>AI Fluency Capstone · Built with Next.js</span><a href="#">&uarr; Back to top</a></footer>

      {open && <div className="modal-backdrop" onClick={()=>setOpen(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setOpen(null)}>×</button><span className="type">{open.type}</span><h2>{open.title}</h2><p>{open.summary}</p><div className="modal-beats"><div><b>Problem</b><p>{open.problem}</p></div><div><b>What I did</b><p>{open.did}</p></div><div><b>What came of it</b><p>{open.result}</p></div><div><b>What I&apos;d do next</b><p>{open.next}</p></div></div></div></div>}
    </>
  );
}