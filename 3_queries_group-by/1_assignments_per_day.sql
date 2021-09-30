SELECT day,count(assignments.id) 
FROM assignments
GROUP BY day
ORDER BY day;