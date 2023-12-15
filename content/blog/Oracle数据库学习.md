---


title: Oracle数据库学习
author: kif
tags:
  - SQL
  - Oracle
categories:
  - 学习笔记
abbrlink: 78e
date: 2020-11-27 08:36:00
---
# SQL基础

## 主键

------

在关系数据库中，一张表中的每一行数据被称为一条记录。一条记录就是由多个字段组成的。例如，`students`表的两行记录：

| id   | class_id | name | gender | score |
| :--- | :------- | :--- | :----- | :---- |
| 1    | 1        | 小明 | M      | 90    |
| 2    | 1        | 小红 | F      | 95    |

每一条记录都包含若干定义好的字段。同一个表的所有记录都有相同的字段定义。

对于关系表，有个很重要的约束，就是任意两条记录不能重复。不能重复不是指两条记录不完全相同，而是指能够通过某个字段唯一区分出不同的记录，这个字段被称为*主键*。

例如，假设我们把`name`字段作为主键，那么通过名字`小明`或`小红`就能唯一确定一条记录。但是，这么设定，就没法存储同名的同学了，因为插入相同主键的两条记录是不被允许的。

对主键的要求，最关键的一点是：记录一旦插入到表中，主键最好不要再修改，因为主键是用来唯一定位记录的，修改了主键，会造成一系列的影响。

由于主键的作用十分重要，如何选取主键会对业务开发产生重要影响。如果我们以学生的身份证号作为主键，似乎能唯一定位记录。然而，身份证号也是一种业务场景，如果身份证号升位了，或者需要变更，作为主键，不得不修改的时候，就会对业务产生严重影响。

所以，选取主键的一个基本原则是：不使用任何业务相关的字段作为主键。

因此，身份证号、手机号、邮箱地址这些看上去可以唯一的字段，均*不可*用作主键。

作为主键最好是完全业务无关的字段，我们一般把这个字段命名为`id`。常见的可作为`id`字段的类型有：

1. 自增整数类型：数据库会在插入数据时自动为每一条记录分配一个自增整数，这样我们就完全不用担心主键重复，也不用自己预先生成主键；
2. 全局唯一GUID类型：使用一种全局唯一的字符串作为主键，类似`8f55d96b-8acc-4636-8cb8-76bf8abc2f57`。GUID算法通过网卡MAC地址、时间戳和随机数保证任意计算机在任意时间生成的字符串都是不同的，大部分编程语言都内置了GUID算法，可以自己预算出主键。

对于大部分应用来说，通常自增类型的主键就能满足需求。我们在`students`表中定义的主键也是`BIGINT NOT NULL AUTO_INCREMENT`类型。

 如果使用INT自增类型，那么当一张表的记录数超过2147483647（约21亿）时，会达到上限而出错。使用BIGINT自增类型则可以最多约922亿亿条记录。

### 联合主键

关系数据库实际上还允许通过多个字段唯一标识记录，即两个或更多的字段都设置为主键，这种主键被称为联合主键。

对于联合主键，允许一列有重复，只要不是所有主键列都重复即可：

| id_num | id_type | other columns... |
| :----- | :------ | :--------------- |
| 1      | A       | ...              |
| 2      | A       | ...              |
| 2      | B       | ...              |

如果我们把上述表的`id_num`和`id_type`这两列作为联合主键，那么上面的3条记录都是允许的，因为没有两列主键组合起来是相同的。

没有必要的情况下，我们尽量不使用联合主键，因为它给关系表带来了复杂度的上升。

### 小结

主键是关系表中记录的唯一标识。主键的选取非常重要：主键不要带有业务含义，而应该使用BIGINT自增或者GUID类型。主键也不应该允许`NULL`。

可以使用多个列作为联合主键，但联合主键并不常用。



## 外键

------

当我们用主键唯一标识记录时，我们就可以在`students`表中确定任意一个学生的记录：

| id   | name | other columns... |
| :--- | :--- | :--------------- |
| 1    | 小明 | ...              |
| 2    | 小红 | ...              |

我们还可以在`classes`表中确定任意一个班级记录：

| id   | name | other columns... |
| :--- | :--- | :--------------- |
| 1    | 一班 | ...              |
| 2    | 二班 | ...              |

但是我们如何确定`students`表的一条记录，例如，`id=1`的小明，属于哪个班级呢？

由于一个班级可以有多个学生，在关系模型中，这两个表的关系可以称为“一对多”，即一个`classes`的记录可以对应多个`students`表的记录。

为了表达这种一对多的关系，我们需要在`students`表中加入一列`class_id`，让它的值与`classes`表的某条记录相对应：

| id   | class_id | name | other columns... |
| :--- | :------- | :--- | :--------------- |
| 1    | 1        | 小明 | ...              |
| 2    | 1        | 小红 | ...              |
| 5    | 2        | 小白 | ...              |

这样，我们就可以根据`class_id`这个列直接定位出一个`students`表的记录应该对应到`classes`的哪条记录。

例如：

- 小明的`class_id`是`1`，因此，对应的`classes`表的记录是`id=1`的一班；
- 小红的`class_id`是`1`，因此，对应的`classes`表的记录是`id=1`的一班；
- 小白的`class_id`是`2`，因此，对应的`classes`表的记录是`id=2`的二班。

在`students`表中，通过`class_id`的字段，可以把数据与另一张表关联起来，这种列称为`外键`。

外键并不是通过列名实现的，而是通过定义外键约束实现的：

```
ALTER TABLE students
ADD CONSTRAINT fk_class_id
FOREIGN KEY (class_id)
REFERENCES classes (id);
```

其中，外键约束的名称`fk_class_id`可以任意，`FOREIGN KEY (class_id)`指定了`class_id`作为外键，`REFERENCES classes (id)`指定了这个外键将关联到`classes`表的`id`列（即`classes`表的主键）。

通过定义外键约束，关系数据库可以保证无法插入无效的数据。即如果`classes`表不存在`id=99`的记录，`students`表就无法插入`class_id=99`的记录。

由于外键约束会降低数据库的性能，大部分互联网应用程序为了追求速度，并不设置外键约束，而是仅靠应用程序自身来保证逻辑的正确性。这种情况下，`class_id`仅仅是一个普通的列，只是它起到了外键的作用而已。

要删除一个外键约束，也是通过`ALTER TABLE`实现的：

```
ALTER TABLE students
DROP FOREIGN KEY fk_class_id;
```

注意：删除外键约束并没有删除外键这一列。删除列是通过`DROP COLUMN ...`实现的。

### 多对多

通过一个表的外键关联到另一个表，我们可以定义出一对多关系。有些时候，还需要定义“多对多”关系。例如，一个老师可以对应多个班级，一个班级也可以对应多个老师，因此，班级表和老师表存在多对多关系。

多对多关系实际上是通过两个一对多关系实现的，即通过一个中间表，关联两个一对多关系，就形成了多对多关系：

`teachers`表：

| id   | name   |
| :--- | :----- |
| 1    | 张老师 |
| 2    | 王老师 |
| 3    | 李老师 |
| 4    | 赵老师 |

`classes`表：

