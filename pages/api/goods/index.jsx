export default function handler(req, res) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const day = date.getDate();
  if (req.method === 'GET') {
    res.status(200).json({
      detail: [
        {
          id: 1,
          desc: 'blah blah blah blah blah',
          category: 'goods-1',
          date: `${year}-${month >= 10 ? month : `0${month}`}-${day}`,
        },
        {
          id: 2,
          desc: 'blah blah blah blah blah',
          category: 'goods-2',
          date: `${year}-${month >= 10 ? month : `0${month}`}-${day}`,
        },
        {
          id: 3,
          desc: 'blah blah blah blah blah',
          category: 'goods-3',
          date: `${year}-${month >= 10 ? month : `0${month}`}-${day}`,
        },
        {
          id: 4,
          desc: 'blah blah blah blah blah',
          category: 'goods-4',
          date: `${year}-${month >= 10 ? month : `0${month}`}-${day}`,
        },
        {
          id: 5,
          desc: 'blah blah blah blah blah',
          category: 'goods-5',
          date: `${year}-${month >= 10 ? month : `0${month}`}-${day}`,
        },
      ],
    });
  }
}
