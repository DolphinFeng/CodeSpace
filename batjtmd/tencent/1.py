import openai
openai.api_key = "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"  # openai 的sdk
COMPLETION_MODEL = "text-davinci-003"  # 模型常量 达芬奇  会自动完成
# 字符串模板
# 换行
# 描述细节需求 
# 分布去执行
# 输出的格式
prompt = """
Consideration product:工厂现货PVC充气青蛙夜市地摊充气玩具发光蛙儿童水上玩具

1. Compose human readable product title used
on Amazon in english within 20 words
2. Write 5 selling points for the products in Amazon
3. Evaluat a price range for the products in U.S

Output the result in json format with three properties called title
selling_points and price_range
"""

# 定义函数  调用接口
def get_response(prompt): 
    # 远程发送请求
    completions = openai.Completion.create(
        # 大模型是很值钱的
        engine = COMPLETION_MODEL,  # 模型
        prompt = prompt,
        max_tokens = 512,   # 这里可以让我们省点钱
        n = 1,   # 返回一条结果
        stop = None,
        temperature = 0.0   # 自由发挥度 0-2 之间  
    )

    # print(comletions)
    message = completions.choices[0].text #
    return message

print(get_response(prompt))




# {
#     title: "",
#     selling_points: "",
#     price_range: ,
# }