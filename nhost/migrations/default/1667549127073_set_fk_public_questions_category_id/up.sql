alter table "public"."questions"
  add constraint "questions_category_id_fkey"
  foreign key ("category_id")
  references "public"."categories"
  ("id") on update cascade on delete cascade;
