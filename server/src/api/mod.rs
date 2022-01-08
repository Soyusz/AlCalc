use rocket::{routes, Rocket};
use dotenv::dotenv;
use rocket_contrib::databases::diesel;
use std::collections::HashMap;
use rocket::config::{Config, Environment, Value};
pub mod entry;

#[database("alcalc-db")]
pub struct DBPool(diesel::PgConnection);

pub fn init_routes() -> Rocket {
    dotenv().ok();
    let mut database_config = HashMap::new();
    let mut databases = HashMap::new();

    database_config.insert("url",std::env::var("DATABASE_URL").unwrap());
    databases.insert("alcalc-db",Value::from(database_config));
    let port_number: u16 = std::env::var("ROCKET_PORT").unwrap().parse::<u16>().unwrap();
    let config = Config::build(Environment::Staging)
        .port(port_number)
        .extra("databases", databases)
        .finalize()
        .unwrap();

    let entry_routes = routes![
        entry::get_all,
        entry::post_new,
        entry::verify,
        entry::get_verified
    ];

    rocket::custom(config)
        .attach(DBPool::fairing())
        .mount("/entry", entry_routes)
}
