import { configureStore } from "@reduxjs/toolkit";
import useAction from '../userAction/userAction'

export default configureStore({
    reducer: {
        user: useAction,
    },
})