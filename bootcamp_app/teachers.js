const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const cohortName = process.argv[2] || 'JUL02';
pool.query(`SELECT teachers.name AS teacher,cohorts.name AS cohort 
FROM assistance_requests
JOIN teachers ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
GROUP BY teachers.name,cohorts.name
ORDER BY teachers.name;

`,[`%${cohortName}%`])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort} :${user.teacher} `);
  })
}).catch(err => console.error('query error', err.stack));