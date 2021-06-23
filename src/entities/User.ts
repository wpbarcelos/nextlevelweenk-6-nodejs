import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, } from "typeorm";
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


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
