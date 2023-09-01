import random


class ChessPlayer:
    def __init__(self, name, age, ELO, Tenacity, isBoring=False):
        self.name = name
        self.age = age
        self.ELO = ELO
        self.Tenacity = Tenacity
        self.isBoring = isBoring
        self.score = 0


c1 = ChessPlayer("Courage the Cowardly Dog", 25, 1000.39, 1000, isBoring=False)
c2 = ChessPlayer("Princess Peach", 23, 945.65, 50, isBoring=True)
c3 = ChessPlayer("Walter White", 50, 1650.73, 750, isBoring=False)
c4 = ChessPlayer("Rory Gilmore", 16, 1700.87, 500, isBoring=False)
c5 = ChessPlayer("Anthony Fantano", 37, 1400.45, 400, isBoring=True)
c6 = ChessPlayer("Beth Harmon", 20, 2500.34, 150, isBoring=False)
a = [c1, c2, c3, c4, c5, c6]


def simulateMatch(p1, p2):
    if p1.ELO - p2.ELO > 100:
        p1.score += 1

    if p2.ELO - p1.ELO > 100:
        p2.score += 1

    if (p1.isBoring or p2.isBoring) and (100 > p1.ELO - p2.ELO and p2.ELO - p1.ELO < 100):
        p1.score += 0.5
        p1.score += 0.5

    elif 100 >= p1.ELO - p2.ELO >= 50:
        x = random.randint(1, 10)
        y = x * p1.Tenacity
        if y > p2.ELO:
            p2.score += 1
        else:
            p1.score += 1
    elif 50 > p1.ELO - p2.ELO >= 0:
        if p1.Tenacity > p2.Tenacity:
            p1.score += 1
        else:
            p2.score += 1

    elif 100 >= p2.ELO - p1.ELO >= 50:
        x = random.randint(1, 10)
        y = x * p1.Tenacity
        if y > p1.ELO:
            p1.score += 1
        else:
            p2.score += 1

    elif 50 > p2.ELO - p1.ELO >= 0:
        if p1.Tenacity > p2.Tenacity:
            p1.score += 1
        else:
            p2.score += 1


for i in range(6):
    for j in range(6):
        if i != j:
            simulateMatch(a[i], a[j])
            print(a[i].name, a[i].score, "-",a[j].score, a[j].name)


for i in range(6):
    print(a[i].name, a[i].score)
