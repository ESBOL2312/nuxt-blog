import Vuex from 'vuex'

const createStore = () =>{
    return new Vuex.Store({
        state:{
            record:[],
            posts:[],
            post:[],
            author:null,
        },
        mutations:{
            add(state,payload){
                state.record = payload;
            },
            addPost(state,payload){
                state.posts = payload;
            },
            singlePost(state,payload){
                state.post = payload;
            },
            addAuthor(state, payload){
                state.author = payload
            }
        }
    })
}
export default createStore