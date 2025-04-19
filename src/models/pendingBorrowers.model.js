import mongoose from "mongoose";

const pendingBorrowerSchema = new mongoose.Schema({
    borrowerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    interest: {
        type: Number,
        required: true
    },
    months: {
        type: Number,
        required: true
    },
    isClaimed: {
        type: Boolean,
        default: false
    },
    lenderId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    buyerWalletAddress:{
        type: mongoose.Schema.Types.ObjectId
    }
});

const PendingBorrower = mongoose.model("PendingBorrower", pendingBorrowerSchema);

export default PendingBorrower;
