# C Sharp practice exercises

Basic "hello world" exercise
--------

```
using System;

public class Program
{
	static void Main()
	{
		Console.WriteLine("OMg, my first C# program!  I'm the smartest man alive!");
		Console.WriteLine(DateTime.Now.DayOfWeek);
	}
	
}
```

Another "hello world" with a supplied variable
--------
```
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

/// Now you can run this with something like "Hello mom" and the program will use "mom" as an arg in
/// the output!  Ha ha ha!  La la la!  Fa fa fa!  I'm pretty much a master coder at this point.
```

Yet ANOTHER "hello world" with name variable and feedback on hours slept
-------
```
/// So in this version of the hello program, we ask the user for his/her name, as well as 
/// how many hours he/she slept last night.  The user gets a different message depending on if 
/// the hours are greater than 8.  


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
```