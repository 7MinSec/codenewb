# Python
This is my live notebook as I chug through some Python classes over at [Pluralsight](https://pluralsight.com) and [Codecademy](https://www.codecademy.com/learn)

## [Python: Getting Started](https://app.pluralsight.com/library/courses/python-getting-started) and [Python Fundamentals](https://app.pluralsight.com/courses/python-fundamentals)

---

### Intro to Python
It's beautiful, powerful and cross-platform.  Django and Flask are Python Web frameworks.  I didn't know that :-/.  

You can also do some home automation stuff!

Python is also simple - Java takes about 6 lines to print "hello world" where Python can do the same thing in 1.

Python kinda forces you to write legible, understandable code.

Python uses indentation (using tabs or spaces) instead of curly braces.

Python's "rules" come in the form of PEPs (Python Enhancement Proposals), like PEP8 - principles to make your code more readable example:

* You need two empty lines before a new class declaration
* Function names should be all lower with underscores for spaces

(PEP8 is usually integrated in popular Python editors)

#### Python 2 vs. 3?!?!?!!?!
Long and short of it?  Just use v3.  

### Installing python
On Linux, it should already be there.  If you type `python --version` you'll probably see *Python 2.7.12* and if you type `python3 --version` you'll see something like *Python 3.x.x.*

Also install *idle3* by issuing `apt-get install idle3`.  I ran into issues here because I'm using Kali, and apparently there are some unmet dependencies and blah blah blah.  A quick Google search led me to [this video](https://www.youtube.com/watch?v=3HLbo-Jr1sE) which explained the syntax may be as simple as:

`apt-get install idle`

And indeed it was!  But that seemed to just update Python2 (I need to look into it) so I also did this for good measure:

`apt-get install idle3`

### Python console
On Linux, type `python3` - BAM!  You're in Python console.  

But, to get some additional functionality you might want to run *IDLE* so type **idle3** and you get some stuff like:

* code completion
* syntax highlighting

### Install Pycharm
This is a nice Python editor that has a free community edition.  I followed [these instructions](http://hbrowitt.com/guides/installing-pycharm-on-kali/) to get it going on Kali, but the long and short of the instructions were:

1. Go [download Pycharm](https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=linux&code=PCC)

2. Install with `tar xfz name-of-install-file.tar.gz`

3. `cd name-of-extracted-folder/bin`

4. `./pycharm.sh`.  Once this was run I took all the defaults and then when it came time to start a new project I chose **Interpreter 3.6.x** from the drop down.

## Creating the Hello World script!
In the pycharm window, right click the project and select **New > Python file** and call it *helloworld.py*.  Now type this:

````
printf("Hello world, dude!")
````
Now you can right click *helloworld.py* from the left side of the screen and choose **Run helloworld.py** (or do **Ctrl + Shift + F10** and *ka-pow!* your first Python script just ran.  Dude!

### Types in Python
In most languages, ya gotta declare a variable type (char/bool/int/etc.) before the variable itself.  You don't need to do that with Python!  This allows for quick dev time, but can become a pain when you have a ton of your own custom types.  However, in Python 3.5 you can do "Type Hinting" - which mostly helps Python IDEs/editors.  

### Integers and floats

#### Integers
Positive/negative numbers and zero.  They can't have a decimal!

#### Floats
Similar to integers but can have decimals.

Remember, you don't need to worry about types (at least initially).  

### Strings
Example:

``Hello World`` == `"Hello World"` == `"""Hello World"""`
`"hello".capitalize() == "Hello"`
`hello".replace("e", "a") == "hallo"`
`"hello".isalpha() == True`
`"123".isdigit() == True` # useful when converting to an int
`"some,csv,values".split(",") == ["some", "csv", "values"]`

When you receive a list separated by pipes, commas, etc.

String *format* is handy if you have a variable like this:

`name = "Brian"`
`machine = "Brian's machine"`

We need to then write something such as `"It's a pleasure to meet you {0}.  I'd like to introduce myself.  I am {1}".format(name, machine)`

This is because `name` is 0 (the first variable) and 1 is `machine`.  Remember, Python always starts with *0*!

In Python 3.6 you can do something like:

`f"It's a pleasure to meet you {0}.  I'd like to introduce myself.  I am {1}".format(name, machine)`

Note the line has to be prefixed with `f`

### Boolean and None
Boolean means true or false

`i-am-rich = True`

`i-am-poor = False`

Note that True starts with "T" and False with "F"

In other words, `1 = true` and `0 = false`.  

**Note: I won't be updating this area for a while as I switched training providers to [Codecademy](https://www.codecademy.com/learn) which I share all my notes about below:**

---

## [Codecademy](https://www.codecademy.com/learn)
