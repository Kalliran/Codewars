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