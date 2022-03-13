import { useLocation } from "react-router-dom";

export const useSearch = () => {
    const useQuery = () => {

        return new URLSearchParams(useLocation().search);
    };
    const searchQuery = useQuery().get("searchQuery");
    const likeQuery = useQuery().get("likeId")


    return ({ searchQuery, likeQuery });
};
