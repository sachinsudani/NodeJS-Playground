import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res
		.status(404)
		.sendFile(path.join(__dirname, 'express-js', 'views', '404.html'));
});

console.log('Server is running on port 3000');

app.listen(3000);
