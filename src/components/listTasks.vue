<template>
    <div>
        <q-card class="my-card" v-for="task in tasks" :key="task.id">
            <q-card-section
                class="bg__gradient--blue text-white"
                :class="{ 'bg__gradient--green': task.done }"
            >
                <div class="text-h6">
                    <span class="material-icons">
                        {{
                            task.category === "personal"
                                ? "person_outline"
                                : "business"
                        }}
                    </span>
                    &nbsp;
                    {{ task.name }}
                </div>
                <div class="text-subtitle2 cus__flex">
                    Due Date: &nbsp;
                    <span class="material-icons"> event </span>
                    {{ task.dueDate }}
                </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
                <q-btn
                    flat
                    :class="{
                        btn__done: !task.done,
                        'btn__re-open': task.done,
                    }"
                    @click="doneTask(task.id)"
                >
                    {{ task.done ? "Re-Open" : "Done" }}&nbsp;
                    <span class="material-icons">
                        {{ task.done ? "settings_backup_restore" : "done" }}
                    </span>
                </q-btn>
                <q-btn flat class="btn__del" @click="removeTask(task.id)">
                    Delete&nbsp;<span class="material-icons"> delete </span>
                </q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["tasks"]),
    },

    created() {
        this.tasks = this.getListTasks();
    },

    methods: {
        ...mapActions(["getListTasks", "removeTask", "doneTask"]),
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
    display: flex;
    align-items: center;
}
.bg__gradient--blue {
    background: rgb(2, 123, 227);
}
.bg__gradient--green {
    background: rgb(76, 175, 80);
}
.bg__gradient--purple {
    background: rgb(156, 39, 176);
}
.btn__done {
    background-color: rgba(76, 175, 80, 1);
    color: #fff;
}
.btn__re-open {
    background-color: rgb(156, 39, 176);
    color: #fff;
}
.btn__del {
    background-color: #f44336;
    color: #fff;
}
</style>
