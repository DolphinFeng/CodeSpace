// store 提供数据， router提供角色数据
import { defineStore } from 'pinia';
// 数据要满足这个接口定义 
interface ObjectList {
    [key: string]: string[];
}
// 不同角色的权限
export const usePermissStore = defineStore('permiss', () => {
    // 组件间会有数据需求，你当前用户的权限有哪些
    const keys = localStorage.getItem('ms_keys')
    return {
        key: keys ? JSON.parse(keys) : [],
        roleList: <ObjectList>{
            admin: ['1', '2', '3', '4'],
            user: ['1'] // 403
        },
        setKeys(val) {
            this.key = val
        }
    }
})