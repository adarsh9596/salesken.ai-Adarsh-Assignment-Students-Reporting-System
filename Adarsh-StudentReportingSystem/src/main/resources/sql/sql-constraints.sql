use `studentReportingSystem`;

CREATE UNIQUE INDEX name_ukey_ukey ON subject (subject);

CREATE UNIQUE INDEX sem_name_ukey_ukey ON semester (name);

ALTER TABLE marksteet ADD FOREIGN KEY (student_id) REFERENCES student (id);
CREATE INDEX student_student_id_fk ON marksteet (student_id);

ALTER TABLE marksteet ADD FOREIGN KEY (semester_id) REFERENCES semester (id);
CREATE INDEX semester_semester_id_fk ON marksteet (semester_id);

ALTER TABLE marksteet ADD FOREIGN KEY (subject_id) REFERENCES subject (id);
CREATE INDEX subject_subject_id_fk ON marksteet (subject_id);

CREATE UNIQUE INDEX marks_ukey_ukey ON marksteet (semester_id,student_id,subject_id);

