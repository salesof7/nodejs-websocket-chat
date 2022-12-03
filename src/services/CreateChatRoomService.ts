import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";
import { Document, Types } from "mongoose";
import { IUser } from "../schemas/User";

type IRoom = Document<any, any, any> & {
  idUsers: IUser[];
  idChatRoom: String;
} & {
  _id: Types.ObjectId;
};

@injectable()
class CreateChatRoomService {
  async execute(usersId: string[]): Promise<IRoom> {
    const room = await ChatRoom.create({
      usersId,
    });

    return room;
  }
}

export { CreateChatRoomService };
