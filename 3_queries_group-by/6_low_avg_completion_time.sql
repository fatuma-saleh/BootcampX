SELECT students.name , AVG(assignment_submissions.duration) AS average_assignment_duration,
AVG(assignments.duration) AS average_expected_duration
FROM assignments
JOIN assignment_submissions ON assignment_id = assignments.id
JOIN students ON student_id = students.id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER  BY AVG(assignment_submissions.duration);