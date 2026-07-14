# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Start

Each talk is a standalone [Slidev](https://sli.dev/) project in its own directory. To work on an existing talk:

```bash
cd {year}/{event}/{talk-name}
# Install dependencies (once)
bun install    # or pnpm install (see talk-specific CLAUDE.md)
# Start dev server
bun run dev    # or pnpm dev
```

Dev server runs on `http://localhost:3030` by default. Edit `slides.md` to update content — hot reload is automatic.

## Repository Structure

Mono-repo organized as `{year}/{event}/{talk-name}/`. Each talk has its own:
- `slides.md` — slide content (separated by `---`)
- `package.json` — dependencies and scripts
- `CLAUDE.md` — talk-specific commands and gotchas
- `public/` — images and assets
- `layouts/`, `components/`, `styles/` — custom theme (optional)

## Tools

All dev tools (node, bun, pnpm, @slidev/cli, etc.) are managed **globally** via [mise](https://mise.jdx.dev/) — no local `mise.toml` in this repo. Run `mise install` once if a tool is missing.

## Editing Slides

### Slide Structure

Each slide in `slides.md` is separated by `---`. Frontmatter selects the layout and passes props to the Vue component:

```markdown
---
layout: section
section: "01"
sectionName: "Introduction"
slideName: "Titre de la slide"
---

# Slide content here

<!-- Speaker notes go in HTML comments (not displayed to audience) -->
```

### Common Commands

```bash
cd {year}/{event}/{talk-name}
bun run build    # Export static HTML to dist/
bun run export   # Export to PDF (requires playwright)
```

**Note:** Each talk's `CLAUDE.md` documents package manager (pnpm/bun), theme type, and layout options.

## Creating a New Talk

1. Create `{year}/{event}/{talk-name}/` directory
2. Add `package.json` with `@slidev/cli` and a theme dependency
3. Create `slides.md` with at minimum a cover slide
4. **Custom theme:** add `layouts/`, `components/`, `styles/` and set `theme: ./` in the first slide's frontmatter
5. **NPM theme:** set `theme: <package-name>` — no local layouts needed
6. Create a talk-specific `CLAUDE.md` documenting package manager, theme details, and any gotchas

## Development Workflow

**Branching:** Use feature branches (`feat/`, `fix/`, `docs/`) from `main`.

```bash
git checkout -b feat/talk-name-topic
# Edit slides.md locally (dev server auto-reloads)
git add .
git commit -m "feat(talk): description"
git push origin feat/talk-name-topic
# Open PR to main
```

**Before merging:** Verify slides render correctly:
```bash
cd {year}/{event}/{talk-name}
bun run build   # Or pnpm build
```

## License

Content is under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) unless otherwise noted.
