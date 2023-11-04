var a = 1

function foo(){
    let a = 4
    if(1){
        let a = 2
    }
    console.log(a)
}


foo()
//console.log(a)