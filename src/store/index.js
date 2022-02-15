import axios from "axios";
import {
    createStore
} from "vuex";

import Swal from 'sweetalert2'

const fetchAllItem = async () => {
    let result = await axios.get("http://localhost:3000/items?_sort=id&_order=desc");
    if (result.status == 200) {
        return result.data;
    }
}

export default createStore({
    state: {
        item: {
            task: '',
            status: false,
            date: new Date().toDateString(),
            editable: false
        },
        newTask: '',
        vaildate_Add: {
            status: false,
            class_Added: ''
        },
        all_item: [],
        filtering: 'all',
        theme: true
    },
    mutations: {
        AddTask: async (state) => {
            if (state.item.task) {
                let result = await axios.post("http://localhost:3000/items", state.item)
                if (result.status == 201) {
                    state.vaildate_Add.status = false
                    state.vaildate_Add.class_Added = ''
                    state.item.task = ''
                    Swal.fire({
                        title: 'Greet Job!',
                        text: 'You Added New Task',
                        icon: "success",
                        timer: 2000,
                    });
                    state.all_item = await fetchAllItem()
                }
            } else {
                state.vaildate_Add.status = true
                state.vaildate_Add.class_Added = 'error'
            }

        },
        GetAllItem: async (state) => {
            state.all_item = await fetchAllItem()
        },
        DeleteItem: async (state,id)  => {
            await axios.delete('http://localhost:3000/items/'+id)
            Swal.fire({
                title: 'Deleted Task!',
                text: 'You Deleted Task',
                icon: "error",
                timer: 2000
            });
            state.all_item = await fetchAllItem()
        },
        EditItem: async (state,id) => {
            let result = await axios.get('http://localhost:3000/items/'+id)
            if(result.data.editable && state.newTask){
                result.data.task = state.newTask
                state.newTask = ''
            }else
            {
                state.newTask = result.data.task
            }
            result.data.editable = !result.data.editable
            await axios.put('http://localhost:3000/items/'+id,result.data)
            state.all_item = await fetchAllItem()
        },
        MarkItem: async (state,id) => {
            let result = await axios.get('http://localhost:3000/items/'+id)
            result.data.status = !result.data.status
            await axios.put('http://localhost:3000/items/'+id,result.data)
            state.all_item = await fetchAllItem()
        },
        Filter_task: async (state,filtering) => {

            let result = await axios.get('http://localhost:3000/items?status='+filtering)
            state.all_item = result.data
        },
    },
})