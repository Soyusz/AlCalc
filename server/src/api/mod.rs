use rocket::{routes, Rocket};
use dotenv::dotenv;
use rocket_contrib::databases::diesel;
pub mod entry;

#[database("alcalc")]
pub struct DBPool(diesel::PgConnection);

pub fn init_routes() -> Rocket {
    dotenv().ok();

    let entry_routes = routes![
        entry::get_all,
        entry::post_new,
        entry::verify,
        entry::get_verified
    ];

    rocket::ignite()
        .attach(DBPool::fairing())
        .mount("/entry", entry_routes)
}
