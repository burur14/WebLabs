import funcs

print("Enter file's name: ")
path = input() + ".txt"

file1 = funcs.fillFile(path)
amountOfWords = funcs.countWords(path)
print("Numbers of words in each line: ", amountOfWords)

maxLengths = funcs.getMaxLengths(path)
print("Max lengths of each line: ", maxLengths)

print("Enter new file's name: ")
newPath = input() + ".txt"
file2 = funcs.createEdited(path, newPath, amountOfWords, maxLengths)

print("Input file: ")
funcs.printFile(path)

print("Result file: ")
funcs.printFile(newPath)

