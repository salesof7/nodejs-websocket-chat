import mongoose, { Document, Schema } from "mongoose";

type IUser = Document & {
  email: string;
  socketId: string;
  name: string;
  avatar: string;
};

const UserSchema = new Schema({
  email: String,
  socketId: String,
  name: String,
  avatar: String,
});

const User = mongoose.model<IUser>("Users", UserSchema);

export { User, IUser };
