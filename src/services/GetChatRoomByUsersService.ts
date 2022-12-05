import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoom, IChatRoom } from "../schemas/ChatRoom";

@injectable()
class GetChatRoomByUsersService {
  async execute(idUsers: ObjectId[]): Promise<IChatRoom | null> {
    const room = await ChatRoom.findOne({
      idUsers: {
        $all: idUsers,
      },
    }).exec();

    return room as IChatRoom | null;
  }
}

export { GetChatRoomByUsersService };
