# NodeJs<br />
nodejs并行、串行编码框架
serial、parallel code module for nodejs<br />

<p>
	<br />
	
</p>
<p>
	<br />
	
</p>
1、LinkedList<br />
the linked-list module based on basic link-list<br />
基于基础链表的上层封装(the linked-list module based on basic link-list)<br />
双向链表，支持基本的操作，亦可用作队列<br />

<p>
	<br />
	
</p>
<p>
	<br />
	
</p>
2、Exec<br />
parallel serial execute functions<br />
并行、串行执行一系列方法<br />
<br />
//并行串行执行模块<br />
//参数请自己遵守约束,减少检测，提高性能<br />

<pre name="code" class="javascript">_Exec.parallel({fns: [func1, func2, func3], args: [null, null, {game_id: 1}], errorBack: errorCall, overBack: overCall});
_Exec.serial({fns: [func1, func2, func3], args: [null, null, {game_id: 1}], errorBack: errorCall, overBack: overCall});</pre>
//并行parallel：自定义function的arguments[0]必有如下参数：callBack：自定义函数执行完毕后callBack(null,results) 或者 callBack(error)-此时后面的函数将不会在执行;arg：自定义参数，可空<br />

<p>
	//串行serial：自定义function的arguments[0]必有如下参数：pre_results：上一个函数的执行结果;callBack：自定义函数执行完毕后callBack(null,results) 或者 callBack(error)-此时后面的函数将不会在执行;arg：自定义参数，可空
</p>
<p>
	使用eg：
</p>
<p>
	<pre name="code" class="javascript">function func1() {
	  require('exec');
	    
    var params = arguments[0];
    setTimeout(function () {
        params &amp;&amp; params.callback(null, '1');
    }, 3000);
}
function func2() {
    var params = arguments[0];
    setTimeout(function () {
        params &amp;&amp; params.callback(null, +'2');
    }, 2000);
}
function func3() {
    var params = arguments[0];
    setTimeout(function () {
        params &amp;&amp; params.callback(null, '3');
    }, 1000);
}


function errorCall(err) {
    console.log('error:' + err);
}

function overCall(results) {
    console.timeEnd('1');
    console.log('over:' + results);
}

console.time('1');
_Exec.parallel({
    fns: [func1, func2, func3],
    args: [null, null, {game_id: 10002266}],
    errorBack: errorCall,
    overBack: overCall
});

_Exec.serial({
    fns: [func1, func2, func3],
    args: [null, null, {game_id: 10002266}],
    errorBack: errorCall,
    overBack: overCall
});</pre>
	<br />
	<br />
	
</p>
