---
ctitle: C语言知识点
author: kif
tags:
  - C语言
categories:
  - 学习笔记
abbrlink: '2841'
date: 2021-01-05 14:52:00
cover: https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310008758.jpg
coverWidth: 1200
coverHeight: 750
---

## 输入未知长度字符数组

```
#include <stdio.h>
int main()
{
	char array_num[100] ;
	int i = 0, length;
	do
	{
		scanf("%c", &array_num[i]);
		i++;
	} while (array_num[i - 1] != '\n');
	length = i-1;

	for (i = 0; i < length; i++)
		printf("%c", array_num[i]);

	getchar();//VS2017中特殊设置，解决CMD窗口闪退问题
	
	return 0;
}

```

## 冒泡排序



```
#include <stdio.h>
void fun1(int num[], int length);

int main() {
	int a[1001];
	int k, i, j;
	scanf("%d", &k);
	for (i = 0; i < k; i++) {
		scanf("%d", &a[i]);
	}
	fun1(a, k);
	
	for (i = 0; i < k; i++) {
		printf("%d ", a[i]);
	}
}

void fun1(int num[], int length) {
	int i, j;
	for (i = 0; i < length - 1; ++i) {
		for (j = 0; j < length - i - 1; ++j) {
			if (num[j] > num[j + 1]) {
				int t;
				t = num[j];
				num[j] = num[j + 1];
				num[j + 1] = t;
			}
		}
	}

}
```





## 折半查找

```
#include <stdio.h>
void fun1(int num[], int length);
int fun2(int num[], int length, int x);

int main() {
	int a[1001];
	int k, i, j;
	scanf("%d", &k);
	for (i = 0; i < k; i++) {
		scanf("%d", &a[i]);
	}
	fun1(a, k);

	for (i = 0; i < k; i++) {
		if (i == 0) {
			printf("%d", a[i]);
		} else {
			printf(" %d", a[i]);
		}

	}
	printf("\n");
	int flag = fun2(a, k, 4);
	printf("%d\n", flag);
}

void fun1(int num[], int length) {
	int i, j;
	for (i = 0; i < length - 1; ++i) {
		for (j = 0; j < length - i - 1; ++j) {
			if (num[j] > num[j + 1]) {
				int t;
				t = num[j];
				num[j] = num[j + 1];
				num[j + 1] = t;
			}
		}
	}

}

int fun2(int num[], int length, int x) {
	int low = 0;
	int high = length - 1;
	while (low < high) {
		int mid = (high + low) / 2;
		if (x = num[mid]) {
			return mid;
		} else if (num[mid] > x) {
			high = mid - 1;
		} else {
			low = mid+1;;
		}
	}
	return 0;



}
```

## 桶排序

```
#include<stdio.h>
#include<string.h>
int main()
{
	char str[100];
	int book[100] = { 0 };
	while (scanf("%s", str) != EOF)
	{
		int len = strlen(str);
		for (int i = 0; i < len; i++)
		{
			book[str[i]]++;
		}
		for (int i = 0; i < 95; i++)
		{
			if (book[i] != 0)
			{
				printf("%c", i);
			}
		}
		printf("\n");
	}
	
	return 0;
}
```

## 快速排序

```
#include<stdio.h>
int num[100];
int n;

void quicksort(int left, int right)
{
	int i, j,t, temp;
	if (left > right)
	{
		return;
	}
	temp = num[left];
	i = left;
	j = right;
	while (i != j)
	{
		while (num[j] >= temp && j > i)
		{
			j--;
		}
		while (num[i] <= temp && i < j)
		{
			i++;
		}
		if (i < j)
		{
			t = num[i];
			num[i] = num[j];
			num[j] = t;
		}
	}
	
	num[left] = num[i];
	num[i] = temp;
	quicksort(left, i - 1);
	quicksort(i + 1, right);

	return;
}

int main()
{
	
	scanf("%d", & n);
	int i;
	for (i = 0; i < n; i++)
	{
		scanf("%d", &num[i]);
	}

	quicksort(0, n-1);
	for (i = 0; i < n; i++)
	{
		if (i == 0)
		{
			printf("%d", num[0]);
		}
		else
		{
			printf(" %d", num[i]);
		}
		

	}
	printf("\n");
	
	return 0;
}
```



