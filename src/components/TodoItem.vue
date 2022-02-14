<template>
    <div class="col mx-auto">
        <!-- Todo Item -->
        <div class="row px-3 align-items-center todo-item rounded">
        <!-- Mark Item-->
        <StatusItem />

        <div class="col px-1 m-1 d-flex align-items-center">
            <input
            type="text"
            class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
            readonly
            value="Buy groceries for next week"
            title="Buy groceries for next week"
            />
            <input
            type="text"
            class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
            value="Buy groceries for next week"
            />
        </div>

        <div class="col-auto m-1 p-0 px-3 d-none"></div>

        <ActionItem />

        </div>
    </div>
</template>

<script>
import StatusItem from './Item/StatusItem.vue'
import ActionItem from './Item/ActionItem.vue'
export default {

components:{
    StatusItem,
    ActionItem,
}

};
</script>

<style></style>
