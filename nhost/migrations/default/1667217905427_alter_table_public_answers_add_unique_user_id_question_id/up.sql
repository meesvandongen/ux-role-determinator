alter table "public"."answers" add constraint "answers_user_id_question_id_key" unique ("user_id", "question_id");
