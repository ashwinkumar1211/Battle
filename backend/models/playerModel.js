import mongoose from 'mongoose';

const playerSchema = mongoose.Schema(
  {
    playername: {
      type: String,
      required: true,
    },
    teamname: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    wins: {
      type: Number,
      required: true,
      default: 0,
    },
    losses: {
      type: Number,
      required: true,
      default: 0,
    },
    ties: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model('Player', playerSchema);

export default Player;
