import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(
      'mongodb+srv://academia:academia@cluster0.kwah0lw.mongodb.net/academia?retryWrites=true&w=majority',
    );

    app.listen(5000, () => {
      console.log(`app is listening on port ${5000}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
