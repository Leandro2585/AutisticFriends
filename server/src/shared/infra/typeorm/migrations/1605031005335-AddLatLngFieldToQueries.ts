import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddLatLngFieldToQueries1605031005335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('queries', [
            new TableColumn({
                name: 'latitude',
                type: 'decimal',
                scale: 6,
                precision: 8
            }), 
            new TableColumn({
                name: 'longitude',
                type: 'decimal',
                scale: 6,
                precision: 9
            })
        ]);          

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('queries', 'latitude');
        await queryRunner.dropColumn('queries', 'longitude');
    }

}
