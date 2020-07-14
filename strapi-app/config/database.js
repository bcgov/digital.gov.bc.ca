module.exports = ({ env }) => ({
  'defaultConnection': 'default',
  'connections': {
    'default': {
      'connector': 'mongoose',
      'settings': {
        'client': 'mongo',
        'uri': env('DATABASE_URI'),
        'database': env('DATABASE_NAME'),
        'username': env('DATABASE_USERNAME'),
        'password': env('DATABASE_PASSWORD'),
        'host': env('DATABASE_HOST'),
        'port': env('DATABASE_PORT'),
      },
      'options': {}
    }
  }
});