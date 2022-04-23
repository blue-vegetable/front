const Mock = require('mockjs')

const Random = Mock.Random

function produceNewsData() {
  const papers = []
  for (let i = 0; i < 20; i++) {
    const newNewsObject = {
      //  Random.ctitle( min, max) 随机产生一个中文标题，长度默认在3-7之间
      id: Random.id(),
      url: '/paperProfile?id' + this.id,
      rate: Random.integer(1, 5),
      name: Random.ctitle(),
      writer: Random.word(),
      // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      abstract: Random.cparagraph(),
      // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
      time: Random.date(),
      keywords: [Random.word(), Random.word(), Random.word()]
    }
    papers.push(newNewsObject)
  }
  return papers
}

Mock.mock('http://localhost:12000/feedback/all', produceNewsData)
// Mock.mock('http://localhost:12000/paper/getLatest', produceNewsData)
