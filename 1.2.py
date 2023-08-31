import random

lst = ['0001', '0011', '0101', '1011', '1101', '1111']
new_lst = []

for i in range(len(lst)):
    new_lst.append(int(lst[i], 2))

max_prod = 0


def return2(l):
    for i in range(len(new_lst) - 2):
        x = random.randint(0, len(l) - 1)
        n1 = l[x]
        l.pop(x)
        y = random.randint(0, len(l) - 1)
        n2 = l[y]
        l.pop(y)
        l.append(n1 + n2)
        # print(l)

    return l[0], l[1]


l3 = []
for m in range(5000):
    l1 = new_lst.copy()
    x, y = return2(l1)
    if x * y > max_prod:
        max_prod = x * y
        l3 = l1.copy()

print(l3)

