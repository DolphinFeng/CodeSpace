# 字节难度的sql知识

写一条sql，创建一个表avatar，用户头像
// mysql是个关系型数据库，每个表都是行列式，为何头像不放到user中，user表最重要，需要瘦身
create table `avatar`(
    `id` int(11) not null auto_increment, // 字段11，不会为空，还会自增
    `minitype` varchar(255), // 字符串类型，长度最大为255的变量，不定的长度
    `filename` varchar(255) not null,
    `size` int(11) not null,
    `userId` int(11) not null, // 是个外键 与user表关联起来
    primary key (`id`), // 主键一般都是用id
    key `userId` (`userId`), // 普通索引：这是给用户去查的，用户id查头像，要是没给这个key，那么就是全查，因为命中不了这个索引
    constraint `avatar_ibfk_1` forein key (`userId`) references `user` (`id`), // 约束，用户的其他东西可以放心地交给其他地方
) engine = InnoDB default charset = utf8mb4
    字段 
    字段类型 
    索引 为了查询 不能随意设置，会浪费空间，思考以后的查询需求 先写select语句
        - 主键索引 primary 查询速度最快
        - 普通索引 
        - 唯一索引 提升查询速度，不能重复
        - 联合索引

create table `comment` (
    `id` int(11) not null auto_increment, 
    `content` longtext not null,
    `postId` int(11) not null,
    `userId` int(11) default null,
    `parentId` int(11) default null,
    primary key(`id`), // 可以看到自己的评论
    key `userId` (`userId`), 
    key `postId` (`postId`), // 评论的哪个文章
)

- 部署
    - 本地部署
        不仅仅要一个node环境，还要go，java环境，还需要本地的一个服务器部署 blog.sql 
    - 远程部署
        阿里云服务器 blog.sql 
    - 分布式部署
        blog.sql mysql 运行一下
