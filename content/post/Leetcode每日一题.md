---
title: Leetcode每日一题
author: kif
tags:
  - leetcode
categories: []
abbrlink: 266d
date: 2022-04-27 17:33:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204271735838.png
coverWidth: 1200
coverHeight: 750
---





```

## title:

### time:

### link:

### code:

```



## title:[1582. 二进制矩阵中的特殊位置](https://leetcode.cn/problems/special-positions-in-a-binary-matrix/)

## time:9.4

## code:

```tsx
function numSpecial(mat: number[][]): number {
    let count: number = 0;
    for (let i: number = 0; i < mat.length; i++) {
        for (let j: number = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1 && mat[i].indexOf(1) == j && mat[i].lastIndexOf(1) == j) {
                let list: Array<number> = []
                mat.forEach(item => {
                    list.push(item[j])
                })

                if (list.lastIndexOf(1) == i && list.indexOf(1) == i) {
                    count++
                }
            }
        }
    }
    return count;
};
```





## title:[646. 最长数对链](https://leetcode.cn/problems/maximum-length-of-pair-chain/)

## time:9.4

## code:

```tsx
function findLongestChain(pairs: number[][]): number {
    const n:number = pairs.length;
    pairs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(n).fill(1);
    for (let i :number= 0; i < n; i++) {
        for (let j:number = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[n - 1];
};
```



## title:[464. 我能赢吗](https://leetcode.cn/problems/can-i-win/)

### time:5.22

### code:

```go
func canIWin(maxChoosableInteger, desiredTotal int) bool {
    if (1+maxChoosableInteger)*maxChoosableInteger/2 < desiredTotal {
        return false
    }

    dp := make([]int8, 1<<maxChoosableInteger)
    for i := range dp {
        dp[i] = -1
    }
    var dfs func(int, int) int8
    dfs = func(usedNum, curTot int) (res int8) {
        dv := &dp[usedNum]
        if *dv != -1 {
            return *dv
        }
        defer func() { *dv = res }()
        for i := 0; i < maxChoosableInteger; i++ {
            if usedNum>>i&1 == 0 && (curTot+i+1 >= desiredTotal || dfs(usedNum|1<<i, curTot+i+1) == 0) {
                return 1
            }
        }
        return
    }
    return dfs(0, 0) == 1
}

```



## title:[417. 太平洋大西洋水流问题](https://leetcode-cn.com/problems/pacific-atlantic-water-flow/)

### time:

### link:

### code:



## 796. 旋转字符串

### time: 

2022/04/07 10:28

### link:

https://leetcode-cn.com/problems/rotate-string/

### code:

```js
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function (s, goal) {
    let length = s.length;
    let s1 = s
    let sr = s.concat(s1)
    let i = 0;
    let j = length;
    while (length--) {
        let x = sr.slice(i, j);
        if (x == goal) {
            return true
        }
        i++;
        j++;
    }
    return false
};
let s = "abcde";
let goal = "abced"
console.log(rotateString(s, goal))
```







## 806. 写字符串需要的行数

### time:

2022/04/12 19:36

### link:

https://leetcode-cn.com/problems/number-of-lines-to-write-string/

### code:

```js
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let col = 0
    let row = 0
    let w = 0
    let fail = 0
    for (let i = 0; i < s.length; i++) {
        let index = Number(s[i]) - 97
        w = widths[index]
        col += w
        fail = col
        if (col == 100) {
            row++
            col = 0
        } else if (col > 100) {
            i--
            row++
            col = 0
        }
    }
    console.log(row, fail)
};
let widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
let S = "abcdefghijklmnopqrstuvwxyz"
numberOfLines(widths,S)
```



## 1672. 最富有客户的资产总量
### time

2022/04/14 19:10

### link:
https://leetcode-cn.com/problems/richest-customer-wealth/

### code 

```js
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let ans=[]
    for(let i=0;i<accounts.length;i++){
        let sum=0;
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j]
        }
        ans.push(sum)
    }
    return Math.max(...ans)
};
let accounts = [[1, 2, 3], [3, 2, 1]]
console.log(maximumWealth(accounts))
```





