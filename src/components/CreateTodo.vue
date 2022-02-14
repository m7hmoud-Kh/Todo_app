<template>
    <div class="row m-1 p-3">
        <div class="col col-11 mx-auto">
        <div
            class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center"
            :class="vaildate_Add.status && vaildate_Add.class_Added"

        >
            <div class="col">
            <input
                class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                v-model="item.task"
                placeholder="Add new .."
            />
            </div>
            <div class="col-auto m-0 px-2 d-flex align-items-center"></div>
            <div class="col-auto px-0 mx-0 mr-2">
            <button @click="AddTask"  type="button" class="btn btn-primary">Add</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'
export default {
    data() {
        return {
            task: ''
        }
    },
    computed:{
        ...mapState(['item','vaildate_Add'])
    },
    methods: {
        ...mapMutations(['AddTask'])
    },

};
</script>

<style >
.error {
    border: 2px solid red !important;
}
</style>
