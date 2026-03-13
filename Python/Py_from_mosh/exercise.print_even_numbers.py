# a program to print even numbers from 1 to 10 then print we have <count of> even numbers

for i in range(1, 10):
    if i%2 == 0:
        print(i)
        count += 1
print(f"We have {count} even numbers")