## 253 . 会议室 II

### time:

2022/04/14 21:22

### link

https://leetcode-cn.com/problems/meeting-rooms-ii/submissions/

### code

```js

```



## [1446. 连续字符](https://leetcode-cn.com/problems/consecutive-characters/)

### time:

2021/12/12 22:12

### code:

```go
package main

import "fmt"

func main() {
	s := ""
	fmt.Scanln(&s)
	ans := maxPower(s)
	fmt.Println(ans)

}
func maxPower(s string) int {
	ans, cnt := 1, 1
	for i := 0; i < len(s)-1; i++ {
		if s[i] == s[i+1] {
			cnt += 1
			if ans < cnt {
				ans = cnt
			}

		} else {
			cnt = 1
		}
	}

	return ans
}

```



## [506. 相对名次](https://leetcode-cn.com/problems/relative-ranks/)

### time:

### code:



## [807. 保持城市天际线](https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/)

### time:

2021/12/13 11:17

### code

```go
package main

import "fmt"

func main() {
	grid := [][]int{
		{3, 0, 8, 4},
		{2, 4, 5, 7},
		{9, 2, 6, 3},
		{0, 3, 1, 0},
	}
	ans := maxIncreaseKeepingSkyline(grid)
	fmt.Println(ans)

}
func maxIncreaseKeepingSkyline(grid [][]int) int {
	ans := 0
	rowMax := make([]int, len(grid))
	colMax := make([]int, len(grid))
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid); j++ {
			rowMax[i] = Max(rowMax[i], grid[i][j])
			colMax[j] = Max(colMax[j], grid[i][j])
		}
	}
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid); j++ {
			ans = ans + (Min(rowMax[i], colMax[j]) - grid[i][j])
		}
	}
	return ans

}
func Max(a, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}
func Min(a, b int) int {
	if a > b {
		return b
	} else {
		return a
	}
}

```



## [1518. 换酒问题](https://leetcode-cn.com/problems/water-bottles/)

### time:

2021/12/17 21:36

### code:

```go
package main

import "fmt"

func main() {
	var numBottles, numExchange int
	fmt.Scanf("%d %d", &numBottles, &numExchange)
	ans := numWaterBottles(numBottles, numExchange)
	fmt.Println(ans)
}
func numWaterBottles(numBottles int, numExchange int) int {
	sum := numBottles
	for numBottles >= numExchange {
		s := numBottles % numExchange
		sum += numBottles / numExchange
		numBottles = numBottles/numExchange + s
	}
	return sum
}

```



## [419. 甲板上的战舰](https://leetcode-cn.com/problems/battleships-in-a-board/)

### time：

 2021/12/18 11:08

### code:

```go
package main

import "fmt"

func main() {
	var board = [][]byte{}

	fmt.Println(countBattleships(board))
}
func countBattleships(board [][]byte) (ans int) {
	m, n := len(board), len(board[0])
	for i, row := range board {
		for j, ch := range row {
			if ch == 'X' {
				row[j] = '.'
				for k := j + 1; k < n && row[k] == 'X'; k++ {
					row[k] = '.'
				}
				for k := i + 1; k < m && board[k][j] == 'X'; k++ {
					board[k][j] = '.'
				}
				ans++
			}
		}
	}
	return
}

```



## [997. 找到小镇的法官](https://leetcode-cn.com/problems/find-the-town-judge/)

### time:

 2021/12/19 21:14

### code:

```go
package main

import "fmt"

func main() {

	trust := [][]int{
		{1, 3},
		{1, 4},
		{2, 3},
		{2, 4},
		{4, 3},
	}
	n := 4
	ans := findJudge(n, trust)
	fmt.Println(ans)

}
func findJudge(n int, trust [][]int) int {
	if n == 1 {
		return 1
	}
	List1 := make(map[int]int, 0)
	List2 := make(map[int]int, 0)
	for _, v := range trust {
		List1[v[0]]++
		List2[v[1]]++

	}

	for f, x := range List2 {
		_, ok := List1[f]
		if !ok && x == n-1 {
			return f
		}
	}
	return -1

}

```



