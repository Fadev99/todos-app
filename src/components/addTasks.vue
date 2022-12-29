<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn label="Add New Task" color="primary" @click="basic = true" />

        <q-dialog
            v-model="basic"
            transition-show="rotate"
            transition-hide="rotate"
        >
            <q-card style="width: 500px; max-width: 80vw">
                <q-card-section>
                    <div class="text-h6">Add</div>
                </q-card-section>

                <q-card-section class="q-pt-none cus__content">
                    <!-- Name -->
                    <q-input
                        v-model="nameTask"
                        label="Name Task"
                        stack-label
                        :dense="dense"
                        class="cus__content__name"
                    />
                    <!-- end name -->

                    <!-- category -->
                    <div class="cus__content__category">
                        <q-radio
                            v-model="category"
                            checked-icon="task_alt"
                            unchecked-icon="panorama_fish_eye"
                            val="company"
                            label="Company"
                        />
                        <q-radio
                            v-model="category"
                            checked-icon="task_alt"
                            unchecked-icon="panorama_fish_eye"
                            val="personal"
                            label="Personal"
                        />
                    </div>
                    <!-- end category -->

                    <!-- due date -->
                    <q-input
                        v-model="dueDate"
                        mask="date"
                        :rules="['date']"
                        name="event"
                        class="cursor-pointer cus__content__due"
                        label="Due date"
                        stack-label
                        readonly
                    >
                        <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                        >
                            <q-date v-model="dueDate" minimal>
                                <div class="row items-center justify-end">
                                    <q-btn
                                        v-close-popup
                                        label="Ok"
                                        color="primary"
                                        flat
                                    />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer" />
                        </template>
                    </q-input>
                    <!-- end due date -->

                    <!-- priority -->
                    <q-select
                        label="Priority"
                        transition-show="scale"
                        transition-hide="scale"
                        stack-label
                        v-model="priority"
                        :options="optionsPriority"
                        class="cus__content__priority"
                    />
                    <!-- end priority -->
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup @click="addTask" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { ref } from "vue";
import { mapActions } from "vuex"

export default {
    setup() {
        return {
            basic: ref(false),
            dueDate: ref(""),
            showDatePicker: ref(false),
            priority: ref("Medium"),
            optionsPriority: ["Urgent", "Important", "Medium", "Low"],
            category: ref(""),
            nameTask: ref(""),
        };
    },

    beforeMount() {
        this.dueDate = this.dateBuilder();
    },

    methods: {
        dateBuilder() {
            const day   = new Date();
            const date  = day.getDate();
            const month = day.getMonth() + 1;
            const year  = day.getFullYear();

            return `${year}/${month}/${date}`;
        },

        addTask() {
            const trimNameTask = this.nameTask.trim();

            if (trimNameTask) {
                const task = {
                    id       : `${trimNameTask.replaceAll(' ', '').toLowerCase()}_${this.dueDate}-${Math.random()}`,
                    name     : trimNameTask,
                    category : this.category,
                    dueDate  : this.dueDate,
                    priority : this.priority,
                    done     : false
                }

                this.save(task);
            }

            return this.resetFields();
        },

        resetFields() {
            this.dueDate  = this.dateBuilder();
            this.priority = "Medium";
            this.category = '';
            this.nameTask = '';
        },

        ...mapActions(['save'])
    },
};
</script>
<style scoped>
.cus__content {
    display: flex;
    flex-wrap: wrap;
}
.cus__content__name {
    width: 48%;
    margin-bottom: 20px;
    margin-right: 2%;
}
.cus__content__category {
    width: 48%;
    margin-right: 2%;
    margin-bottom: 20px;
    display: flex;
}
.cus__content__due {
    width: 48%;
    margin-right: 2%;
}
.cus__content__priority {
    width: 48%;
    margin-left: 2%;
}
.cursor-pointer {
    cursor: pointer !important;
}
</style>
