import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
  data: {
    1: {
      id: 1,
      name: 'Proximus',
      logo: 'https://farm4.static.flickr.com/3857/15357797485_91483b9a4d_b.jpg',
      request_sent: 12,
      request_served: 10,
    },
    2: {
      id: 2,
      name: 'Orange',
      logo: 'https://www.orange.com/var/orange_site/storage/images/orange.com/mediatheque/toutes-les-images/siege-social/logo-orange_1234/395027-2-eng-GB/Orange-logo_1234_mediatheque-lightbox.jpg',
      request_sent: 5,
      request_served: 0,
    },
  },
  table_control: {
    search_text: '',
    ordering_key: 'name',
    ordering_direction: 'asc',
    sorted_filtered_ids: [],
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
