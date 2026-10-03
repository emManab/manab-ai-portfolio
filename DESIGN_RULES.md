# Portfolio Design System

This document is the visual and content contract for Manab's portfolio. Future changes should improve the system rather than randomly restyle individual sections.

## 1. Visual direction

- Mood: premium, experimental, practical, confident.
- Primary theme: warm paper + near-black ink.
- Accent system: electric blue for interaction, acid lime for emphasis, violet for secondary surfaces.
- Typography: Manrope for interface/headlines; DM Mono for labels, metadata and technical signals.
- Shape language: rounded cards with controlled radii; avoid excessive pills.
- Depth: use soft shadows, borders and restrained gradients instead of heavy glassmorphism.
- Motion: every important interactive element should have a purposeful hover, reveal or transition; never animate only for decoration.

## 2. Layout rules

- Keep content inside the 1180px reading width.
- Use generous whitespace around major sections.
- Use a strong visual hierarchy: eyebrow -> headline -> explanation -> action.
- Alternate dense and quiet sections to create rhythm.
- Use full-width bands for major changes in mood.
- Keep mobile layouts single-column unless a two-column layout remains genuinely readable.

## 3. Motion rules

- Hero content enters with a short upward reveal.
- Important accent elements can loop slowly.
- Hover movement should normally stay below 10px.
- Use transform/opacity for smooth animations.
- Respect prefers-reduced-motion.
- Avoid continuous movement that competes with reading.
- Interactive state changes should be visibly different but fast.

## 4. Content rules

Every project should answer:
1. What problem existed?
2. What did Manab build or try?
3. What came from it?
4. What would happen next?

Never inflate metrics, users, revenue, awards or production status that are not documented.

## 5. Voice

- First person.
- Clear and human.
- Short sentences where possible.
- Prefer concrete verbs: build, test, ship, learn, simplify.
- Avoid corporate filler such as leveraged, synergy, revolutionary or world-class.
- Show curiosity without pretending every experiment was a success.

## 6. AI positioning

AI is presented as a development multiplier, not as a substitute for judgment.

Good:
I use AI to move faster, explore implementation paths and debug.

Avoid:
AI built everything for me.

The portfolio should demonstrate both technical fluency and human decision-making.

## 7. Skill positioning

Current skills represented by the portfolio:
- Flutter
- Firebase
- Local storage
- LLM/API integration
- Product UX
- AI-assisted development
- Prototyping
- Product thinking

Only add a technology when it is actually used in a project.

## 8. Capstone requirement

The site should always make these easy for a stranger to find:
- selected work
- a working interaction/demo
- the honest AI-assisted build story
- the build process
- what is next
- a way to reach the GitHub profile

The portfolio itself should remain a working example of the user's approach: idea -> build -> test -> learn -> document.
