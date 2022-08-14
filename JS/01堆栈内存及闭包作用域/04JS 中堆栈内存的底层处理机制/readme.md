JS 代码可以运行的环境

    浏览器【内核：webkit(blink),gecko,presto,trident,chromium.....】

    IOS/安卓原型APP中，基于webview运行页面和JS【内核：webkit】

    特点：支持window 没有global,支持ES6Module模块规范，不支持CommonJS模块规范

    Node 【内核：webkit】

    特点：支持global,不支持window 支持CommonJS,不支持ES6Module

    webpack【基于Node环境编译打包JS，最后把编译后的结果运行在浏览器中】

    特点：浏览器和Node环境支持的他都支持

不论什么环境执行代码，总要开辟出相关的内存（执行内存/内存条），用来存储值【Heap堆内存】

以及运行代码【Stack栈内存--> E（Execution）C(Context) Stack执行环境栈】
