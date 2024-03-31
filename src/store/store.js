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
        },
        removeUser(state) {
            state.user = null
            localStorage.removeItem('vuex')
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
        },
        async logout({ commit }) {
            try {
                await apiClient.post('/api/logout')
                commit('removeUser')
            } catch (error) {
                console.log(error)
            }
        }
    },
    plugins: [createPersistedState()],
})