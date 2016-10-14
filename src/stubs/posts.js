export default {
  '0001': {
    type: 'link',
    timestamp: Date.now() - 1000 * 60 * 5, // 5min ago
    authorId: '0001',
    text: 'Anyone else sick of this election yet?',
    url: 'http://www.nytimes.com/2016/10/14/us/politics/republican-donors-trump.html',
  },
  '0002': {
    type: 'status',
    timestamp: Date.now() - 1000 * 60 * 60, // 1 hour ago
    authorId: '0001',
    text: "I'm hungry. Anyone wanna grab a bite?",
  },
  '0003': {
    type: 'image',
    timestamp: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
    authorId: '0001',
    src: 'https://source.unsplash.com/category/food',
    text: 'Oooh, food!'
  },
};
