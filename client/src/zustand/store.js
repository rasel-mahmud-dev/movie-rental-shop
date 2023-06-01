import {create} from "zustand";
import authStore from "./authStore.js";

export const useBoundStore = create((...a) => {
    return {
        ...authStore(...a),
        // ...movieStore(...a),
    }
})