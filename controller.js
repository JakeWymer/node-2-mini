module.exports = {
  getPlanes: (req, res) => {
    req.app.get('db').get_planes([25]).then(planes => {
      res.status(200).send(planes);
    }).catch(err => {
      console.log(err);
      res.status(500);
    });
  }
}