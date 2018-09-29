const Products = require("./db/products.js");

controller = {
  get: (req, res) => {
    // console.log(req.query.ID);
    var id = req.query.ID;

    Products.findById(id)
      .then(product => {
        // console.log(product.dataValues);
        res.send(product.dataValues);
      })
      .catch(err => {
        console.log(err, "You got an error in the db bruh");
      });
  }, 

  post: (req, res) => {
    var item = req.body;
  
    Products.create({
      id: item.id,
      brand: item.brand,
      product_name: item.product_name,
      product_price: item.product_price,
      product_rating: item.product_rating,
      product_loves: item.product_loves,
      product_img: item.product_img
    })
      .then(() => console.log("New item added, ON FLEEEEEK!"))
      .catch(e => console.error(e, "You done fuckdd up"));
  },

  update: (req, res) => {
    console.log('In Update')
  },

  delete: (req, res) => {
    console.log('In Delete')
  }
}

module.exports = controller;