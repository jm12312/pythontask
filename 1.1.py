jumbled_superheros = ["DocTor_sTRANGE", "sPiderMan", "MoON_KnigHT", "capTAIN_aMERIca", "hULK"]
l1 = enumerate(jumbled_superheros)
indices = []
decoded_names = []

strlen = lambda x: len(x)
for count, element in enumerate(jumbled_superheros, 1):
    indices.append(count)
    element = element.replace("_", " ")
    element = element.lower()
    decoded_names.append(element)

name_lengths = list(map(strlen, decoded_names))
#print(name_lengths)


def length(n):
    return len(n)


name_lengths.sort()
decoded_names.sort(key=length)

for i in range(5):
    decoded_names[i] = decoded_names[i].title()

for i in range(5):
    print(str(indices[i])+".", decoded_names[i])
