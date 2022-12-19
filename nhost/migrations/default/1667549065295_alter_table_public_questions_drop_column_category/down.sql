alter table "public"."questions" alter column "category" drop not null;
alter table "public"."questions" add column "category" text;
