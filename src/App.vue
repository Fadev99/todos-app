<template>
    <q-layout view="hhh lpR fFf">
        <q-page-container>
            <AddTasks/>    
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from "vue";
import AddTasks from "./components/addTasks.vue"

export default {
    name: "LayoutDefault",

    components: {
        AddTasks
    },

    setup() {
        return {
            leftDrawerOpen: ref(false),
        };
    },
};
</script>
