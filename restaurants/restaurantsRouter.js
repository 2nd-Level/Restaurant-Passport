const express = require('express');

const router = express.Router();

const restaurants = require('./restaurantsAccess.js');



router.get('/', (req, res) => {
  restaurants.get()
       .then(restaurant => {
            res.json(restaurant)
       })
       .catch(err => {
          res.status(500).json(err)
       })
});
  router.get('/:id', (req, res) => {
    const {id} = req.params;

    restaurants.getById(id)

         .then(restaurant => {
            if(restaurant){
                res.json(restaurant)
            }else{
                res.status(400).json({ message: "TRY AGAIN, there is no city with that id." });
            }
          })
          .catch(err => {
            res.status(500).json(err)
          });
  });


  router.put('/:id', (req, res) => {
    const restaurantId = req.params.id;
    const update = req.body;

    if(update.name === "" &&
       update.address === "" && 
       update.phone_number === ""  )
    {
        res.status(400).json( {errorMessage: 'Please add username, password or email.'} );
    } else {
        restaurants.update(restaurantId, update)
             .then(updatedRestaurant => {
                  if(updatedRestaurant === 1){
                        restaurants.getById(restaurantId)
                             .then(restaurant => {
                                  res.json({message: "The restaurant has been updated"}); 
                             })
                             .catch(error => {
                                  res.status(404).json( {message: 'Could not save changes.'} );
                            })              
                  } else {
                       res.status(404).json({message: 'There is no user with that ID.'});
                  }
            })
            .catch(err => {
                  res.status(500).json({err: 'The user information can not be changed.'})
            })
    }
});

 
module.exports = router;