// 4GB in MB = 4 * 1024 MB
// 4GB in KB = 4 * 1024 * 1024 KB
// 4GB in BYTE = 4 * 1024 * 1024 * 1024 BYTE
// 4GB in BITS = 4 * 1024 * 1024 * 1024 BITS
#include <stdio.h>
int main(int argc, char const *argv[])
{
    printf("size of char = %lu\n", sizeof(char));     
    printf("size of signed char = %lu\n", sizeof(signed char));
    printf("size of unsigned char = %lu\n", sizeof(unsigned char));
    printf("size of short = %lu\n", sizeof(short));
    printf("size of signed short = %lu\n", sizeof(signed short));
    printf("size of unsigned short = %lu\n", sizeof(unsigned short));
    printf("size of int = %lu\n", sizeof(int));
    printf("size of signed int = %lu\n", sizeof(signed int));
    printf("size of unsigned int = %lu\n", sizeof(unsigned int));
    printf("size of short int = %lu\n", sizeof(short int));
    printf("size of signed short int = %lu\n", sizeof(signed short int));
    printf("size of unsigned short int = %lu\n", sizeof(unsigned short int));
    printf("size of long int = %lu\n", sizeof(long int));
    printf("size of signed long int = %lu\n", sizeof(signed long int));
    printf("size of unsigned long int = %lu\n", sizeof(unsigned long int));
    printf("size of double = %lu\n", sizeof(double));
    printf("size of float = %lu\n", sizeof(float));
    printf("size of long double = %lu\n", sizeof(long double));

    return 0;
}
