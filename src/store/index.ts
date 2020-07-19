import Vue from 'vue';
import Vuex from 'vuex';
import { getCityInfo, getCityPhoto, getCityWeather } from '@/services';

Vue.use(Vuex);

const OFFICES = [
  '249758',
  '308526',
  '187423',
];

const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';
const SET_OFFICE_DATA = 'SET_OFFICE_DATA';
const SET_OFFICES_DATA = 'SET_OFFICES_DATA';

const getData = async (locationKey: string) => {
  const info = (await getCityInfo(locationKey));
  const photo = (await getCityPhoto(info.EnglishName));
  const weather = (await getCityWeather(locationKey));

  return {
    info,
    photo,
    weather,
  };
};

export default new Vuex.Store({
  state: {
    error: false,
    loading: true,
    offices: OFFICES.reduce((result, office) => ({
      ...result,
      [office]: {
        weather: null,
        photo: null,
        info: null,
      },
    }), {}),
  },
  mutations: {
    [SET_LOADING](state) {
      state.loading = true;
    },
    [SET_OFFICE_DATA](state, { locationKey, data }) {
      Vue.set(state.offices, locationKey, data);
      state.loading = false;
    },
    [SET_OFFICES_DATA](state, data) {
      Vue.set(state, 'offices', data);
      state.loading = false;
    },
    [SET_ERROR](state) {
      state.error = true;
      state.loading = false;
    },
  },
  actions: {
    getOfficesData: async ({ state, commit }) => {
      commit(SET_LOADING);
      const locationKeys = Object.keys(state.offices);

      try {
        const calls = locationKeys.map(getData);
        const results = await Promise.all(calls);
        const payload = results.reduce((partial, office) => ({
          ...partial,
          [office.info.Key]: office,
        }), {});
        commit(SET_OFFICES_DATA, payload);
      } catch (error) {
        commit(SET_ERROR, true);
      }
    },
  },
  getters: {
    offices(state) {
      return Object.values(state.offices);
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
});
