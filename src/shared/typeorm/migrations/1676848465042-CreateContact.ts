import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContact1676848465042 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name: 'contacts',
        columns: [
          {
            name: 'pkContact',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'identity',
            isPrimary: true,
          }, {
            name: 'nameContact',
            type: 'varchar',
          }, {
            name: 'dateBirthContact',
            type: 'date',
            isNullable: true,
          }, {
            name: 'nicknameContact',
            type: 'varchar',
            isNullable: true,
          },
        ],
      },
    ));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts');
  }

}
