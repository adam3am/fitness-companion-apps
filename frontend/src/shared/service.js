import * as axios from 'axios';

const getHeroes = async function() {
  try {
    const response = await axios.get('http://localhost:3000/heroes');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getHero = async function(id) {
  try {
    const response = await axios.get(`http://localhost:3000/heroes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const dataService = {
  getHeroes,
  getHero,
};