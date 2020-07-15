import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/db';
import { NoteModel } from '../../../models/Note';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await dbConnect();

	const { method } = req;

	switch (method) {
		case 'GET': {
			try {
				const notes = await NoteModel.find();
				return res.status(200).json({ success: true, data: notes });
			} catch (err) {
				return res.status(400).json({ success: false });
			}
		}
		case 'POST': {
			try {
				const note = await NoteModel.create(req.body);
				return res.status(201).json({
					success: true,
					data: note,
				});
			} catch (err) {
				return res.status(400).json({ success: false });
			}
		}
		default: {
			return res.status(400).json({ success: false });
		}
	}
};
