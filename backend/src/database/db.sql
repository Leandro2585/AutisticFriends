show tables;
select * from tb_user;

alter table tb_task add constraint fk_user_task foreign key tb_task(user_id) references tb_user(user_id);


select * from knex_migrations_lock;