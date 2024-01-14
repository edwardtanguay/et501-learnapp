import express from 'express';
import { flashcardRouter } from './routers/flashcardrouter';
import cors from 'cors';
import { maintenanceMode } from './middleware/maintanceMode';

export const app = express();
app.use(express.json());
app.use(cors());
app.use(maintenanceMode);

app.get('/', (req, res) => {
	res.json({
		appName: "API for AppLearn version 0.1"
	})
});

app.use('/api/flashcards', flashcardRouter);