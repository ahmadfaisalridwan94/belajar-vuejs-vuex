// actions.js
import axios from 'axios';

export async function addRandomNumber(context) {
  try {
    const response = await axios.get(
      'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new'
    );

    if (response.status === 200) {
      const randomNumber = parseInt(response.data);
      context.commit('addCounter', randomNumber);
    } else {
      // Handle the case when the API call is not successful (optional)
      console.error('Failed to fetch a random number.');
    }
  } catch (error) {
    // Handle any errors that might occur during the API call
    console.error('Error fetching a random number:', error.message);
  }
}
