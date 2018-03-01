import api from '../api/all'

const state = {
    conversation: null,
    loadingConversation: false
};

const getters = {

};


const actions = {
    getConversation ({dispatch, commit}, id) {

/*        commit('setConversationLoading', true)

        if (state.conversation) {
            Echo.leave('conversation.' + state.conversation.id);
        }
*/

        api.getConversation(id).then((response) => {
            commit('setConversation', response.data.data)
            commit('setConversationLoading', false)

            Echo.private('conversation.' + id)
                .listen('ConversationReplyCreated', (e) => {
                    commit('appendToConversation', e.data)
                })
                .listen('ConversationUsersCreated', (e) => {
                    commit('updateUsersInConversation', e.data.users.data)
                });

            window.history.pushState(null, null, '/conversations/' + id)
        })


    },
};


const mutations = {
    setConversation (state, conversation) {
        state.conversation = conversation
    },
    setConversationLoading (state, status) {
        state.loadingConversation = status
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}