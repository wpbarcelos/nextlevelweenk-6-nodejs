import { Column, Entity, PrimaryColumn, } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column('boolean')
    admin: boolean;


    @Column('timestamp', {
        default: () => "NOW()",
        onUpdate: "NOW()"
    })
    createdAt: Date;

    @Column('timestamp', {
        onUpdate: "NOW()"
    })
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