## 埃氏筛法

```
#include <stdio.h>
int fun(int n);

int main() {
	int n;
	scanf("%d", &n);
	int k;
	k = fun(n);
	printf("%d\n", k);
	return 0;
}

int fun(int n) {
	int count = 0;
	int num[n + 1];
	int i;
	num[0] = 0;
	num[1] = 0;
	for (i = 2; i < n; i++) {
		num[i] = 1;
	}
	int j;
	for (j = 2; j <= n; j++) {
		if (num[j] == 1) {
			count++;
			int x;
			for (x = 2 * j; x <= n; x = x + j) {
				num[x] = 0;
			}
		}
	}
	return count;
}
```

## 队列

结构体

解密：一串字符，第1个数删除，第2个数放到最后；第3个数删除，第4个数放到最后.。。。。

例如：631758924加密后为615947283

```c
#include<stdio.h>
struct queue
{
	int data[100];
	int head;
	int tail;
};
int main()
{
	int n;
	struct queue q;
	scanf("%d", &n);
	int i;
	for (i = 0; i < n; i++)
	{
		scanf("%d", &q.data[i]);
	}
	q.head = 0;
	q.tail = n;
	while (q.head < q.tail)
	{
		printf("%d ", q.data[q.head]);
		q.data[q.tail] = q.data[q.head + 1];
		q.tail++;
		q.head += 2;

	}
	printf("\n");

	return 0;
}
```

## 栈

判断回文串

```c
#include<stdio.h>
#include<string.h>
int main()
{
	int len;
	char s[101];
	gets(s);
	len = strlen(s);
	int mid = len / 2-1;
	/// <summary>
	///  左边压栈
	/// </summary>
	/// <returns></returns>
	char str[101];
	int top = 0;
	int i;
	for (i = 0;i <= mid; i++)
	{
		str[++top] = s[i];
	}
	/// <summary>
	/// 判断
	/// </summary>
	/// <returns></returns>
	int next=0;
	if (len % 2 == 0)
	{
		next = mid + 1;
	}
	else
	{
		next = mid + 2;
	}
	for (i = next; i < len; i++)
	{
		if (s[i] != str[top])
		{
			break;
		}
		top--;
	}

	if (top == 0)
	{
		printf("Yes\n");
	}
	else
	{
		printf("No\n");
	}

	return 0;
}
```



## 深度优先

### 1-10中选数字，使得a'b'c+def=hij;不能重复选



```
void dfs(int step)
{ 
	判断边界
	尝试每一中可能for(i=0;i<=n;i++)
	{
		继续下一步dfs(step+1)
	}
	返回
}
```



```c
#include<stdio.h>
int a[10],book[10];
int sum=0;
void dfs(int step)
{
    int i;
    if(step==10)
    {


        if(a[1]*100+a[2]*10+a[3]+a[4]*100+a[5]*10+a[6]==a[7]*100+a[8]*10+a[9])
        {
            sum++;
            printf("%d%d%d+%d%d%d=%d%d%d\n",a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9]);
        }
        return;
    }

    for(i=1;i<=9;i++)
    {
        if(book[i]==0)
        {
            a[step]=i;
            book[i]=1;
            dfs(step+1);
            book[i]=0;
        }
    }
    return;
}
int main()
{

    dfs(1);

    printf("Total ： %d\n",sum/2);

    return 0;
}
```

### 迷宫

n行m列，0表示可走，1表示障碍，从（startx，starty）到（p，q)，找最短路径

```c
#include<stdio.h>
int min=999;
int a[51][51];
book[51][51];
int n,m;
int p,q;
int next[4][2]={
        {1,0},
        {0,1},
        {-1,0},
        {0,-1}
};

void dfs(int x,int y,int step)
{
    if(x==p&&y==q)
    {
        if(step<min)
        {
            min=step;
        }
        return;
    }
    int i=0;
    for(i=0;i<4;i++)
    {
        int tx = x+next[i][0];
        int ty = y+next[i][1];
        if(tx>=0&&tx<n&&ty>=0&&ty<m)
        {
            if(book[tx][ty]==0&&a[tx][ty]==0)
            {
                book[tx][ty]=1;
                dfs(tx,ty,step+1);
                book[tx][ty]=0;
            }
        }

    }
    return;
}

int main()
{

    scanf("%d %d",&n,&m);
    int i,j;
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
    int startx,starty;
    scanf("%d %d %d %d",&startx,&starty,&p,&q);
    book[startx][starty]=1;
    dfs(startx,starty,0);
    printf("%d\n",min);



    return 0;
}
```

