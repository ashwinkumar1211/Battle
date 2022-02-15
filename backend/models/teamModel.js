import mongoose from 'mongoose';

const teamSchema = mongoose.Schema(
  {
    teamname: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    wins: {
      type: Number,
      required: true,
    },
    losses: {
      type: Number,
      required: true,
    },
    ties: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model('Team', teamSchema);

export default Team;
