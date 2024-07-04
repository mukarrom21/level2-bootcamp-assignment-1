import config from './app/config';
import app from './app';

async function main() {
  try {
    // await mongoose.connect(config.db_url);

    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
