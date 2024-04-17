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
            sessionStorage.clear()
        }
    },
    getters: {
        isAuthenticated: state => state.user
    },
    actions: {
        async login({ commit }, credentials) {
            let response = await apiClient.post('/api/login', credentials)
            commit('setUser', response.data.user)
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
    plugins: [createPersistedState({
        storage: sessionStorage,
        key: 'vuex',
        reducer: (state) => ({
            ...state,
            lastUpdated: new Date().toISOString(),
        })
    })],
})