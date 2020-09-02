import axios from 'axios'

export default async function({store}){
    return await axios.get('http://localhost:3000/users/').then((response)=>{
        store.commit('add',response.data)
    })
}