<template>
        <div class="statcics">
           <div class="count_task">
            <div> {{count_all_task}}
                <em class="fa fa-check-square text-primary btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark as complete"
                ></em>   <em
                class="far fa-square text-primary btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark as todo"
                ></em>
            </div>
            <div>{{count_compelete_task}}  <em class="fa fa-check-square text-primary btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark as complete"
                ></em>
            </div>
            <div>{{count_todo_task}}  <em
                class="far fa-square text-primary btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Mark as todo"
                ></em>
            </div>
        </div>
        <div class="row m-1 p-3 px-5 justify-content-end">
            <div class="col-auto d-flex align-items-center">
                <label class="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                <select
                v-model="filter"
                @change="filter_status()"
                class="custom-select custom-select-sm btn my-2"
                >
                <option value="all" selected>All</option>
                <option value="true">Completed</option>
                <option value="false">To do</option>
                </select>
            </div>
        </div>
        </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    data() {
        return {
        filter: "all",
        };
    },
    computed: {
        ...mapState(["filtering",'count_all_task','all_item','count_compelete_task','count_todo_task']),
    },
    methods: {
        ...mapMutations(["Filter_task", "GetAllItem"]),
        filter_status() {
        this.$store.state.filtering = this.filter;
        this.$store.state.filtering == "all"
            ? this.GetAllItem()
            : this.Filter_task(this.$store.state.filtering);
        },
    },
    watch:{
        all_item(){
            console.log('Add or Deleted task')
            this.$store.state.count_all_task = this.$store.state.all_item.length
            this.$store.state.count_compelete_task = this.$store.state.all_item.filter((arr)=>{
                return arr.status
            })
            this.$store.state.count_compelete_task = this.$store.state.count_compelete_task.length
            this.$store.state.count_todo_task = this.$store.state.all_item.filter((arr)=>{
                return !arr.status
            })
            this.$store.state.count_todo_task = this.$store.state.count_todo_task.length
        }

    }
};
</script>
<style>
.statcics
{
    display: flex;
    justify-content: space-between;
    gap: 3px;
}
.count_task{
    display: flex;
    gap: 3px;
    justify-content: left;
    width: auto;
    padding: 10px;
}
.count_task div
{
    padding: 3px;
    margin: 5px;
}
</style>