import Vue from 'vue';
import MaxModal from '@/components/Modal.vue';

const url = 'https://diwos.ru/api/graphql'; // ('NODE_ENV' == 'production') ? '/api/graphql' :

export default (context, inject) => {

  async function mPostQuery (query, variables = null) {
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

  inject('mGQLquery', mGQLquery)
}