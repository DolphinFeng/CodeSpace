// store 提供数据， router提供角色数据
import { defineStore } from 'pinia'; 

// 不同角色的权限
export const usePermissStore = defineStore('permiss', () => {
    return {
        roleList: {
            admin: ['1', '2', '3', '4'],
            user: ['1'] // 403
        }
    }
})