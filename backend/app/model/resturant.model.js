module.exports = (sequelize, Sequelize) => {
    const Resturant = sequelize.define("resturant", {
      food: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      }
    });
  
    return Resturant;
  };