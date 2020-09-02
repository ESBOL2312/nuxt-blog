import axios from 'axios'

export default async function({store,params}){
    console.log('1')
    return await axios.get('http://localhost:3000/users/'+params.authorId).then((response)=>{

        store.commit('addAuthor',response.data)
        console.log('2')
    })
}