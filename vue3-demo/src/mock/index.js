// 引入: mockjs 模块;
import Mock from 'mockjs'

// 内存模拟数据
const arr = []
// 循环 10 次，push 10 个对象;
for(let i =0; i < 10; i++) {
  arr.push({
    'id': Mock.Random.guid(),
    'date': Mock.Random.date('yyyy-mm-dd'),
    'name': Mock.Random.first(),
    'city': Mock.Random.city(true),
    'tag': Mock.Random.paragraph( 2, 5 )
  })
}

// 下面是导出一个数组；
export default [
  // 简单模拟一个接口：若是 '/list' 请求，那么就会返回一个 arr;
  {
    // 发现不需要什么参数，get 方法，地址是 /list;
    url:'/getDate',         // 表示：请求的地址；
    method: 'get',       // 表示：请求的方式；
    response: () => {
      return arr
    }
  },
  {
    url:'/del',
    method: 'delete',
    response: ({query}) => {
      console.log('query', query);
      const index = arr.findIndex((item) => item.id === query.id)
      arr.splice(index,1)
      console.log('arr', arr);
      return { sucess: true }
    },
  },
  {
    url:'/edit',
    method: 'post',
    response: (options) => {
      const data = JSON.parse(options.body)
      const { newsList } = data
      // TODO：修改的逻辑没实现
      return { sucess: true }
    }
  }
]