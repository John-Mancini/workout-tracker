const router = require("express").Router();
const Workout = require("../models/workout");
router.get("/allWorkouts", (req, res) => {
  Workout.find()
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});
//find specific workout
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});
//create a new workout
router.post("/api/workouts", (req, res) => {
  Workout.create({
    day: Date.now(),
  })
    .then((newWorkout) => {
      console.log("created new workout: ", newWorkout);
      res.json(newWorkout);
    })
    .catch((err) => res.json(err));
});
//find the distance
router.get(`/api/workouts/range`, (req, res) => {
  Workout.find({})
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});

// router.delete("api/workouts", (req, res) => {});

module.exports = router;
