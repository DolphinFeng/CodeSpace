function fnA() {
    setTimeout(() => {
      console.log('请求A完成')
    }, 1000)
  }

  function fnB() {
    setTimeout(() => {
      console.log('请求B完成')
    }, 500)
  }

  fnA()
  fnB()