样例输入

```
5 4
0 0 1 0
0 0 0 0
0 0 1 0
0 1 0 0
0 0 0 1
0 0 3 2

```

样例输出

```
7
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210629015235.png)

## 广度优先

### 迷宫

n行m列，0表示可走，1表示障碍，从（startx，starty）到（p，q)，找最短路径

```c
#include<stdio.h>
struct note{
    int x;
//    横坐标
    int y;
//    纵坐标
    int s;
//    步数
};

int main()
{
    struct note que[2501];
    int a[51][51];
    int book[51][51]={0};
    int next[4][2]={
            {0,1},
            {1,0},
            {0,-1},
            {-1,0}
    };
    int head,tail;

    int n,m;
    int i,j;
    int startx,starty,p,q;
    scanf("%d %d",&n,&m);
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=m;j++)
        {
            scanf("%d",&a[i][j]);
        }
    }
    scanf("%d %d %d %d",&startx,&starty,&p,&q);
    head=1;
    tail=1;
    que[tail].x=startx;
    que[tail].y=starty;
    que[tail].s=0;
    tail++;
    book[startx][starty]=1;
    int k,tx,ty;
    int flag=0;
    while(head<tail)
    {
        for(k=0;k<4;k++)
        {
            tx=que[head].x+next[k][0];
            ty=que[head].y+next[k][1];
            if(tx>0&&tx<=n&&ty>0&&ty<=m)
            {
                if(a[tx][ty]==0&&book[tx][ty]==0)
                {
                    book[tx][ty]=1;
                    que[tail].x=tx;
                    que[tail].y=ty;
                    que[tail].s=que[head].s+1;
                    tail++;
                }
            }
            if(tx==p&&ty==q)
            {
                flag=1;
                break;
            }
        }
        if(flag==1)
        {
            break;
        }
        head++;
    }
    printf("%d\n",que[tail-1].s);
    return 0;
}
```

样例输入

```
5 4
0 0 1 0
0 0 0 0
0 0 1 0
0 1 0 0
0 0 0 1
0 0 3 2
```

样例输出

```
7
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210629015218.png)

## 不要输出多余的零

```
%g
```

## 数据类型

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210105214833.png)



## 定义一个未知行数和列数的二维数组

```C
#include <stdio.h>
int main()
{
    int n;
    scanf("%d",&n);
    int **num = (int**)malloc(sizeof(int*)*n);
    int i;
    for(i=0;i<n;i++){
        num[i]=(int*)malloc(sizeof(int)*n);
    }
    int j;
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            scanf("%d",&num[i][j]);
        }
    }

    return 0;
}

```

## 前缀和

前缀和是指某序列的前n项和，可以把它理解为数学上的数列的前n项和，而差分可以看成前缀和的逆运算。合理的使用前缀和与差分，可以将某些复杂的问题简单化。

![20201213215001825](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/202111282131742.png)

### 一维前缀和

输入一个长度为n的整数序列。接下来再输入m个询问，每个询问输入一对l, r。对于每个询问，输出原序列中从第l个数到第r个数的和。

我们很容易想出暴力解法，遍历区间求和。

**代码如下：**

```C
int n,m;
scanf("%d%d",&n,&m);
for(int i=1;i<=n;i++) scanf("%d",&a[i]);
while(m--)
{
    int l,r;
    int sum=0;
    scanf("%d%d",&l,&r);
    for(int i=l;i<=r;i++)
    { 
        sum+=a[i];
    }
    printf("%d\n",sum);
}

```

这样的时间复杂度为`O(n*m)`，如果`n`和`m`的数据量稍微大一点就有可能超时，而我们如果使用前缀和的方法来做的话就能够将时间复杂度降到`O(n+m)`,大大提高了运算效率。

