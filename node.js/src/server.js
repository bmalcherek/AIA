const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);

const path = require("path");
const db = require("./db");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  expressSession({
    name: "session",
    secret: "1337",
    store: new FileStore({}),
  })
);
app.use(bodyParser.urlencoded());
app.use((req, res, next) => {
  if (!Array.isArray(req.session.cart)) req.session.cart = [];
  next();
});

app.get("/", (req, res) => {
  db.all("SELECT * FROM products", (err, products) => {
    if (err) throw err;
    let message = "";

    switch (req.query.success) {
      case "true":
        message = "Transaction successfull";
        break;
      case "false":
        message = "Error during the transaction";
        break;
    }

    console.log(message);

    const cart = req.session.cart;
    res.render("index", { products, cart, message });
  });
});

app.get("/cart", (req, res) => {
  const items = req.session.cart;
  const stmt = db.prepare(
    `SELECT * FROM products WHERE id IN (${"?"
      .repeat(items.length)
      .split("")
      .join(",")})`
  );
  stmt.all(items, (err, products) => {
    if (err) throw err;
    const cart = req.session.cart;
    res.render("cart", { products, cart });
  });
});

app.post("/cart/add-product", (req, res) => {
  req.session.cart.push(req.body.product_id);

  res.redirect("/");
});

app.post("/cart/remove-product", (req, res) => {
  const removeId = req.body.product_id;
  req.session.cart = req.session.cart.filter((item) => {
    return item !== removeId.toString();
  });

  res.redirect("/cart");
});

app.post("/cart/clear", (req, res) => {
  req.session.cart = [];

  res.redirect("/");
});

app.post("/cart/purchase", (req, res) => {
  const cart = req.session.cart;
  const stmt = db.prepare(`DELETE FROM products WHERE id = ?`);

  db.all("SELECT * FROM products", (err, products) => {
    if (err) throw err;
    let git = true;

    for (const item of cart) {
      if (products.some((product) => product.id.toString() === item)) {
        stmt.run(item);
      } else {
        git = false;
        break;
      }
    }

    req.session.cart = [];
    if (git) {
      res.redirect("/?success=true");
    } else {
      res.redirect("/?success=false");
    }
  });
});

app.listen("5000");
