import projects from '../../db/projects.json'

export default function handler(req, res) {
  try {
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
}