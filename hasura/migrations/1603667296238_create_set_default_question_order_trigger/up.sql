create trigger set_default_question_order 
   before insert on question
   for each row
   execute procedure create_default_question_order();
