#include <stdio.h>
//_____________________________________________________________________________________________________________

/* With Arrgumant and with Return value

int sum(int a, int b)
{
    return a + b;
}
int main(int argc, char const *argv[])
{
    int a, b, c;
    a = 2;
    b = 8;
    c = sum(a, b);
    printf("The sum is %d\n", c);
    return 0;
}

*/

//_____________________________________________________________________________________________________________

/* With Arrgumant and without return value

void printstar(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%c", '*');
    }
}
int main(int argc, char const *argv[])
{
    printstar(7);
    return 0;
}

*/

//_____________________________________________________________________________________________________________

/* Without Arragument and with return value
int takenumber()
{
    int i;
    printf("Enter a number\n");
    scanf("%d", &i);
    printf("The number is %d\n", i);
}
int main(int argc, char const *argv[])
{

    takenumber();



    return 0;
}
*/

//______________________________________________________________________________________________________________

// without arragument and without return vlaue

// void myname()
// {
//     printf("My name is Deepanshu\n");
// }
// int main(int argc, char const *argv[])
// {
//     printf("What is your name?\n");

//     myname();
//     return 0;
// }

//_______________________________________________________________________________________________________________

// just practice

void printstar(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%c", '*');
    }
    
}

int main(int argc, char const *argv[])
{
    printstar(10);
    return 0;
}

