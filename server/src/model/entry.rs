use serde::{Deserialize, Serialize};
use diesel::{self, Queryable};

#[derive(Clone,Deserialize,Serialize,Queryable)]
pub struct Entry {
    pub id: i32,
    pub name: String,
    pub price: f64,
    pub voltage: f64,
    pub volume: f64,
    pub verified: bool,
    pub photo: String
}
