import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        speaker:{
            type: String,
            required: true,
        },
        club:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        date:{
            type: String,
            required: true,
        },
        time:{
            type: String,
            required: true,
        },
        imageUrls:{
            type: Array,
            required: true,
        },
        userRef:{
            type: String,
            required: true,
        },
    }, {timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;