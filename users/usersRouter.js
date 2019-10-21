const express = require('express');

const router = express.Router();

const users = require('./usersAccess.js');

router.get('/', (req, res) => {
    users.get()
         .then(users => {
              res.json(users)
         })
         .catch(err => {
            res.status(500).json(err)
         })
  });
  

  router.get('/:id', (req, res) => {
    const {id} = req.params;

    users.getById(id)

         .then(user => {
            if(user){
                res.json(user)
            }else{
                res.status(400).json({ message: "TRY AGAIN, there is no user with that id." });
            }
          })
          .catch(err => {
            res.status(500).json(err)
          });
  });

  router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const update = req.body;

    if(update.username === "" &&
       update.email === "" && 
       update.password === ""  )
    {
        res.status(400).json( {errorMessage: 'Please add username, password or email.'} );
    } else {
        users.update(userId, update)
             .then(updatedUser => {
                  if(updatedUser === 1){
                        users.getById(userId)
                             .then(user => {
                                  res.json(user); 
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



router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  users.remove(userId)
       .then (deleted => {
           if(deleted > 0){
               res.json({message: 'User has been deleted.'});
           } else {
               res.status(404).json({message: 'The user with the specified ID does not exist.'})
           }
        })
        .catch (err => {
              res.status(500).json ({err: 'The user could not be removed.'});
        })

});






module.exports = router;