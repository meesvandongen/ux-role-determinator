alter table "public"."answers" rename column "answer_knowledge" to "answer";
ALTER TABLE "public"."answers" ALTER COLUMN "answer" drop default;
