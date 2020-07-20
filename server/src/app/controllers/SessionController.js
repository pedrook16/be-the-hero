import connection from '../../database';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return res.status(400).json({ erro: 'No ONG found with this ID' });
    }

    return res.json(ong);
  }
}

export default new SessionController();