// const num = 5 // 00000000 00000000 00000000 00000101

// console.log(~num)  // 11111111 11111111 11111111 11111010
// 从左往右看第一位 1代表负数

// let n = -6  // 00000110
            // 11111001 + 1  先补码再+1
            // 11111010      -6二进制的补码  补码中最高位表示符号位 0为正  1为负  所以除了符号位1其余就是-6的二进制
            //  1111010
            //  0000101 = 5
// console.log(~n) 

// console.log(process.platform)

function reverseBit(str) {
    const n = parseInt(str, 2)
    return ~n
}

const binaryStr = '00001101'
//                 11110010
//                 11110010
const reverseStr = reverseBit(binaryStr)
console.log(reverseStr)