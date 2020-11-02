import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from "typeorm";

export class AddUserIdFieldToQueries1604330466818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('queries', new TableColumn({
          name: 'user_querie',
          type: 'int'
      }))
      await queryRunner.createForeignKey('queries', new TableForeignKey({
          name: 'UserQueries',
          columnNames: ['user_querie'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users'
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('queries', 'UserQueries');
      await queryRunner.dropColumn('queries', 'user_querie');
    }

}
