#include <stdio.h>

int fib_recursive(int n)
{
    if (n==1 || n==2)
    {
        return n-1;

    }
    else 
    {
        return fib_recursive(n-1) + fib_recursive(n-2);
    }
    
}
int main(int argc, char const *argv[])
{
    int number;

    printf("Enter a number you want of Fibnoochi no. of\n");
    scanf("%d", &number);
    printf("The value of %d position using recursive approach is %d\n", number, fib_recursive(number));
    return 0;
}
