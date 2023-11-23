#include <stdio.h>

int main(int argc, char const *argv[])
{
    int i, age;

    for (i = 1; i < 11; i++)
    {
        printf("\n%d:\n Enter your subject\n", i);
        scanf("%d", &age);

        //  if (age>18)
        //  {
        //     break;
        //  }
       

       if (age>18)
       {
           continue;
       }

       printf("Next -> \n");
    }

    return 0;
}
