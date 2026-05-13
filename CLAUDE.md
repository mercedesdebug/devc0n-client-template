# Devc0n Studios — Claude Code Instructions

Read client.config.ts first. That is the only file you edit per client.

Rules:
- Never hardcode client values in components
- All values come from client.config.ts
- All copy comes from src/content/index.ts
- Mobile-first responsive always
- Under 1 second load target

Workflow:
1. Read client.config.ts
2. Fill src/content/index.ts
3. bun run dev
4. bun run build then push
