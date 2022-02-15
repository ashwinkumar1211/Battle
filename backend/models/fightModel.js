import mongoose from 'mongoose';

const fightSchema = mongoose.Schema(
  {
    teamname: {
      type: String,
      required: true,
    },
    playeronename: {
      type: String,
      required: true,
    },
    playertwoname: {
      type: String,
      required: true,
    },
    ties: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Fight = mongoose.model('Fight', fightSchema);

export default Fight;
