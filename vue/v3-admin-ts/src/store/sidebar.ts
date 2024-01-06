import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
    return {
        collapse: false,
        handleCollapse() {
            this.collapse = !this.collapse
        }
    }
})