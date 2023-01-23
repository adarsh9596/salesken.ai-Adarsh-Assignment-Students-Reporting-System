package com.studentreporting.service;

import com.studentreporting.entities.Student;
import com.studentreporting.entities.StudentMarks;
import com.studentreporting.repository.StudentESRepository;
import com.studentreporting.repository.StudentMarksRepository;
import com.studentreporting.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;
import java.util.*;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {
    public static Logger log = LoggerFactory.getLogger(StudentServiceImpl.class);

    @Inject
    private StudentRepository studentRepository;

    @Inject
    private ElasticsearchOperations elasticsearchTemplate;

    @Inject
    private StudentMarksRepository studentMarksRepository;

    @Inject
    private StudentESRepository repository;

    private int studentIdAutoIncrementCounter;
    private int marksAutoIncrementCounter;

    private Map<Integer, Student> studentMap = new HashMap<>();

    public Student getStudent(Integer studentId) {
        Optional<Student> student = repository.findById(studentId);
        return student.get();
    }

    public void deleteStudent(Integer studentId) {

        repository.deleteById(studentId);
    }

    public void updateStudent(Student student) {

        repository.save(student);

        return;
    }

    public Integer createStudent(Student student) {
        int id = ++studentIdAutoIncrementCounter;
        student.setId(id);
        repository.save(student);
        return id;
    }

    @Override
    public List<Student> getStudents() {
        Iterable<Student> students = repository.findAll();

        List<Student> result = new ArrayList<>();
        students.forEach(result::add);

        return result;

    }

    @Override
    public void addMarks(StudentMarks marks) {
        marks.setId(++marksAutoIncrementCounter);

        studentMarksRepository.save(marks);
    }
}
