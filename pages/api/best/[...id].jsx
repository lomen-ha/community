export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    res.status(200).json({
      status: 'success',
    });
  } else if (req.method === 'GET') {
    res.status(200).json({
      test: 'success',
    });
  }
}
