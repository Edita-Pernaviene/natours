/* eslint-disable  */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_51IygVcGO2EPpiNuNuZHH6GbbY3gKwlXCj2yIuG6T5bwwYom1C3ougxEudhiq3KTw5cXHnwWqo0iBagcDVR7Ef2ek00ATzLZ14O');

export const bookTour = async tourId => {
     try {
     // 1) Get checkout session from API
     const session = await axios(
          // this whole url we use in development only
          //`http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
          `/api/v1/bookings/checkout-session/${tourId}`
          );
//console.log(session);
     // 2) Create checkout form + charge credit card
     await stripe.redirectToCheckout({
     sessionId: session.data.session.id
 });     
     } catch(err) {
          console.log(err);
          showAlert('error', err);
     }
};