const axios = require('axios');

const getRecipes = async function (name) {
  try {
    const res = await axios(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}`);

    const data = await res.data;
    console.log(res);
    console.log(data.data.recipes);

  } catch (err) {
    console.error('message ' + err);;
  }
}
getRecipes('pizza');