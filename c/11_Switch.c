#include <stdio.h>

int main(int argc, char const *argv[])
{
    int subject;

    printf("Enter your subject\n");
    printf("If You pass in Math Press 1\n");
    printf("If You pass in Science Press 2\n");
    printf("If You pass in Both Press 3\n");
    scanf("%d", &subject);

    switch (subject)
    {
    
    case 1:
        printf("Congratulation you won 15 rs pen\n");
        break;

    case 2:
        printf("Congratulation you won 15 rs pen\n");
        break;

    case 3:
        printf("Congratulation you won 45 rs pen\n");
        break;

    default:
        break;
    }

    return 0;
}
