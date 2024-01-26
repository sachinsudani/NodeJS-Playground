import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).send('<h1>Page not found</h1>');
});

console.log('Server is running on port 3000');

app.listen(3000);
