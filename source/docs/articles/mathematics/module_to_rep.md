---
sidebarDepth: 2
---

::: danger
工事中！
:::

# $k[G]$-加群と有限群の表現との対応関係まとめ

::: tip 概要
有限群の表現論を勉強していたんですけど、どうやら群環$k[G]$上の加群$V$と、$G$のベクトル空間$V$における表現$\varphi\ : \ G\longrightarrow GL(V)$が対応しているらしいので、それを軽くみやすい形でまとめてみました.
:::

## 対応表

::: tip 記号の定義

:::

| $k[G]$-module | linear rep. $\varphi$ |
|------------------------------:|:------------------------------|
| $\varphi : G\longrightarrow GL(V)$が$k$-ベクトル空間上の$G$の線形表現 | $V$ は$k[G]$-加群 |
| $\varphi \sim \psi$ 表現$\varphi$と$\psi$が同値 | $k[G]$-加群$V, U$が$k[G]$-加群として同型 |
| $G$についての(左)正規表現$\varphi$ | $k[G]$を作用として$k[G]$-加群の構造を与えられた群環$k[G]$ |
| 表現$\varphi, \psi$の直和$\varphi\oplus\psi$ | $k[G]$-加群$V,U$の直和$V\oplus U$ |
| $W\subset V$が表現$\varphi$についての$G$不変部分空間 | $W$が$k[G]$-加群$V$の$k[G]$-部分加群 |
| 表現$\varphi$が既約表現 | $k[G]$-加群$V$が単純加群 |
| $G$不変部分空間$W$における部分表現$\varphi_W$ | $W$が$V$の$k[G]$-部分加群 |
| $G$不変部分空間 |  |

## 解説

### 言葉の定義と性質

#### 環上の加群とその準同型

#### 群環と多元環

#### 有限群の線形表現

::: warning 
特に断らない限り、$R$は環、$k$は体、$V$は$k$上のベクトル空間とします.
:::

### k[G]-加群と表現の対応

$\varphi : G\longrightarrow GL(V)$が与えられている時、$k$-ベクトル空間$V$(要するに$k$-加群)に対して、$k[G]$の作用を$\varphi$に対応して次のように定めると、
<div style="text-align: center;">
$\left(\sum_{\sigma\in G}a_\sigma\sigma\right)v = \sum_{\sigma\in G}a_\sigma\left(\varphi(\sigma)v\right)$
</div>

この作用により、$V$は$k[G]$-加群と見ることができ、それぞれの$\varphi$に対して$k[G]$-加群がそれぞれ構成できる.

逆に、$k[G]$-加群$V$が与えられた時、($G\subset k[G]$に注意して、)各$\sigma\in G$に対して、

<div style="text-align: center;">

$\sigma : V\longrightarrow V$<br>
$\ \ \ \ \ \ \ \ \ \ \ v\longmapsto \sigma(v)$

</div>

を考えることができる.
各$\sigma\in G$が$V$に及ぼす作用を記した写像$\varphi : G\longrightarrow \{V\longrightarrow V\}$を考えると、
$V$は$k[G]$-加群だから、
1. 作用の定義より、
$\varphi(\sigma\rho)(v) = \varphi(\sigma)\varphi(\rho v) = \varphi(\sigma)\varphi(\rho)(v)$
よって、$\varphi(\sigma)$
2. 作用の分配則とスカラー倍の規則より、
$\varphi(a_\sigma\sigma + a_\rho\rho)(v) = a_\sigma\varphi(\sigma)(v) + a_\rho\varphi(\rho)(v)$
が成り立つ.
よって、$\varphi$は線形写像であることがわかる.


### Schurの補題の表し方

Schurの補題を加群の言葉で言うと、
- $R$-単純加群$M, N$の間の加群の準同型$f : M\longrightarrow N$は、$0$または同型

表現の言葉で言うと、
- 既約表現$\varphi : G\longrightarrow GL(V)$と既約表現$\psi : G\longrightarrow GL(U)$について、ベクトル空間$V, U$間の線形写像$P : V\longrightarrow U$が以下の性質を満たすならば、$P$は$0$または同型であり、${\rm dim} V= {\rm dim} U$
<div style="text-align: center;">
$\forall g\in G.\ P\circ \varphi(g) = \psi(g)\circ P$
</div>

### Maschkeの定理の表し方

## 参考文献

- [代数学2 環上の加群, 桂 利行 著, 東京大学出版会](http://www.utp.or.jp/book/b305602.html)

