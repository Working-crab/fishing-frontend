import Constants from '@/config'

const url = Constants.BASE_URL + '/api/graphql' //'https://diwos.ru/api/graphql'; // ('NODE_ENV' == 'production') ? '/api/graphql' :

export default (context, inject) => {

  async function mGQLquery (query, variables = null, operationName = null) {
    const mGQLquery = {
      query,
      variables,
      operationName
    };
  
    const axiosQuery = {
      url,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(mGQLquery),
    };
  
    try {
      const response = await context.$axios(axiosQuery);
      return response.data;
    } catch (error) {
      console.error('mGQLquery error: ', error.response?.data);
      return false;
    }

  }
  
  // const resultData = mGQLquery(`
  // {
  //   products {
  //     edges {
  //       node {
  //         id
  //         description
  //         name
  //       }
  //     }
  //   }
  // }`);
  // console.log({data: JSON.stringify(resultData)});

  inject('mGQLquery', mGQLquery)
}
