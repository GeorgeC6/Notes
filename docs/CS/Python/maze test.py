'''
maze = [[1,0,1,1,1],
        [1,1,1,0,1],
        [0,0,0,1,1],
        [0,1,0,1,0],
        [0,0,0,1,1]]

def valid(maze,x,y):
    if (x>=0 and x<len(maze) and y>=0 and y<len(maze) and maze[x][y]==1):
        return True
    else:
        return False


def mazesolver(maze,x,y):
    if (x==4 and y==4):
        print("Mission Success!")
        return True
    if valid(maze,x,y):
        maze[x][y]=2
        print(x,y)
        mazesolver(maze,x-1,y)
        mazesolver(maze,x,y-1)
        mazesolver(maze,x+1,y)
        mazesolver(maze,x,y+1)

x=int(input("xstart:"))
y=int(input("ystart:"))
mazesolver(maze,x,y)
'''

maze = [[1,0,1,1,1],
        [1,1,1,0,1],
        [0,0,0,1,1],
        [0,1,0,1,0],
        [0,0,0,1,1]]    # 1代表路, 0代表障碍物

def valid(maze,x,y):    # 判断当前位置是否能走
    if (x>=0 and x<len(maze) and y>=0 and y<len(maze) and maze[x][y]==1):
        return True     # 如果在迷宫范围内且当前位置为1，则返回True
    else:
        return False
    
def mazesolver(maze, x, y, visited):
    if x == 4 and y == 4:   # 如果到达终点
        print("Mission Success!")
        return True
    if valid(maze, x, y):
        if (x, y) in visited:   # 若当前位置已经走过，则返回False
            return False
        visited.add((x, y))
        maze[x][y] = 2  # 将当前位置标记为2，表示已经走过
        print(x, y)
        if mazesolver(maze, x-1, y, visited):
            return True
        if mazesolver(maze, x, y-1, visited):
            return True
        if mazesolver(maze, x+1, y, visited):
            return True
        if mazesolver(maze, x, y+1, visited):
            return True
    return False

xstart = int(input("xstart:"))
ystart = int(input("ystart:"))
visited = set()     # 用来存储已走过位置的集合
if not mazesolver(maze, xstart, ystart, visited):
    print("No path to the exit.")