import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1624553197082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "compliments",
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'user_sender',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'user_receiver',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'tag_id',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'message',
                    type: 'varchar'

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
            ],
            foreignKeys: [
                {
                    name: "FKComplimentsUserSender",
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_sender'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKComplimentsUserReceiver",
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_receiver'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKComplimentsTag",
                    referencedTableName: 'tags',
                    referencedColumnNames: ['id'],
                    columnNames: ['tag_id'],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compliments')
    }

}
