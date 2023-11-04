//console.log('你好')

/**
 * @func 返回固定格式的电话号码  (123) 456-7890
 * @params array [1,2,3,4,5,6,7,8,9,0]
 * @return (123) 456-7890
 * @author Dolphin_海豚
 */
function phoneNumber(numbers){
    return "(" + numbers[0] + numbers[1] + numbers[2]
     + ")" + " " + numbers[3] + numbers[4] + numbers[5] 
     + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
}

console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]))