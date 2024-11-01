
-- DROP TABLE IF EXISTS play_list;
CREATE TABLE play_list(
	create_by VARCHAR (50) COMMENT '创建人',
	create_date DATETIME COMMENT '创建日期',
	update_by VARCHAR (50) COMMENT '修改人',
	update_date DATETIME COMMENT '修改日期',
	del_flag INT (11) COMMENT '删除标识（0：正常；1：删除）',
	id VARCHAR (50) COMMENT '主键id',
	user_id VARCHAR (50) COMMENT '所属用户',
	song_id VARCHAR (50) COMMENT '所属音乐',
	PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT 'play_list';