| id   | name |
| :--- | :--- |
| 1    | 一班 |
| 2    | 二班 |

中间表`teacher_class`关联两个一对多关系：

| id   | teacher_id | class_id |
| :--- | :--------- | :------- |
| 1    | 1          | 1        |
| 2    | 1          | 2        |
| 3    | 2          | 1        |
| 4    | 2          | 2        |
| 5    | 3          | 1        |
| 6    | 4          | 2        |

通过中间表`teacher_class`可知`teachers`到`classes`的关系：

- `id=1`的张老师对应`id=1,2`的一班和二班；
- `id=2`的王老师对应`id=1,2`的一班和二班；
- `id=3`的李老师对应`id=1`的一班；
- `id=4`的赵老师对应`id=2`的二班。

同理可知`classes`到`teachers`的关系：

- `id=1`的一班对应`id=1,2,3`的张老师、王老师和李老师；
- `id=2`的二班对应`id=1,2,4`的张老师、王老师和赵老师；

因此，通过中间表，我们就定义了一个“多对多”关系。

### 一对一

一对一关系是指，一个表的记录对应到另一个表的唯一一个记录。

例如，`students`表的每个学生可以有自己的联系方式，如果把联系方式存入另一个表`contacts`，我们就可以得到一个“一对一”关系：

| id   | student_id | mobile      |
| :--- | :--------- | :---------- |
| 1    | 1          | 135xxxx6300 |
| 2    | 2          | 138xxxx2209 |
| 3    | 5          | 139xxxx8086 |

有细心的童鞋会问，既然是一对一关系，那为啥不给`students`表增加一个`mobile`列，这样就能合二为一了？

如果业务允许，完全可以把两个表合为一个表。但是，有些时候，如果某个学生没有手机号，那么，`contacts`表就不存在对应的记录。实际上，一对一关系准确地说，是`contacts`表一对一对应`students`表。

还有一些应用会把一个大表拆成两个一对一的表，目的是把经常读取和不经常读取的字段分开，以获得更高的性能。例如，把一个大的用户表分拆为用户基本信息表`user_info`和用户详细信息表`user_profiles`，大部分时候，只需要查询`user_info`表，并不需要查询`user_profiles`表，这样就提高了查询速度。

### 小结

关系数据库通过外键可以实现一对多、多对多和一对一的关系。外键既可以通过数据库来约束，也可以不设置约束，仅依靠应用程序的逻辑来保证。





## 索引

------

在关系数据库中，如果有上万甚至上亿条记录，在查找记录的时候，想要获得非常快的速度，就需要使用索引。

索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过使用索引，可以让数据库系统不必扫描整个表，而是直接定位到符合条件的记录，这样就大大加快了查询速度。

例如，对于`students`表：

| id   | class_id | name | gender | score |
| :--- | :------- | :--- | :----- | :---- |
| 1    | 1        | 小明 | M      | 90    |
| 2    | 1        | 小红 | F      | 95    |
| 3    | 1        | 小军 | M      | 88    |

如果要经常根据`score`列进行查询，就可以对`score`列创建索引：

```
ALTER TABLE students
ADD INDEX idx_score (score);
```

使用`ADD INDEX idx_score (score)`就创建了一个名称为`idx_score`，使用列`score`的索引。索引名称是任意的，索引如果有多列，可以在括号里依次写上，例如：

```
ALTER TABLE students
ADD INDEX idx_name_score (name, score);
```

索引的效率取决于索引列的值是否散列，即该列的值如果越互不相同，那么索引效率越高。反过来，如果记录的列存在大量相同的值，例如`gender`列，大约一半的记录值是`M`，另一半是`F`，因此，对该列创建索引就没有意义。

可以对一张表创建多个索引。索引的优点是提高了查询效率，缺点是在插入、更新和删除记录时，需要同时修改索引，因此，索引越多，插入、更新和删除记录的速度就越慢。

对于主键，关系数据库会自动对其创建主键索引。使用主键索引的效率是最高的，因为主键会保证绝对唯一。

### 唯一索引

在设计关系数据表的时候，看上去唯一的列，例如身份证号、邮箱地址等，因为他们具有业务含义，因此不宜作为主键。

但是，这些列根据业务要求，又具有唯一性约束：即不能出现两条记录存储了同一个身份证号。这个时候，就可以给该列添加一个唯一索引。例如，我们假设`students`表的`name`不能重复：

```
ALTER TABLE students
ADD UNIQUE INDEX uni_name (name);
```

通过`UNIQUE`关键字我们就添加了一个唯一索引。

也可以只对某一列添加一个唯一约束而不创建唯一索引：

```
ALTER TABLE students
ADD CONSTRAINT uni_name UNIQUE (name);
```

这种情况下，`name`列没有索引，但仍然具有唯一性保证。

无论是否创建索引，对于用户和应用程序来说，使用关系数据库不会有任何区别。这里的意思是说，当我们在数据库中查询时，如果有相应的索引可用，数据库系统就会自动使用索引来提高查询效率，如果没有索引，查询也能正常执行，只是速度会变慢。因此，索引可以在使用数据库的过程中逐步优化。

### 小结

通过对数据库表创建索引，可以提高查询速度。

通过创建唯一索引，可以保证某一列的值具有唯一性。

数据库索引对于用户和应用程序来说都是透明的。



## 基本查询



------

要查询数据库表的数据，我们使用如下的SQL语句：

```
SELECT * FROM <表名>
```

假设表名是`students`，要查询`students`表的所有行，我们用如下SQL语句：

```
SELECT * FROM students;
```



![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201127093349.png)

使用`SELECT * FROM students`时，`SELECT`是关键字，表示将要执行一个查询，`*`表示“所有列”，`FROM`表示将要从哪个表查询，本例中是`students`表。

该SQL将查询出`students`表的所有数据。注意：查询结果也是一个二维表，它包含列名和每一行的数据。

要查询`classes`表的所有行，我们用如下SQL语句：

```
SELECT * FROM classes;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201127093411.png)

运行上述SQL语句，观察查询结果。

`SELECT`语句其实并不要求一定要有`FROM`子句。我们来试试下面的`SELECT`语句：

```
SELECT 100+200;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201127093436.png)

上述查询会直接计算出表达式的结果。虽然`SELECT`可以用作计算，但它并不是SQL的强项。但是，不带`FROM`子句的`SELECT`语句有一个有用的用途，就是用来判断当前到数据库的连接是否有效。许多检测工具会执行一条`SELECT 1;`来测试数据库连接。

### 小结

使用SELECT查询的基本语句`SELECT * FROM <表名>`可以查询一个表的所有行和所有列的数据。

SELECT查询的结果是一个二维表。



## 条件查询



------

使用`SELECT * FROM <表名>`可以查询到一张表的所有记录。但是，很多时候，我们并不希望获得所有记录，而是根据条件选择性地获取指定条件的记录，例如，查询分数在80分以上的学生记录。在一张表有数百万记录的情况下，获取所有记录不仅费时，还费内存和网络带宽。

SELECT语句可以通过`WHERE`条件来设定查询条件，查询结果是满足查询条件的记录。例如，要指定条件“分数在80分或以上的学生”，写成`WHERE`条件就是`SELECT * FROM students WHERE score >= 80`。

