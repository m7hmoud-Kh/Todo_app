<template>
    <div class="col mx-auto">
        <!-- Todo Item -->
        <div
        class="row px-3 align-items-center todo-item rounded"
        v-for="item in all_item"
        :key="item.id"
        >
        <!-- Mark Item-->
        <StatusItem :id='item.id' :status="item.status" />

        <div class="col px-1 m-1 d-flex align-items-center">
            <input
            v-show="!item.editable"
            type="text"
            class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            :class="theme == false && 'template_dark'"
            readonly
            :value="item.task"
            :title="item.task"
            />
            <input
            @blur="assign()"
            v-show="item.editable"
            type="text"
            class="form-control form-control-lg border-0 edit-todo-input rounded px-3"
            v-model="data"
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
    data() {
        return {
            data: this.$store.state.newTask
        }
    },
    computed: {
        ...mapState(["editable",'all_item','newTask','theme']),
    },
    methods: {
        ...mapMutations(['GetAllItem']),
        changeDate(){
            this.newTask = this.data
        },
        assign(){
            this.$store.state.newTask = this.data
            this.data = ''
        },
    },
    mounted() {
        this.GetAllItem()
    },
};
</script>

<style>
.template_dark{
    color: white !important;
}
</style>
