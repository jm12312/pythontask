def explode_chains(a):
    for i in range(len(a)):
        for j in range(len(a[i])):
            if len(a[i]) - j >= 2:
                if a[i][j] + 1 == a[i][j + 1] and a[i][j] + 2 == a[i][j + 2]:
                    for _ in range(3):
                        a[i].pop(j)

    return a


encoded_lists = [
    [1, 2, 3, 4, 6],
    [5, 7, 8, 9, 15],
    [12, 14, 16, 18],
    [10, 11, 12, 13, 16, 17, 18, 20]
]

y = explode_chains(encoded_lists)

print(y)
