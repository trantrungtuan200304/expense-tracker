import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    }, 
    amount: {
        type: Number,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const TransactionModel = mongoose.model("transactions", transactionSchema);

export default TransactionModel;