其中，`WHERE`关键字后面的`score >= 80`就是条件。`score`是列名，该列存储了学生的成绩，因此，`score >= 80`就筛选出了指定条件的记录：

```
SELECT * FROM students WHERE score >= 80;

```

因此，条件查询的语法就是：

```
SELECT * FROM <表名> WHERE <条件表达式>
```

条件表达式可以用`<条件1> AND <条件2>`表达满足条件1并且满足条件2。例如，符合条件“分数在80分或以上”，并且还符合条件“男生”，把这两个条件写出来：

- 条件1：根据score列的数据判断：`score >= 80`；
- 条件2：根据gender列的数据判断：`gender = 'M'`，注意`gender`列存储的是字符串，需要用单引号括起来。

就可以写出`WHERE`条件：`score >= 80 AND gender = 'M'`：

```
SELECT * FROM students WHERE score >= 80 AND gender = 'M';

```

第二种条件是`<条件1> OR <条件2>`，表示满足条件1或者满足条件2。例如，把上述`AND`查询的两个条件改为`OR`，查询结果就是“分数在80分或以上”或者“男生”，满足任意之一的条件即选出该记录：

```
SELECT * FROM students WHERE score >= 80 OR gender = 'M';

```

很显然`OR`条件要比`AND`条件宽松，返回的符合条件的记录也更多。

第三种条件是`NOT <条件>`，表示“不符合该条件”的记录。例如，写一个“不是2班的学生”这个条件，可以先写出“是2班的学生”：`class_id = 2`，再加上`NOT`：`NOT class_id = 2`：

```
SELECT * FROM students WHERE NOT class_id = 2;

```

上述`NOT`条件`NOT class_id = 2`其实等价于`class_id <> 2`，因此，`NOT`查询不是很常用。

要组合三个或者更多的条件，就需要用小括号`()`表示如何进行条件运算。例如，编写一个复杂的条件：分数在80以下或者90以上，并且是男生：

```
SELECT * FROM students WHERE (score < 80 OR score > 90) AND gender = 'M';

```

如果不加括号，条件运算按照`NOT`、`AND`、`OR`的优先级进行，即`NOT`优先级最高，其次是`AND`，最后是`OR`。加上括号可以改变优先级。

### 常用的条件表达式

| 条件                 | 表达式举例1     | 表达式举例2      | 说明                                              |
| :------------------- | :-------------- | :--------------- | :------------------------------------------------ |
| 使用=判断相等        | score = 80      | name = 'abc'     | 字符串需要用单引号括起来                          |
| 使用>判断大于        | score > 80      | name > 'abc'     | 字符串比较根据ASCII码，中文字符比较根据数据库设置 |
| 使用>=判断大于或相等 | score >= 80     | name >= 'abc'    |                                                   |
| 使用<判断小于        | score < 80      | name <= 'abc'    |                                                   |
| 使用<=判断小于或相等 | score <= 80     | name <= 'abc'    |                                                   |
| 使用<>判断不相等     | score <> 80     | name <> 'abc'    |                                                   |
| 使用LIKE判断相似     | name LIKE 'ab%' | name LIKE '%bc%' | %表示任意字符，例如'ab%'将匹配'ab'，'abc'，'abcd' |



### 小结

通过`WHERE`条件查询，可以筛选出符合指定条件的记录，而不是整个表的所有记录。





## 投影查询

------

使用`SELECT * FROM <表名> WHERE <条件>`可以选出表中的若干条记录。我们注意到返回的二维表结构和原表是相同的，即结果集的所有列与原表的所有列都一一对应。

如果我们只希望返回某些列的数据，而不是所有列的数据，我们可以用`SELECT 列1, 列2, 列3 FROM ...`，让结果集仅包含指定列。这种操作称为投影查询。

例如，从`students`表中返回`id`、`score`和`name`这三列：

```
SELECT id, score, name FROM students;

```

这样返回的结果集就只包含了我们指定的列，并且，结果集的列的顺序和原表可以不一样。

使用`SELECT 列1, 列2, 列3 FROM ...`时，还可以给每一列起个别名，这样，结果集的列名就可以与原表的列名不同。它的语法是`SELECT 列1 别名1, 列2 别名2, 列3 别名3 FROM ...`。

例如，以下`SELECT`语句将列名`score`重命名为`points`，而`id`和`name`列名保持不变：

```
SELECT id, score points, name FROM students;

```

投影查询同样可以接`WHERE`条件，实现复杂的查询：

```
SELECT id, score points, name FROM students WHERE gender = 'M';

```



### 小结

使用`SELECT *`表示查询表的所有列，使用`SELECT 列1, 列2, 列3`则可以仅返回指定列，这种操作称为投影。

`SELECT`语句可以对结果集的列进行重命名。





#### 排序



------

### 排序

我们使用SELECT查询时，细心的读者可能注意到，查询结果集通常是按照`id`排序的，也就是根据主键排序。这也是大部分数据库的做法。如果我们要根据其他条件排序怎么办？可以加上`ORDER BY`子句。例如按照成绩从低到高进行排序：

```
SELECT id, name, gender, score FROM students ORDER BY score;

```

如果要反过来，按照成绩从高到底排序，我们可以加上`DESC`表示“倒序”：

```
SELECT id, name, gender, score FROM students ORDER BY score DESC;

```

如果`score`列有相同的数据，要进一步排序，可以继续添加列名。例如，使用`ORDER BY score DESC, gender`表示先按`score`列倒序，如果有相同分数的，再按`gender`列排序：

```
SELECT id, name, gender, score FROM students ORDER BY score DESC, gender;

```

默认的排序规则是`ASC`：“升序”，即从小到大。`ASC`可以省略，即`ORDER BY score ASC`和`ORDER BY score`效果一样。

如果有`WHERE`子句，那么`ORDER BY`子句要放到`WHERE`子句后面。例如，查询一班的学生成绩，并按照倒序排序：

```
SELECT id, name, gender, score
FROM students
WHERE class_id = 1
ORDER BY score DESC;

```

这样，结果集仅包含符合`WHERE`条件的记录，并按照`ORDER BY`的设定排序。

### 小结

使用`ORDER BY`可以对结果集进行排序；

可以对多列进行升序、倒序排序。



## 分页

------

使用SELECT查询时，如果结果集数据量很大，比如几万行数据，放在一个页面显示的话数据量太大，不如分页显示，每次显示100条。

要实现分页功能，实际上就是从结果集中显示第1~100条记录作为第1页，显示第101~200条记录作为第2页，以此类推。

因此，分页实际上就是从结果集中“截取”出第M~N条记录。这个查询可以通过`LIMIT <M> OFFSET <N>`子句实现。我们先把所有学生按照成绩从高到低进行排序：

```
SELECT id, name, gender, score FROM students ORDER BY score DESC;

```

现在，我们把结果集分页，每页3条记录。要获取第1页的记录，可以使用`LIMIT 3 OFFSET 0`：

```
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 0;

```

上述查询`LIMIT 3 OFFSET 0`表示，对结果集从0号记录开始，最多取3条。注意SQL记录集的索引从0开始。

