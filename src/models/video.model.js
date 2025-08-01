import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // cloudinary video url
            required: true,
        },
        thumbnail: {
            type: String, // cloudinary image url
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration:{
            type: Number, //cloudinary se aa jayega
            required: true,
        },
        views:{
            type: Number,
            default: 0, // initial views count
        },
        isPublished:{
            type: Boolean,
            default: true, 
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        } //mogoose-aggregate-paginate-v2  this allows aggregation and pagination 

    },
    {
        timestamps: true 
    }
)

videoSchema.plugin(mongooseAggregatePaginate); // Showing all at once is slow (e.g., 10,000 users).So you show 10–20 at a time → Page 1, Page 2, etc.

export const Video = mongoose.model('Video', videoSchema);