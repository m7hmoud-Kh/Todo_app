<template>
    <div class="col mx-auto">
        <!-- Todo Item -->
        <div
        class="row px-3 align-items-center todo-item rounded"
        v-for="item in all_item"
        :key="item.id"
        >
        <!-- Mark Item-->
        <StatusItem />

        <div class="col px-1 m-1 d-flex align-items-center">
            <input
            v-show="!editable"
            type="text"
            class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            readonly
            :value="item.task"
            :title="item.task"
            />
            <input
            v-show="editable"
            type="text"
            class="form-control form-control-lg border-0 edit-todo-input rounded px-3"
            value="Buy groceries for next week"
            />
        </div>
        <div class="col-auto m-1 p-0 px-3 d-none"></div>
        <ActionItem :date="item.date" :id="item.id"  />
        </div>
    </div>
</template>

<script>
import StatusItem from "./Item/StatusItem.vue";
import ActionItem from "./Item/ActionItem.vue";
import {  mapMutations, mapState } from "vuex";

export default {
    components: {
        StatusItem,
        ActionItem,
    },
    computed: {
        ...mapState(["editable",'all_item']),
    },
    methods: {
        ...mapMutations(['GetAllItem'])
    },
    mounted() {
        this.GetAllItem()
    },
};
</script>

<style></style>
