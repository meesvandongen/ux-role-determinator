alter table "public"."answers" alter column "answer" set default '0';
alter table "public"."answers" rename column "answer" to "answer_knowledge";
