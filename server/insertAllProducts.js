var items = require("../data/sephoraData.json");
var sequelize = require("./db/index");
var Sequelize = require("sequelize");

var insertAllItems = function(items) {
  items.map(item =>
    Products.create({
      id: item.id,
      brand: item.brand,
      product_name: item.product_name,
      product_price: item.product_price,
      product_rating: item.product_rating,
      product_loves: item.product_loves,
      product_img: item.product_img
    })
      .then(() => console.log("Items added!"))
      .catch(e => console.error(e, "You done fuckdd up"))
  );
};

const Products = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  brand: Sequelize.STRING,
  product_name: Sequelize.STRING,
  product_price: Sequelize.STRING,
  product_rating: Sequelize.DECIMAL(10, 1),
  product_loves: Sequelize.INTEGER,
  product_img: Sequelize.STRING
});
Products.sync({ force: true })
  .then(() => {
    insertAllItems(items);
  })
  .catch(e => console.error("erewr", e));
