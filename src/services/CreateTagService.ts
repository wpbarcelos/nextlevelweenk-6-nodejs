import { getRepository } from "typeorm"
import { Tag } from "../entities/Tag"

interface ITagRequest {
    name: string;
}

export class CreateTagService {

    async handle({ name }: ITagRequest) {

        if (!name) {
            throw new Error('name is required')
        }

        const tagRepo = getRepository(Tag)

        const tagExists = await tagRepo.findOne({ name })

        if (tagExists) {
            throw new Error('Tag already exists')
        }


        const tag = tagRepo.create({
            name
        });

        await tagRepo.save(tag)

        return tag;


    }
}