import TransactionModel from '../models/transactionModel.js';

export const getAllTransactions = async (req, res) => {
    try {
        const transactions = await TransactionModel.find();
        if (!transactions) {
            return res.status(400).json({message: "Don't have any transactions"})
        }
        res.status(200).json(transactions);
    } catch (error) {
        console.log(error);
    }
}

export const getTransactionById = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const transaction = await TransactionModel.findById(transactionId);
        if (!transaction) {
            return res.status(400).json({message: "Don't have transaction"})
        }
        res.status(200).json(transaction);
    } catch (error) {
        console.log(error);
    }
}

export const createTransaction = async (req, res) => {
    try {
        const {text, amount} = req.body;
        const newTransaction = new TransactionModel({text, amount});
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        console.log(error);
    }
}

export const editTransaction = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const transactionFoundById = await TransactionModel.findById(transactionId);

        transactionFoundById.text = req.body.text || transactionFoundById.text;

        transactionFoundById.amount = req.body.amount ||
        transactionFoundById.amount;

        await transactionFoundById.save();
        res.status(200).json(transactionFoundById);
    } catch (error) {
        console.log(error);
    }
}

export const deleteTransaction = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const noteDeleted = await TransactionModel.findByIdAndDelete(transactionId);
        if (!noteDeleted) {
            return res.status(400).json({message: 
                "Don't have transaction"
            })
        }
        await noteDeleted.save();
        res.status(200).json({message: "Transaction has been deleted"});
    } catch (error) {
        console.log(error);
    }
}