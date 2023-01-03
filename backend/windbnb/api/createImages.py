def getAllImagesPaths(directory):
    import os

    fileList = []

    for dirpath, _, filenames in os.walk(directory):
        for f in filenames:
            if any(map(lambda item: f.endswith(item), ["png", "jpeg", "jpg", "webp"])):
                fileList.append(os.path.abspath(os.path.join(dirpath, f)))
    return fileList

def getImageFormat(imageFilePath):
    return imageFilePath[len(imageFilePath) - imageFilePath[::-1].index(".")::]