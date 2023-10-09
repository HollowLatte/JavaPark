import{_ as d}from"./wechatpublic-6d7ffb69.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c,a,d as e,b as n,e as i}from"./app-c57f0ec1.js";const h={},g=i('<h1 id="开发环境配置" tabindex="-1"><a class="header-anchor" href="#开发环境配置" aria-hidden="true">#</a> 开发环境配置</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><div class="hint-container tip"><p class="hint-container-title">原文</p></div><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>学习完 <code>Java</code> 的主要特性、发展历程以及常见误解之后。本篇文章来学习，如何在当前主流操作系统下搭建 <code>Java</code> 开发环境，为接下来的开发做好准备。</p><h2 id="二、windows-环境配置" tabindex="-1"><a class="header-anchor" href="#二、windows-环境配置" aria-hidden="true">#</a> 二、Windows 环境配置</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3>',7),u={href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"},p=a("code",null,"JDK",-1),v=a("code",null,"JDK",-1),m=i(`<figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/jdk11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>点击 JDK Download 后，它会跳转到具体下载页面，然后根据自己的系统来进行选择，此处以 <code>Windows</code> 64 位系统为例。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/download.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>点击最后的链接后，它会让你同意协议，勾选同意，然后登陆你的 <code>Oracle</code> 账户即可开始下载，若是没有 <code>Oracle</code> 账户，点击下面的创建一个就可以了。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/agree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/login.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>下载完成后，进行安装即可，安装流程和我们平常安装软件的一样，就再赘述，需要注意的是要记住如下的安装路径，因为一般我们都不会安装到默认路径，所以一定要记住你所安装到的路径，这关系到后续的配置步骤。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/install-path.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h3><p>好了，经过上面的配置，我们的 JDK 就已经安装好了，但是这个使用你是用不了的，我们还需要进一步的配置；</p><p>打开系统属性来进行环境变量配置，打开系统属性并进行配置的方式如下：</p><ol><li><strong>Windows + R</strong> 快捷键组合唤醒 Windows 运行窗口，然后输入 <code>sysdm.cpl</code>，紧接着回车即可，一般会打开如下界面，然后点击最上方的 <strong>高级</strong>；</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/1695686767330.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>点击高级后，就会打开如下界面，然后打开环境变量。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/1695686806548.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建环境变量 <strong>JAVA_HOME</strong>，然后变量值填入刚才安装 JDK 的路径（刚才提醒过要记住！）。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/java-home.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>编辑 <strong>Path</strong> 环境变量，然后新建一个变量值，填入如下内容：<code>%JAVA_HOME%\\bin</code>。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/path-bin.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>各种确定，然后突出系统属性即可，到这一步，理论上我们的 JDK 就安装并配置成功了，接下来我们就去确认一下到底安装好了没有。</li></ol><h3 id="_3-注意" tabindex="-1"><a class="header-anchor" href="#_3-注意" aria-hidden="true">#</a> 3. 注意</h3><p>自 <code>JDK</code> 11 之后，安装完成后就无需在配置环境变量，安装完成即可去验证是否安装成功。</p><h3 id="_4-验证" tabindex="-1"><a class="header-anchor" href="#_4-验证" aria-hidden="true">#</a> 4. 验证</h3><p>按照上述步骤操作完成之后，接下来就是验证了，一般我们可以通过如下三个命令来进行验证。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 JDK 版本</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token comment"># 编译命令</span>
javac

