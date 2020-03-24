# PowerShell
This is my working notebook as I journey into PowerShell.  I'll update it as I follow along with the Pluralsight course called [Your First Day with Powershell](https://app.pluralsight.com/library/courses/powershell-first-day/table-of-contents) from [Jeff Hicks](https://twitter.com/jeffhicks).

## PowerShell background
PowerShell is a management *engine* built on .Net framework.  The engine itself is hosted by an application to allow you to run PowerShell.

### Consoles
There are two primary - the one that looks like cmd.exe, and the ISE (graphical console).  The graphical console is only run on desktops.  

It's probably easiest to create a PowerShell shortcut on your desktop, and in general, it's best to run it with admin/elevated privileges.

## Check PowerShell version
`$psversiontable` will give you version of PS running on your system.

## Customize console
Right click the Window and click **Properties**.  In *Font* tab you can change font size and style.  

If you go under *Layout* and play with window sizes, make Screen Buffer Size and Window Size width value the same.

## PowerShell ISE
Basically you can punch in commands in the top pane and have them run in the window below.  You have options to split the screen horizontally, vertically or put everything in full screen mode.

In **Tools > Options** you can modify size/fonts, apply themes, etc.

From the regular "cmd" console, you can type **ise** to launch PowerShell ISE.

## PowerShell help
Type **help** + name of command, like `help get-service`.  You might get an error/warning like:

````
Get-Help cannot find the Help files...
````

So run `update-help` to get the latest help files!

If running this command barfs up a bunch of red text, it's likely because you didn't run PowerShell in an admin/elevated session.  So right-click the PowerShell shortcut and click **Run as administrator**.  

Then, you might want to run `get-help force` to force the get-help operations to run again.

And when that's all done, you can type **clear** to clear the console out!

## Getting started with PowerShell
`get-service` lists a crazy amount of detail on running services, which ones are started/stopped, their description, etc.  

`get-service bits` will give you info on *just* that service

`help *service` will give you help syntax for service-related commands

`get-service bits` will show whether or not *bits* is running

`help *eventlog*` will list all matching commands, like

`get-eventlog`by itself will basically say "What log are you talking about?"

`get-eventlog system` will list out the system log entries

`help get-eventlog -Parameter logname` will help you understand how to properly format the command

`get-eventlog system -newest 5` will give you last 5 entries

## Discovering commands
Use `help get-command` for getting all the commands that are installed on the computer.

Running `get-command` will list ALL commands that PS recognizes right from a command prompt.  

`get-command *process*` will list out all the commands with *process* in the name.

You can run commands that *aren't* PS commands!  Example:

* dir
* netstat -n
* net user
* etc...

When you run commands in ISE, one gotcha is if you run **netsh** it'll bark at you that interactive console applications are not supported.


---
* *Update 8/21 - I've paused my Pluralsight subscription in lieu of a [Codecademy](https://www.codecademy.com/) subscription*
