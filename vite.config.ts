import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/



export default defineConfig({
  plugins: [react(), tailwindcss()],
  
})

// export default defineConfig({
//   plugins: [
//     react(),     
//     tailwindcss(),
//   ],

//   build: {
//     rollupOptions: {
//       external: ['react', 'react-dom', 'react-dom/client' // ✅ important!
// ],
//       output: {
//         // Provide global variables to use in the UMD build
//         // for externalized deps
//         globals: {
//           React: 'react',
//           ReactDOM: 'react-dom/client'
//         },
//       }
//     }
//   },
  

// })
