<template>
        <div class="col-auto m-1 p-0 todo-actions">
            <div class="row d-flex align-items-center justify-content-end">
            <h5 class="m-0 p-0 px-2">
                <i
                class="fa fa-pencil text-info btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit todo"
                ></i>
            </h5>
            <h5 class="m-0 p-0 px-2">
                <i
                class="fa fa-trash text-danger btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete todo"
                ></i>
            </h5>
            </div>
            <div class="row todo-created-info">
            <div class="col-auto d-flex align-items-center pr-2">
                <i
                class="fa fa-info-circle my-2 px-2 text-black-50 btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Created date"
                ></i>
                <label class="date-label my-2 text-black-50">28th Jun 2020</label>
            </div>
            </div>
        </div>
</template>

<script>
    export default {

    }
</script>
