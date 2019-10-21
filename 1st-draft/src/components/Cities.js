import React, { useState, setState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithRouter';

// import AddNewtree from './AddNewtree';
//3rd Steps
class UsersCities extends React.Component {
    state = {
        cities: []
      };
      componentDidMount() {
        this.getData();
      }

      //gets the data 
      getData = () => {
        axiosWithAuth()
        //this users endpoint comes from the server file, and is what is being added to the base url
          .get('/cities')
          .then(res => {
            console.log(res.data)
            //sets the data to the users object's state
            this.setState({
              cities: res.data 
            });
          })
          .catch(err => console.log(err));
      };
    
 //4- for the NewusersForm component we need to create a function that takes in a user
 //and create a new note object
//-4 setting the values for each new user we create
//will be passed down as props to NewuserForm component


    //    addNewuser = user => {
    //       const newuser = {
    //         id: Date.now(),
    //         name: user.name,
    //         member: user.member
    //       };
    //       //setting the state by spreading users down and create a new user
    //       this.setState([...this.state.users, newuser]);
    //     }
      
      
      
     

    render() {
        
        return (
            <>
            <div className = 'background'>
            
            <h2>Choose a city</h2>
            
            {this.state.cities.map(city => (
                <div>
                    <p>{city.name}</p> 
                    </div>
            ))} 
                </div>
                     
            </>
        )
    }
}
  
export default UsersCities;