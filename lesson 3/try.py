data=[]
from operator import itemgetter
for _ in range(int(input())):
    name = input()
    score = float(input())
    data.append([name, score])
    
data = sorted(data, key=itemgetter(1))
second_lowest_score = data[1][1]
data = [item for item in data if item[1] == second_lowest_score]
data = sorted(data, key=itemgetter(0))
for item in data:
    print(item[0])
