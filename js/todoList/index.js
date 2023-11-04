//监听用户敲击enter键
var input = document.getElementById('list-input')
var ul = document.getElementById('list')
var todoItem = []
var oldlength=0
//三个等号还得数据类型相同
// input.onkeyup = function(e){
//     if(e.keyCode === 13){
        
//         //读取到input中的值
//         var todoList = `
//                 <li>
//                     <input type="checkbox">
//                     <span>${input.value}</span>
//                 </li>
//         `
//         ul.insertAdjacentHTML('afterbegin', todoList)
//     }
// }
input.onkeyup = function(e){
    if(e.keyCode === 13){
        if(input.value!=''){
            todoItem.push(input.value)
            makelist()
            input.value = ''
        }
    }
}
function makelist(){
    //循环数组，生成多份li结构，添加到ul中
    //要用到for  todoItem.length  todoItem[i]
    for(var i=oldlength;i<todoItem.length;i++){

      oldlength=todoItem.length
        todolist=`
            <li>
                <input type="checkbox">
                <span>${todoItem[i]}</span>
            </li>
        `
        ul.insertAdjacentHTML('afterbegin',todolist)
    }
}

//生成li结构

//将input中的值添加到li中

//将li添加到ul中