<span class="token comment"># 运行命令</span>
<span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开命令控制台（<strong>Windows + R，然后输入 cmd 回车</strong>），然后输入如上三个命令，如果安装成功，一般是会出现如下内容的；</p><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/1695686544052.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/1695686583197.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/1695686620882.webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、macos-环境配置" tabindex="-1"><a class="header-anchor" href="#三、macos-环境配置" aria-hidden="true">#</a> 三、macOS 环境配置</h2><h3 id="_1-安装-1" tabindex="-1"><a class="header-anchor" href="#_1-安装-1" aria-hidden="true">#</a> 1. 安装</h3>`,31),f={href:"https://www.oracle.com/java/technologies/javase-jdk11-downloads.html",target:"_blank",rel:"noopener noreferrer"},j=i(`<figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/macos-jdk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><p>接受相关协议并登录下载。</p></li><li><p>双击下载好的 <code>.dmg</code> 安装包，然后开始安装。</p></li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/install-macos.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>安装过程中会让你输入密码，也就是你本机的密码。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/pwd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>安装成功。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/success.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-验证" tabindex="-1"><a class="header-anchor" href="#_2-验证" aria-hidden="true">#</a> 2. 验证</h3><p>不同于 <code>Windows</code>，<code>macOS</code> 下不用再手动配置环境变量了，它会给你自动配置好，我们只需要去验证即可；</p><ol><li>查看 <code>JDK</code> 版本。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/macos-jdk-v.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>编译命令。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/macos-javac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>运行验证命令。</li></ol><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/20220702-jdk-install-and-hello-world/macos-java.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="四、linux-环境配置" tabindex="-1"><a class="header-anchor" href="#四、linux-环境配置" aria-hidden="true">#</a> 四、Linux 环境配置</h2><h3 id="_1-安装-2" tabindex="-1"><a class="header-anchor" href="#_1-安装-2" aria-hidden="true">#</a> 1. 安装</h3>`,18),b={href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"JDK",-1),k=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-11.0.7_linux-x64_bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/jdk-install.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/jdk-path.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-配置-1" tabindex="-1"><a class="header-anchor" href="#_2-配置-1" aria-hidden="true">#</a> 2. 配置</h3><p>打开配置文件 <code>/etc/profile</code>，然后加入如下内容；</p><div class="language-profile line-numbers-mode" data-ext="profile"><pre class="language-profile"><code>export JAVA_HOME=/home/cunyu/Soft/jdk11.0.7
export PATH=$JAVA_HOME:$PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/jdk-profile.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/profile-jdk.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-验证" tabindex="-1"><a class="header-anchor" href="#_3-验证" aria-hidden="true">#</a> 3. 验证</h3><p>安装和配置之后，在终端中输入如下命令进行验证是否成功。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看版本</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
<span class="token comment"># 编译</span>
<span class="token function">java</span>
<span class="token comment"># 执行</span>
javac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jsd.cdn.zzko.cn/gh/cunyu1943/JavaPark@main/src/java-tutorial/javase-series/assets/verify.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="五、安装目录详解" tabindex="-1"><a class="header-anchor" href="#五、安装目录详解" aria-hidden="true">#</a> 五、安装目录详解</h2><p>安装好 <code>JDK</code> 之后，打开安装路径，通常情况下会有如下的目录结构，而各个模块的功能则如下表所示。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── LICENSE -<span class="token operator">&gt;</span> legal/java.base/LICENSE
├── README
├── bin
├── conf
├── include
├── jmods
├── legal
├── lib
└── release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>目录</th><th></th></tr></thead><tbody><tr><td><code>bin</code></td><td>用于存放各种工具命令，比如我们最常用的 <code>javac</code>、<code>java</code> 等</td></tr><tr><td><code>lib</code></td><td>存放工具的一些补充 <code>jar</code> 包</td></tr><tr><td><code>conf</code></td><td>存放相关配置文件</td></tr><tr><td><code>include</code></td><td>存放一些平台特定的头文件，比如 <code>Windows</code>、<code>macOS</code>、<code>Linux</code> 平台下这里的头文件是有所不同的</td></tr><tr><td><code>legal</code></td><td>存放各模块的授权文件</td></tr><tr><td><code>jmods</code></td><td>存放各种模块</td></tr><tr><td><code>release</code></td><td>版本发布内容以及版本信息</td></tr><tr><td><code>README</code></td><td><code>JDK</code> 信息</td></tr><tr><td><code>LICENSE</code></td><td>版权和签证相关的说明文档</td></tr></tbody></table><h2 id="六、api-文档" tabindex="-1"><a class="header-anchor" href="#六、api-文档" aria-hidden="true">#</a> 六、API 文档</h2><p><code>API（Application Programming Interface）</code>，应用程序编程接口，是 <code>Java</code> 提供的基本编程接口。<code>Java</code> 语言提供了大量的基础类，为了给开发者提供相应的说明文档，于是便有了 <code>Java API</code> 文档。它类似于我们日常生活中的字典，如果遇到什么不认识的字，那么就可以去这里找。而对应到 <code>Java</code> 语言中，就是当我们遇到未使用过的基础类或方法，可以去 <code>Java API</code> 中寻找。</p><p>为了方便大家，在这里贴出目前最常用的几个长期版本 <code>Java</code> 的在线阅读地址和离线下载地址，有需要的小伙伴可以自行去下载。</p><p>温馨提示：这里无论是在线阅读还是离线下载后的文档，都是纯英文的。</p><h3 id="_1-在线阅读" tabindex="-1"><a class="header-anchor" href="#_1-在线阅读" aria-hidden="true">#</a> 1. 在线阅读</h3>`,21),w=a("strong",null,[a("code",null,"JDK 8 API")],-1),z={href:"https://docs.oracle.com/javase/8/docs/api/index.html",target:"_blank",rel:"noopener noreferrer"},x=a("strong",null,[a("code",null,"JDK 11 API")],-1),J={href:"https://docs.oracle.com/en/java/javase/11/docs/api/",target:"_blank",rel:"noopener noreferrer"},y=a("strong",null,[a("code",null,"JDK 17 API")],-1),P={href:"https://docs.oracle.com/en/java/javase/17/docs/api/",target:"_blank",rel:"noopener noreferrer"},A=a("strong",null,[a("code",null,"JDK 21 API")],-1),D={href:"https://docs.oracle.com/en/java/javase/21/docs/api/",target:"_blank",rel:"noopener noreferrer"},K=a("h3",{id:"_2-离线下载",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-离线下载","aria-hidden":"true"},"#"),e(" 2. 离线下载")],-1),E=a("strong",null,[a("code",null,"JDK 8 API")],-1),I={href:"https://www.oracle.com/java/technologies/javase-jdk8-doc-downloads.html",target:"_blank",rel:"noopener noreferrer"},O=a("strong",null,[a("code",null,"JDK 11 API")],-1),S={href:"https://www.oracle.com/java/technologies/javase-jdk11-doc-downloads.html",target:"_blank",rel:"noopener noreferrer"},V=a("strong",null,[a("code",null,"JDK 17 API")],-1),L={href:"https://www.oracle.com/java/technologies/javase-jdk17-doc-downloads.html",target:"_blank",rel:"noopener noreferrer"},N=a("strong",null,[a("code",null,"JDK 21 API")],-1),W={href:"https://www.oracle.com/java/technologies/javase-jdk21-doc-downloads.html",target:"_blank",rel:"noopener noreferrer"},H=a("h2",{id:"⏳-联系",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#⏳-联系","aria-hidden":"true"},"#"),e(" ⏳ 联系")],-1),M=a("p",null,[e("想解锁更多知识？不妨关注我的微信公众号："),a("strong",null,"村雨遥（id：JavaPark）"),e("。")],-1),C=a("p",null,"扫一扫，探索另一个全新的世界。",-1),R=a("figure",null,[a("img",{src:d,alt:"",width:"150",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function B(T,$){const s=t("ExternalLinkIcon"),o=t("Share");return r(),c("div",null,[g,a("ol",null,[a("li",null,[e("首先进入 "),a("a",u,[e("Oracle 官网"),n(s)]),e("，然后找到自己想要的 "),p,e(" 版本，这边以 "),v,e(" 11 为例。")])]),m,a("ol",null,[a("li",null,[e("首先去 "),a("a",f,[e("官网下载"),n(s)]),e(" 对应安装包。")])]),j,a("ol",null,[a("li",null,[e("先去 "),a("a",b,[e("下载"),n(s)]),e(" 要安装的 "),_,e(" 版本，然后解压到本地存放的位置。")])]),k,a("ul",null,[a("li",null,[w,e("："),a("a",z,[e("https://docs.oracle.com/javase/8/docs/api/index.html"),n(s)])]),a("li",null,[x,e("："),a("a",J,[e("https://docs.oracle.com/en/java/javase/11/docs/api/"),n(s)])]),a("li",null,[y,e("："),a("a",P,[e("https://docs.oracle.com/en/java/javase/17/docs/api/"),n(s)])]),a("li",null,[A,e("："),a("a",D,[e("https://docs.oracle.com/en/java/javase/21/docs/api/"),n(s)])])]),K,a("ul",null,[a("li",null,[E,e("："),a("a",I,[e("https://www.oracle.com/java/technologies/javase-jdk8-doc-downloads.html"),n(s)])]),a("li",null,[O,e("："),a("a",S,[e("https://www.oracle.com/java/technologies/javase-jdk11-doc-downloads.html"),n(s)])]),a("li",null,[V,e("："),a("a",L,[e("https://www.oracle.com/java/technologies/javase-jdk17-doc-downloads.html"),n(s)])]),a("li",null,[N,e("："),a("a",W,[e("https://www.oracle.com/java/technologies/javase-jdk21-doc-downloads.html"),n(s)])])]),H,M,C,R,n(o,{colorful:""})])}const Q=l(h,[["render",B],["__file","20230922-environment.html.vue"]]);export{Q as default};
