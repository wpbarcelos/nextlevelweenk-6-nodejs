import { getCustomRepository, getRepository } from "typeorm";
import { Tag } from "../entities/Tag";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IComplimentRequest {
    user_sender: string;
    user_receiver: string;
    message: string;
    tag_id: string;
}

export class CreateComplimentService {

    async execute({ user_sender, user_receiver, message, tag_id }: IComplimentRequest) {

        const request = { user_sender, user_receiver, message, tag_id };

        Object.keys(request).map(field => {
            if (!request[field]) {
                throw new Error(`${field} is required`)
            }
        })

        const complimentRepository = getCustomRepository(ComplimentRepository)
        const userRepository = getCustomRepository(UserRepository)
        const tagRepository = getRepository(Tag);

        const userSender = await userRepository.findOne({ id: user_sender });

        if (!userSender) {
            throw new Error('user_sender is invalid')
        }

        const userReceiver = await userRepository.findOne({ id: user_receiver });

        if (!userReceiver) {
            throw new Error('user_receiver is invalid')
        }

        if (user_sender === user_receiver) {
            throw new Error('Not is permitted create compliment yourself')
        }

        const tag = await tagRepository.findOne({ id: tag_id })

        if (!tag) {
            throw new Error('tag_id is invalid')
        }

        const compliment = complimentRepository.create({
            userReceiver,
            userSender,
            message,
            tag
        })

        await complimentRepository.save(compliment)

        return compliment;



    }
}