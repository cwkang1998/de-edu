import { utils } from 'ethers';
import express from 'express';
import { Sequelize } from 'sequelize-typescript';
import { Progress } from './models';

const main = async (port: number) => {
  const sequelize = new Sequelize({
    database: 'progress-db',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    models: [Progress],
  });

  const app = express();

  app.get('/get-all-progress/:address/', async (req, res) => {
    const { address } = req.params;
    if (address) {
      const progress = await Progress.findAll({ where: { address } });
      return res.status(200).json(progress);
    }
    return res.status(400).json({ error: 'address not given' });
  });

  app.get('/get-progress/:address/:courseId', async (req, res) => {
    const { address, courseId } = req.params;
    if (!address) {
      return res.status(400).json({ error: 'address not given' });
    }
    if (!courseId) {
      return res.status(400).json({ error: 'courseId not given' });
    }

    const progress = await Progress.findOne({ where: { address, courseId } });
    if (progress) {
      return res.status(200).json(progress);
    }

    return res.status(404).json({ error: 'progress not found' });
  });

  app.post('/submit-progress/:address', async (req, res) => {
    const { address } = req.params;
    const { courseId, progress, progressSignature } = req.body;

    if (!address) {
      return res.status(400).json({ error: 'address not given' });
    }
    if (!courseId || !progress || !progressSignature) {
      return res.status(400).json({ error: 'Insufficient data body' });
    }

    if (progress.split('-').length < 2) {
      return res.status(400).json({ error: 'Incorrect progress format' });
    }

    const recoveredAddr = utils.recoverAddress(utils.keccak256(progress), progressSignature);
    if (recoveredAddr != address) {
      return res.status(400).json({ error: "Signature doesn't match the address" });
    }

    const progressSave = await Progress.create({
      address,
      courseId,
      progress,
      progressSignature,
    });

    return res.status(200).json(progressSave);
  });

  return app.listen(port, () => {
    console.log('Node started');
  });
};

main(60601)
  .then(() => console.log('Server ready.'))
  .catch((err) => console.error(err));
