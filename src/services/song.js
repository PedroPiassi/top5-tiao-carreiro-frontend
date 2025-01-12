import { useApi } from "./api";

const useSongervice = () => {
    const { api } = useApi();

    return {
        registerLink: async (url) => {
            return await api.post(`/song`, url);
        },
        getPerStatus: async (status, page = 1, limit = 5) => {
            return await api.get(`/song/${status}`, {
                params: { page, limit },
            });
        },
        findAll: async (status) => {
            return await api.get(`/songs/${status}`);
        },
        approveSong: async (id) => {
            return await api.put(`/song/approve/${id}`);
        },
        rejectSong: async (id) => {
            return await api.put(`/song/reject/${id}`);
        },
        deleteSong: async (id) => {
            return await api.delete(`/song/${id}`);
        },
    };
};

export default useSongervice;