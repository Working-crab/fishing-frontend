import Vue from 'vue';
import MaxModal from '@/components/Modal.vue';

const url = 'https://diwos.ru/api/graphql'; // ('NODE_ENV' == 'production') ? '/api/graphql' :

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
  
    const result = await context.$axios(axiosQuery);
  
    return result.data;
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
