# C Sharp from scratch
This is my working notebook as I journey into C#.  I'll update it as I follow along with this [Pluralsight course](https://www.pluralsight.com/browse/software-development/c-sharp) from [Scott Allen](https://twitter.com/OdeToCode).  

Down n' dirty background: essentially, C# is one of many languages for .NET, and similar to Java, C++ and JavaScript.

## CLR
CLR Works in the background to manage app while it's running.

Common Language Runtime - execution environment for .NET apps, and that includes apps in C$.

CLR brings apps to life, manages it while it executes, and tears it down when done (either gracefully or from an error).

CLR tracks all memory that your program uses to do work.  It knows when a program is finished with memory and will clean things up.

CLR also virtualizes the environment the program is executed in so that (for the most part) it can be CPU-agnostic and not care about 32/64 bitness or number of cores.  

CLR can support programs in multiple languages, so you can write stuff in C#, Visual Basic, F# and more.  

CLR is in available for every version of Windows since XP, a version for Windows 8...even one for OSX/Linux (CoreCLR).

## FCL
Framework Class Library contains reusable software that you use to build apps.  

Basically, FCL has all the functionality you need to do useful stuff like read/write info to disk.  It has all the stuff you need to build desktop apps, web apps and web services and apps.

It's freaking HUGE - nobody usually knows the whole things in and out, so usually you focus on specific things, like becoming awesome at ASP.NET to build Webapps.  ASP.NET is just one part of the .NET Framework.  

We're building things in C# on top of .NET, and .NET gives us CLR to run our apps and the FCL to give us the software components to build on.

### BCL
Inside the FCL but not as many features.  BUT it works everywhere.

## Installing Visual Studio
Pretty straight forward.  Go to www.visualstudio.com and install the community edition.  Click next, next, next.  Done.

### Writing your first program

Extension for C# files is .cs.  Most of the code we write for .NET will live inside of a *class*.  Inside a class you can create *methods*. 

Here's an example:

`````
using System;

public class Program
{
	static void Main()
	{
		Console.WriteLine("OMg, my first C# program!  I'm the smartest man alive!");
	}
	
}
`````

The start of the method is at the opening curly brace below the `static void Main()` line and ends with the next closing curly.

### Running your first program
You need to use the `csc.exe` to turn your `.cs` file into an `.exe` file.  So I ran this:

    c:\windows\Microsoft.NET\framework\v4.0.30319\csc.exe hello.cs
    
And then here's where I ran into my first problem.  The error that got kicked back to me was:

*This compiler is provided as part of the Microsoft (R) .NET Framework, but only supports language versions up to C# 5, which is no longer the latest version. For compilers that support newer versions of the C# programming language, see http://go.microsoft.com/fwlink/?LinkID=533240*

