// const Products = require("./db/PostgreSQL/products.js");
const pool = require("./db/PostgreSQL/index.js");

controller = {
  get: (request, response) => {
    // console.log(req.query.ID);
    // var id = req.query.ID;
    var id = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
    // console.log(id)
    pool.query(`SELECT * FROM products WHERE id > 9000000 AND id = ${id}`)
      .then(res => response.send(res.rows[0]))
      .catch(e => setImmediate(() => { throw e }))

    // Products.findById(id)
    //   .then(product => {
    //     // console.log(product.dataValues);
    //     response.send(product.dataValues);
    //   })
    //   .catch(err => {
    //     console.log(err, "You got an error in the db bruh");
    //   });
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