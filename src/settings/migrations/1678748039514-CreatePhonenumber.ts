import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePhonenumber1678748039514 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'phonenumber',
      columns: [
        {
          name: 'pkPhoneNumber',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
        },
        {
          name: 'phoneNumber',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },
        {
          name: 'tagPhone',
          type: 'varchar',
        },
        {
          name: 'fkContact',
          type: 'int',
          isNullable: false,
        },
      ],
    }));

    await queryRunner.createForeignKey(
      'phonenumber',

      new TableForeignKey({
        columnNames: ['fkContact'],
        referencedTableName: 'contacts',
        referencedColumnNames: ['pkContact'],

      }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('phonenumber');
  }

}
