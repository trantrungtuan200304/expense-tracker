import express from 'express';

const router = express.Router();

import {getAllTransactions, getTransactionById, createTransaction, editTransaction, deleteTransaction} from '../controllers/transactionController.js';

router.get('/', getAllTransactions)

router.get('/:id', getTransactionById)

router.post('/', createTransaction)

router.put('/:id', editTransaction)

router.delete('/:id', deleteTransaction)

export default router