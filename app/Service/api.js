import axios from 'axios';

axios.defaults.baseURL = 'http://0.0.0.0:9090';

export default {
    gameSession: {
        getParts: data => axios.post(`/api/game_session/start`, {...data}).then(res => res.data),
        getPartCategories: (category) => axios.get(`/api/game_session/records/`+category).then(res => res.data),
    }
};