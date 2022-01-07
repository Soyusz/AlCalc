use crate::api::DBPool;
use crate::model::entry::Entry;
use crate::db::entry::get_all;
use crate::db::entry::NewEntry;
use crate::db::entry::add_new;
use crate::db::entry::verify;
use crate::db::entry::get_verified;

pub fn get_all_entries(
    conn: DBPool
) -> Vec<Entry> {
    get_all(&conn)
}

pub fn insert_entry(
    entry: NewEntry,
    conn: DBPool
) -> Result<Entry,bool> {
    let res = add_new(entry,&conn);
    match res {
        Some(e) => Ok(e),
        None => Err(true)
    }
}

pub fn verify_entry(
    id: i32,
    conn: DBPool
) -> Result<Entry,bool> {
    let res = verify(id,&conn);
    match res {
        Some(s) => Ok(s),
        None => Err(true)
    }
}

pub fn get_verified_entries(
    conn: DBPool
) -> Vec<Entry> {
    get_verified(&conn)
}