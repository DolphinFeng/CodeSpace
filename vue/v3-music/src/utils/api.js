// 前后端交流，数据模块封装
// localhost:3000/banner 中有轮播图的数据，如何导入 axios
import http from '@/utils/http' // @ 短链接 封一个http对象，调用get方法


// 这是数据接口
export async function getBanner() {
    // 向/banner发送请求，
    const { banners } = await http.get('/banner', { type: 1 }); // ajax请求，可以等待
    return banners 
}

export async function getSearchSuggestion(keywords) {
    const { result } = await http.get('/search', { keywords }) 
    return result
}