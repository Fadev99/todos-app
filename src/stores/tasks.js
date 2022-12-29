import { createStore } from "vuex";

export const tasks = createStore({
    state() {
        return {
            tasks: []
        };
    },
    mutations: {
        setTasks(state, tasksPayload) {
            state.tasks = tasksPayload;
        }
    },
    actions: {
        save({ state }, task) {
            state.tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },

        getListTasks({ state }) {
            state.tasks = JSON.parse(localStorage.getItem("tasks"));
        }
    }
});
