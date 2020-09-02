import axios from 'axios'

export default async function({store}){
    return await axios.get('http://localhost:3000/posts/').then((response)=>{
        store.commit('addPost',response.data)
    })
}