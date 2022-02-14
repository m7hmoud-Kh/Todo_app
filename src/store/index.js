import axios from "axios";
import {
    createStore
} from "vuex";

export default createStore({
    state: {
        item: {
            task: '',
            status: false,
            date: new Date().toDateString()
        },
        vaildate_Add:{
            status: false,
            class_Added: ''
        }
    },
    mutations: {
        AddTask: async (state) => {
            if (state.item.task) {
                let result = await axios.post("http://localhost:3000/items", state.item)
                if (result.status == 201) {
                    state.vaildate_Add.status = false
                    state.vaildate_Add.class_Added = ''
                    state.item.task = ''
                }
            }else{
                state.vaildate_Add.status = true
                state.vaildate_Add.class_Added = 'error'
            }

        }
    }
})