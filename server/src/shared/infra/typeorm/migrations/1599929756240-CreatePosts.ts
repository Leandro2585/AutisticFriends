import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePosts1599929756240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'posts',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'image',
                        type: 'varchar'
                    },
                    {
                        name: 'likes',
                        type: 'int'
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts');
    }

}
