相关功能处理
1. 解决mysql时区错误
mysql> show variables like '%time_zone%';
+------------------+--------+
| Variable_name    | Value  |
+------------------+--------+
| system_time_zone |        |
| time_zone        | SYSTEM |
+------------------+--------+
2 rows in set

mysql> set global time_zone='+8:00';
Query OK, 0 rows affected
