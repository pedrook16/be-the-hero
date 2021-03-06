import connection from '../../database';

class IncidentsController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ong_id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    res.header('X-Total-Count', count.count);

    return res.json(incidents);
  }

  async store(req, res) {
    const ong_id = req.headers.authentication;

    await connection('incidents').insert({
      ong_id,
      ...req.body,
    });
    return res.send();
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authentication;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return res.send();
  }
}

export default new IncidentsController();