如果要查询第2页，那么我们只需要“跳过”头3条记录，也就是对结果集从3号记录开始查询，把`OFFSET`设定为3：

```
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 3;

```

类似的，查询第3页的时候，`OFFSET`应该设定为6:

```
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 6;

```

查询第4页的时候，`OFFSET`应该设定为9:

```
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 9;

```

由于第4页只有1条记录，因此最终结果集按实际数量1显示。`LIMIT 3`表示的意思是“最多3条记录”。

可见，分页查询的关键在于，首先要确定每页需要显示的结果数量`pageSize`（这里是3），然后根据当前页的索引`pageIndex`（从1开始），确定`LIMIT`和`OFFSET`应该设定的值：

- `LIMIT`总是设定为`pageSize`；
- `OFFSET`计算公式为`pageSize * (pageIndex - 1)`。

这样就能正确查询出第N页的记录集。

如果原本记录集一共就10条记录，但我们把`OFFSET`设置为20，会得到什么结果呢？

```
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 20;

```

`OFFSET`超过了查询的最大数量并不会报错，而是得到一个空的结果集。

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220113253.png)

### 注意

`OFFSET`是可选的，如果只写`LIMIT 15`，那么相当于`LIMIT 15 OFFSET 0`。

在MySQL中，`LIMIT 15 OFFSET 30`还可以简写成`LIMIT 30, 15`。

使用`LIMIT <M> OFFSET <N>`分页时，随着`N`越来越大，查询效率也会越来越低。

### 小结

使用`LIMIT <M> OFFSET <N>`可以对结果集进行分页，每次查询返回结果集的一部分；

分页查询需要先确定每页的数量和当前页数，然后确定`LIMIT`和`OFFSET`的值。



## 聚合查询

------

如果我们要统计一张表的数据量，例如，想查询`students`表一共有多少条记录，难道必须用`SELECT * FROM students`查出来然后再数一数有多少行吗？

这个方法当然可以，但是比较弱智。对于统计总数、平均数这类计算，SQL提供了专门的聚合函数，使用聚合函数进行查询，就是聚合查询，它可以快速获得结果。

仍然以查询`students`表一共有多少条记录为例，我们可以使用SQL内置的`COUNT()`函数查询：

```
SELECT COUNT(*) FROM students;

```

`COUNT(*)`表示查询所有列的行数，要注意聚合的计算结果虽然是一个数字，但查询的结果仍然是一个二维表，只是这个二维表只有一行一列，并且列名是`COUNT(*)`。

通常，使用聚合查询时，我们应该给列名设置一个别名，便于处理结果：

```
SELECT COUNT(*) num FROM students;

```

`COUNT(*)`和`COUNT(id)`实际上是一样的效果。另外注意，聚合查询同样可以使用`WHERE`条件，因此我们可以方便地统计出有多少男生、多少女生、多少80分以上的学生等：

```
SELECT COUNT(*) boys FROM students WHERE gender = 'M';

```

除了`COUNT()`函数外，SQL还提供了如下聚合函数：

| 函数 | 说明                                   |
| :--- | :------------------------------------- |
| SUM  | 计算某一列的合计值，该列必须为数值类型 |
| AVG  | 计算某一列的平均值，该列必须为数值类型 |
| MAX  | 计算某一列的最大值                     |
| MIN  | 计算某一列的最小值                     |

注意，`MAX()`和`MIN()`函数并不限于数值类型。如果是字符类型，`MAX()`和`MIN()`会返回排序最后和排序最前的字符。

要统计男生的平均成绩，我们用下面的聚合查询：

```
SELECT AVG(score) average FROM students WHERE gender = 'M';

```



![、](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220114306.png)



要特别注意：如果聚合查询的`WHERE`条件没有匹配到任何行，`COUNT()`会返回0，而`SUM()`、`AVG()`、`MAX()`和`MIN()`会返回`NULL`：



每页3条记录，如何通过聚合查询获得总页数？

SELECT CEILING(COUNT(*) / 3) FROM students;

## 分组

如果我们要统计一班的学生数量，我们知道，可以用`SELECT COUNT(*) num FROM students WHERE class_id = 1;`。如果要继续统计二班、三班的学生数量，难道必须不断修改`WHERE`条件来执行`SELECT`语句吗？

对于聚合查询，SQL还提供了“分组聚合”的功能。我们观察下面的聚合查询：

```
SELECT COUNT(*) num FROM students GROUP BY class_id;

```



![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220115236.png)

执行这个查询，`COUNT()`的结果不再是一个，而是3个，这是因为，`GROUP BY`子句指定了按`class_id`分组，因此，执行该`SELECT`语句时，会把`class_id`相同的列先分组，再分别计算，因此，得到了3行结果。

但是这3行结果分别是哪三个班级的，不好看出来，所以我们可以把`class_id`列也放入结果集中：

```
SELECT class_id, COUNT(*) num FROM students GROUP BY class_id;

```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220115319.png)

这下结果集就可以一目了然地看出各个班级的学生人数。我们再试试把`name`放入结果集：

```
SELECT name, class_id, COUNT(*) num FROM students GROUP BY class_id;

```



![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220115434.png)



不出意外，执行这条查询我们会得到一个语法错误，因为在任意一个分组中，只有`class_id`都相同，`name`是不同的，SQL引擎不能把多个`name`的值放入一行记录中。因此，**聚合查询的列中，只能放入分组的列**。

### 练习

请使用一条SELECT查询查出每个班级的平均分：

```
SELECT class_id, avg(score)   from students group by class_id

```

请使用一条SELECT查询查出每个班级男生和女生的平均分：

```
SELECT class_id,gender, avg(score)   from students  group by class_id,gender;

```

## 多表查询

SELECT查询不但可以从一张表查询数据，还可以从多张表同时查询数据。查询多张表的语法是：`SELECT * FROM <表1> <表2>`。

例如，同时从`students`表和`classes`表的“乘积”，即查询数据，可以这么写：

```
select * from students,classes

```

这种一次查询两个表的数据，查询的结果也是一个二维表，它是`students`表和`classes`表的“乘积”，即`students`表的每一行与`classes`表的每一行都两两拼在一起返回。结果集的列数是`students`表和`classes`表的列数之和，行数是`students`表和`classes`表的行数之积。

这种多表查询又称笛卡尔查询，使用笛卡尔查询时要非常小心，由于结果集是目标表的行数乘积，对两个各自有100行记录的表进行笛卡尔查询将返回1万条记录，对两个各自有1万行记录的表进行笛卡尔查询将返回1亿条记录。

你可能还注意到了，上述查询的结果集有两列`id`和两列`name`，两列`id`是因为其中一列是`students`表的`id`，而另一列是`classes`表的`id`，但是在结果集中，不好区分。两列`name`同理

要解决这个问题，我们仍然可以利用投影查询的“设置列的别名”来给两个表各自的`id`和`name`列起别名：

```
SELECT
    students.id sid,
    students.name,
    students.gender,
    students.score,
    classes.id cid,
    classes.name cname
FROM students, classes;

```

