import crypto from 'crypto';
import connection from '../../database';

class OngsController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const { email, whatsapp, uf, city, name } = req.body;

    const ufUppercase = uf.toUpperCase();
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      email,
      whatsapp,
      uf: ufUppercase,
      name,
      city,
    });

    return res.json({ id });
  }
}

export default new OngsController();
