import axios from 'axios'

export default async function({store,params}){
    return await axios.get('http://localhost:3000/posts/'+params.id).then((response)=>{
        store.commit('singlePost',response.data)
    })
}