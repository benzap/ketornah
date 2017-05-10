CREATE VIEW IF NOT EXISTS food_summary AS
WITH
nutrient_carb AS (
	SELECT NData.food_databank_number, NData.nutrient_value
	FROM nutrient_data as NData
	INNER JOIN nutrient_definition as NDef ON NData.nutrient_identifier = NDef.nutrient_identifier
	WHERE NDef.tagname = 'CHOCDF'
),
nutrient_protein AS (
	SELECT NData.food_databank_number, NData.nutrient_value
	FROM nutrient_data as NData
	INNER JOIN nutrient_definition as NDef ON NData.nutrient_identifier = NDef.nutrient_identifier
	WHERE NDef.tagname = 'PROCNT'
),
nutrient_fat AS (
	SELECT NData.food_databank_number, NData.nutrient_value
	FROM nutrient_data as NData
	INNER JOIN nutrient_definition as NDef ON NData.nutrient_identifier = NDef.nutrient_identifier
	WHERE NDef.tagname = 'FAT'
),
nutrient_fibre AS (
	SELECT NData.food_databank_number, NData.nutrient_value
	FROM nutrient_data as NData
	INNER JOIN nutrient_definition as NDef ON NData.nutrient_identifier = NDef.nutrient_identifier
	WHERE NDef.tagname = 'FIBTG'
)
SELECT FD.long_description AS name,
FG.food_group_description AS category,
carb.nutrient_value AS carbs,
protein.nutrient_value AS protein,
fat.nutrient_value AS fat,
fibre.nutrient_value AS fibre
FROM food_description AS FD
INNER JOIN food_group AS FG ON FG.food_group_category = FD.food_group_category
INNER JOIN nutrient_carb AS carb ON carb.food_databank_number = FD.food_databank_number
INNER JOIN nutrient_protein AS protein ON protein.food_databank_number = FD.food_databank_number
INNER JOIN nutrient_fat AS fat ON fat.food_databank_number = FD.food_databank_number
INNER JOIN nutrient_fibre AS fibre ON fibre.food_databank_number = FD.food_databank_number