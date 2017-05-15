#![allow(dead_code)]
#[macro_use] extern crate lazy_static;
extern crate regex;
extern crate sqlite;


use std::env;
use std::io::{BufReader};
use std::io::prelude::*;
use std::fs::File;
use std::fs;
use std::path::Path;
use regex::Regex;
use sqlite::{State, Connection, Value};

// Represents pg.30 within SR28 Documentation
// FOOD_DES.txt
#[derive(Debug)]
struct FoodDescription {
    food_databank_number: i32, //NDB_NO [0]
    food_group_category: i32, //FdGrp_Cd [1]
    long_description: String, //Long_Desc [2]
    short_description: String, //Shrt_Desc [3]
    common_name: String, //CommName [4]
    manufacturer: String, //ManufacName [5]
    has_nutrient_profile: bool, //Survey [6]
    refuse_description: String, //Ref_desc [7]
    refuse_percent: i8, //Refuse [8]
    scientific_name: String, //SciName [9]
    nitrogen_factor: f32, //N_Factor [10]
    protein_factor: f32, //Pro_Factor [11]
    fat_factor: f32, //Fat_Factor [12]
    carbohydrate_factor: f32 //CHO_Factor [13]
}

// Represents pg.31 within SR28 Documentation
// FD_GROUP.txt
#[derive(Debug)]
struct FoodGroup {
    food_group_category: i32, //FdGrp_Cd [0]
    food_group_description: String //FdGrp_Desc [1]
}

// Represents pg.31 within SR28 Documentation
// LANGUAL.txt
#[derive(Debug)]
struct LanguaLFactor {
    food_databank_number: i32, //NDB_No [0]
    factor_code: String, //Factor_Code [1]
}

// Represents pg.32 within SR28 Documentation
// LANGDESC.txt
#[derive(Debug)]
struct LanguaLDescription {
    factor_code: String, //Factor_Code [0]
    description: String, //Description [1]
}

// Represents pg.33 within SR28 Documentation
// NUT_DATA.txt
#[derive(Debug)]
struct NutrientData {
    food_databank_number: i32, //NDB_No [0]
    nutrient_identifier: i32, //Nutr_No [1]
    nutrient_value: f32, //Nutr_Val [2]
}

// Represents pg.34 within SR28 Documentation
// NUTR_DEF.txt
#[derive(Debug)]
struct NutrientDefinition {
    nutrient_identifier: i32, //Nutr_No [0]
    units: String, //Units [1]
    tagname: String, //Tagname [2]
    description: String, //NutrDesc [3]
}

// Represents pg.36 within SR28 Documentation
// WEIGHT.txt
#[derive(Debug)]
struct WeightValue {
    food_databank_number: i32, //NDB_No [0]
    sequence_number: i32, //Seq [1]
    amount: i32, //Amount [2]
    measurement_description: String, //Msre_Desc [3]
    gram_weight: f32, //Gm_Wgt [4]
}

#[derive(Debug)]
struct FoodSummary {
    id: i32, //food_databank_number
    name: String,
    category: String,
    carbs: f32,
    protein: f32,
    fat: f32,
    fibre: f32,
    energy: f32,
}

fn parse_field(field: &str) -> String {
    //let s = field.clone();
    lazy_static! {
        static ref RE: Regex = Regex::new("^~?(.*?)~?$").unwrap();
    }
    RE.captures(field).map_or("".to_string(), |g| g[1].to_string())
}

fn get_lines_from_file(file_path: String) -> std::io::Lines<std::io::BufReader<std::fs::File>> {
    let file_handle = File::open(file_path).unwrap();
    let buf_reader = BufReader::new(file_handle);
    buf_reader.lines()
}

fn parse_fields(line: String) -> Vec<String> {
    let split = line.split("^");
    let fields = split.map(|v| parse_field(v)).collect::<Vec<String>>();
    fields
}

