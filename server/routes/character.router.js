const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  const query = `
    SELECT * FROM "characters";
  `;

  pool.query(query)
    .then(result => {
        console.log('resultd sre', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all characters', err);
      res.sendStatus(500)
    })

});



module.exports = router;