### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
def func1 val
  if val = 1
  return true
  else
  return false
  end
end
<!-- The argument, "val", should be in (brackets) for good practice.  "=" should be "==" -->

dif max a b
  if a > b
      return a
  else
  b
  end
end
end
<!-- "dif" should be "def". "a b" should be in brackets, separated by a comma.  There's an extra "end" -->

def looper
  for i in 1..10
  puts i
  end
end
<!-- This function gives the numbers 1..10 on a new line each, means it's no real use, especially with how it's called later. -->

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
  <!-- Looper is a function, not a variable.  No "end" to close function -->


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end
<!-- This should run if the func1 function is fixed above -->


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end
<!-- "func1(3)" should be "max(100, 1)". Misspelled "failures". -->


if failures
  puts "Test Failed"
else
  puts "Test Passed"
end
<!-- No condition applied to "failures" so will always return true, will always get "Test Failed" -->

```
