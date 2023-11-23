#include <stdio.h>
#define PI 2
int main(int argc, char const *argv[])
{
    printf("Specifier\n");

    float c = 1.222;

    printf("%12.3f Deepanshu\n", c);
    printf("%-12.3f Deepanshu\n", c);

    /*  printf("\n");
    
    printf("Constants\n"); // #define PI, const int b = 2
    int a = 1;
    const int b = 1; 
    b = 2;
    PI = 21;
    printf("a + b + PI = %d\n", a+b+PI);
    */
    return 0;
}
