// 一元运算符
// delete ? !
// 11.4.6
// console.log(+'1'); 数字1
// 为何： 一元将其操作数转成number类型
// console.log(+{}); 也就是对象转number NaN  ({}).toString() 就是字符串'[object object]' 然后字符串到
// console.log(+[]); 0   [].toString() 到空字符串  然后空字符串变数字，就是0
// console.log(+[1, 2, 3]); NaN

// 二元运算符
// 1 + '1' 为何 是‘11’
// 都是想往数字转，奈何碰到了字符串
// console.log(1 + null); null转数字就是0
// console.log([] + []);  空字符串   有字符串
// console.log([] + {}); [object object] 
// 这就是js隐式类型转换
// console.log({} + {}); [object object][object object]

// 一个坑：面试官：{} + {}  其实为NaN   要这样写：（{}） + （{}）
// 其实是 {} +{}  {} NaN 然后不管了第一个{}

// == 
// 也存在隐式类型转换
// if(1 == '1'){
//     console.log('ok');
// }
// console.log(NaN == NaN); false
// == 的最终归宿为number
// 数字比较比布尔比较更快，数字对计算机来说读得更快
// 有个对象，那个对象1 == {}   1 == '[object object]'   1 == NaN
// {} == {} 就是false ，不用走隐式类型转换，地址不同
// console.log(false == []); 0 == ''  0 == 0

