import { API } from "./api";

export const getProducts = (target, catId) => {
    return catId
        ? API.get(`/products/?target=${target}&category=${catId}`)
        : API.get(`/products/?target=${target}`);
};

export const getProductsByCategory = (category) => {
    return API.get(`/products/?category=${category}`);
};
export const getProductsBySearch = (searchValue) => {
    return API.get(`/products/search?searchQuery=${searchValue}`);
};

export const getLikeProducts = (userId) => {
    return API.get(`/products?likeId=${userId}`);
};

export const getProductById = (id) => {
    return API.get(`/products/${id}`);
};

export const getProductCount = () => {
    return API.get(`/products/get/count`);
};

export const CreateProduct = (newProduct) => {
    return API.post(`/products`, newProduct);
};

export const updateProductById = (id, updateProduct) => {
    return API.patch(`/products/${id}`, updateProduct);
};

export const deleteProductById = (id) => {
    return API.delete(`/products/${id}`);
};

export const likeProduct = (id) => {
    return API.patch(`/products/${id}/like`)

}
