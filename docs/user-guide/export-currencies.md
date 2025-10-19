---
title: Export & Currencies
sidebar_position: 7
description: "How export currencies"
---

# 💾 Database Export Command – LiteEco

LiteEco includes a robust database export and migration system, allowing administrators to easily back up, migrate, or convert economy data between storage formats.

---

## 🧩 Command Overview

```bash
/eco database export <argument> [currency]
```

### ➤ Description
This command exports player balance data for a specified currency into different file formats or directly migrates them between databases.

The exported files are saved in the `/migration/` directory, with filenames that include the currency name and a timestamp for easy tracking.

---

## ⚙️ Arguments

| Argument | Description |
|-----------|--------------|
| `SQL` | Exports all data for the selected currency into an `.sql` file. Useful for importing into MySQL or MariaDB databases. |
| `CSV` | Exports all data into a `.csv` file readable by spreadsheet tools like Excel or Google Sheets. Ideal for manual review and backup. |
| `LEGACY_TABLE` | Migrates data directly into a connected MySQL or MariaDB database. No file is created; this is a **direct import** for legacy systems. |
| `SQL_LITE_FILE` | Exports all data into a `.db` file compatible with SQLite. Useful for converting from MySQL/MariaDB to SQLite. |

---

## 🗂️ Output Files & Structure

All exports are saved inside the `/migration/` folder with the following naming pattern:

```
${fileName}_${currency}_${timestamp}
```

### ➤ File Naming Details

| Export Type | File Example | Notes |
|--------------|--------------|-------|
| `CSV` | `economy_migration_dollars_20251012_153000.csv` | Exported as comma-separated values. |
| `SQL` | `economy_migration_dollars_20251012_153000.sql` | Contains SQL statements for database import. |
| `LEGACY_TABLE` | *No file generated* | Data is imported directly into your connected MySQL/MariaDB instance. |
| `SQL_LITE_FILE` | `economy_migration_sql_lite_dollars_20251012_153000.sql` | SQL file special for standalone SQLite file named `database.db`. |

---

## 💡 Usage Examples

Export current balances of the `dollars` currency to a CSV file:
```bash
/eco database export CSV dollars
```

Export the same data as an SQL file:
```bash
/eco database export SQL dollars
```

Migrate legacy data directly into your MySQL/MariaDB database:
```bash
/eco database export LEGACY_TABLE dollars
```

Export all balances to a SQLite `.db` file:
```bash
/eco database export SQL_LITE_FILE dollars
```

---

## 🧠 Notes & Recommendations

- The `/migration/` folder is created automatically if it doesn’t exist.
- Timestamps follow the format `yyyyMMdd_HHmmss` (e.g., `20251012_153000`).
- Ensure your server has permission to write to the `/migration/` folder.
- `LEGACY_TABLE` mode is only available for MySQL or MariaDB connections.
- `SQL_LITE_FILE` is perfect for migrating data from MySQL/MariaDB to a lightweight SQLite database (e.g., `database.db`).
- For large databases, exports may take several seconds depending on server performance.

---

## ✅ Quick Summary

| Export Type | Output | Best Use Case |
|--------------|---------|---------------|
| **CSV** | `.csv` file | Manual inspection or simple backups |
| **SQL** | `.sql` file | Reimport into MySQL/MariaDB |
| **LEGACY_TABLE** | Direct import | Legacy MySQL/MariaDB migration |
| **SQL_LITE_FILE** | `.sql` file | Conversion to SQLite |

---

This command provides flexibility and safety for administrators handling economy data across multiple platforms or server environments.

