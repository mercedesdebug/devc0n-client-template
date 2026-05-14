Here's what to always include in every new project. Save this as `SETUP.md` in your repo:

```bash
cat > SETUP.md << 'EOF'
# Project Setup Checklist

## Required Files
- [ ] index.html (points to /src/entry-client.tsx)
- [ ] src/entry-client.tsx
- [ ] src/routes/__root.tsx
- [ ] src/routes/index.tsx
- [ ] src/components/Header.tsx
- [ ] src/components/Footer.tsx
- [ ] src/routeTree.gen.ts (generated — run: npx @tanstack/router-cli generate)

## index.html must use:
<script type="module" src="/src/entry-client.tsx"></script>

## entry-client.tsx template:
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './styles.css'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register { router: typeof router }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

## __root.tsx template:
import { createRootRoute, Outlet } from '@tanstack/react-router'
export const Route = createRootRoute({
  component: () => <Outlet />,
})

## vite.config.ts — NO Cloudflare plugin (Vercel deploy):
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    TanStackRouterVite({ routesDirectory: './src/routes' }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
})

## vercel.json:
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}

## After cloning / new project:
1. npm install
2. npx @tanstack/router-cli generate
3. npm run dev -- --host 0.0.0.0
EOF
```

The key rules to remember:
- **Never use `@cloudflare/vite-plugin`** if deploying to Vercel
- **Always run** `npx @tanstack/router-cli generate` after adding routes
- **`index.html` must point to `entry-client.tsx`**, not `main.tsx`
- **Always have** `__root.tsx` and `index.tsx` in routes
