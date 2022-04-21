const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    reactionUsername: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


module.exports = reactionSchema;
