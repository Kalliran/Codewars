# Title: If you can't sleep, just count sheep!!
"""
Task:
Given a non-negative integer, 3 for example, return a string with a murmur:
"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
"""
def count_sheep(n):
  result = ""
  for i in range(1, n+1):
    result = result + str(i) + " " + "sheep..."
  return result
#-----------------------------------------------------------------------------------------
# Title: Find the smallest integer in the array
"""Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty."""
def find_smallest_int(arr):
  return min(arr)
#-----------------------------------------------------------------------------------------
# Title: CSV representation of array
'''Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

Note: you shouldn't escape the \n, it should work as a new line.'''
def to_csv_text(array):
  return "\n".join([",".join(map(str, i)) for i in array])
#-----------------------------------------------------------------------------------------
# Title: Multiply
'''The code does not execute properly. Try to figure out why.'''
def multiply(a, b):
  return a * b
#-----------------------------------------------------------------------------------------
# Title: Calculate Average
'''Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.'''
def find_average(numbers):
  return sum(numbers) / len(numbers) if numbers else 0