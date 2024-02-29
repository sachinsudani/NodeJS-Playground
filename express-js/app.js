import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import path from 'path';
import handleBars from 'express-handlebars';

const __dirname = path.resolve();
const app = express();
const hbs = handleBars.create({
	extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'express-js', 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'express-js', 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

console.log('Server is running on port 3000');

app.listen(3000);
