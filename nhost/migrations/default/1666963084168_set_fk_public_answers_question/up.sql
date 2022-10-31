alter table "public"."answers"
  add constraint "answers_question_fkey"
  foreign key ("question")
  references "public"."questions"
  ("id") on update cascade on delete cascade;