**具体做法：**

首先做一个预处理，定义一个`sum[]`数组，`sum[i]`代表`a`数组中前`i`个数的和。

**求前缀和运算：**

```C
const int N=1e5+10;
int sum[N],a[N]; //sum[i]=a[1]+a[2]+a[3].....a[i];
for(int i=1;i<=n;i++)
{ 
    sum[i]=sum[i-1]+a[i];   
}

```

然后查询操作：

```
 scanf("%d%d",&l,&r);
 printf("%d\n", sum[r]-sum[l-1]);
对于每次查询，只需执行sum[r]-sum[l-1] ，时间复杂度为O(1)
```

原理

sum[r] =a[1]+a[2]+a[3]+a[l-1]+a[l]+a[l+1]......a[r];
sum[l-1]=a[1]+a[2]+a[3]+a[l-1];
sum[r]-sum[l-1]=a[l]+a[l+1]+......+a[r];

![image-20211128213310790](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/202111282133888.png)

### 二维前缀和



![image-20211128213459086](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/202111282134178.png)



知道了两个点的位置和他们的二维前缀和
图中红色是左上角的那个点的二维前缀和
红色+黄色部分是右下角的那个点的二维前缀和
是不是可以用这个来求出他们之间的矩阵的和呢？
也就是这一部分：

![image-20211128213533794](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/202111282135865.png)

```
D - B - C + A
```

![image-20211128213609552](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/202111282136635.png)

```C++
#include<iostream>
#include<cstdio>
#define int long long
using namespace std;
const int Max = 1003;
int a[Max][Max];
int f[Max][Max];
signed main()
{
	freopen("acioi.in","r",stdin);
	int n,m,c;
	cin >> n >> m >> c;
	for(register int i = 1;i <= n;++ i)
		for(register int j = 1;j <= m;++ j)
			cin >> a[i][j],f[i][j] = f[i - 1][j] + f[i][j - 1] - f[i - 1][j - 1] + a[i][j];
	int k;
	cin >> k;
	for(register int i = 1;i <= k;++ i)
	{
		int x1,x2,y1,y2;//x1,y1是左上角的坐标，另一对是右下角的坐标 
		cin >> x1 >> y1 >> x2 >> y2;
		cout << f[x2][y2] - f[x1 - 1][y2] - f[x2][y1 - 1] + f[x1 - 1][y1 - 1]; 
	}
	cout << M << endl; 
	return 0;
}
```







# 2021计设

## 2021年程序设计实践练习1

### 1123：

