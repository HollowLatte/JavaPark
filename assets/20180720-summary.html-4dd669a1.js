const e=JSON.parse('{"key":"v-20fdefbd","path":"/program-language/c-series/20180720-summary.html","title":"知识点总结","lang":"zh-CN","frontmatter":{"isOriginal":true,"category":"C 语言教程","tag":["C"],"date":"2018-07-20T00:00:00.000Z","description":"知识点总结 共勉 不要哀求，学会争取。若是如此，终有所获。 Debug 和 Release 版本比较 Debug 附加了许多调试信息，主要用于调试，故文件大； Release 是经过优化后的版本，去掉了调试信息，代码进行了优化，故文件较小，且编译速度快过 Debug，用于发布平台的配置管理器的设置； 32 位与 64 位","head":[["meta",{"property":"og:url","content":"https://cunyu1943.github.io/JavaPark/program-language/c-series/20180720-summary.html"}],["meta",{"property":"og:site_name","content":"JavaPark"}],["meta",{"property":"og:title","content":"知识点总结"}],["meta",{"property":"og:description","content":"知识点总结 共勉 不要哀求，学会争取。若是如此，终有所获。 Debug 和 Release 版本比较 Debug 附加了许多调试信息，主要用于调试，故文件大； Release 是经过优化后的版本，去掉了调试信息，代码进行了优化，故文件较小，且编译速度快过 Debug，用于发布平台的配置管理器的设置； 32 位与 64 位"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-28T00:14:11.000Z"}],["meta",{"property":"article:author","content":"村雨遥"}],["meta",{"property":"article:tag","content":"C"}],["meta",{"property":"article:published_time","content":"2018-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-28T00:14:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"知识点总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-28T00:14:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"村雨遥\\",\\"url\\":\\"https://cunyu1943.github.io\\",\\"email\\":\\"747731461@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"Debug 和 Release 版本比较","slug":"debug-和-release-版本比较","link":"#debug-和-release-版本比较","children":[]},{"level":2,"title":"32 位与 64 位","slug":"_32-位与-64-位","link":"#_32-位与-64-位","children":[]},{"level":2,"title":"指针","slug":"指针","link":"#指针","children":[]},{"level":2,"title":"数组与指针","slug":"数组与指针","link":"#数组与指针","children":[]},{"level":2,"title":"函数与指针","slug":"函数与指针","link":"#函数与指针","children":[]},{"level":2,"title":"malloc 和 free 函数","slug":"malloc-和-free-函数","link":"#malloc-和-free-函数","children":[]},{"level":2,"title":"calloc 和 realloc 函数","slug":"calloc-和-realloc-函数","link":"#calloc-和-realloc-函数","children":[]},{"level":2,"title":"内存分区","slug":"内存分区","link":"#内存分区","children":[]},{"level":2,"title":"sizeof 和 strlen","slug":"sizeof-和-strlen","link":"#sizeof-和-strlen","children":[]},{"level":2,"title":"gets 和 scanf","slug":"gets-和-scanf","link":"#gets-和-scanf","children":[]},{"level":2,"title":"Unicode 字符问题","slug":"unicode-字符问题","link":"#unicode-字符问题","children":[]},{"level":2,"title":"结构体","slug":"结构体","link":"#结构体","children":[]},{"level":2,"title":"结构体字节对齐机制","slug":"结构体字节对齐机制","link":"#结构体字节对齐机制","children":[]},{"level":2,"title":"共同体 union","slug":"共同体-union","link":"#共同体-union","children":[]},{"level":2,"title":"深拷贝与浅拷贝","slug":"深拷贝与浅拷贝","link":"#深拷贝与浅拷贝","children":[]},{"level":2,"title":"文件分类","slug":"文件分类","link":"#文件分类","children":[{"level":3,"title":"按逻辑","slug":"按逻辑","link":"#按逻辑","children":[]},{"level":3,"title":"按存储介质","slug":"按存储介质","link":"#按存储介质","children":[]},{"level":3,"title":"按数据组织形式","slug":"按数据组织形式","link":"#按数据组织形式","children":[]}]},{"level":2,"title":"文件处理方法","slug":"文件处理方法","link":"#文件处理方法","children":[]},{"level":2,"title":"fscanf 和 fprintf 函数","slug":"fscanf-和-fprintf-函数","link":"#fscanf-和-fprintf-函数","children":[]},{"level":2,"title":"文件型结构体","slug":"文件型结构体","link":"#文件型结构体","children":[]},{"level":2,"title":"fopen 打开模式","slug":"fopen-打开模式","link":"#fopen-打开模式","children":[]},{"level":2,"title":"阻塞模式和非阻塞模式","slug":"阻塞模式和非阻塞模式","link":"#阻塞模式和非阻塞模式","children":[]},{"level":2,"title":"⏳ 联系","slug":"⏳-联系","link":"#⏳-联系","children":[]}],"git":{"createdTime":1695860051000,"updatedTime":1695860051000,"contributors":[{"name":"村雨遥","email":"747731461@qq.com","commits":1}]},"readingTime":{"minutes":7.36,"words":2209},"filePathRelative":"program-language/c-series/20180720-summary.md","localizedDate":"2018年7月20日","excerpt":"<h1> 知识点总结</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">共勉</p>\\n<p>不要哀求，学会争取。若是如此，终有所获。</p>\\n</div>\\n<h2> Debug 和 Release 版本比较</h2>\\n<ul>\\n<li>Debug 附加了许多调试信息，主要用于调试，故文件大；</li>\\n<li>Release 是经过优化后的版本，去掉了调试信息，代码进行了优化，故文件较小，且编译速度快过 Debug，用于发布平台的配置管理器的设置；</li>\\n</ul>\\n<h2> 32 位与 64 位</h2>","copyright":{"author":"村雨遥","license":"著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处"},"autoDesc":true}');export{e as data};
