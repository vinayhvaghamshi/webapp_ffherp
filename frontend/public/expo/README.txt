FFH|ERP expo photographs
=======================

Layout
  expo/
    photos.csv              <- the list that drives the About page gallery
    cmda-it-expo-2026/      <- one folder per expo
      1.jpeg ... 15.jpeg

To change a photograph
  Replace the file, keeping its name. Nothing else to do.

To add photographs
  Drop them in the folder as the next numbers (16.jpeg, 17.jpeg, ...) and add a
  matching row to photos.csv.

To add a whole new expo
  1. Make a folder, e.g. b2b-expo-2025/
  2. Put its photographs in, numbered from 1.jpeg
  3. Add rows to photos.csv with that folder name, its year and its event name.
     A new event name automatically becomes a new group heading on the page.

To reorder or hide a photograph
  Move or delete its row in photos.csv. File numbers do not decide the order.

Sizes
  Images are resized to a maximum of 1600px on the long edge and saved as JPEG,
  which keeps the whole wall to a few megabytes.
