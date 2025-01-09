import { useApi } from "./api";

const useAuthService = () => {
    const { api } = useApi();

    return {
        authentication: async (data) => {
            return await api.post('/login', data);
        },
    };
};

export default useAuthService;