const Check = require('../models/checks');

exports.createCheck = async (req, res) => {
  const { engine, mirrors, electrical, tires, general } = req.body;

  if (!engine || !mirrors || !electrical || !tires || !general) {
    res.status(400).end();
  } else {
    const newCheck = new Check({
      engine,
      mirrors,
      electrical,
      tires,
      general,
    });
    await newCheck.save();
    res.status(200).send('success!');
  }
};
