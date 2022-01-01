import * as api from "../api/payment";

export const postPayment = (paymentData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postPayment(paymentData);

        if (data) navigate("/success", { state: { stripeData: data } });
    } catch (error) {
        console.log(error);
    }
};