| duoxida的数字游戏                                            |      |                         |
| ------------------------------------------------------------ | ---- | ----------------------- |
| [ [Submit Code](http://202.197.224.59/exam/index.php/solution/submit/id/1123/exam_id/336) ] [ [Top 20 Runs](http://202.197.224.59/exam/index.php/solution/top20/pid/1123) ] [ [Runs Status](http://202.197.224.59/exam/index.php/solution/onlinestatus/exam_id/336/problem_id/1123) ] |      |                         |
| Acceteped : 892                                              |      | Submit : 2072           |
| Time Limit : 1000 MS                                         |      | Memory Limit : 65536 KB |
|                                                              |      |                         |
| Description                                                  |      |                         |
| 题目描述duoxida很喜欢玩数字游戏，某天无聊的时候，他决定一个人玩数字游戏。他黑板上写下了一行总共有n个数，然后对其重复进行一个操作: 找到从左到右第k个的数x，在数字序列的最右边增加一个x，删除最左边的第一个数字。 duoxida很想知道知道多少次操作后，这个序列就变得完全一样。输入数据的第一行为一个整数t,1<=t<=10，表示测试用例的个数。每组样例的第一行是n，k,(1≤k≤n≤1000)。 接下来一行有n个整数。输出每个用例输出一行，即操作次数，如果这个序列无法变得完全一样，输出"-1"。样例输入`2  3 2  3 1 1  3 1  3 1 1 `样例输出`1  -1` |      |                         |

```c
#include<stdio.h>
int main()
{
    int t;
    scanf("%d", &t);
    while (t--)
    {
        int n, k;
        scanf("%d %d", &n, &k);
        int x[1001];
        for (int i = 0; i < n; i++)
        {
            scanf("%d", &x[i]);
        }
        int flag = 1;
        int a = x[k - 1];
        for (int i = k; i < n; i++)
        {
            if (a != x[i])
            {
                flag = 0;
                break;
            }
        }
        if (flag == 0)
            printf("-1\n");
        else
        {
            int sum = 0;
            for (int i = k - 2; i > 0; i--)
            {
                if (x[i] == a)
                {
                    sum++;
                }
                else
                    break;
            }
            printf("%d\n", k - 1 - sum);
        }
    }
    return 0;
}

```

### 1127：

| 数列                                                         |
| ------------------------------------------------------------ |
| [ [Submit Code](http://202.197.224.59/exam/index.php/solution/submit/id/1127/exam_id/336) ] [ [Top 20 Runs](http://202.197.224.59/exam/index.php/solution/top20/pid/1127) ] [ [Runs Status](http://202.197.224.59/exam/index.php/solution/onlinestatus/exam_id/336/problem_id/1127) ] |
| Acceteped : 567                                              |
| Time Limit : 3000 MS                                         |
|                                                              |
| Description                                                  |
| 题目描述数列生成规则如下：第一项的值为a,第二项的值为b, (0 ≤ a,b ≤ 9)前两项之积，如果为一位数，则为本项的值；如果为两位数，则十位为本项，个位为后一项。比如a=2,b=3,那么数列为2,3,6,1,8,8,...。 请写一个程序，输出数列的第n个元素的值。输入第一行是一个整数K，表示样例的个数。 每个样例的第一行是三个整数a,b,Q(1 ≤ Q ≤ 1,000),其中Q表示查询的次数。 以后的Q行，每行一个整数n,(1 ≤ n ≤ 1,000,000,000)。输出每个样例的每个查询输出一行，即对应元素的值。样例输入`3 2 3 4 1 2 3 4 3 3 4 1 2 3 4 9 9 1 100000000 `样例输出`2 3 6 1 3 3 9 2 2 ` |
|                                                              |
|                                                              |
|                                                              |

```c
#include <stdio.h>
#include <stdlib.h>
void shulie(int b, int c, int m)
{
    int x[1001]={0};
    x[0]=b;x[1]=c;
    int i,o,n,p;
       for(i=2;i<108;i++)
       {
           n=x[i-1]*x[i-2];
                if(n<10)
               x[i]=n;
           else
           {
            x[i]=n/10;
           x[i+1]=n%10;
           i++;
           }
       }
       for(i=0;i<m;i++)
       {
           scanf("%d",&o);
           if(o<108)
            printf("%d\n",x[o-1]);
           else{
            p=(o-108)%8+100;
                printf("%d\n",x[p-1]);
       }
       }
}
int main()
{
    int k, a, b, q, n, i;
    scanf("%d", &k);
    while (k--)
    {
        scanf("%d%d%d", &a, &b, &q);
            shulie(a, b, q);
    }
    return 0;
}
```



### 1163：

| ASCII                                                        |      |                         |
| ------------------------------------------------------------ | ---- | ----------------------- |
| [ [Submit Code](http://202.197.224.59/exam/index.php/solution/submit/id/1163/exam_id/336) ] [ [Top 20 Runs](http://202.197.224.59/exam/index.php/solution/top20/pid/1163) ] [ [Runs Status](http://202.197.224.59/exam/index.php/solution/onlinestatus/exam_id/336/problem_id/1163) ] |      |                         |
| Acceteped : 1654                                             |      | Submit : 5058           |
| Time Limit : 1000 MS                                         |      | Memory Limit : 65536 KB |
|                                                              |      |                         |
| Description                                                  |      |                         |
| 题目描述给你一段ASCII编码的文字，输出其每个字符的ASCII码。输入一段文字，由ASCII码字符组成。输出先输出行号，行号为16进制，占5位，从0开始计数，行号前导为0，然后空一格。 每行最多输出32个字符的ASCII码，每个ASCII码为16进制，占2位，前导为0，中间用空格隔开。 所有16进制使用大写A~F表示10~15。最后一行行末无空格，无换行。样例输入`ACM International Collegiate Programming Contest, I LOVE YOU Lotus is a mystic symbol.  `样例输出`00000 41 43 4D 20 49 6E 74 65 72 6E 61 74 69 6F 6E 61 00001 6C 20 43 6F 6C 6C 65 67 69 61 74 65 20 50 72 6F 00002 67 72 61 6D 6D 69 6E 67 20 43 6F 6E 74 65 73 74 00003 2C 0A 49 20 4C 4F 56 45 20 59 4F 55 0A 4C 6F 74 00004 75 73 20 69 73 20 61 20 6D 79 73 74 69 63 20 73 00005 79 6D 62 6F 6C 2E 20 0A ` |      |                         |
|                                                              |      |                         |

```c
#include<stdio.h>
int main()
{
    char s[100000];
    char c;
    int a = 0;
    while((c=getchar()) != EOF) {
        s[a++] = c;
    }
    int lineCnt;
    int line = 0;
    if(a % 16 == 0) {
        lineCnt = a / 16;
    } else {
        lineCnt = a / 16 + 1;
    }
    for(int i = 0; i < lineCnt - 1; i++) {
        printf("%05X ", line++);
        for(int j = 0; j < 15; j++) {
            printf("%02X ", s[i*16+j]);
        }
        printf("%02X", s[i*16+15]);
        printf("\n");
    }
    printf("%05X ", line++);
    for(int j = 0; j < a%16 - 1; j++) {
        printf("%02X ", s[(lineCnt-1)*16+j]);
    }
    printf("%02X", s[(lineCnt-1)*16+a%16-1]);
    return 0;
 }
```



### 1170：

| ICPC                                                         |      |                         |
| ------------------------------------------------------------ | ---- | ----------------------- |
| [ [Submit Code](http://202.197.224.59/exam/index.php/solution/submit/id/1170/exam_id/336) ] [ [Top 20 Runs](http://202.197.224.59/exam/index.php/solution/top20/pid/1170) ] [ [Runs Status](http://202.197.224.59/exam/index.php/solution/onlinestatus/exam_id/336/problem_id/1170) ] |      |                         |
| Acceteped : 1009                                             |      | Submit : 2432           |
| Time Limit : 1000 MS                                         |      | Memory Limit : 65536 KB |
|                                                              |      |                         |
| Description                                                  |      |                         |
| 题目描述ACM/ICPC比赛涉及的知识点非常多，一个队伍三个人需要能够互补。一个队伍某个知识点的高度是三个人中水平最高的那个人决定。现在给你三个人的每个知识点的水平情况，请计算一下这个队伍的水平。输入存在多个样例。每个样例的第一行是一个整数N(3≤N≤100)，表示所有知识点的个数。 以后三行为每个人每个知识点的水平情况。水平用A到E表示，一共5级，A最强，E最弱，依次递减。输出每个样例输出两行，第一行为一个字符串，一个队伍的各个知识点的水平情况。第二行是5个整数，表示5个级别知识点的个数,每个整数之间有一个空格。样例输入`3 ABC BBB AAE 4 DDBD DEDC CDDE 0 `样例输出`AAB 2 1 0 0 0 CDBC 0 1 2 1 0 ` |      |                         |



```c
#include<stdio.h>
int main()
{
    int n;
    while(scanf("%d",&n))
    {
        if(n==0)
        {
            return 0;
        }
        getchar();
        char x[3][100];
        int i,j;
        for(i=0;i<3;i++)
        {
            for(j=0;j<n;j++)
            {
                scanf("%c",&x[i][j]);
            }
            getchar();
            
        }
    char max[100];
    int t=0;
    for(j=0;j<n;j++){    
    char max1=x[0][j];
        for(i=0;i<3;i++)
        {
            
            if(max1>x[i][j])
            {
                max1=x[i][j];
            }    
        }
        max[t]=max1;
        t++;
    }
    int a=0,b=0,c=0,d=0,e=0;
    for(i=0;i<t;i++)
    {
        printf("%c",max[i]);
        
        if(max[i]=='A')
        {
            a++;
        }
        else if(max[i]=='B')
        {
            b++;
        }
        else if(max[i]=='C')
        {
            c++;
        }
        else if(max[i]=='D')
        {
            d++;
        }
        else
        {
            e++;
        }
    }
    printf("\n");
    printf("%d %d %d %d %d\n",a,b,c,d,e);
    }
 
    return 0;
 } 
```



### 1241:

| Permutation                                                  |      |                         |
| ------------------------------------------------------------ | ---- | ----------------------- |
| [ [Submit Code](http://202.197.224.59/exam/index.php/solution/submit/id/1241/exam_id/336) ] [ [Top 20 Runs](http://202.197.224.59/exam/index.php/solution/top20/pid/1241) ] [ [Runs Status](http://202.197.224.59/exam/index.php/solution/onlinestatus/exam_id/336/problem_id/1241) ] |      |                         |
| Acceteped : 1179                                             |      | Submit : 2750           |
| Time Limit : 1000 MS                                         |      | Memory Limit : 65536 KB |
|                                                              |      |                         |
| Description                                                  |      |                         |
| ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210627165947.png) |      |                         |



| 输入第一行是一个整数K(1≤K≤1000)，表示样例的个数。 每个样例占一行，第一个整数是n(1≤n≤100)，以后的n个整数xi,1≤xi≤n且 xi是唯一的, (1x12x2⋯⋯nxn)表示一个置换。输出输出一个样例的结果。样例输入`3 3 1 2 3 3 2 1 3 3 2 3 1 `样例输出`1 2 3 ` |
| ------------------------------------------------------------ |
|                                                              |



```c
#include<stdio.h>
int gcd(int a,int b) {
    if(b==0) return a;
    return gcd(b,a%b);
}
int main()
{
    int k;
    scanf("%d",&k);
    while(k--){
        int n;
        scanf("%d",&n);
        int num[120];
        for(int i = 1 ;i <= n;i++)
        {
            scanf("%d",&num[i]);
        }
            
        long long int res = 1;
        for(int i = 1 ;i <= n;i++){
            long long int tmp = 1;
            int pos = num[i];
            while(pos!=i){
                tmp++;
                pos = num[pos];
            }
            res = res * tmp /gcd(res,tmp);
        }
        printf("%d\n",res);
    }
    return 0;
}
```

### 1251:

| Colombian Number                                             |      |                         |
| ------------------------------------------------------------ | ---- | ----------------------- |
| [ [Submit Code](http://202.197.224.59/exam/index.php/solution/submit/id/1251/exam_id/336) ] [ [Top 20 Runs](http://202.197.224.59/exam/index.php/solution/top20/pid/1251) ] [ [Runs Status](http://202.197.224.59/exam/index.php/solution/onlinestatus/exam_id/336/problem_id/1251) ] |      |                         |
| Acceteped : 2630                                             |      | Submit : 6299           |
| Time Limit : 1000 MS                                         |      | Memory Limit : 65536 KB |
|                                                              |      |                         |
| Description                                                  |      |                         |
| Colombian Number题目描述对于正整数n,不存在整数k,使得n等于k加上k的数码累加和，我们称这样的数是哥伦比亚数或者自我数。 比如 11就不是一个哥伦比亚数，因为10加上10的数码累加和1等于11;而20则是一个哥伦比亚数。输入第一行是一个整数K(K≤10,000)，表示样例的个数。 以后每行一个正整数n(1≤n≤1,000,000,000)输出每行输出一个样例的结果，如果是哥伦比亚数输出"Yes",否则输出"No"。样例输入`5 1 2 3 20 21 `样例输出`Yes No Yes Yes No` |      |                         |

```c

#include<stdio.h>
int Colnum(int i)
{
    int m = i;
    while(i != 0)
    {
        m += i%10;
        i /= 10;
    }
    return m;
}
int main()
{
    int t;
    scanf("%d",&t);
    while(t--)
    {
        int n,i;
        int flag = 1;
        scanf("%d",&n);
        for(i = n-1; i > 0 && i > n-81; i--)
        {
            if(Colnum(i) == n)
            {
                flag = 0;
                break;
            }
        }
        if(flag==1)
        {
            printf("Yes\n");
        }
            
        else
        {
            printf("No\n");
        }
            
    }
    return 0;
}
```

