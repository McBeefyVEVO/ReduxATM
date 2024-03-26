import { createRoot } from 'react-dom/client';
import AppRoutes from './pages/AppRoutes';

const root = createRoot(document.getElementById("content"));
root.render(
    <AppRoutes />
);