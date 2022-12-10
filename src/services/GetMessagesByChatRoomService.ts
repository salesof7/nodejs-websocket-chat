import { injectable } from "tsyringe";
import { IMessage, Message } from "../schemas/Message";

@injectable()
class GetMessagesByChatRoomService {
  async execute(roomId: string): Promise<IMessage[]> {
    const messages = await Message.find({
      roomId,
    })
      .populate("to")
      .exec();

    return messages as IMessage[];
  }
}

export { GetMessagesByChatRoomService };
