# GenreSelector Component only for Portrait and Landscape view ports (base, sm breakpoints)
## Chakra component Menu
### Menu.Item
Button with name of either "Genres" or selected genre<br>
Menu items are in accordance to quering all genres from RAWG<br>

# SortSelector
## Chakra component Menu
### Menu.Item
Button with name of either "Ordering by < criteria >" or "No ordering"
Available fields: name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released <br>
1. No Ordering <br>
2. Ordering by Release Date  (descending order) <br>
3. Ordering by Added Date (descending order) <br>
4. Ordering by Updated Date (descending order) <br>
5. Ordering by Created Date (descending order) <br>
6. Ordering by Rating (descending order) <br>
7. Ordering by Critic Core (descending order) <br>
8. Ordering by Name (ascending order)
#### Hint
Use SortOption type and configuration containing sortOptions: SortOption[]