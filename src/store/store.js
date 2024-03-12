import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import apiClient from '../../services/apiClient';

export default createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    getters: {
        isAuthenticated: state => state.user
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                let response = await apiClient.post('/api/login', credentials)
                commit('setUser', response.data.user)
            } catch (error) {
                // Handle error
                console.log(error)
            }
        }
    },
    plugins: [createPersistedState()],
})