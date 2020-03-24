# Learn Python 3

These are my notes from the [Learn Python 3](https://www.codecademy.com/courses/learn-python-3/) course at Codecademy.

---

# 1. Learn Python: Syntax

## Print
You can print stuff with `print` like so:

````
print("Hello world!")
````
You can use single quotes too!

````
print('Single quoties!)
````

## Comments

Comments are preceded with '#' like:

```
# The code below is totes broken!
```

## Variables
You can create variables with just a variable name and then a value, such as:

```
age = 12
half_my_age = (my_age / 2)
salutation = "Hola!"
name = "Milton"
```
## Errors
You might encounter a `NameError` if you try and print a word string but forget the quotes.  Python loves quotes dude!

## Numbers
An *integer* (int) is a whole number. No decimal points!  It's like 1, 2, 3, etc.  If you're counting member of a team, cookies in a jar or keys on a keyboard, use integers.

A *floating-point* (float) number is a decimal number.  You can use it to measure the length of a house, average test scores or a baseball player's batting average.

## Calculations
You can calculate stuff like this:

```
print(5 * 5 * 18 * 183 / 14)
```

## Exponents
Here's an example:

```
# 5 to the 10th power
print(5 ** 10)
```

## Modulo
Modulo is indicated by `%` and indicates the remainder of a division calculation.  

````
some_important_number = (27 % 4)
print()
````
## Concatenation
Add two things together!  Like:

```
string1 = "My name is "
string2 = "Inigo Montoya. "
string3 = "You killed my father. "
string4 = "Prepare to die."

# Define message below:
message = string1 + string2 + string3 + string4

print(message)
```

## Plus Equals
This is a shorthand for updating variables.  Example:

````
total_miles = 0
miles_i_walked_today = 15
miles_i_walked_yesterday = 5
total_miles += miles_i_walked_today
total_miles += miles_i_walked_yesterday
print(total_miles)
# Should print 20!
````

## Multiline strings
You can start and end big blocks of code with three tick marks!

```
This is a huge block of code and wow it's really long and stuff like that and it's so long and really long and long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long  
```

---

## Practice exercise: Create Purchasing Information and Receipts for Lovely Loveseats
Not 100% sure this is right, but taking a swing at this (it won't make sense unless you can follow along with the Codecademy exercise)

```
lovely_loveseat_description = ('''Lovely Loveseat. Tufted polyester blend on wood. 32 inches high x 40 inches wide x 30 inches deep. Red or white.''')

lovely_loveseat_price = 254.00

stylish_settee_description = ('''Stylish Settee. Faux leather on birch. 29.50 inches high x 54.75 inches wide x 28 inches deep. Black.''')

stylish_settee_price = 180.50

luxurious_lamp_description = ('''Luxurious Lamp. Glass and iron. 36 inches tall. Brown with cream shade.''')

luxurious_lamp_price = 52.15

sales_tax = .088

customer_one_total = 0

customer_one_itemization = ""

customer_one_itemization += lovely_loveseat_description

customer_one_total += luxurious_lamp_price

customer_one_tax = customer_one_total * sales_tax
customer_one_total += customer_one_tax
print("Customer One Items:")
print(customer_one_itemization)
print("Customer One Total:")
print(customer_one_total)
```

# 2. Learn Python: Functions

LEFT OFF HERE: https://www.codecademy.com/courses/learn-python-3/lessons/intro-to-functions/exercises/introduction
