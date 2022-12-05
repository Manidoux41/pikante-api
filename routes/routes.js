import { Router } from "express";

const router = Router();

router.get('/api', (req, res) => {
    res.send('API running at path: + /users or /sauces')
})

export default router;