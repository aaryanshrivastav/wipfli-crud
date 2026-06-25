# Databricks notebook source
# /// script
# [tool.databricks.environment]
# environment_version = "5"
# ///
# DBTITLE 1,Database Setup Runner
# MAGIC %md
# MAGIC # Database Setup Runner
# MAGIC
# MAGIC This notebook runs all SQL files in the following order:
# MAGIC 1. **DDL** (Data Definition Language) - Creates tables
# MAGIC 2. **Seed** - Populates tables with initial data
# MAGIC 3. **Queries** - Runs validation and analytical queries
# MAGIC
# MAGIC Catalog: `crud`
# MAGIC Schema: `crud`

# COMMAND ----------

# DBTITLE 1,Create Catalog and Schema
# MAGIC %sql
# MAGIC -- Create catalog and schema if they don't exist
# MAGIC CREATE CATALOG IF NOT EXISTS crud;
# MAGIC CREATE SCHEMA IF NOT EXISTS crud.crud;

# COMMAND ----------

# DBTITLE 1,Set Catalog and Schema
# MAGIC %sql
# MAGIC -- Set catalog and schema
# MAGIC USE CATALOG crud;
# MAGIC USE SCHEMA crud;

# COMMAND ----------

# DBTITLE 1,DDL - Create Tables
# MAGIC %md
# MAGIC ## DDL - Create Tables
# MAGIC Creating database schema and tables

# COMMAND ----------

# DBTITLE 1,DDL: app_users
with open('./ddl/app_users.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,DDL: products
with open('./ddl/products.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,DDL: orders
with open('./ddl/orders.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,DDL: order_items
with open('./ddl/order_items.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

with open('./ddl/refresh_tokens.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,Seed - Populate Data
# MAGIC %md
# MAGIC ## Seed - Populate Tables
# MAGIC Inserting initial data into tables

# COMMAND ----------

# DBTITLE 1,Seed: app_users
with open('./seed/app_users_seed.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,Seed: products
with open('./seed/products_seed.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,Seed: orders
with open('./seed/orders_seed.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,Seed: order_items
with open('./seed/order_items_seed.sql', 'r') as f:
    sql_content = f.read()
spark.sql(sql_content)

# COMMAND ----------

# DBTITLE 1,Queries - Validation & Analytics
# MAGIC %md
# MAGIC ## Queries - Validation & Analytics
# MAGIC Running validation checks and analytical queries

# COMMAND ----------

# DBTITLE 1,Query: validation
with open('./queries/validation.sql', 'r') as f:
    sql_content = f.read()

# Split by semicolon or double newline to separate statements
import re
statements = [stmt.strip() for stmt in re.split(r';|\n\s*\n', sql_content) if stmt.strip() and not stmt.strip().startswith('--')]

# Execute each statement
for stmt in statements:
    if stmt:
        result = spark.sql(stmt)
        display(result)

# COMMAND ----------

# DBTITLE 1,Query: joins
with open('./queries/joins.sql', 'r') as f:
    sql_content = f.read()

# Split by semicolon or double newline to separate statements
import re
statements = [stmt.strip() for stmt in re.split(r';|\n\s*\n', sql_content) if stmt.strip() and not stmt.strip().startswith('--')]

# Execute each statement
for stmt in statements:
    if stmt:
        result = spark.sql(stmt)
        display(result)

# COMMAND ----------

# DBTITLE 1,Query: analytics
with open('./queries/analytics.sql', 'r') as f:
    sql_content = f.read()

# Split by semicolon or double newline to separate statements
import re
statements = [stmt.strip() for stmt in re.split(r';|\n\s*\n', sql_content) if stmt.strip() and not stmt.strip().startswith('--')]

# Execute each statement
for stmt in statements:
    if stmt:
        result = spark.sql(stmt)
        display(result)

# COMMAND ----------

# DBTITLE 1,Query: inventory
with open('./queries/inventory.sql', 'r') as f:
    sql_content = f.read()

# Split by semicolon or double newline to separate statements
import re
statements = [stmt.strip() for stmt in re.split(r';|\n\s*\n', sql_content) if stmt.strip() and not stmt.strip().startswith('--')]

# Execute each statement
for stmt in statements:
    if stmt:
        result = spark.sql(stmt)
        display(result)
