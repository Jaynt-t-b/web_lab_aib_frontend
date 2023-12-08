from collections import Counter

def histogram(text):
    counter = Counter(text)
    del counter[' ']
    del counter['\n']
    items = list(counter.items())
    items.sort(key=lambda x: x[0])
    max_count = max(counter.values())
    for i in range(max_count, 0, -1):
        for _, count in items:
            print('#' if count >= i else ' ', end='')
        print()
    for char, _ in items:
        print(char, end='')

text = input()
histogram(text)
