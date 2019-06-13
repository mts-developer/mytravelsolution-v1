const getTableData = (req, res, db) => {
  db.select("*")
    .from("flights")
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: false });
      }
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

const postTableData = (req, res, db) => {
  const { name, region } = req.body;
  db("flights")
    .insert({ name, region })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

const putTableData = (req, res, db) => {
  const { id, name, region } = req.body;
  db("flights")
    .where({ id })
    .update({ name, region })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

const deleteTableData = (req, res, db) => {
  const { id } = req.body;
  db("flights")
    .where({ id })
    .del()
    .then(() => {
      res.json({ delete: true });
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
};
