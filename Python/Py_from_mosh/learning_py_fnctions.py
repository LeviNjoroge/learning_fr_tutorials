
def greetings(name):
    print(f"Hello {name}")


def get_greeting(name):
    return f"Hello {name}"


def get_details(name="Guest", age=18):
    return name, age


def sum_of_many(*numbers):
    sum = 0
    for number in numbers:
        sum += number
    return sum


print(sum_of_many(12, 32, 43, 123, 34))
greetings("Levi")
print(get_details())
