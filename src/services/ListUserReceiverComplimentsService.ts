import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";



export class ListUserReceiverComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositoru = getCustomRepository(ComplimentRepository)


        const compliments = await complimentsRepositoru.find(
            {
                where: {
                    user_receiver: user_id
                },
                relations: ['userSender', 'userReceiver', 'tag']

            }
        )
        return compliments
    }
}