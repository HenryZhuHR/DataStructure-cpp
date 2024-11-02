import{_ as a,c as i,a3 as e,o as t}from"./chunks/framework.DsO3qOin.js";const l="/hello-cpp/assets/vscode-open-remote.Cad1zqSt.png",g=JSON.parse('{"title":"安装启动","description":"","frontmatter":{},"headers":[],"relativePath":"starter/install-and-stater.md","filePath":"starter/install-and-stater.md","lastUpdated":1729428658000}'),n={name:"starter/install-and-stater.md"};function o(r,s,h,p,d,k){return t(),i("div",null,s[0]||(s[0]=[e('<h1 id="安装启动" tabindex="-1">安装启动 <a class="header-anchor" href="#安装启动" aria-label="Permalink to &quot;安装启动&quot;">​</a></h1><h2 id="基于容器的开发" tabindex="-1">基于容器的开发 <a class="header-anchor" href="#基于容器的开发" aria-label="Permalink to &quot;基于容器的开发&quot;">​</a></h2><h3 id="docker-环境准备和启动项目" tabindex="-1">docker 环境准备和启动项目 <a class="header-anchor" href="#docker-环境准备和启动项目" aria-label="Permalink to &quot;docker 环境准备和启动项目&quot;">​</a></h3><p>按照下列链接中的步骤准备好 docker 环境：</p><ol><li><a href="https://henryzhuhr.github.io/hello-docker/starter.html" target="_blank" rel="noreferrer">Docker 环境准备</a></li><li>VSCode中安装 Docker 插件 <ul><li><a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker" target="_blank" rel="noreferrer">Docker</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers" target="_blank" rel="noreferrer">Dev Containers</a></li></ul></li><li>点击VSCode （最）左下角「打开远程窗口」，弹出的命令中，点击「<strong>在容器中重新打开 / Reopen in Container</strong>」</li></ol><p><img src="'+l+`" alt=""></p><ol start="4"><li>也可以在<strong>命令面板</strong>中搜索并执行命令 「<strong>Dev Containers: Rebuild Container Without Cache / 开发容器：重新生成无缓存的容器</strong>」（特别是修改了 <code>Dockerfile</code> 或 <code>docker-compose.yml</code> 时，必须执行此命令）</li></ol><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li>在 VSCode 中键入 <code>Ctrl+Shift+P</code> 调出<strong>命令面板</strong> ，或者在菜单栏中选择 <code>查看(View)</code> -&gt; <code>命令面板(Command Palette)</code> 调出<strong>命令面板</strong></li><li>如果构建失败，可以尝试在 Docker Desktop 中删除对应容器(<code>hello-cpp-ubuntu-dev</code>)和对应镜像(<code>hello-cpp-ubuntu-dev:latest</code>)后重试。如果仍然构建失败，请参考 <a href="https://henryzhuhr.github.io/hello-docker/develop-in-vscode.html#%E4%BD%BF%E7%94%A8-dev-containers-%E6%8F%92%E4%BB%B6%E7%9A%84%E8%BF%87%E7%A8%8B" target="_blank" rel="noreferrer"><em>使用 Dev Containers 插件的过程</em></a> 。</li></ul></div><h3 id="运行-demo" tabindex="-1">运行 demo <a class="header-anchor" href="#运行-demo" aria-label="Permalink to &quot;运行 demo&quot;">​</a></h3><p>进入容器后，在终端中可以通过下面的命令查看当前环境相关信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/os-release</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 检查当前系统发行版</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/lsb-release</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 检查当前系统发行版</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uname</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 查看系统架构</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/cpuinfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看CPU信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/meminfo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看内存信息</span></span></code></pre></div><p>确认后，可以运行 demo：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scripts/build.sh</span></span></code></pre></div><p>输出如下，可以看到构建过程、安装目录 <code>/usr/local/bin/main</code> 和最后的输出 <code>Hello Cpp/root </code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[100%] Built target main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configuration:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Installing:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Cpp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hello</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span></span></code></pre></div><h3 id="扩展开发环境" tabindex="-1">扩展开发环境 <a class="header-anchor" href="#扩展开发环境" aria-label="Permalink to &quot;扩展开发环境&quot;">​</a></h3><p>如果需要扩展开发环境，可以在 <code>Dockerfile</code> 中添加对应的软件包安装命令，然后执行 <code>Dev Containers: Rebuild Container Without Cache</code> 命令重新构建容器。</p>`,17)]))}const F=a(n,[["render",o]]);export{g as __pageData,F as default};
