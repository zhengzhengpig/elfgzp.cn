---
layout: post
title:  "Django使用心得（二） 使用TestCase测试接口"
date:   2018-12-04 10:30:00 +0800
tags: 'Django'
color: rgb(110, 120, 50)
cover: '/assets/images/2018-12-07-django-experience-2-test-case/django-test-case.png'
subtitle: '使用TestCase测试接口，养成良好的编码测试习惯'
---
在接触开源社区`Github`之后，发现特别多的开源项目都会有单元测试`TestCase`。但是在步入工作后，从业了两个创业公司，发现大多数程序员都没有养成写单元测试的习惯。   
  

在目前的公司面试了一些程序员，他们的工作经验平均都有三年以上，但是都没有编写单元测试的习惯。
问到`"为什么不去编写单元测试呢？"`，无非就是回答`"没有时间"`、`"写的都是接口，直接用客户端工具测试一下就可以了"`。


在笔者使用了`Django`框架自带的`TestCase`之后，发现用`TestCase`测试接口不仅比一些`客户端工具`方便，而且还能降低在对代码进行修改之后出现`BUG`的几率，
特别是一些对代码有严重的洁癖喜欢优化代码的程序员来说真的非常有用。  

而且运用框架的`TestCase`编写单元测试，还能结合一些`CI`工具来实现自动化测试，这个我也会专门写一篇文章来介绍我利用`Gitlab CI`结合`Django`的`TestCase`实现自动化测试的一些心得。

## TestCase 类的结构

为了方便没用用过`TestCase`的读者，先简单介绍一下`TestCase`的类结构。  

常见的`TestCase`由`setUp`函数、`tearDown`函数和`test_func`组成。  

这里`test_func`是指你编写了测试逻辑的函数，而`setUp`函数则是在`test_func`函数之前执行的函数，`tearDown`函数则是在`test_func`执行之后执行的函数。  

{% github_sample_ref /elfgzp/django_experience/blob/885880f4c44192a7802a52f2135fe81acf7c12b1/development_of_test_habits/tests/test_demo.py %}
{% highlight python %}
{% github_sample /elfgzp/django_experience/blob/885880f4c44192a7802a52f2135fe81acf7c12b1/development_of_test_habits/tests/test_demo.py 3 19 %}
{% endhighlight %}

我们可以通过在`Django`项目的根目录运行以下命令来运行这个单元测试
```shell
python manage.py test development_of_test_habits.tests.test_demo.Demo
```

如果使用`Pycharm`来运行的话可以直接点击类左侧的运行箭头，更加方便地运行或者`Debug`这个单元测试。  
![img](/assets/images/2018-12-07-django-experience-2-test-case/QQ20181209-101327@2x.png)

可以从运行后的结果清晰的看到这个单元测试的执行顺序。
```
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
setUp
test_demo
tearDown
.setUp
test_demo2
tearDown
.
----------------------------------------------------------------------
Ran 2 tests in 0.001s

OK
Destroying test database for alias 'default'...
```

此外还可以从运行结果看到，在测试之前单元测试创建了一个测试数据库。   
> Creating test database for alias 'default'...  

然后在测试结束将数据库摧毁。
> Destroying test database for alias 'default'...

这个也就是在继承了`Django`框架中的`TestCase`，它已经帮你实现的一些逻辑方便用于测试，所以我们不需要在`setUp`和`tearDown`函数中实现这些逻辑。


## 利用TestCase测试接口

接下来讲一下我们如何使用`TestCase`来测试接口的，首先我们编写一个简单的接口，这里笔者是用`Django Rest Framework`的`APIView`来编写的，读者也可以使用自己管用的方法来编写。
{% github_sample_ref /elfgzp/django_experience/blob/885880f4c44192a7802a52f2135fe81acf7c12b1/development_of_test_habits/views/hello_test_case.py %}
{% highlight python %}
{% github_sample /elfgzp/django_experience/blob/885880f4c44192a7802a52f2135fe81acf7c12b1/development_of_test_habits/views/hello_test_case.py 3 13 %}
{% endhighlight %}

然后这个接口类加到我们的路由中。
{% github_sample_ref /elfgzp/django_experience/blob/885880f4c44192a7802a52f2135fe81acf7c12b1/development_of_test_habits/urls.py %}
{% highlight python %}
{% github_sample /elfgzp/django_experience/blob/885880f4c44192a7802a52f2135fe81acf7c12b1/development_of_test_habits/urls.py 3 10%}
{% endhighlight %}




