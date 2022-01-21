import proficiencies from '../../db/proficiencies.json'

export default function handler(req, res) {
  try {
    res.status(200).send(proficiencies);
  } catch (error) {
    res.status(500).send(error);
  }
}