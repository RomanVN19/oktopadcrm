sqlite3 oktopad.db .schema > schema.sql
sqlite3 oktopad.db .dump > dump.sql
grep -vx -f schema.sql dump.sql > data.sql

