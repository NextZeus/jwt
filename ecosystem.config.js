module.exports = {
  apps: [{
    name: 'API',
    script: 'bin/www',
    args: '',
    exec_mode: 'cluster',
    instances: 0,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }],
  deploy: {
    production: {
      'user': 'root',
      'host': '47.104.216.30',
      'ref': 'origin/master',
      'repo': 'https://github.com/NextZeus/jwt.git',
      'path': '/var/www/production',
      'pre-setup': "yum install git -y;",
      'post-setup': "ls -la",
      'pre-deploy-local': "pwd; echo 'this is a local command' ",
      'pre-deploy': 'ls -la;',
      'post-deploy': 'git pull origin master;git log -n 2; npm run start_production;',
      'test': 'pm2 ls;'
    }
  }
};
