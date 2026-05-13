import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackPlugin } from '@tanstack/react-start/vite'

export default defineConfig({
  plugins: [
    tanstackPlugin(),
    react({
      babel: {
        plugins: [['@babel/plugin-syntax-typescript', { isTSX: true }]],
      },
    }),
  ],
})
