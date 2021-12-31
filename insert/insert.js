const knex = require("./../connection/connection");

exports.post = (req, res) => {
  const P_data = req.body;
  knex("amol_crud")
    .insert(P_data)
    .then(() => {
      console.log("Data inserted successfully...");
      res.send("Data inserted successfully...");
    })
    .catch((err) => {
      throw err;
    });
};
exports.get = (req, res) => {
  const data = req.params.id;
  knex("amol_crud")
    .where({ ID: data })
    .then((data) => {
      res.send(data);
    });
};

exports.delete = (req, res) => {
  const assd = req.params.id;
  knex("amol_crud")
    .where({ ID: assd })
    .del()
    .then((msg) => {
      res.send("Deleted...");
    });
};

exports.put = (req, res) => {
  const p = req.params.id;
  const dsa = req.body;
  knex("amol_crud")
    .where({ ID: p })
    .update(dsa)
    .then(() => {
      res.send("Updated...");
    })
    .catch((err) => {
      res.send(err);
    });
};
