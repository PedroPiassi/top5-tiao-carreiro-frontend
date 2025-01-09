import axios from "axios";
import Cookies from "js-cookie";

export const useApi = () => {
    const token = Cookies.get("token");

    const api = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
        }
    });

    return { api };
};
