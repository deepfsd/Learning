#include <stdio.h>

int main(int argc, char const *argv[])
{
    int a, b;
    printf("For Adding and Subtract\n");
    printf("Enter a\n");
    scanf("%d", &a);
    if (a==0)
    {
        goto label;
    }
    printf("Enter b\n");
    scanf("%d", &b);
    
    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);
    
    
    float c, d;
    label:
    printf("For Divide and Multiply\n");
    printf("Enter c\n");
    scanf("%f", &c);
    printf("Enter d\n");
    scanf("%f", &d);

    printf("a * b = %f\n", c * d);
    printf("a / b = %f\n", c / d);
    return 0;
}
