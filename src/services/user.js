import { useApi } from "./api";

const useUserervice = () => {
    const { api } = useApi();

    return {
        store: async (data) => {
            return await api.post('/register', data);
        },
    };
};

export default useUserervice;