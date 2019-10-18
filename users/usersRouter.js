const express = require('express');

//Routing comes with express so all we need to do is create it
const router = express.Router();

const users = require('./usersAccess.js');

// any url that begins with /api/hubs
//get users
router.get('/', (req, res) => {
    users.get()
      .then(users => {
        res.json(users)
      })
      .catch(err => {
          res.status(500).json(err)
      })
  });
  
  
  //get users by id 
  router.get('/:id', (req, res) => {
    const {id} = req.params;

    users.getById(id)
    
         .then(user => {
            if(user){
                res.json(user)
            }else{
                res.status(400).json({ message: "The user with the specified ID does not exist." });
            }
        })

        .catch(err => {
            res.status(500).json(err)
        });
  });

module.exports = router;