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
      name:"app",
      remotes:{
        listApp: "http://localhost:5004/assets/listEntry.js",
        membreApp: "http://localhost:5001/assets/membreEntry.js",
      },
      shared:["react","react-dom"]
    }),


    {
      name: 'vite-plugin-reload-endpoint',//ici on cree un plugin personnalisé pour vite 

      configureServer(server) { //ajout d'un middleware , lorsque vite est activé il se lance 
        server.middlewares.use((req, res, next) => {//intercepetur http 
          if (req.originalUrl === '/__fullReload') { //voir si le req.url est egal a ca, dans le remote 

            server.hot.send({ type: 'full-reload' }); //si oui on redemarre ou actialise le vite 

            res.end('Full reload triggered'); //envoyer une response res
          } else {
            next(); //si c'est pas du /__full-reload alors, next() on continue 
          }
        });
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
