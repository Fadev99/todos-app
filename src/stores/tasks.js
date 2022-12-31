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
        saveTask({ state }, task) {
            state.tasks.unshift(task);
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },

        getListTasks({ state }) {
            state.tasks = JSON.parse(localStorage.getItem("tasks"));
        },

        removeTask({ state }, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);

            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },

        doneTask({ state }, taskId) {
            state.tasks = state.tasks.map(task => {
                if (task.id === taskId) task.done = !task.done;

                return task;
            });

            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    }
});
