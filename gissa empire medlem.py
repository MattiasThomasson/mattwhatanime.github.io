import tkinter as tk
import random
import shutil


def pick_anime():
    # read anime list from txt file
    with open("anime.txt", "r", encoding="utf-8") as file:
        anime_list = [line.strip() for line in file if line.strip()]

    if not anime_list:
        result_label.config(text="🎉 You’ve watched everything!")
        return

    # choose random anime
    random_anime = random.choice(anime_list)
    result_label.config(text=f"🎬 {random_anime}")

    # remove chosen anime from list
    anime_list.remove(random_anime)

    # write updated list back to file
    with open("anime.txt", "w", encoding="utf-8") as file:
        for anime in anime_list:
            file.write(anime + "\n")


def reset_list():
    # copy backup file into anime.txt
    shutil.copy("anime_backup.txt", "anime.txt")
    result_label.config(text="✅ List has been reset!")


# create main window
root = tk.Tk()
root.title("What is my next anime?")

# window size
root.geometry("400x250")

# title label
title_label = tk.Label(root, text="What is my next anime?", font=("Arial", 16))
title_label.pack(pady=10)

# button to generate anime
pick_button = tk.Button(root, text="Pick Anime",
                        font=("Arial", 14), command=pick_anime)
pick_button.pack(pady=10)

# button to reset list
reset_button = tk.Button(root, text="Reset List",
                         font=("Arial", 14), command=reset_list)
reset_button.pack(pady=10)

# label to show result
result_label = tk.Label(root, text="", font=("Arial", 14))
result_label.pack(pady=10)

# run the app
root.mainloop()
