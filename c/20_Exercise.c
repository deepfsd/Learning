#include <stdio.h>
// int main(int argc, char const *argv[])
// {
//     int num;
//     printf("Enter a number you want you want multiplaction table of:\n");
//     scanf("%d", &num);
//     printf("You Enterd %d as your table:\n", num);
//     for (int i = 1; i < 11; i++)
//     {
//         printf("%d * %d = %d\n", num, i, num*i);
//     }

//     return 0;
// }

int takenumber()
{
    for (int a = 0; a < 11; a++)
    {
        int a;
        printf("Enter a number you want of multiplicaton\n");
        scanf("%d", &a);
        printf("The Table of %d\n", a);
        for (int i = 1; i < 11; i++)
        {
        
            printf("%d X %d = %d\n", a, i, a * i);
        }   
    }

    return 0;
}
int main(int argc, char const *argv[])
{
    int c = takenumber();

    printf("%d", c);
}
