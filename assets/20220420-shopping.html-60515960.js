import{_ as s}from"./wechatpublic-6d7ffb69.js";import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as e,b as o,e as i}from"./app-c57f0ec1.js";const c="/assets/35-20230927212503189-be7b9413.webp",l="/assets/35-20230927212503160-64734e3b.webp",u="/assets/35-20230927212503159-5821103-d908654e.webp",r="/assets/35-20230927212503159-9a27c0c4.webp",k={},d=i('<h1 id="python-实现购物车" tabindex="-1"><a class="header-anchor" href="#python-实现购物车" aria-hidden="true">#</a> Python 实现购物车</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><h2 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h2><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># --*--coding:utf-8--*--</span>
<span class="token comment"># Author: 村雨</span>

<span class="token keyword">import</span> pprint

productList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;Iphone 8&#39;</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               <span class="token punctuation">(</span><span class="token string">&#39;GTX2080&#39;</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               <span class="token punctuation">(</span><span class="token string">&#39;Z7KP7-GT&#39;</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               <span class="token punctuation">(</span><span class="token string">&#39;Mac pro&#39;</span><span class="token punctuation">,</span> <span class="token number">15000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               <span class="token punctuation">(</span><span class="token string">&#39;Honor 10&#39;</span><span class="token punctuation">,</span> <span class="token number">2800</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               <span class="token punctuation">(</span><span class="token string">&#39;Iphone XR&#39;</span><span class="token punctuation">,</span> <span class="token number">12000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
               <span class="token punctuation">(</span><span class="token string">&#39;Mi 8&#39;</span><span class="token punctuation">,</span> <span class="token number">2999</span><span class="token punctuation">)</span>
               <span class="token punctuation">]</span>

shoppingList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;输入你的工资:&#39;</span><span class="token punctuation">)</span>
salary <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> salary<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;请输入整数&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    salary <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> index<span class="token punctuation">,</span> item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>productList<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;输入你要买的商品的序号：&#39;</span><span class="token punctuation">)</span>
        userWant <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> userWant<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            userWant <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>userWant<span class="token punctuation">)</span>
            <span class="token keyword">if</span> userWant <span class="token operator">&lt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>productList<span class="token punctuation">)</span> <span class="token keyword">and</span> userWant <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你要购买的是：&#39;</span><span class="token punctuation">,</span> productList<span class="token punctuation">[</span>userWant <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> salary <span class="token operator">&gt;=</span> productList<span class="token punctuation">[</span>userWant <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    shoppingList<span class="token punctuation">.</span>append<span class="token punctuation">(</span>productList<span class="token punctuation">[</span>userWant <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                    salary <span class="token operator">-=</span> productList<span class="token punctuation">[</span>userWant <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你已经购买了&#39;</span> <span class="token operator">+</span> productList<span class="token punctuation">[</span>userWant <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;, 你的余额为 &#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;对不起，你的余额不足！请努力工作吧！&#39;</span><span class="token punctuation">)</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你当前所购买的商品为：&#39;</span><span class="token punctuation">)</span>
                    <span class="token keyword">for</span> brought <span class="token keyword">in</span> shoppingList<span class="token punctuation">:</span>
                        pprint<span class="token punctuation">.</span>pprint<span class="token punctuation">(</span>brought<span class="token punctuation">)</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你当前余额为：&#39;</span><span class="token punctuation">,</span> salary<span class="token punctuation">)</span>
                    exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你输入的商品序号有错，请重新输入&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> userWant <span class="token operator">==</span> <span class="token string">&#39;q&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;-----------Shopping List----------&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> brought <span class="token keyword">in</span> shoppingList<span class="token punctuation">:</span>
                pprint<span class="token punctuation">.</span>pprint<span class="token punctuation">(</span>brought<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你的余额为 &#39;</span><span class="token punctuation">,</span> salary<span class="token punctuation">)</span>
            exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid input！！！&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="⏳-联系" tabindex="-1"><a class="header-anchor" href="#⏳-联系" aria-hidden="true">#</a> ⏳ 联系</h2><p>想解锁更多知识？不妨关注我的微信公众号：<strong>村雨遥（id：JavaPark）</strong>。</p><p>扫一扫，探索另一个全新的世界。</p><figure><img src="'+s+'" alt="" width="150" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14);function v(m,b){const n=p("Share");return t(),e("div",null,[d,o(n,{colorful:""})])}const f=a(k,[["render",v],["__file","20220420-shopping.html.vue"]]);export{f as default};
