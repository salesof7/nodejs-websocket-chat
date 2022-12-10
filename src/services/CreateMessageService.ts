import { injectable } from "tsyringe";
import { IMessage, Message } from "../schemas/Message";

interface CreateMessageDTO {
  to: string;
  text: string;
  roomId: string;
}

@injectable()
class CreateMessageService {
  async execute({ to, text, roomId }: CreateMessageDTO): Promise<IMessage> {
    const message = await Message.create({
      to,
      text,
      roomId,
    });

    return message as IMessage;
  }
}

export { CreateMessageService };
