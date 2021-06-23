import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { isNull } from "util";

export class CreateUsers1624446530561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: "id",
                        type: 'varchar',
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: "admin",
                        type: 'boolean',
                        default: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users')
    }

}
