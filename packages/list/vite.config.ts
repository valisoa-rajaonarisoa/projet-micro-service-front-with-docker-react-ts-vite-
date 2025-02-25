import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

    federation({
      name:"listApp",
      filename:"listEntry.js",
      exposes:{
        './List':'./src/List'
      },
      shared:['react','react-dom']
    }),

    {
      name: "vite-plugin-notify-host-on-rebuild", 
      apply(config, { command }) {
        return Boolean(command === "build" && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            await fetch("http://localhost:5000/__fullReload");
          } catch (e) {
            console.log(e);
          }
        }
      },
    },
  ],

  build:{
    modulePreload:false,
    target:"esnext",
    minify:false,
    cssCodeSplit:false,
  }
})
