const { Schema, model, Types , User } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: 'Please Enter Your Reaction!',
            max: 280
        },
        username: {
            type: String,
            required: 'Please Enter a name',
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please enter your thoughts in the form of text',
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        // username: {
        //     username: {
        //         User.username
        //     }
        // },
        
        userId: {
            type: String
         },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
)


const Thought = model('Thought', ThoughtSchema)

module.exports = Thought