注意，多表查询时，要使用`表名.列名`这样的方式来引用列和设置别名，这样就避免了结果集的列名重复问题。但是，用`表名.列名`这种方式列举两个表的所有列实在是很麻烦，所以SQL还允许给表设置一个别名，让我们在投影查询中引用起来稍微简洁一点：

```
SELECT
    a.id sid,
    a.name,
    a.gender,
    a.score,
    b.id cid,
    b.name cname
FROM students a, classes b;

```

注意到`FROM`子句给表设置别名的语法是`FROM <表名1> <别名1>, <表名2> <别名2>`。这样我们用别名`s`和`c`分别表示`students`表和`classes`表。

多表查询也是可以添加`WHERE`条件的，我们来试试：

```
SELECT
    s.id sid,
    s.name,
    s.gender,
    s.score,
    c.id cid,
    c.name cname
FROM students s, classes c
WHERE s.gender = 'M' AND c.id = 1;

```

这个查询的结果集每行记录都满足条件`s.gender = 'M'`和`c.id = 1`。添加`WHERE`条件后结果集的数量大大减少了。

### 小结

使用多表查询可以获取M x N行记录；

多表查询的结果集可能非常巨大，要小心使用。

## 连接查询

------

连接查询是另一种类型的多表查询。连接查询对多个表进行JOIN运算，简单地说，就是先确定一个主表作为结果集，然后，把其他表的行有选择性地“连接”在主表结果集上。

例如，我们想要选出`students`表的所有学生信息，可以用一条简单的SELECT语句完成：

```
select * from students;
```

但是，假设我们希望结果集同时包含所在班级的名称，上面的结果集只有`class_id`列，缺少对应班级的`name`列。

现在问题来了，存放班级名称的`name`列存储在`classes`表中，只有根据`students`表的`class_id`，找到`classes`表对应的行，再取出`name`列，就可以获得班级名称。

这时，连接查询就派上了用场。我们先使用最常用的一种内连接——INNER JOIN来实现：

```
select s.id ,s.name,s.class_id,c.name classname,s.gender, s.score
from students s
inner join classes c
on s.class_id = c.id;
```

注意INNER JOIN查询的写法是：

1. 先确定主表，仍然使用`FROM <表1>`的语法；
2. 再确定需要连接的表，使用`INNER JOIN <表2>`的语法；
3. 然后确定连接条件，使用`ON <条件...>`，这里的条件是`s.class_id = c.id`，表示`students`表的`class_id`列与`classes`表的`id`列相同的行需要连接；
4. 可选：加上`WHERE`子句、`ORDER BY`等子句。

使用别名不是必须的，但可以更好地简化查询语句。

那什么是内连接（INNER JOIN）呢？先别着急，有内连接（INNER JOIN）就有外连接（OUTER JOIN）。我们把内连接查询改成外连接查询，看看效果：

```
SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
FROM students s
RIGHT OUTER JOIN classes c
ON s.class_id = c.id;

```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220124403.png)

执行上述RIGHT OUTER JOIN可以看到，和INNER JOIN相比，RIGHT OUTER JOIN多了一行，多出来的一行是“四班”，但是，学生相关的列如`name`、`gender`、`score`都为`NULL`。

这也容易理解，因为根据`ON`条件`s.class_id = c.id`，`classes`表的id=4的行正是“四班”，但是，`students`表中并不存在class_id=4的行。

有RIGHT OUTER JOIN，就有LEFT OUTER JOIN，以及FULL OUTER JOIN。它们的区别是：

INNER JOIN只返回同时存在于两张表的行数据，由于`students`表的`class_fdid`包含1，2，3，`classes`表的`id`包含1，2，3，4，所以，INNER JOIN根据条件`s.class_id = c.id`返回的结果集仅包含1，2，3。

RIGHT OUTER JOIN返回右表都存在的行。如果某一行仅在右表存在，那么结果集就会以`NULL`填充剩下的字段。

LEFT OUTER JOIN则返回左表都存在的行。如果我们给students表增加一行，并添加class_id=5，由于classes表并不存在id=5的行，所以，LEFT OUTER JOIN的结果会增加一行，对应的`class_name`是`NULL`：

```
SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
FROM students s
LEFT OUTER JOIN classes c
ON s.class_id = c.id;

```

最后，我们使用FULL OUTER JOIN，它会把两张表的所有记录全部选择出来，并且，自动把对方不存在的列填充为NULL：

```
SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
FROM students s
FULL OUTER JOIN classes c
ON s.class_id = c.id;

```

对于这么多种JOIN查询，到底什么使用应该用哪种呢？其实我们用图来表示结果集就一目了然了。

假设查询语句是：

```
SELECT ... FROM tableA ??? JOIN tableB ON tableA.column1 = tableB.column2;
```

我们把tableA看作左表，把tableB看成右表，那么INNER JOIN是选出两张表都存在的记录：

![inner-join](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220122600.png)

LEFT OUTER JOIN是选出左表存在的记录：

![left-outer-join](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220124649.png)

RIGHT OUTER JOIN是选出右表存在的记录：

![right-outer-join](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220124707.png)

FULL OUTER JOIN则是选出左右表都存在的记录：

![full-outer-join](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220124748.png)

### 小结

JOIN查询需要先确定主表，然后把另一个表的数据“附加”到结果集上；

INNER JOIN是最常用的一种JOIN查询，它的语法是`SELECT ... FROM <表1> INNER JOIN <表2> ON <条件...>`；

JOIN查询仍然可以使用`WHERE`条件和`ORDER BY`排序。

## INSERT

------

当我们需要向数据库表中插入一条新记录时，就必须使用`INSERT`语句。

![insert-brain](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220124841.jpeg)

`INSERT`语句的基本语法是：

```
INSERT INTO <表名> (字段1, 字段2, ...) VALUES (值1, 值2, ...);
```

例如，我们向`students`表插入一条新记录，先列举出需要插入的字段名称，然后在`VALUES`子句中依次写出对应字段的值：

```
INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);
-- 查询并观察结果:
SELECT * FROM students;
```

注意到我们并没有列出`id`字段，也没有列出`id`字段对应的值，这是因为`id`字段是一个自增主键，它的值可以由数据库自己推算出来。此外，如果一个字段有默认值，那么在`INSERT`语句中也可以不出现。

要注意，字段顺序不必和数据库表的字段顺序一致，但值的顺序必须和字段顺序一致。也就是说，可以写`INSERT INTO students (score, gender, name, class_id) ...`，但是对应的`VALUES`就得变成`(80, 'M', '大牛', 2)`。

还可以一次性添加多条记录，只需要在`VALUES`子句中指定多个记录值，每个记录是由`(...)`包含的一组值：

```
INSERT INTO students (class_id, name, gender, score) VALUES
  (1, '大宝', 'M', 87),
  (2, '二宝', 'M', 81);

SELECT * FROM students;
```



### 小结

使用`INSERT`，我们就可以一次向一个表中插入一条或多条记录。



## UPDATE

------

如果要更新数据库表中的记录，我们就必须使用`UPDATE`语句。

![update-sql](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220124952.png)

`UPDATE`语句的基本语法是：

```
UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
```

