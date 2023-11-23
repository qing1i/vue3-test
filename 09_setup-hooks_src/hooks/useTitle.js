import {ref, watch} from "vue";

export default function useTitle(titleValue) {
    const title = ref(titleValue);
    watch(title, (newTitle) => {
        document.title = newTitle
    }, {
        immediate: true
    })
    return title
}