const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter an exercise type!",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter the exercise name!",
      },

      duration: {
        type: Number,
        required: "Please enter a valid time in minutes.",
      },
      weight: {
        type: Number,
        required: "Please enter the weight",
      },
      reps: {
        type: Number,
        required: "Please enter how many reps per set",
      },
      sets: {
        type: Number,
        required: "please enter how many sets per workout",
      },
      distance: {
        type: Number,
        required: "Please enter the distance",
      },
    },
  ],
});
workoutSchema.virtual("totalDuration").get(function () {
  let exercises = this.exercises;
  let total = 0;
  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i].duration > 0) {
      total += exercises[i].duration;
    }
  }
  return total;
});
//make a virtual to add up all the durations for a day

const Workout = mongoose.model("workout-tracker", workoutSchema);
module.exports = Workout;
