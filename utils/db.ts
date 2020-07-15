import mongoose from 'mongoose';

async function dbConnect() {
	try {
		if (mongoose.connections[0].readyState) return;
		const db = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
      useFindAndModify: false
		});
		console.log('MongoDB connected.', db.connection.readyState);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}

export default dbConnect;
