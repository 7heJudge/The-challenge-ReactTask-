**The challenge**

1) Sort fetched items and form 2 lists,

 - first list should stay untouched

 - children items in second list should be connected to their parents and rendered recursively (see list.jpg), create a function and form a tree for it

```
[
    {"id":1,"label":"List item 1","parent_id":0, "children": [
        {"id":5,"label":"List item 5","parent_id":1},
        {"id":6,"label":"List item 6","parent_id":1},
        {"id":7,"label":"List item 7","parent_id":1, "children": [
            {"id":8,"label":"List item 8","parent_id":7},
            {"id":9,"label":"List item 9","parent_id":7}
        ] },
    ]},
    {"id":2,"label":"List item 2","parent_id":0},
    {"id":3,"label":"List item 3","parent_id":0},
    {"id":4,"label":"List item 4","parent_id":0},

]
```


2) Try to optimize application as much as possible (extra points for implementing selectors for data)

3) There is only one action, add missing actions for loading/error while fetching items from the server

4) Extra points for adding eslint

5) Extra point for adding unit tests
