# Inter IIT Tech 11.0 Dev Team Task

## Setup Instructions

1. Clone this Repository

## Getting Results for task 1

1. For verifying the text block written as below

```python
For n=10 (For 500 iterations)<nr />
Time = 0.04 sec <br />
n=30
Time = 0.08 sec <br />
n=50
Time = 0.22 sec <br />
n=75
Time = 0.48 sec <br />
n=100
Time = 0.82 sec <br />
n=150
Time = 1.83 sec <br />
n=200
Time = 3.21 sec

```

2. Start by changing the TEST_CODE taking it progressively from 30 to 200, alter the following code

```python
TEST_CODE = '''
recursive_func(np.random.randint(10, size=(200)),1)
'''
```

to

```python
TEST_CODE = '''
recursive_func(np.random.randint(10, size=(30)),1)
'''
```

or some other size in between 30 and 100

## Important parameters for Task 2

1. You can define new polynomials for multiplication using arrays A and B as given below

```python
# The following array represents
A = [1, 2, 0, 3];

# The following array represents
B = [5, 0, 0, 0, 7];
m = len(A);
n = len(B);

```
