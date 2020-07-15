import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/db';
import { NoteModel } from '../../../models/Note';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await dbConnect();

	const {
		query: { id },
		method,
	} = req;

	switch (method) {
		case 'GET': {
			try {
				const note = await NoteModel.findById(id);
				if (!note) {
					return res.status(400).json({ success: false });
				}
				return res.status(200).json({
					success: true,
					data: note,
				});
			} catch (err) {
				return res.status(400).json({ success: false });
			}
		}
		case 'DELETE': {
			try {
				const deletedNote = await NoteModel.deleteOne({ _id: id });
				if (!deletedNote) {
					return res.status(400).json({ success: false });
				}
				return res.status(200).json({ success: true });
			} catch (error) {
				return res.status(400).json({ success: false });
			}
		}
		case 'PUT': {
			try {
				const updatedNote = await NoteModel.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});
				if (!updatedNote) {
					return res.status(400).json({ success: false });
				}
				return res.status(200).json({ success: true, data: updatedNote });
			} catch (error) {
				return res.status(400).json({ success: false });
			}
		}
		default:
			return res.status(400).json({ success: false });
	}
};
