import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQueries1604330386569 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
          new Table({
              name: 'queries',
              columns: [
                  {
                      name: 'id',
                      type: 'int',
                      isPrimary: true,
                      isGenerated: true,
                      generationStrategy: 'increment'
                  },
                  {
                      name: 'title',
                      type: 'varchar'
                  },
                  {
                      name: 'description',
                      type: 'varchar'
                  },
                  {
                      name: 'date',
                      type: 'DATE'
                  },
                  {
                      name: 'time',
                      type: 'TIME'
                  }
              ]
          })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('queries');
    }

}
