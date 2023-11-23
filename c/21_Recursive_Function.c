#include <stdio.h>
// int fectorial(int number)

// {
//     if (number == 1 || number == 0)
//     {
//         return 1;
//     }
//     else
//     {
//         return number * fectorial(number - 1);
//     }
// }

// int main(int argc, char const *argv[])
// {
//     for (int i = 0; i < 11; i++)
//     {
//         for (int j = 0; j < 11; j++)
//         {
//             int num;
//             printf("Enter a number You want of Fectorial\n");
//             scanf("%d", &num);

//             printf("The Fectorial of %d is %d\n", num, fectorial(num));
//         }
//     }

//     return 0;
// }

int factorial(int number)
{
    if (number == 1 || number == 0)
    {
        return 1;
    }
    else
    {
        return (number * factorial(number - 1));
    }
}

int main(int argc, char const *argv[])
{
    for (int i = 0; i < 10; i++)
    {
        int num;
        printf("Enter a number you want of mutiplication\n");
        scanf("%d", &num);

        printf("The factorial of %d is %d\n", num, factorial(num));
    }

    return 0;
}
