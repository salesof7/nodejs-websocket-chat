import { injectable } from "tsyringe";
import { ChatRoom, IChatRoom } from "../schemas/ChatRoom";

@injectable()
class CreateChatRoomService {
  async execute(usersId: string[]): Promise<IChatRoom> {
    const room = await ChatRoom.create({
      usersId,
    });

    return room as IChatRoom;
  }
}

export { CreateChatRoomService };
