---
title: pyqt5 多个tableWidget联动滚动
author: kif
tags:
  - pyqt
categories:
  - 开发记录
abbrlink: 85cd
date: 2022-05-05 21:35:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/project/202205052122205.png
coverWidth: 1200
coverHeight: 750
---

项目中遇到了一个需求：

开发时用到了三个tableWidget分别展示数据，但数据过多时三个表就显得比较杂乱，三表行之间无法同时滚动必然带来不好的体验，所以需要是三个tableWidget同时滚动；

先上code：

```python
import sys

from PyQt5.QtCore import QEvent
from PyQt5.QtWidgets import (QWidget, QTableWidget, QHeaderView, QHBoxLayout, QApplication, QTableWidgetItem,
                             QAbstractItemView)


class MyEvent(QEvent):
    # idType = QEvent.registerEventType()

    def __init__(self, data):
        self.data = data
        print("MyEvent.idType ", data)

    def get_data(self):
        return self.data


class TableWidgetDemo(QWidget):
    def __init__(self):
        super(TableWidgetDemo, self).__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle("QTableWidget演示")
        self.resize(430, 230);
        layout = QHBoxLayout()

        tablewidget = QTableWidget()
        tablewidget.setRowCount(44)
        tablewidget.setColumnCount(3)
        tablewidget.setHorizontalHeaderLabels(['姓名', '年龄', '籍贯'])

        nameItem1 = QTableWidgetItem("张飞")
        tablewidget.setItem(0, 0, nameItem1)

        ageItem1 = QTableWidgetItem("24")
        tablewidget.setItem(0, 1, ageItem1)

        jgItem1 = QTableWidgetItem("河北")
        tablewidget.setItem(0, 2, jgItem1)

        nameItem2 = QTableWidgetItem("关羽")
        tablewidget.setItem(1, 0, nameItem2)

        ageItem2 = QTableWidgetItem("25")
        tablewidget.setItem(1, 1, ageItem2)

        jgItem2 = QTableWidgetItem("河南")
        tablewidget.setItem(1, 2, jgItem2)

        # 禁止编辑
        tablewidget.setEditTriggers(QAbstractItemView.NoEditTriggers)

        # 整行选择
        tablewidget.setSelectionBehavior(QAbstractItemView.SelectRows)

        # 调整列和行的大小
        tablewidget.horizontalHeader().setSectionResizeMode(QHeaderView.Stretch)
        tablewidget.verticalHeader().setSectionResizeMode(QHeaderView.Stretch)

        # 设置水平竖直表头是否显示
        # tablewidget.horizontalHeader().setVisible(False)
        # tablewidget.verticalHeader().setVisible(False)

        # 设置竖直表头标题，五特殊要求可以不用设置
        # tablewidget.setVerticalHeaderLabels(["a","b"])

        # 隐藏表格线，False隐藏
        tablewidget.setShowGrid(False)

        self.scrollBar = tablewidget.verticalScrollBar()
        self.scrollBar.valueChanged.connect(self.verticalScrollBarChanged)
        # self.scrollBar.setValue(200)

        # --------------------------
        tablewidget2 = QTableWidget()
        tablewidget2.setRowCount(44)
        tablewidget2.setColumnCount(3)
        tablewidget2.setHorizontalHeaderLabels(['姓名', '年龄', '籍贯'])

        nameItem1 = QTableWidgetItem("张飞")
        tablewidget2.setItem(0, 0, nameItem1)

        ageItem1 = QTableWidgetItem("24")
        tablewidget2.setItem(0, 1, ageItem1)

        jgItem1 = QTableWidgetItem("河北")
        tablewidget2.setItem(0, 2, jgItem1)

        nameItem2 = QTableWidgetItem("关羽")
        tablewidget2.setItem(1, 0, nameItem2)

        ageItem2 = QTableWidgetItem("25")
        tablewidget2.setItem(1, 1, ageItem2)

        jgItem2 = QTableWidgetItem("河南")
        tablewidget2.setItem(1, 2, jgItem2)

        # 禁止编辑
        tablewidget2.setEditTriggers(QAbstractItemView.NoEditTriggers)

        # 整行选择
        tablewidget2.setSelectionBehavior(QAbstractItemView.SelectRows)

        # 调整列和行的大小
        tablewidget2.horizontalHeader().setSectionResizeMode(QHeaderView.Stretch)
        tablewidget2.verticalHeader().setSectionResizeMode(QHeaderView.Stretch)

        # 设置水平竖直表头是否显示
        # tablewidget.horizontalHeader().setVisible(False)
        # tablewidget.verticalHeader().setVisible(False)

        # 设置竖直表头标题，五特殊要求可以不用设置
        # tablewidget.setVerticalHeaderLabels(["a","b"])

        # 隐藏表格线，False隐藏
        tablewidget2.setShowGrid(False)
        self.scrollBar2 = tablewidget2.verticalScrollBar()
        self.scrollBar2.valueChanged.connect(self.verticalScrollBarChanged)
        # self.scrollBar.setValue(200)

        layout.addWidget(tablewidget)
        layout.addWidget(tablewidget2)
        self.setLayout(layout)

    def verticalScrollBarChanged(self, e):
        self.scrollBar.setValue(e)
        self.scrollBar2.setValue(e)


if __name__ == '__main__':
    app = QApplication(sys.argv)
    example = TableWidgetDemo()
    example.show()
    sys.exit(app.exec_())

```

关键在于监听到滚动条的变化，将滚动距离同时设置给其他TableWidget

```python
tablewidget2.verticalScrollBar()
```

可以拿到tablewidget的滚动条

```python
self.scrollBar2.valueChanged.connect(self.verticalScrollBarChanged)
```

将变化事件绑定到handleTextChanged方法



```
  self.scrollBar.setValue(e)
```

方法里面再setValue(e)赋值

之后再将其他的滚动条隐藏优化就可以了