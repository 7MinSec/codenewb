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
