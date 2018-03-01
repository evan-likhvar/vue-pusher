import api from '../api/all'
import conversation from "./conversation";

const state = {
    conversations: [],
    loadingConversation: false
};

const getters = {
    allConversations: state => {
        return state.conversations
    },
    loadingConversation: state => {
        return state.loadingConversation
    }
};


const actions = {
    getConversations ({dispatch, commit},page) {
        commit('setConversationsLoading', true);
        api.getConversations(1).then((response)=>{
            commit('setConversations',response.data.data);
            commit('setConversationsLoading', false)
        })
    }
};


const mutations = {
    setConversations(state,conversations) {
        state.conversations = conversations
    },
    setConversationsLoading (state, status) {
        state.loadingConversations = status
    },
};

const  modules = {
    conversation: conversation
};

export default {
    state,
    getters,
    mutations,
    actions,
    modules
}