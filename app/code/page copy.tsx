import React from "react";

const BlogPost = () => {
  const content =
    "# 作用域链\n+ 作用域链是一种用于查找变量和函数的机制，它是由当前执行环境和其所有父级执行环境的变量对象组成的链式结构。当在一个执行环境中访问变量或函数时，会首先在当前执行环境的变量对象中查找，如果找不到，则会沿着作用域链向上查找，直到找到对应的变量或函数，或者达到最外层的全局对象（如window）。\n\n+ 作用域链的创建是**在函数定义时确定的**，它与函数的定义位置有关。当函数被调用时，会创建一个新的执行环境，其中包含一个新的变量对象，并将其添加到作用域链的前端。这样，函数内部就可以访问其所在作用域以及其外部作用域中的变量和函数，形成了一个作用域链。\n\n```js\nfunction outer() {\n  var outerVar = 'Outer variable';\n\n  function inner() {\n    var innerVar = 'Inner variable';\n    console.log(innerVar); // 内部作用域的变量\n    console.log(outerVar); // 外部作用域的变量\n    console.log(globalVar); // 全局作用域的变量\n  }\n\n  inner();\n}\n\nvar globalVar = 'Global variable';\nouter();\n```\n+ 在上述示例中，函数inner()内部可以访问到其外部函数`outer()`中定义的变量`outerVar`，这是因为`inner()`的作用域链中包含了外部函数的变量对象。同样，`inner()`也可以访问全局作用域中的变量`globalVar`，因为全局作用域也在作用域链中。\n\n+ 通过作用域链的机制，函数可以访问外部作用域中的变量，但外部作用域不能访问函数内部的变量，这就实现了变量的封装和保护。\n\n+ 值得注意的是，当函数执行完毕后，其执行环境会被销毁，对应的变量对象也会被释放，因此作用域链也随之消失。这也是闭包的概念中所提到的保持变量的生命周期的特性。\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
  const content2 =
    "# 1.什么是模块化\n前端模块化是将复杂的前端代码系统拆分为多个独立、功能明确、接口标准的代码单元（模块），通过**组合和依赖管理**构建完整应用的开发模式。其本质是通过封装、解耦、复用实现代码的工程化管理，解决**全局污染、依赖混乱、维护困难**等传统开发痛点\n\n# 2.模块特征\n+ 独立性：模块可单独开发、测试、部署（如React组件）\n+ 封装性：内部实现私有化，仅通过暴露接口与外部通信\n+ 复用性：跨项目复用（如`npm`包）\n+ 依赖管理：显式声明依赖关系（如`ESM`的`import/export`）\n\n";
  return (
    <div>
      <h1>我的博客</h1>
      <p>这里是一些代码示例：</p>
      <nav className="p-6 space-y-1.5">
        {content2
          ?.split("\n")
          .filter((line: any) => line.startsWith("#"))
          .map((heading: any, index: number) => {
            const level = heading.match(/^#+/)?.[0].length || 1;
            const text = heading.replace(/^#+\s+/, "");
            // Toast UI Editor 生成的 ID 规则：转换为小写，空格和特殊字符替换为连字符
            const headingId = text
              .toLowerCase()
              .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
              .replace(/^-+|-+$/g, "");
            return (
              /*
            onClick={() => {
                scrollToHeading(text);
              }}
            */
              <div
                key={index}
                className={`group flex items-center py-1.5 ${
                  level === 1 ? "text-gray-900 font-medium" : "text-gray-600"
                } hover:text-blue-600 cursor-pointer text-sm transition-colors duration-150 ease-in-out`}
                style={{ paddingLeft: `${(level - 1) * 1}rem` }}
                title={text}
              >
                <span className="truncate">{text}</span>
              </div>
            );
          })}
      </nav>
    </div>
  );
};

export default BlogPost;
