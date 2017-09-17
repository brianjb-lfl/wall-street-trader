DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS params;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
	id serial NOT NULL PRIMARY KEY,
	user_name text NOT NULL UNIQUE
);

CREATE TABLE transactions (
	id serial NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users ON DELETE CASCADE,
	trans_dt TIMESTAMPTZ NOT NULL DEFAULT(NOW()),
	trans_desc VARCHAR(48),
	trans_symbol VARCHAR(16),
	trans_shares NUMERIC(15,3),
	trans_amd NUMERIC(20,2)
);

CREATE TABLE quotes (
	id serial NOT NULL PRIMARY KEY,
	symbol VARCHAR(16),
	open_price NUMERIC(12,3),
	high_price NUMERIC(12,3),
	low_price NUMERIC(12,3),
	curr_price NUMERIC(12,3),
	last_update TIMESTAMPTZ NOT NULL DEFAULT(NOW())
);

CREATE TABLE params (
	param_key TEXT NOT NULL UNIQUE,
	param_val TEXT,
	param_note TEXT
);

INSERT INTO users (user_name)
	VALUES ('testUser');
	
INSERT INTO params (param_key, param_val, param_note)
	VALUES ('appState', 'front', 'front, main, quote or portfolio'),
	('update_freq', '60', 'minutes, how often to refresh quotes'),
	('start_bal', '10000', 'new user starting cash balance');