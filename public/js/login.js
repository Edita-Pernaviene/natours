/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {         
     try {          
          const res = await axios({               
            method: 'POST',
            //this whole url is used in deveopment
            //url: 'http://localhost:3000/api/v1/users/login',
              url: '/api/v1/users/login',          
            data: {
               email,
               password
          }
     });
     
     if(res.data.status === 'success') {
          showAlert('success', 'Logged in successfully!');
          window.setTimeout(() => {
             location.assign('/');
          }, 1500);
       }       
     } catch (err) {          
       showAlert('error', err.response.data.message);          
     }     
};

export const logout = async () => {
     try {
          const res = await axios({
               method: 'GET',
               //url: 'http://localhost:3000/api/v1/users/logout',
               url: '/api/v1/users/logout',      
          });  
          if((res.data.status = 'success')) location.reload(true);
          window.self.close();
     } catch(err) {
          console.log(err.response);
          showAlert('error', 'Error logging out! Try again.')
     }
};

