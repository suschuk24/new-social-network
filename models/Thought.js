const { Schema, model, Types , User } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId(),
            default: () => new Types.ObjectId()
        },
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
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId(),
            default: () => new Types.ObjectId()
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
const Thought = model('Thought', ThoughtSchema)

module.exports = Thought