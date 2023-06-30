import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/test`);
    return response.data;
    console.log(response.data); 
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

