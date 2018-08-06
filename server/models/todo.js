const mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    default: null,
    type: Number
  }
});

module.exports = {Todo};
