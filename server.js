 // Order Service API (Node.js)
   const express = require('express');
   const app = express();
   app.use(express.json());
   // Mock database
   let orders = [];
   // Create Order
   app.post('/api/orders', (req, res) => {
     const order = { id: Date.now(), ...req.body };
     orders.push(order);
     res.status(201).json(order);
   });
   // Get Order
   app.get('/api/orders/:id', (req, res) => {
     const order = orders.find(o => o.id == req.params.id);
     res.json(order || { error: "Not found" });
   });
   app.listen(3000, () => console.log('Order Service running on port 3000'));
