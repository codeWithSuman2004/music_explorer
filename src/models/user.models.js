import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const UserSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,

    },

    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    avatar: {
      type: String,    //cloudinary url
      required: true,
    },

    coverImage: {
      type: String,
    },

    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      }
    ],

    password: {
      type: String,
      required: [true, 'Password is required'],
    },

    refreshToken: {
      type: String,
    },

  },
  {
    timestamps: true,
  }
);


UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10);
    next();
  }
  else {
    return next();
  }
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateAccessToken = function () {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
}
UserSchema.methods.generateRefreshToken = function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );

}

const User = mongoose.model('User', UserSchema);

export default User;