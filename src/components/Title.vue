<template>
    <div class="row m-1 p-4">
        <div class="theme_data" @click="changeTheme()">
        <div v-if="theme">
            <em class="fas fa-sun"></em>
        </div>
        <div v-else>
            <em class="far fa-moon"></em>
        </div>
        </div>
        <div class="col">
        <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i class="fa fa-check bg-primary text-white rounded p-2"></i>
            <u>Todo</u>
        </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["theme"]),
    },
    methods: {
        changeTheme() {
            this.$store.state.theme = !this.$store.state.theme;
            localStorage.setItem('theme',this.$store.state.theme)
        },
    },
    };
</script>

<style>
    .theme_data {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    }
    .theme_data div {
    cursor: pointer;
    }
    .theme_data div {
    font-size: 20px;
    color: #007bff;
    }
</style>
