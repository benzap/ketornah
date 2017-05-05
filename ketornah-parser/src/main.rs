#![allow(dead_code)]

use std::env;
use std::fs::File;
use std::io::prelude::*;

// Represents pg.30 within SR28 Documentation
// FOOD_DES.txt
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
struct FoodGroup {
    food_group_category: i32, //FdGrp_Cd [0]
    food_group_description: String //FdGrp_Desc [1]
}

// Represents pg.31 within SR28 Documentation
// LANGUAL.txt
struct LanguaLFactor {
    food_databank_number: i32, //NDB_No [0]
    factor_code: String, //Factor_Code [1]
}

// Represents pg.32 within SR28 Documentation
// LANGDESC.txt
struct LanguaLDescription {
    factor_code: String, //Factor_Code [0]
    description: String, //Description [1]
}

// Represents pg.33 within SR28 Documentation
// NUT_DATA.txt
struct NutrientData {
    food_databank_number: i32, //NDB_No [0]
    nutrient_identifier: i32, //Nutr_No [1]
    nutrient_value: f32, //Nutr_Val [2]
}

// Represents pg.34 within SR28 Documentation
// NUTR_DEF.txt
struct NutrientDescription {
    nutrient_identifier: i32, //Nutr_No [0]
    units: String, //Units [1]
    tagname: String, //Tagname [2]
    description: String, //NutrDesc [3]
}

// Represents pg.36 within SR28 Documentation
// WEIGHT.txt
struct WeightValue {
    food_databank_number: i32, //NDB_No [0]
    sequence_number: i32, //Seq [1]
    amount: i32, //Amount [2]
    measurement_description: String, //Msre_Desc [3]
    gram_weight: f32, //Gm_Wgt [4]
}

fn read_food_descriptions(file_path: String) -> Vec<FoodDescription> {
    let v: Vec<FoodDescription> = Vec::new();
    v
}

fn main() {
    let default_folder_path = String::from("../unparsed_food_data");

    let arguments: Vec<String> = env::args().collect();
    match arguments.len() {
        1 => println!("No folder path provided, using default path: {}", default_folder_path),
        2 => println!("One Argument: {}", arguments[1]),
        _ => println!("ketornah-parser <folder path>"),
    }
}
