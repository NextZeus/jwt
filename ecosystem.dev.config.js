module.exports = {
  apps: [{
    name: 'API-Dev',
    script: 'bin/www',
    args: '',
    exec_mode: 'cluster',
    instances: 0,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    }
  }]
};