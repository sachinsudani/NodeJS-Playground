const users = [
	{ id: 1, name: 'Alice', age: 30 },
	{ id: 2, name: 'Bob', age: 25 },
	{ id: 3, name: 'Charlie', age: 35 },
];

const products = [
	{ id: 101, name: 'Product A', price: 50 },
	{ id: 102, name: 'Product B', price: 100 },
	{ id: 103, name: 'Product C', price: 75 },
];

const orders = [
	{ id: 1001, userId: 1, productId: 101, quantity: 2 },
	{ id: 1002, userId: 2, productId: 102, quantity: 1 },
	{ id: 1003, userId: 1, productId: 103, quantity: 3 },
];

const generateOrderSummary = ({ orders, users, products }) => {
	// Map for quick access to users and products by their IDs
	const usersMap = users.map((user) => [user.id, user]);
	const productsMap = products.map((product) => [product.id, product]);

	// Generate order summary
	return orders.map((order) => {
		const user = usersMap.find((user) => user[0] === order.userId)[1];
		const product = productsMap.find(
			(product) => product[0] === order.productId
		)[1];
		const total = product.price * order.quantity;

		return {
			orderId: order.id,
			user,
			product,
			total,
		};
	});
};

console.log(generateOrderSummary({ orders, users, products }));

// [
//   {
//     orderId: 1001,
//     user: {
//       id: 1,
//       name: 'Alice',
//       age: 30,
//     },
//     product: {
//       id: 101,
//       name: 'Product A',
//       price: 50,
//     },
//     total: 100,
//   },
//   {
//     orderId: 1002,
//     user: {
//       id: 2,
//       name: 'Bob',
//       age: 25,
//     },
//     product: {
//       id: 102,
//       name: 'Product B',
//       price: 100,
//     },
//     total: 100,
//   },
//   {
//     orderId: 1003,
//     user: {
//       id: 1,
//       name: 'Alice',
//       age: 30,
//     },
//     product: {
//       id: 103,
//       name: 'Product C',
//       price: 75,
//     },
//     total: 225,
//   },
// ];
