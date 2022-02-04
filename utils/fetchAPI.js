import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0e3866f6d7msh3016d1fb6b96244p1fd4c9jsne2f142233646'
        }
    })

    return data;
}