-- 5)Show the name and population for France, Germany, Italy
SELECT name, population FROM world WHERE name in ('France', 'Germany', 'Italy')


-- 8)Exclusive OR (XOR). Show the countries that are big by area or big by population but not both. Show name, population and area.
-- Australia has a big area but a small population, it should be included.
-- Indonesia has a big population but a small area, it should be included.
-- China has a big population and big area, it should be excluded.
-- United Kingdom has a small population and a small area, it should be excluded.
 SELECT name, population, area FROM world WHERE population > 250000000 xOR area >3000000

-- 9)Show the name and population in millions and the GDP in billions for the countries of the continent 'South America'. Use the ROUND function to show the values to two decimal places. For South America show population in millions and GDP in billions to 2 decimal places.
-- Millions and billions

SELECT name, ROUND(population/1000000,2), ROUND(gdp/1000000000,2) FROM world WHERE continent = 'South America'
-- 10)
-- Show the name and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000.
-- Show per-capita GDP for the trillion dollar countries to the nearest $1000.

SELECT name, ROUND(GDP/population/1000) *1000 FROM world WHERE GDP >=1000000000000
-- 12)Show the name and the continent - but substitute Eurasia for Europe and Asia substitute America - for each country in North America or South America or Caribbean. Show countries beginning with A or B

SELECT name, 
	CASE WHEN continent = 'Europe' THEN 'Eurasia' 
	WHEN continent = 'Asia' THEN 'Eurasia'
	WHEN continent = "North America" THEN 'America'
	WHEN continent = 'South America' THEN 'America'
	WHEN continent = 'Caribbean' THEN 'America'
	ELSE continent END
FROM world
WHERE name LIKE 'A%' OR  name LIKE 'B%'

-- 13)Put the continents right Oceania becomes Australasia
-- Countries in Eurasia and Turkey go to Europe/Asia
-- Caribbean islands starting with 'B' go to North America, other Caribbean islands go to South America
-- Order by country name in ascending order

SELECT name, continent, 
	CASE WHEN continent = 'Oceania' THEN 'Australasia'
	WHEN continent = 'Eurasia' THEN 'Europe/Asia'
	WHEN continent = 'Turkey' THEN 'Europe/Asia'
	WHEN continent = 'Caribbean' AND name LIKE 'B%' THEN 'North America'
	WHEN continent = 'Caribbean' AND name NOT LIKE 'B%' THEN 'South America'
	ELSE continent END
FROM world
ORDER BY name
