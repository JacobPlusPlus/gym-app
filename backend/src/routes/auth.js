import { Router } from 'express'
import pool from '../db.js'

const router = Router();

router.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    console.log(req.body)
    if(email && pass) {
         console.log("zalogowano")
    }
});

export default router;