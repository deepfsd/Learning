
#include <stdio.h>

int main(int argc, char const *argv[])
{
    printf("Relation Operators:\n");
    int a, b;
    a = 1;
    b = 1;
    printf("a == b = %d\n", a==b);
    printf("a != b = %d\n", a!=b);
    printf("a <  b = %d\n",  a<b);
    printf("a >  b = %d\n",  a>b);
    printf("a >= b = %d\n", a>=b);
    printf("a <= b = %d\n", a<=b);
    printf("\n");

    printf("Logical Operator:\n");
    int c, d;
    c = 1;
    d = 0;
    printf("c && d = %d\n", c&&d);  // AND Operator
    printf("c || d = %d\n", c||d);  // OR Operator
    printf("c  ! d = %d\n",   !d);  // NOT Operator
    printf("\n");
    
    printf("Bitwise Operator:\n");
/*   0 | 0 0 | bits 
     1 | 0 1 | bits
     2 | 1 0 | bits
     3 | 1 1 | bits  */
    
    // Bitwise in AND

    int e, f, g, h, i, j;
    
    e = 2;
    f = 3;
    printf("e & f = %d\n", e&f);      
    printf("ans = 2\n");
    printf("\n");

    g = 3;
    h = 3;
    printf("g | h = %d\n", g|h);
    printf("ans = 3\n");
    printf("\n");
   
    i = 2;
    j = 1;
    printf("i ^ j = %d\n", i^j);
    printf("ans = 3\n");


    return 0;
}
