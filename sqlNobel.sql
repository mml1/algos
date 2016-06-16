--4)Give the name of the 'Peace' winners since the year 2000, including 2000

SELECT winner 
FROM nobel
WHERE subject = 'Peace' AND yr >= '2000'
--5)Show all details (yr, subject, winner) of the Literature prize winners for 1980 to 1989 inclusive.
SELECT * 
FROM nobel
WHERE subject = 'Literature' 
	AND yr BETWEEN '1980' AND '1989'
--8)Show the Physics winners for 1980 together with the Chemistry winners for 1984.
SELECT *
FROM nobel
WHERE subject = 'Chemistry' 
	AND yr ='1984' 
	OR subject='Physics' 
	AND yr = '1980'
--9)Show the winners for 1980 excluding the Chemistry and Medicine
SELECT *
FROM nobel
WHERE yr = '1980' 
	AND subject NOT 
	IN ('Chemistry', 'Medicine')

-- 10) Show who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)
SELECT *
FROM nobel
WHERE subject = 'Medicine' 
	AND yr <'1910' 
	OR subject = 'Literature' 
	AND yr >=2004
-- 11)Find all details of the prize won by PETER GRÜNBERG
SELECT *
FROM nobel
WHERE winner LIKE 'Peter Gr%nberg'
-- 12)Find all details of the prize won by EUGENE O'NEILL
SELECT *
FROM nobel
WHERE winner = 'Eugene O''Neill' 
-- 13)List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order.
SELECT winner, yr, subject
FROM nobel
WHERE winner LIKE 'Sir %'
ORDER BY yr DESC, winner
--14)Show the 1984 winners and subject ordered by subject and winner name; but list Chemistry and Physics last.
SELECT winner, subject
FROM nobel
WHERE yr=1984
ORDER BY
   CASE WHEN  subject 
   IN ('Chemistry','Physics') 
   THEN '1' ELSE '0' END, 
   subject, winner
