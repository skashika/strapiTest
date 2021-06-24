module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        "client": "postgres",
        "host": "${process.env.DATABASE_HOST || '127.0.0.1'}",
        "port": "${process.env.DATABASE_PORT || 5432}",
        "database": "${process.env.DATABASE_NAME || 'shubham'}",
        "username": "${process.env.DATABASE_USERNAME || 'shubham'}",
        "password": "${process.env.DATABASE_PASSWORD || 'Shubh@m29'}"
      },
      options: {
        "ssl": false
      },
    },
  },
});
