import {
    GET_CHARACTERS,
    CHARACTERS_LOADING
} from './types';


const axios = require('axios');


export const getCharacters = (charactersURL)=> dispatch=>{
    dispatch(setCharactersLoading());

    async function getCharactersName(charactersURL,resolve){
        const charactersName = [];
        for(let i=0;i<charactersURL.length;i++){
            const result = await axios.get(charactersURL[i]).then(res=>res.data.name);
            charactersName.push(result);
        }
        resolve(charactersName)
    }
    const setCharactersName = new Promise((resolve,reject)=>{
        getCharactersName(charactersURL,resolve)
    })
    setCharactersName
    .then(res=>{
        dispatch({
            type:GET_CHARACTERS,
            payload:res
        })
    })
    .catch(err=>console.log(err.msg))


};

export const setCharactersLoading = ()=>{
    return {
        type: CHARACTERS_LOADING,
    };
};