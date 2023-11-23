#include <stdio.h>

int main(int argc, char const *argv[])
{
    int i = 1, num;

    printf("Enter a Number\n");
    scanf("%d", &num);

    do
    {
        printf("%d\n", i);
        i = i + 1;
    } while (i<num);
    return 0;
}
