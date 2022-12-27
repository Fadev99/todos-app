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
                    <q-input
                        v-model="text"
                        label="Name Task"
                        stack-label
                        :dense="dense"
                        class="cus__content__name"
                    />
                    <q-input
                        v-model="date"
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
                            <q-date v-model="date" minimal>
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

                    <q-select
                        label="Priority"
                        transition-show="scale"
                        transition-hide="scale"
                        stack-label
                        v-model="priority"
                        :options="options"
                        class="cus__content__priority"
                    />
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        return {
            basic: ref(false),
            date: ref("2019/02/01"),
            showDatePicker: ref(false),
            priority: ref('Low'),
            options: [
                'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
            ]
        };
    },
};
</script>
<style scoped>
.cus__content {
    display: flex;
    flex-wrap: wrap;
}
.cus__content__name {
    width: 100%;
    margin-bottom: 20px;
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
