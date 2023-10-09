import{_ as e}from"./wechatpublic-6d7ffb69.js";import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c,b as o,e as r}from"./app-c57f0ec1.js";const i={},n=r('<h1 id="java-简介" tabindex="-1"><a class="header-anchor" href="#java-简介" aria-hidden="true">#</a> Java 简介</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><div class="hint-container tip"><p class="hint-container-title">原文</p></div><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>本章节中，主要介绍 <code>Java</code> 中的主要特性和发展历史。以及作为新手，日常学习中对 <code>Java</code> 语言的误解。</p><h2 id="二、主要特性" tabindex="-1"><a class="header-anchor" href="#二、主要特性" aria-hidden="true">#</a> 二、主要特性</h2><h3 id="_1-简单性" tabindex="-1"><a class="header-anchor" href="#_1-简单性" aria-hidden="true">#</a> 1. 简单性</h3><p>语法类似于 <code>C++</code> 语言，方便大多程序开发者能够简单地学习和实践。此外，抛弃了 <code>C++</code> 中复杂的语言特性，如操作符重载、多继承、自动强类型转换等，降低了程序开发者上手难度。<code>Java</code> 中移除了指针的概念，也提供了内容空间的自动分配与回收，使得内存管理也更加方便。</p><h3 id="_2-面向对象" tabindex="-1"><a class="header-anchor" href="#_2-面向对象" aria-hidden="true">#</a> 2. 面向对象</h3><p>面向对象是一种程序设计技术，将重点从过程集中到对象和对象的接口上。<code>Java</code> 提供类、接口和集成等面向对象的特性，抛弃了类之间复杂的多继承，仅支持单继承，但同时支持接口的多继承。</p><h3 id="_3-分布式" tabindex="-1"><a class="header-anchor" href="#_3-分布式" aria-hidden="true">#</a> 3. 分布式</h3><p><code>Java</code> 拥有丰富的类库，可处理 <code>HTTP</code> 和 <code>FTP</code> 类的协议请求。因此，<code>Java</code> 能够访问和打开网络上的资源，开发网络应用。</p><h3 id="_4-健壮性" tabindex="-1"><a class="header-anchor" href="#_4-健壮性" aria-hidden="true">#</a> 4. 健壮性</h3><p><code>Java</code> 中，没有了 <code>C++</code> 中类的多继承、指针等概念。同时它的强类型机制、异常处理机制、垃圾回收机制等都为 <code>Java</code> 程序的健壮性提供了重要保障。</p><h3 id="_5-安全性" tabindex="-1"><a class="header-anchor" href="#_5-安全性" aria-hidden="true">#</a> 5. 安全性</h3><p>开发网络应用时，安全性十分重要。利用 <code>Java</code> 的诸多安全特性能够构建防病毒、防篡改系统。</p><h3 id="_6-体系结构中立" tabindex="-1"><a class="header-anchor" href="#_6-体系结构中立" aria-hidden="true">#</a> 6. 体系结构中立</h3><p><code>Java</code> 源代码经编译后成为字节码，字节码能够在实现了 <code>Java</code> 虚拟机的各种系统中运行，无视系统差异。</p><h3 id="_7-可移植性" tabindex="-1"><a class="header-anchor" href="#_7-可移植性" aria-hidden="true">#</a> 7. 可移植性</h3><p>正是由于 <code>Java</code> 的体系结构中立，才有了适合分发和高度可移植的特点。</p><h3 id="_8-解释型" tabindex="-1"><a class="header-anchor" href="#_8-解释型" aria-hidden="true">#</a> 8. 解释型</h3><p><code>Java</code> 经编译后形成字节码文件，然后由虚拟机来解释这些字节码并执行，因此说 <code>Java</code> 是一门解释型语言。</p><h3 id="_9-高性能" tabindex="-1"><a class="header-anchor" href="#_9-高性能" aria-hidden="true">#</a> 9. 高性能</h3><p>相比于其他编译型编程语言，<code>Java</code> 性能毋庸置疑，同时，引入即时编译器，其性能已经和 <code>C++</code> 相差不大，在某些场景下甚至更胜一筹。</p><h3 id="_10-多线程" tabindex="-1"><a class="header-anchor" href="#_10-多线程" aria-hidden="true">#</a> 10. 多线程</h3><p>大量请求的场景下，单线程的交互响应和实时行为变得十分缓慢。随着摩尔定律的终结，多线程的引入，无疑会带来更加快速的交互响应和实时行为，大大提升体验。</p><h3 id="_11-动态性" tabindex="-1"><a class="header-anchor" href="#_11-动态性" aria-hidden="true">#</a> 11. 动态性</h3><p>随着各种应用场景的不断涌现，<code>Java</code> 也在动态适应变化的环境。<code>Java</code> 中所需的类既能动态加载到内存中，也能通过网络来载入，也更有利于软件的迭代升级。</p><h2 id="三、发展简史" tabindex="-1"><a class="header-anchor" href="#三、发展简史" aria-hidden="true">#</a> 三、发展简史</h2><p>1990 年代初，<code>Sun</code> 公司的詹姆斯·高斯林等人为了实现电视机、电话、闹钟等家用电器的控制和通信，开发了一套用于设置在家用电器等小型系统中的编程语言。在当时，这门语言被命名为 <code>Oka</code>。但由于市场需求不高，所以该计划被逐渐放弃。</p><p>随着 1990 年代互联网的发展，<code>Sun</code> 公司发现 <code>Oka</code> 语言在互联网中的应用前景广泛。于是决定对 <code>Oka</code> 进行改造，并在 1995 年 5 月以 <code>Java</code> 的名义正式发布。</p><p>随着互联网的迅猛发展，Java 也得以逐渐成为重要的网络编程语言，詹姆斯·高斯林也被大家公认为 <code>Java</code> 之父。</p><p>到了 2009 年， <code>Sun</code> 公司被 <code>Oracle</code> 公司所收购，自此 <code>Java</code> 成为 <code>Oracle</code> 公司的一大产品直至今日。</p><p>以下是截止到本文写作时间 <code>Java</code> 的历史年表，累计经过了 21 次主要版本更新，目前来到了 <code>JDK</code> 21。不过虽然 <code>Java</code> 已经经历了这么多版本的更新，但国内目前用的最多的应该还是 <code>JDK</code> 1.8 版本。而出于对稳定性的考虑，企业开发更喜欢 <code>LTS</code> 版本，这也是为什么至今 <code>JDK</code> 1.8 还占有如此高的市场比例。</p><table><thead><tr><th style="text-align:left;">版本</th><th style="text-align:left;">发布日期</th><th style="text-align:left;">主要事件</th></tr></thead><tbody><tr><td style="text-align:left;">JDK Beta</td><td style="text-align:left;">1995</td><td style="text-align:left;"><code>Java</code> 语言发布，用 <code>Java</code> 实现的浏览器和 <code>Java Applet</code> 被大量应用</td></tr><tr><td style="text-align:left;">JDK 1.0</td><td style="text-align:left;">1996 年 1 月</td><td style="text-align:left;">奠定了 <code>JDK</code>、<code>JRE</code>、<code>JVM</code> 的体系结构</td></tr><tr><td style="text-align:left;">JDK 1.1</td><td style="text-align:left;">1997 年 2 月</td><td style="text-align:left;">加入 <code>JIT</code>，提升 <code>JDK</code> 效率</td></tr><tr><td style="text-align:left;">J2SE 1.2</td><td style="text-align:left;">1998 年 12 月</td><td style="text-align:left;">确立 <code>J2SE</code>、<code>J2EE</code>、<code>J2ME</code> 产品结构</td></tr><tr><td style="text-align:left;">J2SE 1.3</td><td style="text-align:left;">2000 年 5 月</td><td style="text-align:left;">内置 <code>HotSpot JVM</code></td></tr><tr><td style="text-align:left;">J2SE 1.4</td><td style="text-align:left;">2002 年 2 月</td><td style="text-align:left;"><code>XML</code> 处理、断言、支持正则表达式</td></tr><tr><td style="text-align:left;">J2SE 5.0</td><td style="text-align:left;">2004 年 9 月</td><td style="text-align:left;">静态导入、泛型、<code>for-each</code> 循环、自动拆，装箱、枚举、可变参数</td></tr><tr><td style="text-align:left;">JDK 6</td><td style="text-align:left;">2006 年 12 月</td><td style="text-align:left;">提供动态语言支持、同步垃圾回收</td></tr><tr><td style="text-align:left;">JDK 7</td><td style="text-align:left;">2011 年 7 月</td><td style="text-align:left;">字符串的 <code>switch</code> 语句、多异常捕抓</td></tr><tr><td style="text-align:left;"><strong>JDK 8 (LTS)</strong></td><td style="text-align:left;">2014 年 3 月</td><td style="text-align:left;"><code>Lambda</code> 表达式</td></tr><tr><td style="text-align:left;">JDK 9</td><td style="text-align:left;">2017 年 9 月</td><td style="text-align:left;">轻量级 <code>json API</code>、垃圾收集机制更新</td></tr><tr><td style="text-align:left;">JDK 10</td><td style="text-align:left;">2018 年 3 月</td><td style="text-align:left;">局部变量类型推断，<code>Java</code> 后续版本快速迭代更新</td></tr><tr><td style="text-align:left;"><strong>JDK 11 (LTS)</strong></td><td style="text-align:left;">2018 年 9 月</td><td style="text-align:left;">常用类增强，<code>JDK</code> 11 是继 <code>JDK</code> 8 之后的首个长期支持本版</td></tr><tr><td style="text-align:left;">JDK 12</td><td style="text-align:left;">2019 年 3 月</td><td style="text-align:left;"><code>switch</code> 表达式增强</td></tr><tr><td style="text-align:left;">JDK 13</td><td style="text-align:left;">2019 年 9 月</td><td style="text-align:left;">文本块支持</td></tr><tr><td style="text-align:left;">JDK 14</td><td style="text-align:left;">2020 年 3 月</td><td style="text-align:left;"><code>instanceof</code> 支持模式匹配</td></tr><tr><td style="text-align:left;">JDK 15</td><td style="text-align:left;">2020 年 9 月</td><td style="text-align:left;"><code>EdDSA</code> 数字签名算法、 密封类、隐藏类</td></tr><tr><td style="text-align:left;">JDK 16</td><td style="text-align:left;">2021 年 3 月</td><td style="text-align:left;">启用 <code>C++ 14</code> 语言特性、向量 <code>API</code></td></tr><tr><td style="text-align:left;"><strong>JDK 17 (LTS)</strong></td><td style="text-align:left;">2021 年 9 月</td><td style="text-align:left;">恢复总是严格的浮点语义、增强型伪随机数生成器</td></tr><tr><td style="text-align:left;">JDK 18</td><td style="text-align:left;">2022 年 3 月</td><td style="text-align:left;">默认 <code>UTF-8</code> 编码、代码片段、简单的网络服务器</td></tr><tr><td style="text-align:left;">JDK 19</td><td style="text-align:left;">2022 年 9 月</td><td style="text-align:left;">记录模式、外部函数与内存 <code>API</code>、<code>Linux</code>/<code>RISC-V</code> 移植、虚拟线程、结构化并发</td></tr><tr><td style="text-align:left;">JDK 20</td><td style="text-align:left;">2023 年 3 月</td><td style="text-align:left;">1. 作用域值<br>2. 记录模式<br>3. <code>switch</code> 模式匹配<br>4. 外部函数和内存 <code>API</code><br>5. 虚拟线程<br>6. 结构化并发<br>7. 向量 <code>API</code></td></tr><tr><td style="text-align:left;"><strong>JDK 21（LTS）</strong></td><td style="text-align:left;">2023 年 9 月</td><td style="text-align:left;">1. 分代 <code>ZGC</code><br>2. 序列集合<br>3. 弃用 <code>Windows</code> 32 位 <code>x86</code><br>4. 密钥封装机制 <code>API</code><br>5. 字符串模板<br>6. 未命名类和实例主方法</td></tr></tbody></table><h2 id="四、常见误解" tabindex="-1"><a class="header-anchor" href="#四、常见误解" aria-hidden="true">#</a> 四、常见误解</h2><h3 id="_1-javascript-是-java-的子集" tabindex="-1"><a class="header-anchor" href="#_1-javascript-是-java-的子集" aria-hidden="true">#</a> 1. JavaScript 是 Java 的子集</h3><p>两个东西完全不沾边，<code>JavaScript</code> 是一种可以在网页中使用的脚本语言，而 <code>Java</code> 是完全的强类型语言，两者除了名字很像，其他方面可以说没有一点关系。</p><h3 id="_2-java-是解释型语言-所以效率较低" tabindex="-1"><a class="header-anchor" href="#_2-java-是解释型语言-所以效率较低" aria-hidden="true">#</a> 2. Java 是解释型语言，所以效率较低</h3><p>早期版本的 <code>Java</code> 的确是解释型的，但随着 <code>Java</code> 虚拟机中采用了即时编译器，其性能已经和 <code>C++</code> 相差不大，在某些场景下甚至更胜一筹。</p><h2 id="⏳-联系" tabindex="-1"><a class="header-anchor" href="#⏳-联系" aria-hidden="true">#</a> ⏳ 联系</h2><p>想解锁更多知识？不妨关注我的微信公众号：<strong>村雨遥（id：JavaPark）</strong>。</p><p>扫一扫，探索另一个全新的世界。</p><figure><img src="'+e+'" alt="" width="150" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',44);function s(h,f){const t=a("Share");return l(),c("div",null,[n,o(t,{colorful:""})])}const J=d(i,[["render",s],["__file","20230921-intro.html.vue"]]);export{J as default};