Mmmmkay.  So if you click [http://go.microsoft.com/fwlink/?LinkID=533240](http://go.microsoft.com/fwlink/?LinkID=533240) you actually go to [https://github.com/dotnet/roslyn](https://github.com/dotnet/roslyn) and as a C# newb, I read through the page and still didn't know what to do.  However, it *seemed* like the answer to my problem might be to run this command:

`nuget install Microsoft.Net.Compilers   # Install C# and VB compilers`

However, there was no `nuget.exe` on my system.  Over at the [Nuget](https://www.nuget.org/downloads) download site, it says that `nuget.exe` *should* be installed on my system:

*NuGet 4.x is included in the Visual Studio 2017 version 15.x installation. Latest NuGet releases are delivered as part of Visual Studio updates.  Batteries are included!*

~~So I took a guess and ran the Visual Studio Installer (by just searching for *Visual Studio* in my Windows search box).  Once that was open I clicked **Modify**, then clicked **Individual Components**, put a tick in **Code Tools > NuGet Package Manger** and clicked **Modify**.~~

I went to [https://www.nuget.org/downloads](https://www.nuget.org/downloads) and grabbed the "recommended" version.  Then I ran this:

`nuget install Microsoft.Net.Compilers`

That worked!  And then once again I tried to run:

`c:\windows\Microsoft.NET\framework\v4.0.30319\csc.exe hello.cs`

And this time I had a `hello.exe` which ran as expected!  W00t!

## C# compiler
It takes our code and transforms it into something called Microsoft Intermediate Language (MSIL).  MSIL defines instructions for CLR, and turns it into instructions that CPU will understand.  

## Working in Visual Studio
Just search for it in start menu.  You got this.

When starting it go to **File > New > New Project** and then I had to click **Online** in order to see the `Templates > Visual C#` choice.  

Bah!  I had a problem here because I was looking for a choice of `Console Application` but it wasn't there.   I did some Googling and eventually closed Visual Studio, ran the Visual Studio Installer, went under **Individual Components** and ticked the box for **.Net desktop development.**. Once the install was done, *bam!*, I could now select **Console App** under **File > New > New Project > Installed**

### Writing your first program in Visual Studio

With the new project open, ensure the *Solutions Explorer* is open.  If you don't see it go to **View > Solutions Explorer** or hit **Ctrl + Alt + L**.  Solutions Explorer helps organize all projects and code.  

Here's our *Hello* program again, this time in Visual Studio "flavor"

`````

using System;

namespace Hello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hey world, I made this in Visual Studio 2017!");
        }
    }
}
`````

To run it, one easy way is **Debug > Start Without Debugging** - a command window will pop up with the program and then pause without closing the window.

You can also find this file manually - for me, it was in *C:\Users\brian\source\repos\Hello\Hello\bin\Debug>*.  

The `(string[] args)` part basically means "I can take no strings or many strings, so you could give me the names of, say, Brian, Bob, Alice and Jane and they'll be slurped up into a parameter called *args*.  

By utilizing *args* we can customize our program to be a bit more personal.  For instance, check this out:

`````
using System;

namespace Hello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hey I made this in Visual Studio 2017 and did it especially for " + args[0]);
        }
    }
}
`````

What this allows me to do is go to a command line and type `hello mom` and the output will be `Hey I made this in Visual Studio 2017 and did it especially for mom`

### Debugging
You'll often see a *runtime error* - like try running `hello.exe` without any arguments.  Stuff blows up!  "Hello stopped working!"  

What you can do is click to the left of your code and set a stop/break point, then hit **F5** to run the program with debugging enabled, and then pay attention to the *Autos* window, which shows some variables that are available in the context of where you're debugging.  

From there you can *Step Over* (or *Step Into* methods (**F10** and **F11**)) to keep going line by line through the code.  

Cool right? But what if you want to pass args like *mom* while you're in Visual Studio?  You can right-click the project in *Solutions Explorer*, click **Properties**, click **Debug** on the left, and then in the *Command line arguments field* type in something like *momma*.  Then close this *Debug* window.

Now do the ol' **Ctrl + F5**  and you're good to go!

### Slightly more advanced hello program

So in this version of the hello program, we ask the user for his/her name, as well as how many hours he/she slept last night.  The user gets a different message depending on if the hours are greater than 8.  

`````
using System;

namespace Hello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please tell me ya name:");
            string name = Console.ReadLine();

            Console.WriteLine("Hey did you get enough sleep last night? Tell me how many hours (0-24):");
            int hoursOfSleep = int.Parse(Console.ReadLine());

            if(hoursOfSleep > 8)
            {
                Console.WriteLine("You are well rested!");
            }
            else
            {
                Console.WriteLine("Dude, you need more sleep!");
            }

            Console.WriteLine("Hey I made this in Visual Studio 2017 and did it especially for " + name);
            Console.WriteLine("And regardless of if you got too much or too little sleep, you told me you got this many hours of sleep last night: " + hoursOfSleep);
        }
    }
}
`````

## Classes and objects
Classes can represent people, accounts, products - whatever you want!  

When you're just starting with programming, classes can be considered abstractions for stuff we need to track, like people, places and things.

Think of classes as a cookie cutter, where classes stamp out objects from the memory of the computer - and it's *objects* that hold the data we need!

Here's a grade book program we're working with:

````
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Grades
{
    class Program
    {
        static void Main(string[] args)
        {
            GradeBook book = new GradeBook();
            book.AddGrade(91);
            book.AddGrade(89.5);
        }
    }
}

````
Take a look at this line:

`GradeBook book = new GradeBook();`

What we're saying here is "Give me a new instance of the GradeBook class, and store a reference to it called *book*."  The parentheses invoke a constructor to create a new instance of the gradebook.  

In our *program.cs* code, this is an issue:

`book.AddGrade(89.5);`

The reason it's an issue is that in the *gradebook.cs* code we said that *grade* must be a *float*.  A *float* is a single precision floating point number.  It's short for "floating point," and basically just means a number with a point something on the end.  

However, 89.5 is a double precision floating number, and C# won't convert that automatically.  So we need to tell C# that the value should be treated as a floating point number.  So now we change the line to:

`book.AddGrade(89.5);`

## Constructor
Constructors help construct an object.  

You can type the short phrase `ctor` and hit **Tab** twice to write the constructor for us!  Inside the constructor I can control the initialization of our object.  

## Note to self
I'm writing this note on 10/11/17: I feel like I've gotta stick a bookmark in C# right now.  I'm trying to learn this, Python and Powershell *and* Node at the same time...and my head is spinning.  I'm finding the other languages more digestible and so I'm going to focus my attention there first and then come back to C# when I'm a bit more comfortable with coding in general.

---
*I left off on C# fundamentals with Visual Studio 2015, Classes vs Variables*