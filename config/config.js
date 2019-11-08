

module.exports = {
  "development":{
    "username": "root",
<<<<<<< HEAD:config/config.json
    "password": "rootgitana2!",
    "database": "tododb",
=======
    "password": process.env.KEY,
    "database": "todo_db",
>>>>>>> 914e941779444684d57cd4df44ad094e5ec073c8:config/config.js
    "host": "localhost",
    "dialect": "mysql"
  },
  "test":{
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production":{
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}


