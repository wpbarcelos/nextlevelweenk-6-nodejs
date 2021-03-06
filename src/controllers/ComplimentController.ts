import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/CreateCompimentService';

class ComplimentController {

    async store(request: Request, response: Response) {

        const { user_receiver, tag_id, message } = request.body;
        const user_sender = request.user_id;

        const complimentService = new CreateComplimentService()

        const compliment = await complimentService.execute({ user_receiver, user_sender, tag_id, message })

        return response.json(compliment);

    }

}

export default new ComplimentController();