例如，我们想更新`students`表`id=1`的记录的`name`和`score`这两个字段，先写出`UPDATE students SET name='大牛', score=66`，然后在`WHERE`子句中写出需要更新的行的筛选条件`id=1`：

```
update students set name='大牛' ,score=66
where id=4;
```



注意到`UPDATE`语句的`WHERE`条件和`SELECT`语句的`WHERE`条件其实是一样的，因此完全可以一次更新多条记录：

```
UPDATE students SET name='小牛', score=77 WHERE id>=5 AND id<=7;
```

在`UPDATE`语句中，更新字段时可以使用表达式。例如，把所有80分以下的同学的成绩加10分：

```
update students set score:=score+10 
where score<80
```

其中，`SET score=score+10`就是给当前行的`score`字段的值加上了10。

如果`WHERE`条件没有匹配到任何记录，`UPDATE`语句不会报错，也不会有任何记录被更新。

最后，要特别小心的是，`UPDATE`语句可以没有`WHERE`条件，例如：

```
UPDATE students SET score=60;
```

这时，整个表的所有记录都会被更新。所以，在执行`UPDATE`语句时要非常小心，最好先用`SELECT`语句来测试`WHERE`条件是否筛选出了期望的记录集，然后再用`UPDATE`更新。

### MySQL

在使用MySQL这类真正的关系数据库时，`UPDATE`语句会返回更新的行数以及`WHERE`条件匹配的行数。

例如，更新`id=1`的记录时：

```
mysql> UPDATE students SET name='大宝' WHERE id=1;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

MySQL会返回`1`，可以从打印的结果`Rows matched: 1 Changed: 1`看到。

当更新`id=999`的记录时：

```
mysql> UPDATE students SET name='大宝' WHERE id=999;
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0
```

MySQL会返回`0`，可以从打印的结果`Rows matched: 0 Changed: 0`看到。

### 小结

使用`UPDATE`，我们就可以一次更新表中的一条或多条记录。





## DELETE

------

如果要删除数据库表中的记录，我们可以使用`DELETE`语句。

![sql-delete](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201220125404.jpeg)

`DELETE`语句的基本语法是：

```
DELETE FROM <表名> WHERE ...;
```

例如，我们想删除`students`表中`id=1`的记录，就需要这么写：

```
delete from students 
where id=1;
```

注意到`DELETE`语句的`WHERE`条件也是用来筛选需要删除的行，因此和`UPDATE`类似，`DELETE`语句也可以一次删除多条记录：

```
delete from studebts where id in(4,5,6)
```

如果`WHERE`条件没有匹配到任何记录，`DELETE`语句不会报错，也不会有任何记录被删除。

最后，要特别小心的是，和`UPDATE`类似，不带`WHERE`条件的`DELETE`语句会删除整个表的数据：

```
DELETE FROM students;
```

这时，整个表的所有记录都会被删除。所以，在执行`DELETE`语句时也要非常小心，最好先用`SELECT`语句来测试`WHERE`条件是否筛选出了期望的记录集，然后再用`DELETE`删除。

### MySQL

在使用MySQL这类真正的关系数据库时，`DELETE`语句也会返回删除的行数以及`WHERE`条件匹配的行数。

例如，分别执行删除`id=1`和`id=999`的记录：

```
mysql> DELETE FROM students WHERE id=1;
Query OK, 1 row affected (0.01 sec)

mysql> DELETE FROM students WHERE id=999;
Query OK, 0 rows affected (0.01 sec)
```

### 小结

使用`DELETE`，我们就可以一次删除表中的一条或多条记录。



# PL/SQL程序设计

**附：代码中使用的数据库在文章尾给出**

## 什么是PL/SQL?

PL/SQL是 Procedure Language & Structured Query Language 的缩写。PL/SQL是对SQL语言存储过程语言的扩展。

指在SQL命令语言中增加了过程处理语句（如分支、循环等），使SQL语言具有过程处理能力。

把SQL语言的数据操纵能力与过程语言的数据处理能力结合起来，使得PLSQL面向过程但比过程语言简单、高效、灵活和实用。

## PL/SQL的优点或特征

**1 有利于客户/服务器环境应用的运行**

**2 适合于客户环境**

**3 过程化**

**4 模块化**

**5 运行错误的可处理性**

**6 提供大量内置程序包**

## PL/SQL 可用的SQL语句

PL/SQL是ORACLE系统的核心语言，现在ORACLE的许多部件都是由PL/SQL写成。在PL/SQL中可以使用的SQL语句有：
INSERT，UPDATE，DELETE，SELECT INTO，COMMIT，ROLLBACK，SAVEPOINT。
提示：**在 PL/SQL中只能用 SQL语句中的 DML 部分，不能用 DDL 部分，如果要在PL/SQL中使用DDL(如CREATE table 等)的话，只能以动态的方式来使用。**
**ORACLE 的 PL/SQL 组件在对 PL/SQL 程序进行解释时，同时对在其所使用的表名、列名及数据类型进行检查**。
PL/SQL 可以在SQL*PLUS 中使用。
PL/SQL 可以在高级语言中使用。
PL/SQL可以在ORACLE的开发工具中使用(如：SQL Developer或Procedure Builder等)。
其它开发工具也可以调用PL/SQL编写的过程和函数，如Power Builder 等都可以调用服务器端的PL/SQL过程。



## PL/SQL程序结构及组成

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222211829.png)



##  变量和常量说明

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222211902.png)



### 第一个PL/SQL程序

```
set serveroutput on;  //打開輸出

declare 
begin
DBMS_OUTPUT.PUT_LINE('我的第一個pl/sql程序');
end;
```



![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222213457.png)

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222213550.png)

### 引用型变量

eg:

```
--引用型变量: 查询并打印empno為7521的ename和job
declare
--定义变量保存ename和job
 pename emp.ename%type;
 pjob emp.job%type;
 begin
 --查询
    select ename,job into pename,pjob from emp
    where empno=7521;
    DBMS_OUTPUT.PUT_LINE(pename||'的job是'||pjob);
 
 end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222214907.png)



### 记录型变量

```
-- 记录型变量：查询并打印empno為7521的ename和job
declare
    emp_rec emp%rowtype;
begin
    select * into emp_rec from emp
    where empno=7521;
    DBMS_OUTPUT.PUT_LINE(emp_rec.ename||'的job是'||emp_rec.job);

end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222215652.png)



### if语句

判断输入的是正数还是负数

```
--接受键盘输入
--变量num：是一个地址值，在该地址上保存了输入的值
accept num PROMPT '亲输入一个数字：';
declare 
    pnumber number :=&num;
begin
    if pnumber=0 then
        DBMS_OUTPUT.PUT_LINE('输入的是0');
    ELSIF pnumber>0 then
        dbms_output.put_line('输入的是正数');
    ELSE 
        dbms_output.put_line('输入的是负数');
    end if;
end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222222244.png)

### 求两个数的和



