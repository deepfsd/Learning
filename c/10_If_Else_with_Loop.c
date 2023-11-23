#include <stdio.h>

int main(int argc, char const *argv[])
{
    int age;
    int i;
    int j;
    for (i = 1; i < 10; i++)
    {
        printf("%d\n", i);
        for (j = 1; j < 10; j++)
        {
            printf("Enter your age\n");
            scanf("%d", &age);
            printf("\n");
            if (age > 18)
            {
                printf("-->You can vote\n", age);
                printf("\n");
                break;
            }
            
            else if (age < 18)
            {
                printf("-->You cannot vote\n", age);
                printf("\n");
                break;
            }
            
            else if (age == 0)
            {
                printf("-->Plzz Sir put your valid AGE\n");
                printf("\n");
                break;

            }
        }
    }

    return 0;
}
