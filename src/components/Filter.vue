<template>
    <div class="row m-1 p-3 px-5 justify-content-end">
        <div class="col-auto d-flex align-items-center">
        <label class="text-secondary my-2 pr-2 view-opt-label">Filter</label>
        <select v-model="filter" @change="filter_status()" class="custom-select custom-select-sm btn my-2">
            <option value="all" selected>All</option>
            <option value="true">Completed</option>
            <option value="false">Un Completed</option>
        </select>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            filter: 'all'
        }
    },
    computed:{
        ...mapState(['filtering'])
    },
    methods: {
        ...mapMutations(['Filter_task','GetAllItem']),
        filter_status(){
            this.$store.state.filtering = this.filter
            this.$store.state.filtering == 'all' ? this.GetAllItem() :  this.Filter_task(this.$store.state.filtering)
        },
    },

};
</script>
