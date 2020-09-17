import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUserIdFieldToTasks1599948355132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tasks', new TableColumn({
            name: 'user_task',
            type: 'int'
        }));

        await queryRunner.createForeignKey('tasks', new TableForeignKey({
            name: 'UserTasks',
            columnNames: ['user_task'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tasks', 'UserTasks');
        await queryRunner.dropColumn('tasks', 'user_id');
    }

}
