import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
	title: {
		type: String,
		required: [true, 'title is required.'],
		unique: true,
		trim: true,
		maxlength: [40, 'Title cannot be more than 40 characters.'],
	},
	description: {
		type: String,
		required: [true, 'description is required'],
		maxlength: [200, 'Description cannot be more than 200 characters.'],
	},
});

export const NoteModel =
	mongoose.models.Note || mongoose.model('Note', NoteSchema);

