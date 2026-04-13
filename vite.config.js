// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import chatHandler from './api/sai-chat.js'

function apiMiddleware() {
  return {
    name: 'api-server',
    configureServer(server) {
      server.middlewares.use('/api/sai-chat', (req, res) => {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            req.body = body ? JSON.parse(body) : {};
          } catch (e) {
            req.body = {};
          }
          res.status = (code) => {
            res.statusCode = code;
            return res;
          };
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          };
          chatHandler(req, res);
        });
      });
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env }
  
  return {
    plugins: [react(), apiMiddleware()],
    base: '/', // Serve from domain root (custom domain)
  }
})
