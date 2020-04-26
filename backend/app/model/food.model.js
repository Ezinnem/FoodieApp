module.exports = (sequelize, Sequelize) => {
    const Food = sequelize.define("food", {
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      isAvalable: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Food;
  };