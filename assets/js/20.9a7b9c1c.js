(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{247:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"是否可以把blazor只用在应用的一部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#是否可以把blazor只用在应用的一部分"}},[t._v("#")]),t._v(" 是否可以把Blazor只用在应用的一部分?")]),t._v(" "),e("h1",{attrs:{id:"can-you-use-blazor-for-only-part-of-an-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-you-use-blazor-for-only-part-of-an-app"}},[t._v("#")]),t._v(" Can You Use Blazor for Only Part of an App?")]),t._v(" "),e("ContentMeta"),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/blazor/?view=aspnetcore-3.0&WT.mc_id=aaronpowell-blog-aapowell",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blazor"),e("OutboundLink")],1),t._v(" 被设计成一个可以创建完整网页应用的平台，你可以看到最近我们为我的博客创建的独立搜索网站就是一个 "),e("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-11-29-implementing-search-in-blazor-webassembly-with-lucenenet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blazor实践"),e("OutboundLink")],1),t._v("。 但是就像你工具箱里的任意一个工具一样，它可能不总是适用于你的工作。\n"),e("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/blazor/?view=aspnetcore-3.0&WT.mc_id=aaronpowell-blog-aapowell",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blazor"),e("OutboundLink")],1),t._v(" is designed to be a platform where you create a complete web application and we saw that in the last "),e("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-11-29-implementing-search-in-blazor-webassembly-with-lucenenet",target:"_blank",rel:"noopener noreferrer"}},[t._v("experiment with Blazor"),e("OutboundLink")],1),t._v(" where we created a stand-alone search site for my blog. But like any tool in our toolbox, it isn't "),e("em",[t._v("always")]),t._v(" the right one for the job.")]),t._v(" "),e("p",[t._v("以我的博客举例，它更多的是一个只读形式的内容存储在"),e("a",{attrs:{href:"https://github.com/aaronpowell/aaronpowell.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1),t._v("上的网站，它将markdown格式文件转换成HTML文件。 并不确定，我们可能把它做成一个Blazor WASM应用，使用一个.NET的markdown库去动态生成页面，但这可能对于运行我的网站并带给读者一个良好体验来说是一个不高效的方法。\nTake my blog for example, it's pretty much a read-only site with the content "),e("a",{attrs:{href:"https://github.com/aaronpowell/aaronpowell.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("stored in GitHub"),e("OutboundLink")],1),t._v(" as markdown that I use "),e("a",{attrs:{href:"https://gohugo.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hugo"),e("OutboundLink")],1),t._v(" to convert into HTML files. Now sure, it's possible to do it as a Blazor WASM application, we could get a .NET Markdown library could be used and the pages generated on-the-fly, but that'd an inefficient way to have my website run and would provide a sub-optimal experience to readers.")]),t._v(" "),e("p",[t._v("但是如果我们想要集成一个我们已有的搜索应用，我们又该如何决策呢？\nBut if we want to integrate the search app that we've previously built, how do we go about that?")]),t._v(" "),e("h2",{attrs:{id:"了解blazor是如何开始的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解blazor是如何开始的"}},[t._v("#")]),t._v(" 了解Blazor是如何开始的")]),t._v(" "),e("h2",{attrs:{id:"understanding-how-blazor-starts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understanding-how-blazor-starts"}},[t._v("#")]),t._v(" Understanding How Blazor Starts")]),t._v(" "),e("p",[t._v("想知道我们要如何在另一个应用里运行Blazor WebAssembly。我们需要先学习一下Blazor WebAssessbly应用是如何运行的。\nTo think about how we can run Blazor WebAssembly within another application we need to learn a bit about how a Blazor WebAssembly application runs.")]),t._v(" "),e("p",[t._v("当你创建一个新的项目，里面包含一个你或许从未打开过的文件 "),e("code",[t._v("wwwroot/index.html")]),t._v(" , 但这是拼图很重要的一片。这个文件看起来就像：\nWhen you create a new project there's a file called "),e("code",[t._v("wwwroot/index.html")]),t._v(" that you might never have dug into, but this is an important piece of the puzzle. It looks like this:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Project Name"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("css/bootstrap/bootstrap.min.css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("css/site.css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Loading..."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_framework/blazor.webassembly.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("实际上，它非常简单，我们需要的重要代码是这两行：\nAnd really, it's pretty simple, the important pieces that we need are these two lines:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Loading..."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_framework/blazor.webassembly.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("在快速找到"),e("code",[t._v("<app>")]),t._v("元素之前，我们首先看一下JavaScript文件。你或许会注意到这个文件并没有出现在硬盘里，这是因为它是属于构建输出的部分。你可以在ASP.NET Core的Github仓库"),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/5bdf75f3e160bc90768526ba07c30e594b08b96d/src/Components/Web.JS/src/Boot.WebAssembly.ts",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("src/Components/Web.JS/src/Boot.WebAssembly.ts")]),e("OutboundLink")],1),t._v("里找到它的源码(at the time of writing anyway)。此文件与Blazor服务器共享一部分内容，但是与使用"),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Platform/Mono/MonoPlatform.ts",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MonoPlatform")]),e("OutboundLink")],1),t._v("的最大区别是它进行一堆WASM交互操作。")]),t._v(" "),e("p",[t._v("We'll get to the "),e("code",[t._v("<app>")]),t._v(" element shortly, but first, let's take a look at the JavaScript file. You might notice that this file doesn't appear anywhere on disk, and that's because it's part of the build output. You can find the source of this on GitHub in the ASP.NET Core repository at "),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/5bdf75f3e160bc90768526ba07c30e594b08b96d/src/Components/Web.JS/src/Boot.WebAssembly.ts",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("src/Components/Web.JS/src/Boot.WebAssembly.ts")]),e("OutboundLink")],1),t._v(" (at the time of writing anyway). This file shares some stuff in common with Blazor Server, but with the main difference of using the "),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Platform/Mono/MonoPlatform.ts",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("MonoPlatform")]),e("OutboundLink")],1),t._v(" which does a bunch of WASM interop.")]),t._v(" "),e("p",[t._v("这个文件至关重要，没有它你的Blazor应用将无法启动，它先负责(通过注入"),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Platform/Mono/MonoPlatform.ts#L197-L200",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个脚本文件到DOM"),e("OutboundLink")],1),t._v(")初始化托管在Mono的WASM环境。然后它使用另一个生成的文件 "),e("code",[t._v("_framework/blazor.boot.json")]),t._v("去找出需要将哪些.NET dll文件加载到Mono/WASM环境中。\nThis file is critical, without it your Blazor application won't ever start up since it's responsible for initializing the WASM environment that hosts Mono (by injecting "),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Platform/Mono/MonoPlatform.ts#L197-L200",target:"_blank",rel:"noopener noreferrer"}},[t._v("a script into the DOM"),e("OutboundLink")],1),t._v(") and then it will use another generated file, "),e("code",[t._v("_framework/blazor.boot.json")]),t._v(", to work out what .NET DLL's will need to be loaded into the Mono/WASM environment.")]),t._v(" "),e("p",[t._v("因此你需要把这个js文件包含在内，同时把"),e("code",[t._v("_framework")]),t._v("文件夹放在根路径下以确保它可以找到JSON文件(见 "),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Boot.WebAssembly.ts#L61-L62",target:"_blank",rel:"noopener noreferrer"}},[t._v("此评论"),e("OutboundLink")],1),t._v(")。\nSo you need to have this JS file included and the "),e("code",[t._v("_framework")]),t._v(" folder needs to be at the root since that's how it finds the JSON file (see "),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Boot.WebAssembly.ts#L61-L62",target:"_blank",rel:"noopener noreferrer"}},[t._v("this comment"),e("OutboundLink")],1),t._v(").")]),t._v(" "),e("h3",{attrs:{id:"懒加载blazor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#懒加载blazor"}},[t._v("#")]),t._v(" 懒加载Blazor")]),t._v(" "),e("h3",{attrs:{id:"lazy-loading-blazor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lazy-loading-blazor"}},[t._v("#")]),t._v(" Lazy-Loading Blazor")]),t._v(" "),e("p",[t._v("我在钻研源代码时发现的一个有趣的题外话是，你可以通过添加"),e("code",[t._v('autostart="false"')]),t._v("在"),e("code",[t._v("<script>")]),t._v("标签里来延迟Blazor的加载。就像"),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/BootCommon.ts#L5",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("提到的一样，然后使用JavaScript调用"),e("code",[t._v("window.Blazor.start()")]),t._v("以启动Blazor应用。\nAn interesting aside which I came across while digging in the source is that you can delay the load of Blazor by adding "),e("code",[t._v('autostart="false"')]),t._v(" to the "),e("code",[t._v("<script>")]),t._v(" tag, as per "),e("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/BootCommon.ts#L5",target:"_blank",rel:"noopener noreferrer"}},[t._v("this line"),e("OutboundLink")],1),t._v(" and then call "),e("code",[t._v("window.Blazor.start()")]),t._v(" in JavaScript to start the Blazor application.")]),t._v(" "),e("p",[t._v("我不打算使用它来进行这种集成，但很容易理解你可以用一个用户启动的初始化过程，而不是在页面中加载。\nI'm not going to use it for this integration, but it's good to know that you can have a user-initiated initialisation, rather than on page load.")]),t._v(" "),e("h2",{attrs:{id:"放置你的blazor应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#放置你的blazor应用"}},[t._v("#")]),t._v(" 放置你的Blazor应用")]),t._v(" "),e("h2",{attrs:{id:"placing-your-blazor-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#placing-your-blazor-app"}},[t._v("#")]),t._v(" Placing Your Blazor App")]),t._v(" "),e("p",[t._v("既然我们已经明白了是什么使Blazor应用开始运行，那么我们如何了解它出现在DOM的何处呢？那就是我们HTML文件里"),e("code",[t._v("<app>")]),t._v("元素的用处，但是"),e("strong",[t._v("Blazor")]),t._v("又怎么知道它呢？\nNow that we understand what makes our Blazor app start, how do we know where in the DOM it'll appear? Well, that's what the "),e("code",[t._v("<app>")]),t._v(" element in our HTML is for, but how does "),e("strong",[t._v("Blazor")]),t._v(" know about it?")]),t._v(" "),e("p",[t._v("事实证明，那是我们通过"),e("code",[t._v("Startup")]),t._v(" 类控制的一些事情：\nIt turns out that that is something that we control from our "),e("code",[t._v("Startup")]),t._v(" class:")]),t._v(" "),e("div",{staticClass:"language-c# extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('using Microsoft.AspNetCore.Components.Builder;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace DemoProject\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n        }\n\n        public void Configure(IComponentsApplicationBuilder app)\n        {\n            app.AddComponent<App>("app");\n        }\n    }\n}\n')])])]),e("p",[t._v("可以看到在14行的位置我们使用了"),e("code",[t._v("AddComponent")]),t._v("并指定一个DOM selector "),e("code",[t._v("app")]),t._v("。这就是它如何知道应用启动时DOM里有哪些元素。这些操作你是可以修改的，或许修改selector为一个DOM元素的ID或者一个"),e("code",[t._v("<div>")]),t._v("，又或者是任意你想要的内容，但那都不重要，因此我将它叫做"),e("code",[t._v("<app>")]),t._v("。\nSee how on line 14 we're using "),e("code",[t._v("AddComponent")]),t._v(" and specifying a DOM selector of "),e("code",[t._v("app")]),t._v("? That's how it knows what element in the DOM the application will start. This is something that you can change, maybe make it a selector to a ID of a DOM element or to a "),e("code",[t._v("<div>")]),t._v(", or to anything else that you want, but it's not that important, so I just leave it as "),e("code",[t._v("<app>")]),t._v(".")]),t._v(" "),e("p",[e("em",[t._v("题外话：我并没有进行尝试，但考虑到你指定了DOM元素和入口组件(通过泛型，上面例子中指向"),e("code",[t._v("App.razor")]),t._v(")你可以在页面上运行多个Blazor应用程序。至于为什么这个么做我不知道，但理论上你是可以这么做的。")]),t._v(" "),e("em",[t._v("Aside: I haven't tried it yet, but given that you specify the DOM element and the entry component (via generics, this points to "),e("code",[t._v("App.razor")]),t._v(" in the above sample) you could potentially have multiple independent Blazor apps running on a page. Why would you do this, I have no idea... but you can in theory!")])]),t._v(" "),e("h2",{attrs:{id:"托管-blazor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#托管-blazor"}},[t._v("#")]),t._v(" 托管 Blazor")]),t._v(" "),e("h2",{attrs:{id:"hosting-blazor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hosting-blazor"}},[t._v("#")]),t._v(" Hosting Blazor")]),t._v(" "),e("p",[t._v("当托管一个Blazor WASM"),e("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/host-and-deploy/blazor/webassembly?view=aspnetcore-3.1&WT.mc_id=aaronpowell-blog-aapowell",target:"_blank",rel:"noopener noreferrer"}},[t._v("有一些可选项"),e("OutboundLink")],1),t._v("的时候，我想专注于"),e("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/host-and-deploy/blazor/webassembly?view=aspnetcore-3.1&WT.mc_id=aaronpowell-blog-aapowell#azure-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Storage 静态站点"),e("OutboundLink")],1),t._v("的方法，这也是我的博客托管的方法。\nWhen it comes to hosting Blazor WASM "),e("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/host-and-deploy/blazor/webassembly?view=aspnetcore-3.1&WT.mc_id=aaronpowell-blog-aapowell",target:"_blank",rel:"noopener noreferrer"}},[t._v("there are a few options"),e("OutboundLink")],1),t._v(" but I want to focus on the "),e("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/host-and-deploy/blazor/webassembly?view=aspnetcore-3.1&WT.mc_id=aaronpowell-blog-aapowell#azure-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Storage static sites"),e("OutboundLink")],1),t._v(" approach, which is how my blog is hosted.")]),t._v(" "),e("p",[t._v("首先我们要做的事情是使用命令"),e("code",[t._v("dotnet publish --configuration Release")]),t._v("发布应用。然后我们可以得到"),e("code",[t._v("bin/Release/{TARGET FRAMEWORK}/publish/{ASSEMBLY NAME}/dist/_framework")]),t._v("文件夹的内容，包括："),e("code",[t._v("blazor.boot.json")]),t._v(", "),e("code",[t._v("blazor.server.js")]),t._v(", "),e("code",[t._v("blazor.webassembly.js")]),t._v("，一个叫做"),e("code",[t._v("_bin")]),t._v("的文件夹和一个叫做"),e("code",[t._v("wasm")]),t._v("的文件夹。\nFirst thing we'll need to do is publish the app in Release mode using "),e("code",[t._v("dotnet publish --configuration Release")]),t._v(". From that we'll grab the contents of the "),e("code",[t._v("bin/Release/{TARGET FRAMEWORK}/publish/{ASSEMBLY NAME}/dist/_framework")]),t._v(" folder, which will contain "),e("code",[t._v("blazor.boot.json")]),t._v(", "),e("code",[t._v("blazor.server.js")]),t._v(", "),e("code",[t._v("blazor.webassembly.js")]),t._v(", a folder called "),e("code",[t._v("_bin")]),t._v(" and a folder called "),e("code",[t._v("wasm")]),t._v(".")]),t._v(" "),e("p",[t._v("我们将拷贝这个"),e("code",[t._v("_framework")]),t._v("文件夹并防止在静态站点的根目录下，维护所有的路径，以确保Blazor可以启动。\nWe want to copy this "),e("code",[t._v("_framework")]),t._v(" folder and place it in the root of our static site, maintaining all the paths so that Blazor can start up.")]),t._v(" "),e("p",[e("em",[t._v("注意：根据文档使用"),e("code",[t._v("dotnet run")]),t._v("托管站点时你是可以修改"),e("code",[t._v("content-root")]),t._v("和"),e("code",[t._v("path-base")]),t._v("，但我没有发现他们发布后也可以正常工作。此外，Hugo非常积极使用绝对路径，因此我发现最简单的办法是把我的WASM文件放在和"),e("code",[t._v("dotnet run")]),t._v("使用的相同的结构中。")]),t._v(" "),e("em",[t._v("Note: According to the docs you can change the "),e("code",[t._v("content-root")]),t._v(" and "),e("code",[t._v("path-base")]),t._v(" when hosting using "),e("code",[t._v("dotnet run")]),t._v(" but I haven't found them working when it's published. Also, Hugo is very aggressive at setting absolute paths so I found it easiest to put my WASM files in the same structure that "),e("code",[t._v("dotnet run")]),t._v(" used.")])]),t._v(" "),e("p",[t._v("由于这是一个搜索应用，我们来创建一个新的"),e("a",{attrs:{href:"https://raw.githubusercontent.com/aaronpowell/aaronpowell.github.io/fac2ae4c8db58f6b4b010522769fc928eb0e1983/src/content/search.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("搜索"),e("OutboundLink")],1),t._v("页，并把它放在我们需要的HTML文件里：\nSince this is a search application let's create a new page called "),e("a",{attrs:{href:"https://raw.githubusercontent.com/aaronpowell/aaronpowell.github.io/fac2ae4c8db58f6b4b010522769fc928eb0e1983/src/content/search.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Search"),e("OutboundLink")],1),t._v(" and put in our required HTML:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/_framework/blazor.webassembly.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("现在生成你的静态站点(或者任意你选择的托管方式)并导航至"),e("code",[t._v("/search")]),t._v("路径下。\nNow generate your static site (or whatever host you're using) and navigate to the "),e("code",[t._v("/search")]),t._v(" router.")]),t._v(" "),e("p",[t._v("如果一切都没有问题你将会收到一个错误页面！\nIf everything has gone correctly you'll have just received an error!")]),t._v(" "),e("blockquote",[e("p",[t._v("抱歉，这个地址没有任何内容。\nSorry, there's nothing at this address.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.aaron-powell.com/images/doh.gif",alt:"D'oh"}})]),t._v(" "),e("h2",{attrs:{id:"blazor-路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blazor-路由"}},[t._v("#")]),t._v(" Blazor 路由")]),t._v(" "),e("h2",{attrs:{id:"blazor-routing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blazor-routing"}},[t._v("#")]),t._v(" Blazor Routing")]),t._v(" "),e("p",[t._v("如果你记得"),e("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-11-29-implementing-search-in-blazor-webassembly-with-lucenenet",target:"_blank",rel:"noopener noreferrer"}},[t._v("我们上一篇博客"),e("OutboundLink")],1),t._v("我们了解了Razor组件中的"),e("code",[t._v("@page")]),t._v("指令。此处你指定的路由对应的页面将匹配已有的"),e("code",[t._v('@page "/"')]),t._v("。但是我们现在的路由是"),e("code",[t._v("/search")]),t._v("，并且Blazor的路由引擎找到了URL并执行你的"),e("code",[t._v("App.razor")]),t._v("组件：\nIf you remember back to "),e("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-11-29-implementing-search-in-blazor-webassembly-with-lucenenet",target:"_blank",rel:"noopener noreferrer"}},[t._v("our last post"),e("OutboundLink")],1),t._v(" we learnt about the "),e("code",[t._v("@page")]),t._v(" directive in Razor Components. Here you specify the route that the page will match on and up until now we've had "),e("code",[t._v('@page "/"')]),t._v(" there. But, we're now on "),e("code",[t._v("/search")]),t._v(" and Blazor's routing engine has looked at the URL and executed your "),e("code",[t._v("App.razor")]),t._v(" component:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Router")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("AppAssembly")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@typeof(Program).Assembly"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Found")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Context")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("routeData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RouteView")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("RouteData")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@routeData"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DefaultLayout")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@typeof(MainLayout)"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Found")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NotFound")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("LayoutView")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Layout")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@typeof(MainLayout)"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Sorry, there's nothing at this address."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("LayoutView")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("NotFound")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Router")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("当"),e("code",[t._v("Router")]),t._v("无法找到一个匹配的路由去使用"),e("code",[t._v("RouteView")]),t._v("，它就会被丢往"),e("code",[t._v("NotFound")]),t._v("页面，这就是我们收到这个错误页面的原因。\nSince the "),e("code",[t._v("Router")]),t._v(" didn't find a matched route to use "),e("code",[t._v("RouteView")]),t._v(" against it's fallen through to "),e("code",[t._v("NotFound")]),t._v(" and that is why we have this error!")]),t._v(" "),e("p",[t._v("别担心，这个很容易修复，只需要更新"),e("code",[t._v("@page")]),t._v("指令以匹配您希望它在已发布网站中匹配的路由 ，或者简化 App.razor 以不关心路由。\nDon't worry, it's an easy fix, just update the "),e("code",[t._v("@page")]),t._v(" directive to match the route that you want it to match on in your published site "),e("em",[t._v("or")]),t._v(" simplify your "),e("code",[t._v("App.razor")]),t._v(" to not care about routing.")]),t._v(" "),e("p",[t._v("一旦一个新的版本发布完成，并且文件拷贝完成，这个页面就会正常呈现。\nOnce a new publish is done and the files copied across it'll be happy.")]),t._v(" "),e("h2",{attrs:{id:"结论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),e("p",[t._v("Blazor是一个构建应用非常棒的方法，但是相比创建应用程序，在提前生成静态内容并使用Blazor增强现有应用程序更有价值。\nBlazor is a great way which we can build rich applications, but there is value in generating static content upfront and using Blazor to enhance an application rather than own it.")]),t._v(" "),e("p",[t._v("我们研究了一下在HTML页面中运行Blazor应用所需要的重要文件，同时研究了将其放入其它类型应用需要什么\nHere we've taken a bit of a look at the important files used to run a Blazor application within an HTML page and we've also looked at what it takes to drop it into some other kind of application.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);