```
----如果要在屏幕上输出信息，需要将serveroutput开关打开
set serveroutput on

-- 例6：求两个数得和
-- 接收键盘输入
accept num1 prompt '请输入第一个数'
accept num2 prompt '请输入第二个数'
declare
  --定义变量保存输入得数字
  pnum1 number :=&num1;
  pnum2 number :=&num2;
  psum number :=0;
begin
  psum :=pnum1+pnum2;
  DBMS_OUTPUT.PUT_LINE(pnum1||'+'||pnum2||'='||psum);
end;

```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222223546.png)



### 求1加到n的和使用while

```
--求1加到n的和使用while
accept n prompt'请输入n';
declare
    n number :=&n;
    i number :=0;
    ans number :=0;
begin
    while i<n
    loop
    ans:=ans+i;
    i:=i+1;
    end loop;
    dbms_output.put_line(ans);
end;
```

![image-20201222223957842](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222223958.png)



### 求1加到n的和使用do while

```
--如果要在屏幕上输出信息，需要将serveroutput开关打开
set serveroutput on
-- 使用do while:求 1 加到 n 的和(循环)
-- 接收键盘输入
accept num prompt '请输入一个数'
declare
  --定义变量保存输入 的数字
  pnum number := &num;
  pn number :=1;
  psum number :=0;
begin
  loop
    exit when pn>pnum;
    psum :=psum+pn;
    pn :=pn+1;
  end loop;
  -- 循环结束打印
  dbms_output.put_line('1加到'||pnum||'的和为'||psum);
end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222230032.png)

### 求1加到n的和使用for

```
--如果要在屏幕上输出信息，需要将serveroutput开关打开
set serveroutput on
-- 使用for:求 1 加到 n 的和(循环)
-- 接收键盘输入
accept num prompt '请输入一个数'
declare
  --定义变量保存输入 的数字
  pnum number := &num;
  psum number :=0;
begin
  for I in 1..pnum  --for循环的I直接使用，不用定义。1..100表示1到100的意思。不能有分号。
  loop
    psum :=psum+I;
  end loop;
  -- 循环结束打印
  dbms_output.put_line('1加到'||pnum||'的和为'||psum);
end;

```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222231659.png)



### 给SALESMAN涨10%的工资，给ANALYST涨5%的工资(游标)

#### 1、显式游标处理需四个PL/SQL步骤：

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222231850.png)



![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201222235216.png)





#### 2、显式游标属性

%FOUND 布尔值属性，当最近一次读记录时成功返回，则返回TURE

%NOTFOUND 布尔值属性，与%FOUND相反

%ISOPEN 布尔值属性，当游标已打开时返回TURE

%ROWCOUNT 数字型属性，返回已从游标中读取的记录数

```
-- 给SALESMAN涨10%的工资，给ANALYST涨5%的工资
declare
    pjob emp.job %TYPE;
    psal emp.sal %type;
    --
cursor c1 is select emp.job,emp.sal from emp; --定义游标
begin
    open c1;  --打开游标
    fetch c1 into pjob,psal;  --取一个
    while c1 % found 
    loop
      if pjob='SALESMAN' then
            psal:=psal+psal*0.1;
            dbms_output.put_line(psal);
      ELSIF pjob='ANALYST'  then
             psal:=psal+psal*0.05;
             dbms_output.put_line(psal);
        else dbms_output.put_line('不需要改');
        end if;
        fetch c1 into pjob,psal;
    end loop;
    close c1;  --关闭光标
end;
```



![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223000938.png)



####  3、游标的for循环

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223000908.png)





 打印出 所有的员工的工资:salary: xxx（使用for循环）

```

declare
    psal emp.sal %TYPE;
    cursor c1 is select emp.sal from emp;
begin
    for i in c1 loop
        dbms_output.put_line(i.sal);
    end loop;
end;
```



![image-20201223001333542](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223001333.png)

### 使用游标打印员工的姓名和薪水

```
--使用游标打印员工的姓名和薪水
declare
    psal emp.sal %TYPE;
    pname emp.ename %type;
    cursor c1 is select emp.ename,emp.sal from emp;
begin
    open c1;
    fetch c1 into pname, psal;
    while c1 % found loop
        dbms_output.put_line(pname||'的工资是'||psal);
        fetch c1 into pname,psal;
    end loop;
     close c1;
end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223001902.png)



### 使用带参数的游标打印员工的姓名和薪水

```
--如果要在屏幕上输出信息，需要将serveroutput开关打开
set serveroutput on
-- 带参数的游标  打印指定部门的员工的姓名和薪水
declare
    cursor c1( pno number) is select emp.ename,emp.sal from emp where deptno = pno;
    pname emp.ename %type;
    psal emp.sal %type;
begin
    open c1(10);
    loop
        FETCH c1 into pname,psal;
        exit when c1 %notfound;
        dbms_output.put_line(pname||'的工资是'||to_char(psal,'L9,999.99'));
    end loop;
    close c1;
end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223110700.png)



### 打印指定部门的员工信息

```
--打印指定部门的员工信息
set serveroutput on;
accept ptnonum prompt '请输入要查询的部门号：';
declare 
    tnonum emp.deptno %type :=&ptnonum;
    cursor c1(dnomun number) is select ename,sal,job,empno from emp where deptno=dnomun;
    pname emp.ename %TYPE;
    psal emp.sal %type;
    pjob emp.job %type;
    pempno emp.empno %type;
begin
    open c1(tnonum);
    loop
        FETCH c1 into pname,psal,pjob,pempno;
        exit when c1 %notfound;
        dbms_output.put_line('职位为'||pjob ||'的'||pempno||pname||'的工资为'||psal);
    end loop;

end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223111921.png)

###  系统例外的使用

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223112739.png)

####  系统列外  演示系统列为被0除

```

-- 系统列外  演示系统列为被0除
declare
    pnum number;
begin
    pnum:=2/0;
    EXCEPTION
        when zero_divide then
            dbms_output.put_line('0不能做分母');
        when value_error then 
            dbms_output.put_line('算数或转换错误');
        when others then
            dbms_output.put_line('其他错误');

end;
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201223113250.png)





#### 用户自定义例外









# 第一章 绪论

考试范围：

数据、数据库、数据库系统的定义与应用、数据库的体系结构、数据库用户与管理员、数据管理技术的发展

基本要求：

1. 掌握数据、数据库、DBA、DBS等基本概念、数据库系统的体系结构。

2. 了解数据管理管理技术的发展、应用领域和发展方向。

数据：是事物的符号表示，

数据的含义是信息，数据是信息的载体，信息是数据的内涵。

数据库：是长期存放在计算机内，有组织，可共享的数据集合。

数据库管理系统（DBMS）：是数据库系统的核心组成部分，

数据库系统（DBS）：是计算机系统中引入数据库后的系统组成，有数据库（DB），操作系统（OS），数据库管理系统（DBMS），应用开发工具，应用系统，用户，数据库管理员（DBA）。

​                  

数据管理管理技术的发展：人工管理阶段、文件系统阶段、数据库系统阶段

数据库系统结构：外模式（用户级）、模式（概念级）、内模式（物理级）

​		外模式：一个数据库可以有多个外模式，同一外模式可以为一个用户的多个应用系统所用，但一个应用系统只能有一个外模式，

​		模式：一个数据库系统只能有一个模式



二级映射：

为了实现数据库三级层次的联系和转换，在三级模式之间提供了二级映射

​		外模式/模式映射

​				模式描述的是数据的全局逻辑结构，外模式描述的是数据的局部逻辑结构，

​		模式/内模式映射















------

## 附：

```
--------------------------------------------------------
--  File created -十二月-22-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table BONUS
--------------------------------------------------------
CREATE TABLE "BONUS" (
    "ENAME"   VARCHAR2(10),
    "JOB"     VARCHAR2(9),
    "SAL"     NUMBER,
    "COMM"    NUMBER
);
--------------------------------------------------------
--  DDL for Table DEPT
--------------------------------------------------------

