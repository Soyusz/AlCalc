use rocket::{get,post,put};
use rocket_contrib::json::Json;
use crate::model::entry::Entry;
use crate::api::DBPool; 
use crate::services::entry::get_all_entries;
use crate::db::entry::NewEntry;
use crate::services::entry::insert_entry;
use crate::services::entry::verify_entry;
use crate::services::entry::get_verified_entries;

#[get("/")]
pub fn get_all(
    conn: DBPool
) -> Json<Vec<Entry>> {
    Json(get_all_entries(conn))
}

#[post("/", format="application/json", data="<new_entry>")]
pub fn post_new(
    conn: DBPool,
    new_entry: Json<NewEntry>
) -> Result<Json<Entry>,Json<bool>> {
    let entry = new_entry.into_inner();
    let res = insert_entry(entry,conn);
    match res {
        Ok(s) => Ok(Json(s)),
        Err(e) => Err(Json(e))
    }
}

#[put("/<id>")]
pub fn verify(
    id: i32,
    conn: DBPool
) -> Result<Json<Entry>,Json<bool>> {
    let res = verify_entry(id,conn);
    match res {
        Ok(r) => Ok(Json(r)),
        Err(e) => Err(Json(e))
    }
}

#[get("/verified")]
pub fn get_verified(
    conn: DBPool
) -> Json<Vec<Entry>> {
    Json(get_verified_entries(conn))
}