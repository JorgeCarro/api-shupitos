
import express from 'express';

import indexRoutes from './routes/index.routes.js';
import categoriasRoutes from './routes/categorias.routes.js';
import coctelesRoutes from './routes/cocteles.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api',categoriasRoutes);
app.use('/api',coctelesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;