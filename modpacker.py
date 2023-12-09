import zipfile
import os

zipped_dirs = [
    "overrides",
    "manifest.json",
    "modlist.html",
    "README.md",
]
MODPACK_NAME = "Creative-Drawers-Producer"
VERSION = "m1.0.7"

print(f"> Start Packing Modpack - {MODPACK_NAME} {VERSION}")
with zipfile.ZipFile(f"{MODPACK_NAME}-{VERSION}.zip", "w") as archive:
    for directory in zipped_dirs:
        if os.path.isdir(directory):
            for root, _, files in os.walk(directory):
                for file in files:
                    _path = os.path.join(root, file)
                    archive.write(_path)
                    print(f'>...> Packing "{_path}"')
        else:
            archive.write(directory)
            print(f'>...> Packing "{directory}"')
print("> Modpack Packing Finished")
