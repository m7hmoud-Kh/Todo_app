<template>
    <div class="col-auto m-1 p-0 d-flex align-items-center">
        <h2 class="m-0 p-0" @click="MarkItem(id)">
        <div v-if="status">
            <i
            class="fa fa-check-square text-primary btn m-0 p-0"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Mark as complete"
            ></i>
        </div>
        <div v-else>
            <i
            class="far fa-square text-primary btn m-0 p-0"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Mark as todo"
            ></i>
        </div>
        </h2>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props: ["id", "status"],
    methods: {
        ...mapMutations(["MarkItem"]),
    },
};
</script>
