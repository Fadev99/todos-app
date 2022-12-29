<template>
    <div>
        <q-card class="my-card" v-for="task in tasks" :key="task.id">
            <q-card-section
                class="bg__gradient--purple text-white"
                :class="{ 'bg-teal': task.done }"
            >
                <div class="text-h6">{{ task.name }}</div>
                <div class="text-subtitle2 cus__flex">
                    Due Date: &nbsp;
                    <span class="material-icons"> event </span>
                    {{ task.dueDate }}
                </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
// import { ref } from "vue";
import { mapState, mapActions } from "vuex";

export default {
    setup() {
        return {
        };
    },

    computed: {
        ...mapState(["tasks"]),
    },

    created() {
        this.tasks = this.getListTasks();
    },

    methods: {
        ...mapActions(["getListTasks"]),
    },
};
</script>

<style lang="scss" scoped>
.my-card {
    width: calc(100% - 32px);
    margin: 16px 0 0 16px;
}
.cus__flex {
    display: flex;
    align-items: center;
}
.text-h6 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.bg__gradient--blue {
    background: rgb(2, 123, 227);
    background: linear-gradient(
        90deg,
        rgba(2, 123, 227, 1) 20%,
        rgba(255, 255, 255, 1) 100%,
        rgba(255, 255, 255, 1) 100%,
        rgba(255, 255, 255, 1) 100%
    );
}
.bg__gradient--green {
    background: rgb(76, 175, 80);
    background: linear-gradient(
        90deg,
        rgba(76, 175, 80, 1) 20%,
        rgba(255, 255, 255, 1) 100%,
        rgba(255, 255, 255, 1) 100%,
        rgba(255, 255, 255, 1) 100%
    );
}
.bg__gradient--purple {
    background: rgb(156, 39, 176);
    background: linear-gradient(
        90deg,
        rgba(156, 39, 176, 1) 20%,
        rgba(255, 255, 255, 1) 100%,
        rgba(255, 255, 255, 1) 100%,
        rgba(255, 255, 255, 1) 100%
    );
}
</style>