fn read_food_descriptions(file_path: String) -> Vec<FoodDescription> {
    let mut v: Vec<FoodDescription> = Vec::new();
    for line in get_lines_from_file(file_path) {
        let line = match line {
            Ok(val) => val,
            Err(_) => continue,
        };
        let fields = parse_fields(line);
        let food_description = FoodDescription {
            food_databank_number: fields[0].parse().unwrap_or(0), //NDB_NO [0]
            food_group_category: fields[1].parse().unwrap_or(0), //FdGrp_Cd [1]
            long_description: fields[2].clone(), //Long_Desc [2]
            short_description: fields[3].clone(), //Shrt_Desc [3]
            common_name: fields[4].clone(), //CommName [4]
            manufacturer: fields[5].clone(), //ManufacName [5]
            has_nutrient_profile: match fields[6].as_ref() {
                "" => false,
                "Y" => true,
                _ => false,
            }, //Survey [6]
            refuse_description: fields[7].clone(), //Ref_desc [7]
            refuse_percent: fields[8].parse().unwrap_or(0), //Refuse [8]
            scientific_name: fields[9].clone(), //SciName [9]
            nitrogen_factor: fields[10].parse::<f32>().unwrap_or(1.0), //N_Factor [10]
            protein_factor: fields[11].parse::<f32>().unwrap_or(1.0), //Pro_Factor [11]
            fat_factor: fields[12].parse::<f32>().unwrap_or(1.0), //Fat_Factor [12]
            carbohydrate_factor: fields[13].parse::<f32>().unwrap_or(1.0), //CHO_Factor [13]  
        };
        v.push(food_description);
    }
    v
}

fn get_database_connection(db_path: String) -> Connection {
    if Path::new(&db_path.to_owned()).exists() {
        println!("Deleting previous database: {}", db_path);
        fs::remove_file(&db_path).unwrap_or(());
    }

    sqlite::open(&db_path).unwrap()
}

