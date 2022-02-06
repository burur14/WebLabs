import os.path

def fillFile(path):
    if os.path.exists(path):
        os.remove(path)
    print("\nEnter 'stop' to stop input")
    inp = input()
    file = open(path, "a")
    while inp != "stop":
        file.write(inp + "\n")
        inp = input()

    return file.flush()


def countWords(path):
    amountOfWords = []
    i = 0
    with open(path, 'r') as file:
        for line in file:
            amountOfWords.append(len(line.split()))

    return amountOfWords


def getMaxLengths(path):
    maxLengths = []
    with open(path, "r") as file:
        for line in file:
            maxLengths.append(len(max(line.split(), key=len)))
    return maxLengths


def createEdited(path, newPath, amountOfWords, maxLengths):
    with open(path, "r") as file1:
        with open(newPath, "w") as file2:
            i = 0
            for line in file1:
                file2.write(str(amountOfWords[i]) + " " + line.replace("\n", "") + " " + str(maxLengths[i]) + "\n")
                i += 1
            return file2

def printFile(path):
    with open(path, "r") as file:
        print(file.read())