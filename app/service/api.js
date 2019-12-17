import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.100.5:9090';

export default {
    parts: {
        getPartsByName: name => axios.get(`/api/parts/find/${name}`).then(res => res.data),
        getAllMainMemories: () => axios.get(`/api/parts/find`).then(res => res.data),
        pushParts: (data) => axios.post(`/api/parts/save`, data).then(res => res.data),
    }
};