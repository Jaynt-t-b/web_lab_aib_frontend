import heapq

def median_sum(n, x):
    left = []
    right = []
    medians = []
    for i in range(n):
        if not left or x[i] < -left[0]:
            heapq.heappush(left, -x[i])
        else:
            heapq.heappush(right, x[i])
        if len(left) < len(right):
            heapq.heappush(left, -heapq.heappop(right))
        elif len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        medians.append(-left[0])
    return sum(medians)

n = int(input())
x = list(map(int, input().split()))
print(median_sum(n, x))
