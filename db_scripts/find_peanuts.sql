SELECT  FD.long_description AS 'Name', FG.food_group_description as 'Food Group', ND.nutrient_value as 'Carbs per 100g'
FROM food_description as FD
INNER JOIN food_group as FG ON FD.food_group_category = FG.food_group_category
INNER JOIN nutrient_data as ND ON FD.food_databank_number = ND.food_databank_number
WHERE ND.nutrient_value < 25.0
AND ND.nutrient_identifier = 205
AND FD.long_description LIKE '%peanut%'