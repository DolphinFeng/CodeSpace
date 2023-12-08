# 后端数据逻辑

- 查询
    - 数据库.collection(name).get()
    - where 条件
    - count (注册的时候，用名字和密码，用户名不能重名，所以要const {total} = await where({name}).count())
     if(total >= 0){ return }   
     - limit 数量 
        如何拿到第五页的数据 .offset((page - 1) * size).limit(size)  offset是偏移量 