const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    full_name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  
  User.associate = function (models) {
    // associations can be defined here
  };

  User.beforeCreate((user) => {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  });

  User.prototype.comparePassword = function (somePassword) {
    return bcrypt.compareSync(somePassword, this.password);
  };

  return User;
};