## [1154. 一年中的第几天](https://leetcode-cn.com/problems/day-of-the-year/)

### time:

 2021/12/21 22:41

### code:

```go
package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {

	s := "2004-03-01"
	ans := dayOfYear(s)
	fmt.Println(ans)
}
func dayOfYear(date string) int {

	year, _ := strconv.Atoi(strings.Split(date, "-")[0])
	mon, _ := strconv.Atoi(strings.Split(date, "-")[1])
	day, _ := strconv.Atoi(strings.Split(date, "-")[2])
	sum := day
	if mon > 2 {
		Flag := Year(year)
		if Flag == 1 {
			sum += 29
		} else {
			sum += 28
		}
	}

	for i := mon - 1; i > 0; i-- {
		if i != 2 {
			sum += montn(i)
		}
	}
	return sum
}
func Year(year int) int {

	if year%4 == 0 && year%100 != 0 || year%400 == 0 {
		return 1
	} else {
		return 0
	}
}
func montn(mon int) int {
	if mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon == 12 {
		return 31
	} else {
		return 30
	}
}

```



## [686. 重复叠加字符串匹配](https://leetcode-cn.com/problems/repeated-string-match/)

### time:

2021/12/22 16:11

### code:

```go
package main

import (
	"fmt"
	"strings"
)

func main() {

	a := "abcabcabcabc"
	b := "abac"
	ans := repeatedStringMatch(a, b)
	fmt.Println(ans)

}
func repeatedStringMatch(a string, b string) int {
	//flag := strings.Contains(b, a)
	//if flag {
	for _, v := range b {
		if strings.Contains(a, string(v)) == false {
			return -1
		}
	}
	count := 0
	str := ""
	x := strings.Contains(str, b)
	for x == false {
		str += a
		x = strings.Contains(str, b)
		count++
		if count>=2*len(a)+len(b){
			return -1
		}
	}
	return count
	//} else {
	//	return -1
	//}

}

```

## [1001. 网格照明](https://leetcode-cn.com/problems/grid-illumination/)

### time:



### code:

```go
func gridIllumination(n int, lamps, queries [][]int) []int {
    type pair struct{ x, y int }
    points := map[pair]bool{}
    row := map[int]int{}
    col := map[int]int{}
    diagonal := map[int]int{}
    antiDiagonal := map[int]int{}
    for _, lamp := range lamps {
        r, c := lamp[0], lamp[1]
        p := pair{r, c}
        if points[p] {
            continue
        }
        points[p] = true
        row[r]++
        col[c]++
        diagonal[r-c]++
        antiDiagonal[r+c]++
    }

    ans := make([]int, len(queries))
    for i, query := range queries {
        r, c := query[0], query[1]
        if row[r] > 0 || col[c] > 0 || diagonal[r-c] > 0 || antiDiagonal[r+c] > 0 {
            ans[i] = 1
        }
        for x := r - 1; x <= r+1; x++ {
            for y := c - 1; y <= c+1; y++ {
                if x < 0 || y < 0 || x >= n || y >= n || !points[pair{x, y}] {
                    continue
                }
                delete(points, pair{x, y})
                row[x]--
                col[y]--
                diagonal[x-y]--
                antiDiagonal[x+y]--
            }
        }
    }
    return ans
}
```



## [1342. 将数字变成 0 的操作次数](https://leetcode-cn.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

### time:

 2022/01/31 13:39

### code:

```go
package main

// func main() {
// 	x := 123
// 	ans := numberOfSteps(x)
// 	fmt.Println(ans)

// }
func numberOfSteps(num int) int {
	count := 0
	for num != 0 {
		if num%2 == 0 {
			num = num / 2
			count++
		} else {
			num = num - 1
			count++
		}
	}
	return count
}

```



## [1491. 去掉最低工资和最高工资后的工资平均值](https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/)

### time:

 2022/01/31 18:06

### code:

