#include <stdio.h>
/*int main(int argc, char const *argv[])
{
    label:
    printf("Hello World\n");
    goto end;
    goto label;


    end:
    printf("We are in end\n");
    return 0;
}
*/

int main(int argc, char const *argv[])
{
    int i, j;
    int age;

    for(i=1; i<11; i++)
    {
        printf("%d\n", i);
        for ( j = 1; j < 11; j++)
        {
            printf("Enter your age\n");
            scanf("%d", &age);
            if (age==0)
            {
                goto end;
            }

            else 
            {
                printf("You entered %d as your age\n", age);
            }
        }
        
    }
    end:
    return 0;
}
