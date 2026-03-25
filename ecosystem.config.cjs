module.exports = {
  apps : [{
    name: 'cbr-ai-website',
    script: './node_modules/vite/bin/vite.js',
    args: '--port=3020 --host=0.0.0.0',
    cwd: __dirname,
    env: {
      NODE_ENV: 'development',
      PORT: 3020
    }
  }]
};
