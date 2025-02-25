import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name:"membreApp",
      filename:"membreEntry.js",
      exposes:{
        './MembrePage':'./src/Membre'
      },
      shared:['react','react-dom']
    }),

     {
      name: "vite-plugin-notify-host-on-rebuild", //ici on cree un plugin personnalisé pour vite
      apply(config, { command }) {
        //il determine quand le build sera utilisé
        return Boolean(command === "build" && config.build?.watch); // command === "build" → Le plugin ne s'active que lors d'une construction (vite build).
        // Vérifie si l'option watch est activée dans la config de build (watch = surveiller les changements et reconstruire automatiquement).
        // et Boolean(...) → Convertit le tout en true ou false.
        // Si on est en mode build et qu'on surveille les fichiers, alors le plugin s'active.
      },
      async buildEnd(error) { //Cette fonction se déclenche une fois que la construction (vite build) est terminée.
        if (!error) {
          try {
            await fetch("http://localhost:5000/__fullReload"); //Envoyer une requête HTTP au host, t /__fullReload été défini dans le host pour déclencher un rechargement total quand il reçoit cette requête.
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
