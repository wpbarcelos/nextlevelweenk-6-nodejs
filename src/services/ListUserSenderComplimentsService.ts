import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";



export class ListUserSenderComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositoru = getCustomRepository(ComplimentRepository)


        const compliments = await complimentsRepositoru.find(
            {
                where: {
                    user_sender: user_id
                },
                relations: ['userSender', 'userReceiver', 'tag']

            }
        )
        return compliments
    }
}