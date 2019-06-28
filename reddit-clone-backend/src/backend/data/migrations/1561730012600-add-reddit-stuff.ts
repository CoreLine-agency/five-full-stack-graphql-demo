/* tslint:disable */
import {MigrationInterface, QueryRunner} from "typeorm";

export class addRedditStuff1561730012600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "vote" ("id" SERIAL NOT NULL, "sentiment" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" integer NOT NULL, "authorId" integer NOT NULL, CONSTRAINT "PK_2d5932d46afe39c8176f9d4be72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "title" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "authorId" integer NOT NULL, "parentPostId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_43cc1af57676ac1b7ec774bd10f" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "vote" ADD CONSTRAINT "FK_b30f4b3250b14c1650e2f7814af" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_132a5076e5d713b677a675612ff" FOREIGN KEY ("parentPostId") REFERENCES "post"("id") ON DELETE SET NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_132a5076e5d713b677a675612ff"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0"`);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_b30f4b3250b14c1650e2f7814af"`);
        await queryRunner.query(`ALTER TABLE "vote" DROP CONSTRAINT "FK_43cc1af57676ac1b7ec774bd10f"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "vote"`);
    }

}
