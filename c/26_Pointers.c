
#include <stdio.h>
int main(int argc, char const *argv[])
{
    int a = 45;
    int *ptra = &a;
    int b = NULL;
    printf("The value of a is %d\n", a);
    printf("The vlaue of a using pointer is %d\n", *ptra );
    printf("The address of a to pointer is %p\n", ptra);
    printf("The address of a to pointer is %p\n", &a);
    printf("The address of a is %p\n", a);
    printf("The value of garbage is %p\n", b);
    
    return 0;
}
