import{_ as s}from"./wechatpublic-6d7ffb69.js";import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as h,a as n,d as e,b as o,e as t}from"./app-c57f0ec1.js";const c="/assets/80607d6e0f82c72f48a7f24b8608fe16-08fa3451.webp",p={},u=t('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>既然要学习 Python，那总得先了解了解它是干啥的、它的发展历史、它有什么特点以及最最重要的，我们能用它干啥？这样才能在我们后续学习的过程中更好的利用好它，提升我们的效率。</p><p>本文内容安排如下：</p><ol><li><strong>什么是 Python</strong></li><li><strong>Python 发展历史</strong></li><li><strong>Python 优缺点</strong></li><li><strong>Python 用途</strong></li><li><strong>Python 解释器</strong></li><li><strong>Python 开发工具</strong></li></ol><h2 id="python-简介" tabindex="-1"><a class="header-anchor" href="#python-简介" aria-hidden="true">#</a> Python 简介</h2><h3 id="python-是什么" tabindex="-1"><a class="header-anchor" href="#python-是什么" aria-hidden="true">#</a> Python 是什么</h3><p>正如你所知道的，Python 它和 Java、C、C++ 一样，是一门编程语言。但是不同于其他语言的是，它是一个结合了解释性、编译性、互动性和面向对象的脚本语言。</p><p>Python 可以说是集大家所长，你可以用简单的几行代码就能实现神奇的效果，无论是简单的文字处理，还是大规模的数据分析，亦或是 WWW 游戏或者游戏，它都不在话下。</p><p>总结起来，相比于其他语言，它有着如下几点特色语法结构：</p><ul><li><strong>解释性</strong>：类似于 PHP 和 Perl，免去了编译这个环节；</li><li><strong>交互式</strong>：即我们能够在终端中 Python 提示符 <code>&gt;&gt;&gt;</code> 的后面直接执行代码；</li><li><strong>面向对象</strong>：类似于 Java 和 C++，Python 也支持面向对象编程，即将代码封装在对象中；</li><li><strong>面向初学者</strong>：相比于其他编程语言，Python 语法简单，往往只需要简单的几行代码就能实现其他语言需要一大段同样效果；</li></ul><h3 id="python-发展历史" tabindex="-1"><a class="header-anchor" href="#python-发展历史" aria-hidden="true">#</a> Python 发展历史</h3><ul><li><p>1989 年圣诞节：Guido von Rossum（也就是大家说的 “龟叔”）开始动手写 Python 语言的编译器；</p></li><li><p>1991 年 2 月：第一个 Python 编译器（同时也是解释器）诞生，底层基于 C 语言实现的，可以调用 C 语言的库函数。在早期的版本中，Python 已经提供了对“类”，“函数”，“异常处理”等构造块的支持，还有对列表、字典等核心数据类型，同时支持以模块为基础来构造应用程序；</p></li><li><p>1994 年 1 月：Python 1.0 正式发布；</p></li><li><p>2000 年 10 月 16 日：Python 2.0 发布，增加了完整的垃圾回收，提供了对 Unicode 的支持。与此同时，Python 的整个开发过程更加透明，社区对开发进度的影响逐渐扩大，生态圈开始慢慢形成；</p></li><li><p>2008 年 12 月 3 日：Python 3.0 发布，它并不完全兼容之前的 Python 代码，因此目前还有不少公司在项目和运维中使用 Python 2.x 版本；</p></li></ul><p>后续的更新中，基本都是基于 Python 2.0 和 Python 3.0 更新，当前最新的版本应该是 Python 3.9.x 版本，是在 2021 年发布的。Python的版本号分为三段，形如 A.B.C。其中 A 表示大版本号，一般当整体重写，或出现不向后兼容的改变时，增加 A，即 2 或 3；B 表示功能更新，当出现新功能时就需要增加 B；而 C 则表示小的改动（例如：修复了某个Bug），一旦有修改就增加 C；</p><h3 id="python-优缺点" tabindex="-1"><a class="header-anchor" href="#python-优缺点" aria-hidden="true">#</a> Python 优缺点</h3><p>Python 优点很多，总结起来主要有如下几点：</p><ul><li>优雅、明确、简单；</li><li>开发效率高；</li><li>可移植性强；</li><li>可扩展性强；</li><li>可嵌入性好；</li></ul><p>但是同时 Python 也存在着许多缺点，一般来讲主要集中在以下几点：</p><ul><li>相对于C/C++等语言而言，运行速度慢；</li><li>线程间无法利用多CPU的问题；</li><li>代码不能加密；</li></ul><h3 id="应用领域" tabindex="-1"><a class="header-anchor" href="#应用领域" aria-hidden="true">#</a> 应用领域</h3><ul><li>云计算；</li><li>WEB开发；</li><li>系统运维；</li><li>图形GUI；</li><li>金融分析；</li><li>科学运算、人工智能；</li></ul><h2 id="安装-python-解释器" tabindex="-1"><a class="header-anchor" href="#安装-python-解释器" aria-hidden="true">#</a> 安装 Python 解释器</h2><p>要正式迈入 Python 学习之路，首先你得保证你使用的电脑上已经有了 Python 解释器。安装之前，先介绍几个 Python 的解释器：</p><ul><li><strong>CPython</strong><br> 即 C 语言实现的 Python，当我们从 Python 官网下载并安装后，就已经将这一解释器安装到了我们电脑中，在命令行中运行 Python 就是相当于启动了 CPyhton 解释器；</li><li><strong>IPython</strong><br> 基于 CPython 之上的一个交互式的解释器，其底层还是基于 CPython，只不过交互性比起 CPython 更好。就好比 Chrome 和 360 极速浏览器，虽然不同，但 360 极速浏览器的内核却是Chrome；</li><li><strong>JPython</strong><br> 运行于 Java 平台的 Python 解释器，能够直接将Python代码编译为 Java 字节码并执行；</li><li><strong>PyPy</strong><br> PyPy 最突出的优点就是可以提升Python代码的执行速度，它采用了JIT 技术，对 Python 代码进行了动态编译，这样一来 Python 代码的执行速度得以显著提升；</li><li><strong>IronPython</strong><br> 类似于 JPython，它是运行于微软 .Net 平台上的解释器，能够将 Python 代码编译成 .Net 的字节码；</li></ul>',25),y={href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.conda.io/en/latest/miniconda.html#",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"Miniconda",-1),_=n("h3",{id:"miniconda-的安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#miniconda-的安装","aria-hidden":"true"},"#"),e(" Miniconda 的安装")],-1),m=n("h4",{id:"windows",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),e(" Windows")],-1),b={href:"https://docs.conda.io/en/latest/miniconda.html#windows-installers",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,[e("然后双击下载好的 "),n("code",null,".exe"),e(" 文件；")],-1),x=n("li",null,"然后根据屏幕指示，一步一步选择安装位置以及其他指示即可；",-1),v=n("li",null,[e("完成安装之后，打开你的控制台，然后使用 "),n("code",null,"conda list"),e(" 进行测试，如果安装成功，此时就会列出你当前环境下所安装的包；")],-1),w=n("li",null,[e("如果要升级，使用 "),n("code",null,"conda update conda"),e(" 命令进行升级即可；")],-1),k=n("h4",{id:"linux",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),e(" Linux")],-1),C={href:"https://docs.conda.io/en/latest/miniconda.html#linux-installers",target:"_blank",rel:"noopener noreferrer"},B=n("li",null,"接着打开终端，进入你的安装包所在路径，使用如下命令进行安装即可；",-1),J=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x Miniconda3-latest-Linux-x86_64.sh
<span class="token function">bash</span> Miniconda3-latest-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>按照提示进行安装即可（主要就是选择自己的安装位置以及是否设置环境变量）；</li><li>安装完成后最好重启终端，然后使用 <code>conda list</code> 命令进行测试是否成功；</li><li>如果要升级，使用 <code>conda update conda</code> 命令进行升级即可；</li></ol><h4 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h4>`,3),I={href:"https://docs.conda.io/en/latest/miniconda.html#macosx-installers",target:"_blank",rel:"noopener noreferrer"},L=n("li",null,[e("如果下载的是 "),n("code",null,".pkg"),e(" 格式，双击打开安装即可，如果不是，则打开终端，进入安装包所在路径，然后使用如下命令进行安装；")],-1),S=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">bash</span> Miniconda3-latest-MacOSX-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>根据屏幕提示进行安装；</li><li>安装完成后最好重启终端，然后使用 <code>conda list</code> 命令进行测试是否成功；</li><li>如果要升级，使用 <code>conda update conda</code> 命令进行升级即可；</li></ol><h4 id="⚠️-注意" tabindex="-1"><a class="header-anchor" href="#⚠️-注意" aria-hidden="true">#</a> ⚠️ 注意</h4><p>一般来讲，Linux 和 macOS 都已经是默认安装了 Python 的，而且一般是 2.x 版本；</p>`,4),W={href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/",target:"_blank",rel:"noopener noreferrer"},M=t(`<h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World！</h3><p>好了，我们的解释器安装好了，接下来就是激动人心的写代码了，那就从最最经典的 <code>hello world</code> 开始吧！</p><p>打开命令行提示符（Windows）或者终端（Linux/macOS）；</p><p>通过如下命令来查看我们的 Python 版本；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着使用如下命令进入 Python 交互环境；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>好了，现在就可以编写并运行我们的 <code>hello world</code> 程序了，只需要一行代码，就能打印出 <code>hello world</code>，而如果你要打印其他信息，只需要把括号中双引号引起的内容替换成你想要打印的信息即可，括号中的双引号不仅也可以用单引号代替；</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果如下图所示；</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2>',12),N={href:"https://www.jetbrains.com/pycharm/download/",target:"_blank",rel:"noopener noreferrer"},E=t('<p>Pycharm 分为社区版（Community）和专业版（Professional），两者的区别在于专业版功能更加强大，但同时的，专业版是收费的。对于我们日常使用开发，社区版已经足够用了，如果实在是需要用到专业版的功能，那么你可以选择购买序列号（或者去找个破解版）。关于它的安装和配置教程，到这里说的也挺多了，那就到下一篇文章再细说吧！</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本文到此就算结束了，主要是对 Python 进行了简单介绍，让大家对 Python 有一个大概的认识。然后介绍了如何安装 Python 解释器以及如何在终端中实现自己的 <code>hello world</code>，最后则是给大家推荐了一个 Python 开发工具，不过关于它的具体安装和配置就准备在下一篇文章中去讲了。如果你也感兴趣，那就赶紧去关注我吧！</p><h2 id="⏳-联系" tabindex="-1"><a class="header-anchor" href="#⏳-联系" aria-hidden="true">#</a> ⏳ 联系</h2><p>想解锁更多知识？不妨关注我的微信公众号：<strong>村雨遥（id：JavaPark）</strong>。</p><p>扫一扫，探索另一个全新的世界。</p><figure><img src="'+s+'" alt="" width="150" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7);function O(V,A){const a=i("ExternalLinkIcon"),l=i("Share");return d(),h("div",null,[u,n("p",null,[e("通常来讲，要安装 Python 解释器，只需要去其 "),n("a",y,[e("官网"),o(a)]),e(" 下载对应系统的安装包，然后进行安装即可，这也符合我们大多数人的使用习惯。但如果你确定要学习一段时间的 Python，并且以后要用它来进行各种工作，那么我更推荐使用 "),n("a",g,[P,o(a)]),e("。它方便我们创建不同的环境，然后自由的在各个环境之间切换，对于后续的开发工作十分友好。")]),_,m,n("ol",null,[n("li",null,[e("首先，我们需要去下载选择对应版本的 "),n("a",b,[e("安装包"),o(a)]),e("；")]),f,x,v,w]),k,n("ol",null,[n("li",null,[e("首先下载对应 "),n("a",C,[e("安装包"),o(a)]),e("；")]),B]),J,n("ol",null,[n("li",null,[e("下载 "),n("a",I,[e("安装包"),o(a)]),e("；")]),L]),S,n("p",null,[e("如果上面给出的下载链接过慢，可以移步 "),n("a",W,[e("清华镜像源"),o(a)]),e(" 进行下载；")]),M,n("p",null,[e("要进行 Python 开发，我们只需要一个文本编辑器就可以了，但是要想提高效率，那你一定不能错过 Python 开发神器 - "),n("a",N,[e("Pycharm"),o(a)]),e("。")]),E,o(l,{colorful:""})])}const G=r(p,[["render",O],["__file","20210331-intro.html.vue"]]);export{G as default};
