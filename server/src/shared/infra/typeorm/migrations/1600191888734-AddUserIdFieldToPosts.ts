import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUserIdFieldToPosts1600191888734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('posts', new TableColumn({
            name: 'user_post',
            type: 'int'
        }));

        await queryRunner.createForeignKey('posts', new TableForeignKey({
            name: 'UserPosts',
            columnNames: ['user_post'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('posts', 'UserPosts');
        await queryRunner.dropColumn('posts', 'user_post');
    }

}
