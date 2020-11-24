const { Schema, model, Types } = require('mongoose');

const validateEmail = function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text);
}

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'We need to know what to call you, please enter a user name',
            trim: true,

        },
        email: {
            type: String,
            required: 'Please enter a valid email address',
            unique: true,
            get: emailVal => validateEmail(emailVal)
        },
        // thoughts: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'thought'
        // }],
        // friends: [this]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// friendCount Virtual
UserSchema.virtual('friendCount').get(function () {
    // return this.friends.reduce((total, friends) => total + friends.length + 1, 0)
})

const User = model('User', UserSchema)

module.exports = User