```go
package main

import "fmt"

func main() {
	salary := []int{8000, 9000, 2000, 3000, 6000, 1000}
	ans := average2(salary)
	fmt.Println(ans)
}
func average2(salary []int) float64 {
	M := salary[0]
	N := salary[0]
	var sum float64
	for item := range salary {
		sum = sum + float64(salary[item])
		if salary[item] > M {
			M = salary[item]
		}
		if salary[item] < N {
			N = salary[item]
		}

	}
	return (sum - float64(M) - float64(N)) / float64(len(salary)-2)
}

func average(salary []int) float64 {
	M := max(salary)
	N := min(salary)
	var sum float64
	for j := 0; j < len(salary); j++ {
		if j != M && j != N {
			sum = sum + float64(salary[j])
		}

	}
	return sum / float64(len(salary)-2)

}
func max(salary []int) int {
	max := 0

	for i := 1; i < len(salary); i++ {
		if salary[max] < salary[i] {
			max = i
		}
	}
	return max

}
func min(salary []int) int {
	min := 0
	for i := 1; i < len(salary); i++ {
		if salary[min] > salary[i] {
			min = i
		}
	}
	return min
}

```





## [1523. 在区间范围内统计奇数数目](https://leetcode-cn.com/problems/count-odd-numbers-in-an-interval-range/)

### time:



2022/01/31 13:53

### code:

```go
package main

// import "fmt"

// func main() {
// 	low := 3
// 	high := 7
// 	x := countOdds(low, high)
// 	fmt.Println(x)

// }
func countOdds(low int, high int) int {
	if low%2 == 0 && high%2 == 0 {
		return (high - low) / 2
	} else {
		return (high-low)/2 + 1
	}

}

```



## [2000. 反转单词前缀](https://leetcode-cn.com/problems/reverse-prefix-of-word/)

### time:

2022/02/03 15:09

### code:

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	word := "abcd"
	var ch byte = 'z'
	ans := reversePrefix(word, ch)
	fmt.Println(ans)

}
func reversePrefix(word string, ch byte) string {
	index := strings.IndexByte(word, ch)
	if index == -1 {
		return word
	}

	ans := reverse(word, index)
	return ans

}
func reverse(str string, index int) string {
	// write code here
	r := []rune(str)
	for i, j := 0, index; i < j; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r)
}

```

## [1414. 和为 K 的最少斐波那契数字数目](https://leetcode-cn.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/)

### time:

2022/02/03 15:56

### code:

```js
package main

import "fmt"

func main() {

	k := 19
	ans := findMinFibonacciNumbers(k)
	fmt.Println(ans)

}
func findMinFibonacciNumbers(k int) int {
	num := []int{1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733}
	//num := []int{1, 2, 3, 5, 8, 13, 21, 34}
	count := 0

	for i := len(num) - 1; i >= 0; i-- {
		if k == 0 {
			break
		}

		if num[i] <= k {
			count++
			k -= num[i]

		}

	}
	return count
}

```



## [1725. 可以形成最大正方形的矩形数目](https://leetcode-cn.com/problems/number-of-rectangles-that-can-form-the-largest-square/)



### time:

2022/02/05 14:37

### code:



```go
package main

import "fmt"

func main() {
	rectangles := [][]int{{5, 8}, {3, 9}, {3, 12}}
	ans := countGoodRectangles(rectangles)
	fmt.Println(ans)

}
func countGoodRectangles(rectangles [][]int) int {
	num := make(map[int]int, 0)
	for item := range rectangles {
		if rectangles[item][0] < rectangles[item][1] {
			num[rectangles[item][0]]++
		} else {
			num[rectangles[item][1]]++
		}
	}
	ans := 0
	for i := range num {
		fmt.Println(i)
		if i > ans {
			ans = i
		}
	}
	return num[ans]
}

```

## [1748. 唯一元素的和](https://leetcode-cn.com/problems/sum-of-unique-elements/)

### time:

2022/02/06 19:47

### code:

```go
package main

import "fmt"

func main() {
	nums := []int{1, 2, 3, 4,5}
	ans := sumOfUnique(nums)
	fmt.Println(ans)
}
func sumOfUnique(nums []int) int {
	m := make(map[int]int, 0)
	for i := range nums {
		m[nums[i]]++
	}
	sum := 0
	for key, value := range m {
		if value == 1 {
			sum += key
		}
	}
	return sum
}

```

