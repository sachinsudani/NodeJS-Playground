import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import path from 'path';
import { get404 } from './controllers/error.js';

const __dirname = path.resolve();
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'express-js', 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'express-js', 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

console.log('Server is running on port 3000');

app.listen(3000);