CREATE TABLE "DEPT" (
    "DEPTNO"   NUMBER(2, 0),
    "DNAME"    VARCHAR2(14),
    "LOC"      VARCHAR2(13)
);
--------------------------------------------------------
--  DDL for Table EMP
--------------------------------------------------------

CREATE TABLE "EMP" (
    "EMPNO"      NUMBER(4, 0),
    "ENAME"      VARCHAR2(10),
    "JOB"        VARCHAR2(9),
    "MGR"        NUMBER(4, 0),
    "HIREDATE"   DATE, 
	"SAL"        NUMBER(7, 2),
    "COMM"       NUMBER(7, 2),
    "DEPTNO"     NUMBER(2, 0)
);
--------------------------------------------------------
--  DDL for Table SALGRADE
--------------------------------------------------------

CREATE TABLE "SALGRADE" (
    "GRADE"   NUMBER,
    "LOSAL"   NUMBER,
    "HISAL"   NUMBER
);

---------------------------------------------------
--   DATA FOR TABLE BONUS
--   FILTER = none used
---------------------------------------------------
REM INSERTING into BONUS

---------------------------------------------------
--   END DATA FOR TABLE BONUS
---------------------------------------------------

---------------------------------------------------
--   DATA FOR TABLE DEPT
--   FILTER = none used
---------------------------------------------------
REM INSERTING into DEPT

INSERT INTO dept (
    deptno,
    dname,
    loc
) VALUES (
    10,
    'ACCOUNTING',
    'NEW YORK'
);

INSERT INTO dept (
    deptno,
    dname,
    loc
) VALUES (20,
    'RESEARCH',
    'DALLAS'
);

INSERT INTO dept (
    deptno,
    dname,
    loc
) VALUES (
    30,
    'SALES',
    'CHICAGO'
);

INSERT INTO dept (
    deptno,
    dname,
    loc
) VALUES (
    40,
    'OPERATIONS',
    'BOSTON'
);

---------------------------------------------------
--   END DATA FOR TABLE DEPT
---------------------------------------------------

---------------------------------------------------
--   DATA FOR TABLE EMP
--   FILTER = none used
---------------------------------------------------
REM INSERTING into EMP

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (7369,
    'SMITH',
    'CLERK',
    7902,
    to_timestamp('17-12月-80 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    800,
    NULL,
    20
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7499,
    'ALLEN',
    'SALESMAN',
    7698,
    to_timestamp('20-2月 -81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    1600,
    300,
    30
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7521,
    'WARD',
    'SALESMAN',
    7698,
    to_timestamp('22-2月 -81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    1250,
    500,
    30
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7566,
    'JONES',
    'MANAGER',
    7839,
    to_timestamp('02-4月 -81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    2975,
    NULL,
    20
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7654,
    'MARTIN',
    'SALESMAN',
    7698,
    to_timestamp('28-9月 -81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    1250,
    1400,
    30
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7698,
    'BLAKE',
    'MANAGER',
    7839,
    to_timestamp('01-5月 -81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    2850,
    NULL,
    30
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7782,
    'CLARK',
    'MANAGER',
    7839,
    to_timestamp('09-6月 -81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    2450,
    NULL,
    10
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7788,
    'SCOTT',
    'ANALYST',
    7566,
    to_timestamp('19-4月 -87 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    3000,
    NULL,
    20
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7839,
    'KING',
    'PRESIDENT',
    NULL,
    to_timestamp('17-11月-81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    5000,
    NULL,
    10
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7844,
    'TURNER',
    'SALESMAN',
    7698,
    to_timestamp('08-9月 -81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    1500,
    0,
    30
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7876,
    'ADAMS',
    'CLERK',
    7788,
    to_timestamp('23-5月 -87 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    1100,
    NULL,
    20
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7900,
    'JAMES',
    'CLERK',
    7698,
    to_timestamp('03-12月-81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    950,
    NULL,
    30
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7902,
    'FORD',
    'ANALYST',
    7566,
    to_timestamp('03-12月-81 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    3000,
    NULL,
    20
);

INSERT INTO emp (
    empno,
    ename,
    job,
    mgr,
    hiredate,
    sal,
    comm,
    deptno
) VALUES (
    7934,
    'MILLER',
    'CLERK',
    7782,
    to_timestamp('23-1月 -82 12.00.00.000000000 上午', 'DD-MON-RR HH.MI.SS.FF AM'),
    1300,
    NULL,
    10
);

---------------------------------------------------
--   END DATA FOR TABLE EMP
---------------------------------------------------

---------------------------------------------------
--   DATA FOR TABLE SALGRADE
--   FILTER = none used
---------------------------------------------------
REM INSERTING into SALGRADE

INSERT INTO salgrade (
    grade,
    losal,
    hisal
) VALUES (
    1,
    700,
    1200
);

INSERT INTO salgrade (
    grade,
    losal,
    hisal
) VALUES (
    2,
    1201,
    1400
);

INSERT INTO salgrade (
    grade,
    losal,
    hisal
) VALUES (
    3,
    1401,
    2000
);

INSERT INTO salgrade (
    grade,
    losal,
    hisal
) VALUES (
    4,
    2001,
    3000
);

INSERT INTO salgrade (
    grade,
    losal,
    hisal
) VALUES (
    5,
    3001,
    9999
);

---------------------------------------------------
--   END DATA FOR TABLE SALGRADE
---------------------------------------------------

--------------------------------------------------------
--  Constraints for Table EMP
--------------------------------------------------------

ALTER TABLE "EMP" ADD CONSTRAINT "PK_EMP" PRIMARY KEY ( "EMPNO" ) ENABLE;

--------------------------------------------------------
--  Constraints for Table DEPT
--------------------------------------------------------

ALTER TABLE "DEPT" ADD CONSTRAINT "PK_DEPT" PRIMARY KEY ( "DEPTNO" ) ENABLE;
--------------------------------------------------------

--------------------------------------------------------
--  Ref Constraints for Table EMP
--------------------------------------------------------

ALTER TABLE "EMP"
    ADD CONSTRAINT "FK_DEPTNO" FOREIGN KEY ( "DEPTNO" )
        REFERENCES "DEPT" ( "DEPTNO" )
    ENABLE;


-----------------------

SELECT
    ename
FROM
    emp;
```

## 参考：



[廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1177760294764384)

[Jepson6669](https://www.cnblogs.com/jepson6669/p/9429167.html#)

[PL/SQL程序设计（四）—— 游标](https://blog.csdn.net/weixin_30539625/article/details/95276307)