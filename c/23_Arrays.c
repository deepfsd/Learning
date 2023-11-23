#include <stdio.h>

int main(int argc, char const *argv[])
{
    int mark[2][4] = {{45, 11, 22, 51}, {2, 1, 44, 11}};

    // mark[0] = 45;

    // printf("The marks of student 1 is %d\n", mark[0]);

    // mark[0] = 34;

    // printf("The marks of student 1 is %d\n", mark[0]);

    // for (int i = 0; i < 4; i++)
    // {
    //     printf("You haved entered %d as your array elements\n", i);
    //     scanf("%d", &mark[i]);
    // }
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            // printf("The student%d, %d marks is %d\n", i, j, mark[i][j]);
            printf("%d ", mark[i][j]);
        }
        printf("\n");
    }


    return 0;
}
