import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export const FetchFaqs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/faqs`);
    console.log(response.data);
    return response.data;
    // console.log(response.data); 
  } catch (error) {
    console.error('Error fetching faqs:', error);
    return [];
  }
}; 