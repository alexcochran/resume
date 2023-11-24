import app from './app';
import { displayResume } from './io';

const port = process.env.PORT || '5000';

app.listen(port, () => {
  displayResume();
  console.log(`Listening: http://localhost:${port}`);
});
