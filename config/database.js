module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-52-21-252-142.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dbolbmgdj4v8am'),
        username: env('DATABASE_USERNAME', 'qgvwitodqnkshd'),
        password: env('DATABASE_PASSWORD', '4ad0e3def80c84c540814de6e898222b722e29606f08d0161586cb47512eb252'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
