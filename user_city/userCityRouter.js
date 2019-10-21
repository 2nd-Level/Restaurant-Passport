const express = require('express');

const router = express.Router();

const userCity = require('./userCityAccess.js');



router.get('/', (req, res) => {
  userCity.get()
       .then(cities => {
            res.json(cities)
       })
       .catch(err => {
          res.status(500).json(err)
       })
});
  router.get('/:id', (req, res) => {
    const {id} = req.params;

    userCity.getById(id)

         .then(city => {
            if(city){
                res.json(city)
            }else{
                res.status(400).json({ message: "TRY AGAIN, there is no city with that id." });
            }
          })
          .catch(err => {
            res.status(500).json(err)
          });
  });

 
module.exports = router;