fn has_table(conn: &Connection, name: &str) -> bool {
    let mut statement = conn.prepare("
    SELECT name
    FROM sqlite_master
    WHERE type = 'table' AND name = ?;
    ").unwrap();

    let mut bhas_table = false;
    statement.bind(1, name).unwrap();
    while let State::Row = statement.next().unwrap() {
        bhas_table = true;
    }
    bhas_table
}

fn create_food_description_table(conn: &Connection) {
    conn.execute("
    CREATE TABLE food_description (
      food_databank_number INTEGER PRIMARY KEY,
      food_group_category INTEGER,
      long_description TEXT,
      short_description TEXT,
      common_name TEXT,
      manufacturer TEXT,
      has_nutrient_profile NUMERIC,
      refuse_description TEXT,
      refuse_percent INTEGER,
      scientific_name TEXT,
      nitrogen_factor REAL,
      protein_factor REAL,
      fat_factor REAL,
      carbohydrate_factor REAL
    );
    ").unwrap();
}

fn insert_food_descriptions(conn: &Connection, food_descriptions: &Vec<FoodDescription>) {
    let mut statement = conn.prepare("
        INSERT INTO food_description (
          food_databank_number,
          food_group_category,
          long_description,
          short_description,
          common_name,
          manufacturer,
          has_nutrient_profile,
          refuse_description,
          refuse_percent,
          scientific_name,
          nitrogen_factor,
          protein_factor,
          fat_factor,
          carbohydrate_factor
        ) VALUES (
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?,
          ?
        );").unwrap();

    conn.execute("BEGIN TRANSACTION").unwrap();
    for food in food_descriptions {
        statement.bind(1, food.food_databank_number as i64).unwrap();
        statement.bind(2, food.food_group_category as i64).unwrap();
        statement.bind(3, &Value::String(food.long_description.to_owned())).unwrap();
        statement.bind(4, &Value::String(food.short_description.to_owned())).unwrap();
        statement.bind(5, &Value::String(food.common_name.to_owned())).unwrap();
        statement.bind(6, &Value::String(food.manufacturer.to_owned())).unwrap();
        statement.bind(7, if food.has_nutrient_profile {1} else {0}).unwrap();
        statement.bind(8, &Value::String(food.refuse_description.to_owned())).unwrap();
        statement.bind(9, food.refuse_percent as i64).unwrap();
        statement.bind(10, &Value::String(food.scientific_name.to_owned())).unwrap();
        statement.bind(11, food.nitrogen_factor as f64).unwrap();
        statement.bind(12, food.protein_factor as f64).unwrap();
        statement.bind(13, food.fat_factor as f64).unwrap();
        statement.bind(14, food.carbohydrate_factor as f64).unwrap();
     
        while let State::Row = statement.next().unwrap() {}
        statement.reset().unwrap();
    }
    conn.execute("END TRANSACTION").unwrap();
}

fn read_food_groups(file_path: String) -> Vec<FoodGroup> {
    let mut v: Vec<FoodGroup> = Vec::new();
    for line in get_lines_from_file(file_path) {
        let line = match line {
            Ok(val) => val,
            Err(_) => continue,
        };
        let fields = parse_fields(line);
        let food_group = FoodGroup {
            food_group_category: fields[0].parse().unwrap_or(0), //FdGrp_Cd [0]
            food_group_description: fields[1].clone() //FdGrp_Desc [1] 
        };
        v.push(food_group);
    }
    v
}

fn create_food_group_table(conn: &Connection) {
    conn.execute("
    CREATE TABLE food_group (
      food_group_category INTEGER PRIMARY KEY,
      food_group_description TEXT,
      FOREIGN KEY(food_group_category)
        REFERENCES food_description(food_group_category)
    );
    ").unwrap();
}

fn insert_food_groups(conn: &Connection, food_groups: &Vec<FoodGroup>) {
    let mut statement = conn.prepare("
        INSERT INTO food_group (
          food_group_category,
          food_group_description
        ) VALUES (
          ?, ?
        );").unwrap();

    conn.execute("BEGIN TRANSACTION").unwrap();
    for group in food_groups {
        statement.bind(1, group.food_group_category as i64).unwrap();
        statement.bind(2, &Value::String(group.food_group_description.to_owned())).unwrap();
        
        while let State::Row = statement.next().unwrap() {}
        statement.reset().unwrap();
    }
    conn.execute("END TRANSACTION").unwrap();
}

fn read_nutrient_data(file_path: String) -> Vec<NutrientData> {
    let mut v: Vec<NutrientData> = Vec::new();
    for line in get_lines_from_file(file_path) {
        let line = match line {
            Ok(val) => val,
            Err(_) => continue,
        };
        let fields = parse_fields(line);
        let nutrient_data = NutrientData {
            food_databank_number: fields[0].parse().unwrap_or(0), 
            nutrient_identifier: fields[1].parse().unwrap_or(0),
            nutrient_value: fields[2].parse().unwrap_or(1.0),
        };
        v.push(nutrient_data);
    }
    v
}

fn create_nutrient_data_table(conn: &Connection) {
    conn.execute("
    CREATE TABLE nutrient_data (
      food_databank_number INTEGER,
      nutrient_identifier INTEGER,
      nutrient_value REAL,
      FOREIGN KEY(food_databank_number)
        REFERENCES food_description(food_databank_number),
      UNIQUE(food_databank_number, nutrient_identifier)
    );
    ").unwrap();
}

fn insert_nutrient_data(conn: &Connection, nutrient_data: &Vec<NutrientData>) {
    let mut statement = conn.prepare("
        INSERT INTO nutrient_data (
          food_databank_number,
          nutrient_identifier,
          nutrient_value
        ) VALUES (
          ?, ?, ?
        );").unwrap();

    conn.execute("BEGIN TRANSACTION").unwrap();
    for data in nutrient_data {
        statement.bind(1, data.food_databank_number as i64).unwrap();
        statement.bind(2, data.nutrient_identifier as i64).unwrap();
        statement.bind(3, data.nutrient_value as f64).unwrap();
     
        while let State::Row = statement.next().unwrap() {}
        statement.reset().unwrap();   
    }
    conn.execute("END TRANSACTION").unwrap();
}

fn read_nutrient_definitions(file_path: String) -> Vec<NutrientDefinition> {
    let mut v: Vec<NutrientDefinition> = Vec::new();
    for line in get_lines_from_file(file_path) {
        let line = match line {
            Ok(val) => val,
            Err(_) => continue,
        };
        let fields = parse_fields(line);
        let nutrient_definition = NutrientDefinition {
            nutrient_identifier: fields[0].parse().unwrap_or(0), 
            units: fields[1].clone(),
            tagname: fields[2].clone(),
            description: fields[3].clone(),
        };
        v.push(nutrient_definition);
    }
    v
}

fn create_nutrient_definition_table(conn: &Connection) {
    conn.execute("
    CREATE TABLE nutrient_definition (
      nutrient_identifier INTEGER PRIMARY KEY,
      units TEXT,
      tagname TEXT,
      description TEXT,
      FOREIGN KEY(nutrient_identifier)
        REFERENCES nutrient_data(nutrient_identifier)
    );
    ").unwrap();
}

fn insert_nutrient_definitions(conn: &Connection, nutrient_definitions: &Vec<NutrientDefinition>) {
    let mut statement = conn.prepare("
        INSERT INTO nutrient_definition (
          nutrient_identifier,
          units,
          tagname,
          description
        ) VALUES (
          ?, ?, ?, ?
        );").unwrap();

    conn.execute("BEGIN TRANSACTION").unwrap();
    for data in nutrient_definitions {
        statement.bind(1, data.nutrient_identifier as i64).unwrap();
        statement.bind(2, &Value::String(data.units.to_owned())).unwrap();
        statement.bind(3, &Value::String(data.tagname.to_owned())).unwrap();
        statement.bind(4, &Value::String(data.description.to_owned())).unwrap();
     
        while let State::Row = statement.next().unwrap() {}
        statement.reset().unwrap();   
    }
    conn.execute("END TRANSACTION").unwrap();
}

fn read_weights(file_path: String) -> Vec<WeightValue> {
    let mut v: Vec<WeightValue> = Vec::new();
    for line in get_lines_from_file(file_path) {
        let line = match line {
            Ok(val) => val,
            Err(_) => continue,
        };
        let fields = parse_fields(line);
        let weight = WeightValue {
            food_databank_number: fields[0].parse().unwrap_or(0), 
            sequence_number: fields[1].parse().unwrap_or(0),
            amount: fields[2].parse().unwrap_or(0),
            measurement_description: fields[3].clone(),
            gram_weight: fields[4].parse().unwrap_or(1.00),
        };
        v.push(weight);
    }
    v
}

fn create_weight_table(conn: &Connection) {
    conn.execute("
    CREATE TABLE weight (
      food_databank_number INTEGER,
      sequence_number INTEGER,
      amount INTEGER,
      measurement_description TEXT,
      gram_weight REAL,
      FOREIGN KEY(food_databank_number)
        REFERENCES food_description(food_databank_number),
      UNIQUE(food_databank_number, sequence_number)
    );
    ").unwrap();
}

fn insert_weights(conn: &Connection, weights: &Vec<WeightValue>) {
    let mut statement = conn.prepare("
        INSERT INTO weight (
          food_databank_number,
          sequence_number,
          amount,
          measurement_description,
          gram_weight
        ) VALUES (
          ?, ?, ?, ?, ?
        );").unwrap();

    conn.execute("BEGIN TRANSACTION").unwrap();
    for data in weights {
        statement.bind(1, data.food_databank_number as i64).unwrap();
        statement.bind(2, data.sequence_number as i64).unwrap();
        statement.bind(3, data.amount as i64).unwrap();
        statement.bind(4, &Value::String(data.measurement_description.to_owned())).unwrap();
        statement.bind(5, data.gram_weight as f64).unwrap();
     
        while let State::Row = statement.next().unwrap() {}
        statement.reset().unwrap();   
    }
    conn.execute("END TRANSACTION").unwrap();
}

fn read_food_summaries(conn: &Connection) -> Vec<FoodSummary> {
    let mut v: Vec<FoodSummary> = Vec::new();

    let mut statement = conn.prepare("
    SELECT * FROM food_summary_view
    ").unwrap();

    while let State::Row = statement.next().unwrap() {
        let food_summary = FoodSummary {
            id: statement.read::<i64>(0).unwrap() as i32,
            name: statement.read::<String>(1).unwrap(),
            category: statement.read::<String>(2).unwrap(),
            carbs: statement.read::<f64>(3).unwrap() as f32,
            protein: statement.read::<f64>(4).unwrap() as f32,
            fat: statement.read::<f64>(5).unwrap() as f32,
            fibre: statement.read::<f64>(6).unwrap() as f32,
            energy: statement.read::<f64>(7).unwrap() as f32,
        };
        v.push(food_summary);
    }
    v
}

fn create_food_summary_table(conn: &Connection) {
    conn.execute("
    CREATE TABLE food_summary (
      id INTEGER PRIMARY KEY,
      name TEXT,
      category TEXT,
      carbs REAL,
      protein REAL,
      fat REAL,
      fibre REAL,
      energy REAL
    );
    ").unwrap();
}

fn insert_food_summaries(conn: &Connection, food_summaries: &Vec<FoodSummary>) {
    let mut statement = conn.prepare("
        INSERT INTO food_summary (
          id,
          name,
          category,
          carbs,
          protein,
          fat,
          fibre,
          energy
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?
        );").unwrap();

    conn.execute("BEGIN TRANSACTION").unwrap();
    for data in food_summaries {
        statement.bind(1, data.id as i64).unwrap();
        statement.bind(2, &Value::String(data.name.to_owned())).unwrap();
        statement.bind(3, &Value::String(data.category.to_owned())).unwrap();
        statement.bind(4, data.carbs as f64).unwrap();
        statement.bind(5, data.protein as f64).unwrap();
        statement.bind(6, data.fat as f64).unwrap();
        statement.bind(7, data.fibre as f64).unwrap();
        statement.bind(8, data.energy as f64).unwrap();
     
        while let State::Row = statement.next().unwrap() {}
        statement.reset().unwrap();
    }
    conn.execute("END TRANSACTION").unwrap();
}

fn process_food_descriptions(conn: &Connection, full_path: String) {
    println!("Reading Food Descriptions from {}...", full_path);
    let food_descriptions = read_food_descriptions(full_path);

    // Create the food_description table
    if !has_table(&conn, "food_description") {
        println!("Creating Food Description table...");
        create_food_description_table(&conn);
    }
    println!("Populating Food Descriptions...");
    insert_food_descriptions(&conn, &food_descriptions);
}

fn process_food_groups(conn: &Connection, full_path: String) {
    println!("Reading Food Groups from {}...", full_path);

    let food_groups = read_food_groups(full_path);
    
    // Create food_group table
    if !has_table(&conn, "food_group") {
        println!("Creating Food Group table...");
        create_food_group_table(&conn);
    }
    println!("Populating Food Groups...");
    insert_food_groups(&conn, &food_groups);
}

fn process_nutrient_data(conn: &Connection, full_path: String) {
    println!("Reading Nutrient Data from {}...", full_path);
    
    let nutrient_data = read_nutrient_data(full_path);

    // Create nutrient_data table
    if !has_table(&conn, "nutrient_data") {
        println!("Creating Nutrient Data table...");
        create_nutrient_data_table(&conn);
    }
    println!("Populating Nutrient Data...");
    insert_nutrient_data(&conn, &nutrient_data);
}

fn process_nutrient_definitions(conn: &Connection, full_path: String) {
    println!("Reading Nutrient Definitions from {}...", full_path);
    
    let nutrient_definitions = read_nutrient_definitions(full_path);

    // Create nutrient_definition table
    if !has_table(&conn, "nutrient_definition") {
        println!("Creating Nutrient Defintion table...");
        create_nutrient_definition_table(&conn);
    }
    println!("Populating Nutrient Definitions...");
    insert_nutrient_definitions(&conn, &nutrient_definitions);
}

fn process_weights(conn: &Connection, full_path: String) {
    println!("Reading Weights from {}...", full_path);
    
    let weights = read_weights(full_path);

    // Create weight table
    if !has_table(&conn, "weight") {
        println!("Creating Weight table...");
        create_weight_table(&conn);
    }
    println!("Populating Weights...");
    insert_weights(&conn, &weights);
}

fn process_food_summary(conn: &Connection) {
    println!("Reading Food Summary View into table...");

    let food_summaries = read_food_summaries(&conn);

    // Create food_summary table
    if !has_table(&conn, "food_summary") {
        println!("Creating food_summary table...");
        create_food_summary_table(&conn);
    }
    println!("Populating Food Summaries...");
    insert_food_summaries(&conn, &food_summaries);
}

fn generate_food_summary_view(conn: &Connection) {
    println!("Generating food_summary_view View...");
    let query = "
CREATE VIEW IF NOT EXISTS food_summary_view AS
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
),
nutrient_energy AS (
	SELECT NData.food_databank_number, NData.nutrient_value
	FROM nutrient_data as NData
	INNER JOIN nutrient_definition as NDef ON NData.nutrient_identifier = NDef.nutrient_identifier
	WHERE NDef.tagname = 'ENERC_KJ'
)
SELECT FD.food_databank_number AS id,
FD.long_description AS name,
FG.food_group_description AS category,
carb.nutrient_value AS carbs,
protein.nutrient_value AS protein,
fat.nutrient_value AS fat,
fibre.nutrient_value AS fibre,
energy.nutrient_value AS energy
FROM food_description AS FD
INNER JOIN food_group AS FG ON FG.food_group_category = FD.food_group_category
INNER JOIN nutrient_carb AS carb ON carb.food_databank_number = FD.food_databank_number
INNER JOIN nutrient_protein AS protein ON protein.food_databank_number = FD.food_databank_number
INNER JOIN nutrient_fat AS fat ON fat.food_databank_number = FD.food_databank_number
INNER JOIN nutrient_fibre AS fibre ON fibre.food_databank_number = FD.food_databank_number
INNER JOIN nutrient_energy AS energy ON energy.food_databank_number = FD.food_databank_number
";
    conn.execute(query).unwrap();
}



fn compress_nutrient_table(conn: &Connection) {
    println!("Compressing Nutrient Data Table...");
    let query = "
WITH rejected_ids AS (
	SELECT DISTINCT NData.nutrient_identifier AS id
	FROM nutrient_data AS NData
	INNER JOIN nutrient_definition AS NDef
	  ON NData.nutrient_identifier = NDef.nutrient_identifier
	WHERE NDef.tagname NOT IN ('CHOCDF', 'PROCNT', 'FAT', 'FIBTG', 'ENERC_KJ')
)
DELETE FROM nutrient_data WHERE nutrient_identifier IN (SELECT id FROM rejected_ids);";
    conn.execute(query).unwrap();
}

fn vacuum_database(conn: &Connection) {
    println!("Vacuuming...");
    conn.execute("VACUUM").unwrap();
}

fn compress_database(conn: &Connection) {
    println!("Compressing Database...");
    conn.execute("DROP VIEW food_summary_view").unwrap();
    conn.execute("DROP TABLE nutrient_definition").unwrap();
    conn.execute("DROP TABLE nutrient_data").unwrap();
    conn.execute("DROP TABLE food_group").unwrap();
    conn.execute("DROP TABLE food_description").unwrap();
}

fn main() {
    let default_folder_path = String::from("../unparsed_food_data");
    let default_db_path = String::from("../foodsr28.sqlite");

    let arguments: Vec<String> = env::args().collect();
    let folder_path: String = match arguments.len() {
        1 => {
            println!("No folder path provided, using default path: {}", default_folder_path);
            default_folder_path
        }
        2 => arguments[1].clone(),
        3 => arguments[1].clone(),
        _ => panic!("ketornah-parser [input folder] [output database]"),
    };

    let db_path: String = match arguments.len() {
        1 => default_db_path,
        2 => default_db_path,
        3 => arguments[2].clone(),
        _ => panic!("Too many arguments"),
    };

    let conn = get_database_connection(db_path);

    let full_path = folder_path.clone() + "/FOOD_DES.txt";
    process_food_descriptions(&conn, full_path);

    let full_path = folder_path.clone() + "/FD_GROUP.txt";
    process_food_groups(&conn, full_path);

    let full_path = folder_path.clone() + "/NUT_DATA.txt";
    process_nutrient_data(&conn, full_path);

    let full_path = folder_path.clone() + "/NUTR_DEF.txt";
    process_nutrient_definitions(&conn, full_path);

    let full_path = folder_path.clone() + "/WEIGHT.txt";
    process_weights(&conn, full_path);

    compress_nutrient_table(&conn);
    generate_food_summary_view(&conn);
    process_food_summary(&conn);
    compress_database(&conn);
    vacuum_database(&conn);

    println!("Finished!");
}
