import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 用于支持 GitHub Flavored Markdown (GFM)
import "./style.css";

const markdownContent = `
# 作用域链

# 一级标题

+ 作用域链是一种用于查找变量和函数的机制，它是由当前执行环境和其所有父级执行环境的变量对象组成的链式结构。当在一个执行环境中访问变量或函数时，会首先在当前执行环境的变量对象中查找，如果找不到，则会沿着作用域链向上查找，直到找到对应的变量或函数，或者达到最外层的全局对象（如window）。

+ 作用域链的创建是**在函数定义时确定的**，它与函数的定义位置有关。当函数被调用时，会创建一个新的执行环境，其中包含一个新的变量对象，并将其添加到作用域链的前端。这样，函数内部就可以访问其所在作用域以及其外部作用域中的变量和函数，形成了一个作用域链。

\`\`\`js
function outer() {
  var outerVar = 'Outer variable';

  function inner() {
    var innerVar = 'Inner variable';
    console.log(innerVar); // 内部作用域的变量
    console.log(outerVar); // 外部作用域的变量
    console.log(globalVar); // 全局作用域的变量
  }

  inner();
}

var globalVar = 'Global variable';
outer();
\`\`\`

+ 在上述示例中，函数inner()内部可以访问到其外部函数outer()中定义的变量outerVar，这是因为inner()的作用域链中包含了外部函数的变量对象。同样，inner()也可以访问全局作用域中的变量globalVar，因为全局作用域也在作用域链中。

+ 通过作用域链的机制，函数可以访问外部作用域中的变量，但外部作用域不能访问函数内部的变量，这就实现了变量的封装和保护。

+ 值得注意的是，当函数执行完毕后，其执行环境会被销毁，对应的变量对象也会被释放，因此作用域链也随之消失。这也是闭包的概念中所提到的保持变量的生命周期的特性。

**加粗文本**

[访问 Moonshot AI 官网](https://moonshot.cn)

[**ASTRO**
**Typescript**](https://astro.build/)
Astro is the all-in-one
web framework designed for speed.

`;

const Article: React.FC = () => {
  return (
    <div className="article">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default Article;
