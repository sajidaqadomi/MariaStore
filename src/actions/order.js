import * as api from '../api/order'

export const postOrder = (order) => async (dispatch) => {
    try {
        const { data } = await api.postOrder(order)

        if (data) console.log(data)


    } catch (error) {
        console.log(error)

    }

}


