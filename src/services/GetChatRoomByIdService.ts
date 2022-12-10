import { injectable } from "tsyringe";
import { ChatRoom, IChatRoom } from "../schemas/ChatRoom";

@injectable()
class GetChatRoomByIdService {
  async execute(idChatRoom: string): Promise<IChatRoom> {
    const room = await ChatRoom.find({
      idChatRoom,
    })
      .populate("idUsers")
      .exec();

    return room as unknown as IChatRoom;
  }
}

export { GetChatRoomByIdService };
