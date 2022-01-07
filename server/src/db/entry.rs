use diesel::{self, PgConnection};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};
use crate::schema::entries;
use crate::schema::entries::dsl::entries as all_entries;
use crate::schema::entries::id as entry_id;
use crate::model::entry::Entry;

#[derive(Insertable,Clone,Deserialize,Serialize)]
#[table_name="entries"]
pub struct NewEntry {
    name: String,
    price: f64,
    voltage: f64,
    volume: f64,
    photo: String,
}

pub fn get_by_id(
    id: i32,
    conn: &PgConnection
) -> Option<Entry> {
    let entry_vec= 
        all_entries
            .find(id)
            .load::<Entry>(conn)
            .unwrap_or_else(|_| -> Vec<Entry> {vec![]});
    
    if entry_vec.len() == 0 {
        None
    } else {
        Some(entry_vec[0].clone())
    }
}

pub fn get_all(
    conn: &PgConnection
) -> Vec<Entry> {
    all_entries
        .load::<Entry>(conn)
        .unwrap_or_else(|_| -> Vec<Entry> {vec![]})
}

pub fn verify(
    id: i32,
    conn: &PgConnection
) -> Option<Entry> {
    use crate::schema::entries::verified;
    let mutation_res = diesel::update(all_entries.find(id))
        .set(verified.eq(true))
        .get_result::<Entry>(conn);
    match mutation_res {
        Ok(s) => Some(s),
        Err(_) => None
    }
}

pub fn add_new(
    entry: NewEntry,
    conn: &PgConnection
) -> Option<Entry> {
    let query_res: Result<Vec<i32>,_> = 
        diesel::insert_into(entries::table)
            .values(&entry)
            .returning(entry_id)
            .get_results(conn);

    match query_res {
        Ok(v) => {
            let new_entry= get_by_id(v[0],conn).clone();
            match new_entry {
                Some(s) => Some(s),
                None => None
            }
        },
        Err(_) => None 
    }
}

pub fn get_verified(
    conn: &PgConnection
) -> Vec<Entry> {
    all_entries
        .filter(entries::verified.eq_all(true))
        .load::<Entry>(conn)
        .unwrap_or_else(|_| -> Vec<Entry> {vec![]})
}

