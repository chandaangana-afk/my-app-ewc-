import sys

with open("src/data/mockData.ts", "r") as f:
    content = f.read()

content = content.replace("'Aghanim\\'s Scepter'", '"Aghanim\'s Scepter"')
content = content.replace("'Aghanim's Scepter'", '"Aghanim\'s Scepter"')

with open("src/data/mockData.ts", "w") as f:
    f.write(content)
