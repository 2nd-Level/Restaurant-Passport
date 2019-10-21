const express = require('express');

const router = express.Router();

const cities = require('./citiesAccess.js');

router.get('/', (req, res) => {
    cities.get()
         .then(cities => {
              res.json(cities)
         })
         .catch(err => {
            res.status(500).json(err)
         })
  });
  

  router.get('/:id', (req, res) => {
    const {id} = req.params;

    cities.getById(id)

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

  router.post('/', (req, res) => {
    cities.add(req.body)
         .then(city => {
              res.status(201).json(city);
          })
         .catch (err => {
              res.status(500).json({ err: 'Cannot add the city' });
          });
  });

  router.put('/:id', (req, res) => {
    const cityId = req.params.id;
    const update = req.body;

    if(update.cityname === "" &&
       update.email === "" && 
       update.password === ""  )
    {
        res.status(400).json( {errorMessage: 'Please add cityname, password or email.'} );
    } else {
        cities.update(cityId, update)
             .then(updatedcity => {
                  if(updatedcity === 1){
                        cities.getById(cityId)
                             .then(city => {
                                  res.json(city); 
                             })
                             .catch(error => {
                                  res.status(404).json( {message: 'Could not save changes.'} );
                            })              
                  } else {
                       res.status(404).json({message: 'There is no city with that ID.'});
                  }
            })
            .catch(err => {
                  res.status(500).json({err: 'The city information can not be changed.'})
            })
    }
});



router.delete('/:id', (req, res) => {
  const cityId = req.params.id;

  cities.remove(cityId)
       .then (deleted => {
           if(deleted > 0){
               res.json({message: 'city has been deleted.'});
           } else {
               res.status(404).json({message: 'The city with the specified ID does not exist.'})
           }
        })
        .catch (err => {
              res.status(500).json ({err: 'The city could not be removed.'});
        })

});



  router.get('/:id', (req, res) => {
    const {id} = req.params;

    cities.getUsersCities(id)

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