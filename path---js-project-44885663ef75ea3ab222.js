webpackJsonp([50153879199504],{472:function(e,t){e.exports={data:{markdownRemark:{html:'<style>\n  .calc {\n    display: inherit;\n    margin: 0 auto;\n  }\n</style>\n<p>Project time!</p>\n<p>We are going to rebuild the calculator on iOS! If you\'ve never seen that before, here it is:</p>\n<!-- ![Calculator build in HTML and CSS](./images/calculator.png) -->\n<!-- locally you\'ll need to do /calculator.html without /intro-to-web-dev-v2/ -->\n<iframe class="calc" width="400" height="595" title="Calculator" src="/intro-to-web-dev-v2/calculator.html" frameborder="no" allowtransparency="true"></iframe>\n<p>My implementation of it is embedded here on the page so feel free to play with it.</p>\n<p>Let\'s going over the requirements:</p>\n<ul>\n<li>The calculator should look like the above image</li>\n<li>The calculator should function like a normal calculator</li>\n<li><strong>Do not</strong> implement <code class="language-text">%</code> or <code class="language-text">.</code>. You can assume everything will be an integer.</li>\n<li><code class="language-text">C</code> means clear. When a user clicks it, it should clear everything and go back to the first state it was in when the page loaded.</li>\n<li>Doing the back arrow is extra credit. It\'s like pressing backspace; it\'ll delete the last character typed. If it\'s clicked when there\'s only one digit, it sets the current number to be <code class="language-text">0</code>.</li>\n<li>Don\'t worry about if the number is too long for the screen.</li>\n<li>Calculators tend to have some special behavior when you hit equals: if you type another number it erases the results and starts over. Feel free to do that but also free free (like me) to just treat it normally and make the user hit <code class="language-text">C</code> if they want to clear it. Let\'s keep it simple.</li>\n</ul>\n<p>Okay, now that you have requirements, let\'s go over some tips and hints.</p>\n<h2 id="html-and-css-tips-and-hints"><a href="#html-and-css-tips-and-hints" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTML and CSS Tips and Hints</h2>\n<ul>\n<li>Programming is all about taking large problems and breaking them into smaller problems. If you\'re trying to tackle too much at once, break it into two smaller problems and try to solve one of those.</li>\n<li>Personally, I wrote the HTML and CSS first. Once that\'s all taken care of, then I do the JavaScript.</li>\n<li>For the font of the "result screen" I\'d just use <code class="language-text">monospace</code>.</li>\n<li>There are so many ways to write this. There is no one right way. My solution is not the only nor is it the best solution. Experiment. Try. Fail. Succeed. It\'s all about learning here.</li>\n<li>Good idea to use <code class="language-text">&lt;button&gt;&lt;/button&gt;</code> for the buttons. You have to deal with some extra styling stuff but it will make your code work pretty much automatically for disabled people. In general when writing HTML, if something serves the function of a button, make it a <code class="language-text">&lt;button&gt;&lt;/button&gt;</code>.</li>\n<li>I used multiple rows of flex layed out divs for the button. You could do it all in one div using the <code class="language-text">flex-wrap</code> property.</li>\n<li>The secret to getting equal gutters (which is what you call the black space between buttons): you can set width to be <code class="language-text">24.5%</code> (so four of them fit on a line) and then use <code class="language-text">justify-cotent: space-between</code> to evenly space them. That\'ll give them a gutter of roughly <code class="language-text">.5%</code> of the whole width. The problem with using percentages in conjuections with heights: your heights and widths are different. 5% of height is not the same of 5% of width, and that\'ll make the gutters look weird. You want the bottom gutters to be the same size as the side gutters. <code class="language-text">margin-bottom</code> to the resuce! If you give the row a <code class="language-text">margin-bottom</code> of <code class="language-text">.5%</code> (if you\'re using my same numbers) then that\'ll work since margin is always measured as a function of width (just one of those things you have to know!) Hopefully that helps.</li>\n<li>Sometimes I do the math to get things right. Sometimes I just guess-and-check to see if it looks okay.</li>\n<li>You can add a class to get the orange buttons. Or you could try <code class="language-text">:last-child</code> (assuming you have row div.)</li>\n</ul>\n<h2 id="javascript-tips-and-hints"><a href="#javascript-tips-and-hints" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JavaScript Tips and Hints</h2>\n<ul>\n<li>Again, no wrong way to do this. I wrote about 80 lines of JavaScript to finish the project (not including empty lines.) I say that so you have an idea of how much code you should be writing. If you\'re writing 200+ lines of code, you may want to rethink some of your solutions. Don\'t feel like you\'re going for the smallest possible answer. You\'re just going for correct.</li>\n<li>I use <code class="language-text">console.log</code> everywhere while I\'m writing code. Just remember to take them out at the end.</li>\n<li>Many small functions is <em>very</em> preferable to one large function. Have each function do one thing well as opposed to having giant functions that do everything. If you find a function doing too, break it into smaller pieces. I solved it with eight different functions.</li>\n<li>You\'ll need to keep track of several variables. Make sure these variables are stored in a place where they stay in scope.</li>\n<li>You can add an event listener to each button individually, or you can use one listener at the root of the button. I did the latter but it\'s up to you.</li>\n</ul>\n<h2 id="types"><a href="#types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Types</h2>\n<p>A brief note on what is called <strong>types</strong> in JavaScript. We\'ve danced the idea already and I want to make it a little more concrete for you. Strings, booleans, objects, arrays, numbers, these are different types of types (lol). JavaScript is a language where you don\'t have to concern yourself <em>a lot</em> with types since it doesn\'t strictly enforce them (other languages do) but in this problem you are definitely going to have to deal with it.</p>\n<p>Whatever you put into the DOM and whatever you get out it are going to strings, every time. If I do:</p>\n<div class="number-target"></div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".number-target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// the div right above this block</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token keyword">typeof</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this is a number here</span>\ndiv<span class="token punctuation">.</span>innerText <span class="token operator">=</span> num<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div<span class="token punctuation">.</span>innerText<span class="token punctuation">,</span> <span class="token keyword">typeof</span> div<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// it\'s a string here</span></code></pre>\n      </div>\n<p>Since you\'re doing math here, you\'ll need the numbers to actually be of the number type. Otherwise you\'ll get <code class="language-text">&quot;5&quot; + &quot;5&quot; = &quot;55&quot;</code>. There\'s a function called <code class="language-text">parseInt(string)</code> that will turn a string of a number (<code class="language-text">&quot;5&quot;</code>) to a number (<code class="language-text">5</code>).</p>\n<p>You\'ll also see that we used the <code class="language-text">typeof</code> operator. <code class="language-text">typeof</code> tells whatever the type of the thing that comes right after it is. This is useful to quickly see what\'s happening in your code. Be careful because <code class="language-text">typeof</code> is not always useful, but it is useful for telling numbers and strings apart.</p>\n<h2 id="answer"><a href="#answer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Answer</h2>\n<ul>\n<li><a href="/calculator.html">The HTML</a> (you can view source on it)</li>\n<li><a href="/calculator.js">The JavaScript</a></li>\n<li><a href="/calculator.css">The CSS</a></li>\n</ul>',frontmatter:{path:"/js-project",title:"JavaScript, HTML, and CSS Project",order:15}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---js-project-44885663ef75ea3ab222.js.map