const Mock = require('mockjs')

const Random = Mock.Random

function produceNewsData1() {
  const newNewsObject = {
    //  Random.ctitle( min, max) 随机产生一个中文标题，长度默认在3-7之间
    id: Random.id(),
    rate: Random.integer(1, 5),
    yinyongliang: Random.integer(0, 100),
    name: Random.ctitle(),
    writer: Random.word(),
    likenum: 0,
    // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
    abstract: Random.cparagraph(),
    // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
    time: Random.date(),
    keywords: [Random.word(), Random.word(), Random.word()]
  }

  return newNewsObject
}

Mock.mock('http://localhost:12000/feedback/paper', produceNewsData1)
