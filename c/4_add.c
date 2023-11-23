#include <stdio.h>
int main(int argc, char const *argv[])
{
    int a, b;

    printf("Enter Number A\n");
    scanf("%d", &a);

    printf("Enter Number B\n");
    scanf("%d", &b);

    int c = a + b;
    printf("The Sum is %d", c);
    return 0;
}
