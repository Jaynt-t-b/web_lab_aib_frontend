def count_paths(N, M):
    dp = [[0]*(M+2) for _ in range(N+2)]
    dp[2][1] = 1
    for i in range(2, N+2):
        for j in range(1, M+2):
            dp[i][j] += dp[i-1][j-2] + dp[i-2][j-1]
    return dp[N+1][M+1]

N, M = map(int, input().split())
print(count_paths(N, M))
