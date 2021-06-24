import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import { Tag } from '../entities/Tag';
import { CreateTagService } from '../services/CreateTagService';

class TagController {


    async index(req: Request, res: Response) {
        const tagRepository = getRepository(Tag);

        const tags = await tagRepository.find({});

        return res.json(tags);
    }

    async store(req: Request, res: Response) {
        const { name } = req.body

        if (!name) {
            throw new Error('name is required');
        }

        const tagService = new CreateTagService();

        const tag = await tagService.handle({ name });

        return res.json(tag)

    }
}


export default new TagController()