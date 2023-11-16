import zipfile
import os

zipped_dirs = [
    "overrides",
    "manifest.json",
    "modlist.html",
    "README.md",
]

version_number = "m1.0.5"

with zipfile.ZipFile(f"Creative-Drawers-Producer-{version_number}.zip", "w") as archive:
    for directory in zipped_dirs:
        if os.path.isdir(directory):
            for root, _, files in os.walk(directory):
                for file in files:
                    archive.write(os.path.join(root, file))
        else:
            archive.write(directory)
